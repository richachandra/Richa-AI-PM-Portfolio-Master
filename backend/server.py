from fastapi import FastAPI, APIRouter, Depends, Header, HTTPException, status as http_status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import secrets
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    client_name: str = Field(min_length=1, max_length=100)


# Deny-by-default access gate for the status routes.
#
# These routes read and write a shared collection, so they must not be
# reachable by anonymous callers. Access requires the STATUS_API_KEY secret
# to be configured server-side and presented by the caller. When the secret
# is not configured the routes refuse everyone, so the default posture is
# closed rather than open.
def require_status_api_key(x_api_key: Optional[str] = Header(default=None)):
    expected = os.environ.get('STATUS_API_KEY', '')

    if not expected:
        raise HTTPException(
            status_code=http_status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="This endpoint is disabled.",
        )

    if not x_api_key or not secrets.compare_digest(
        x_api_key.encode('utf-8'), expected.encode('utf-8')
    ):
        raise HTTPException(
            status_code=http_status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized.",
        )

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post(
    "/status",
    response_model=StatusCheck,
    dependencies=[Depends(require_status_api_key)],
)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get(
    "/status",
    response_model=List[StatusCheck],
    dependencies=[Depends(require_status_api_key)],
)
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

# CORS configuration.
#
# A wildcard origin must never be combined with credentialed requests: that
# lets any third-party site read authenticated responses from a visitor's
# browser. Origins are therefore taken from an explicit allowlist, any
# wildcard entry is discarded, and credentials are only enabled once a
# concrete origin list exists.
DEFAULT_CORS_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

_configured_origins = [
    origin.strip()
    for origin in os.environ.get('CORS_ORIGINS', '').split(',')
    if origin.strip() and origin.strip() != '*'
]

allowed_origins = _configured_origins or DEFAULT_CORS_ORIGINS

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "X-API-Key"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()