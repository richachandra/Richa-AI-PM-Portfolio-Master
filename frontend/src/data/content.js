// Placeholder content — edit freely.

export const profile = {
  name: "Richa Chandra",
  role: "Product Manager",
  location: "Mumbai",
  email: "richachandra07@gmail.com",
  heroLines: ["Building products", "people can't", "put down."],
  tagline:
    "Product leader turning ambiguous problems into shipped, measurable, loved experiences.",
};

export const navLinks = [
  { label: "About", target: "about" },
  { label: "Career", target: "career-journey" },
  { label: "Past Product Work", target: "work" },
  { label: "Case Studies", target: "case-studies" },
  { label: "Side Projects", target: "side-projects" },
  { label: "Approach", target: "approach" },
  { label: "Contact", target: "contact" },
];

export const marqueeItems = [
  "Product Strategy",
  "0 → 1",
  "Growth Loops",
  "Design Systems",
  "Experimentation",
  "AI Products",
  "Roadmapping",
  "User Research",
];

export const about = {
  overline: "Who I am",
  heading: "I connect user desire, business value and what's technically possible.",
  body: [
    "I'm a Product Manager with 14+ years in financial services — spanning capital markets, credit cards and regulatory tech at firms like Morgan Stanley and JPMorgan Chase. I specialize in 0→1 product builds and platform modernization, turning complex, highly-regulated problems into clean products people actually adopt.",
    "My work has lifted operational efficiency by 40%, tripled feature adoption and held 99.5%+ platform uptime — while shipping AI-powered tooling that cut resolution times by 35%. I care about the details that compound: the workflows, the edge cases and the trust a great product earns over time.",
  ],
  stats: [
    { value: "14+", label: "Years in product" },
    { value: "50K+", label: "Accounts served" },
    { value: "400+", label: "Hrs/qtr saved on manual work" },
  ],
};

export const careerJourney = [
  {
    period: "Jun 2021 — May 2026",
    title: "Product Lead",
    company: "Morgan Stanley",
    location: "Mumbai",
    achievement:
      "Defined Product Strategy and Roadmap for Withholding Tax Reporting modernisation platform serving 50K+ accounts, achieving 100% regulatory compliance and reducing audit escalations by 60%.",
  },
  {
    period: "Dec 2016 — Jun 2021",
    title: "Product Owner",
    company: "JPMorgan Chase",
    location: "Mumbai",
    achievement:
      "Owned and launched the credit card onboarding roadmap end-to-end — automated workflows eliminating 400+ hours/quarter of manual processing.",
  },
  {
    period: "Sep 2013 — Jun 2014",
    title: "Application Developer",
    company: "JPMorgan Chase",
    location: "Mumbai",
    achievement:
      "Automated 5 business-critical reporting workflows, reducing manual processing time by 40%.",
  },
  {
    period: "Dec 2010 — Feb 2013",
    title: "Product Analyst",
    company: "IGATE",
    location: "Mumbai",
    achievement:
      "Delivered 3 major product releases on time, improving sprint transparency by 25%.",
  },
  {
    period: "Aug 2008 — Nov 2010",
    title: "Software Analyst",
    company: "JPMorgan Chase",
    location: "Mumbai",
    achievement:
      "Led process automation via CyberArk onboarding — automating 75% of manual system workflows.",
  },
];

export const skills = [
  {
    title: "Discovery & Research",
    items: ["Jobs-to-be-done", "User interviews", "Opportunity mapping", "Usability testing"],
  },
  {
    title: "Strategy & Vision",
    items: ["Product vision", "North-star metrics", "Roadmapping", "Positioning"],
  },
  {
    title: "Execution & Delivery",
    items: ["Agile / Shape Up", "Spec writing", "Release management", "QA & rollout"],
  },
  {
    title: "Growth & Analytics",
    items: ["Funnel analysis", "A/B experimentation", "Retention loops", "SQL & dashboards"],
  },
];

export const pastWork = [
  {
    index: "01",
    title: "German Tax Reporting Modernization",
    category: "Regulatory Tech",
    problem:
      "Legacy tax reporting infrastructure couldn't meet evolving German regulatory requirements, putting 50K+ accounts at compliance risk.",
    role:
      "Defined product strategy and led end-to-end delivery of the modernization platform.",
    approach:
      "Owned discovery, user research and VOC synthesis across 8 stakeholder groups. Translated insights into a prioritized roadmap that reduced feature rework and improved team velocity.",
    outcomes: [
      { value: "100%", label: "Regulatory compliance achieved" },
      { value: "60%", label: "Reduction in audit escalations" },
      { value: "50%", label: "Cut in feature rework" },
      { value: "25%", label: "Improvement in sprint velocity" },
    ],
    reflection:
      "I'd invest earlier in an automated regression suite for the compliance rules — it would have de-risked releases and let the team ship regulatory changes even faster.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    index: "02",
    title: "Credit Card Onboarding Platform",
    category: "Credit Cards",
    problem:
      "Manual onboarding workflows were slow and labour-intensive, delaying new card launches and consuming hundreds of hours of processing time each quarter.",
    role:
      "Owned and launched the credit card onboarding product roadmap end-to-end. Served as Area Product Owner across 3 squads.",
    approach:
      "Automated key onboarding workflows to eliminate manual processing. Managed the product backlog with a focus on story readiness and acceptance quality to keep squads moving at pace.",
    outcomes: [
      { value: "400+", label: "Hours/quarter of manual processing eliminated" },
      { value: "25%", label: "Reduction in time-to-market for new launches" },
      { value: "92%", label: "Sprint completion rate" },
    ],
    reflection:
      "I'd bring engineering into discovery sooner to shape the automation architecture up front, avoiding a mid-build rework of the workflow engine.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
];

export const caseStudies = [
  {
    tag: "Product Strategy · E - Commerce / Retention",
    title: "Licious — Predictable Meat Logistics",
    oneLiner:
      "Turning fixed weekly routines into a logistics optimization engine through flexible subscriptions and provable delivery trust.",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    pdf: "/case-studies/predictable-meat-logistics.pdf",
    accent: "magenta",
    problem:
      "Customers with fixed weekly routines (chicken every Sunday, fish every Wednesday) kept experiencing unpredictable delivery — not because delivery was slow, but because the app had no way to schedule recurring staple orders. Every weekly routine was treated as fresh, unplanned demand, creating cascading issues: overlapping routing, rider wastage, and the #1 voiced complaint across the user base — unpredictable delivery windows. Repeat buyers churned as a result.",
    role:
      "Led the product strategy working session. Defined the problem, segmented users by occasion, prioritized solutions by impact, and designed the subscription and delivery-reliability features.",
    approachIntro: "Segmented demand into three distinct user occasions:",
    segments: [
      {
        name: "The Impulse Cook",
        share: "~55% of users",
        need: "Wants speed and zero friction.",
      },
      {
        name: "The Household Planner",
        share: "Core mid-segment",
        need: "Needs precision on timing and trust.",
      },
      {
        name: "The Creature of Habit",
        share: "Top 10–15% of repeaters",
        need: "Needs predictability with zero admin.",
      },
    ],
    prioritization:
      "Prioritized using Impact = Reach × Severity. The top two problems — no recurring-order scheduling and unpredictable delivery windows — ranked highest because solving them mathematically buys down all downstream issues (wastage, churn, support tickets).",
    solutionsLabel: "Solutions — two tracks",
    solutions: [
      {
        track: "Delivery trust",
        detail:
          "Provable delivery-by guarantees tied to financial penalties (₹50 cashback if missed), shown only when operationally feasible. Proactive delay alerts before customers complain.",
      },
      {
        track: "Scheduled demand",
        detail:
          "A flexible weekly/custom-day subscription layer (editable, skippable) layered onto the existing Infiniti membership — not sold separately. One-tap \u201Crepeat this every week\u201D surfaced from past staple purchases to formalize habits that already exist.",
      },
    ],
    precedent:
      "Precedent check: ButcherBox and FreshToHome both show that rigid meat-only subscription boxes erode under cost pressure. The strategy kept the subscription layer small, flexible, and purpose-built for dark-store demand predictability.",
    outcomes: [
      { dir: "up", label: "On-Time Delivery Rate" },
      { dir: "up", label: "% of Orders on Subscription" },
      { dir: "up", label: "Repeat Order Rate (retention via trust)" },
      { dir: "down", label: "Delivery Cost / Order (batching & route density)" },
      { dir: "down", label: "Delivery Support Tickets" },
      { dir: "up", label: "Net Promoter Score" },
    ],
    thesis:
      "Subscription is not just a revenue feature — it is a logistics optimization feature. Not faster. More reliable.",
    reflection:
      "I'd pressure-test the ₹50 delivery guarantee against real dark-store capacity earlier, running a geo-fenced pilot before rollout to size the operational cost of the promise.",
  },
  {
    tag: "Product Strategy · SaaS Collaboration",
    title: "Zoho — The Mid-Market Business OS",
    oneLiner:
      "Repositioning a feature-rich underdog into the category owner of the mid-market — the white space Google and Microsoft leave wide open.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    pdf: "/case-studies/zoho-business-os-strategy.pdf",
    accent: "cyan",
    problem:
      "Zoho Mail has real product strengths — a deeply integrated ecosystem across email, CRM, finance and projects, strong SMB traction, and a privacy-first, cost-effective position — yet holds only ~1–1.5% of the collaboration market, dwarfed by Google Workspace (~43%) and Microsoft 365 (~38%). The gap isn't product quality — it's positioning. Mid-market enterprises (200–5,000 employees) are trapped between fragmented SMB tools and Microsoft's costly complexity, and no incumbent has claimed that white space. Four gaps stand in the way: weak privacy-centric collaboration, IT-dependent onboarding, confusing per-seat pricing, and AI limited to writing assistance rather than running the business.",
    role: "Product Manager, deeply involved in Product Immersion.",
    approachIntro:
      "Prioritized the six identified problems by reach and severity rather than gut feel. The mid-market white space and the AI-workflow automation gap ranked highest — they define both who to target and why they'd switch — while onboarding friction, pricing complexity and brand perception ranked as more tactical, execution-level blockers to solve once that core positioning was set.",
    solutions: [
      {
        detail:
          "Package the suite as a unified Business OS — one cohesive system (email, CRM, finance, projects) instead of fragmented apps.",
      },
      {
        detail:
          "Evolve AI from writing assistant to a workflow automation engine: autonomous triage, task generation from email threads, and schedule automation.",
      },
      {
        detail:
          "Build a privacy-first workspace (encrypted email, secure docs, safe meetings) — leaning into Zoho's one structural edge over Google: no ad-based model.",
      },
      {
        detail:
          "Cut onboarding friction with a 5-minute automated setup and simplify pricing to team-based / usage-based.",
      },
      {
        detail:
          "Explicitly avoid competing head-on with Microsoft on scale or Google on UX — not a fight Zoho is positioned to win.",
      },
    ],
    outcomeNote:
      "This is a strategic recommendation rather than a shipped result, so success would be tracked going forward against:",
    outcomes: [
      { dir: "up", label: "Mid-market share growth (from ~1–1.5% today)" },
      { dir: "up", label: "% of accounts onboarded in under 5 min without IT" },
      { dir: "up", label: "AI agent adoption across active inboxes" },
      { dir: "up", label: "Revenue from the privacy/compliance segment (Europe, fintech, healthcare)" },
    ],
  },
];

export const sideProjectFeatures = [
  {
  tag: "AI Product Strategy · Multi-Agent Marketplace",
  title: "My Kitchen — A Multi-Agent Home-Chef Marketplace",
  oneLiner:
    "A multi-agent system that reliably matches home chefs with customers by breaking the order lifecycle into purpose-built agents — each designed to fail gracefully.",
  url: "https://my-kitchen-dccba.web.app/",
  image:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  pdf: "/case-studies/multi-agent-marketplace-strategy.pdf",
  wip: true,
  accent: "magenta",
  problem:
    "Home-chef marketplaces sit at an unusually high-stakes intersection: food safety, real-time logistics, and deeply variable, unstructured input — a chef describing their menu by voice or text, in their own words, rather than filling out a rigid form. Most platforms solve this with manual moderation and structured onboarding forms, which makes them slow to onboard new chefs and brittle at scale.",
  role:
    "AI Product Manager — scoped the agent architecture, defined a per-agent evaluation metric for each stage, and designed the graceful-degradation model so no single agent can break the marketplace.",
  approachIntro:
    "Anchored the system design in three distinct user occasions, each with a non-negotiable core need:",
  segments: [
    {
      name: "The Home Chef",
      share: "Supply side",
      need: "\u201CThe platform does the structuring work, not me.\u201D",
    },
    {
      name: "The Safety-Conscious Customer",
      share: "Demand · Trust",
      need: "\u201CA hard guarantee, not a best-effort filter.\u201D",
    },
    {
      name: "The Time-Pressed Local Buyer",
      share: "Demand · Speed",
      need: "\u201CA kitchen with real capacity to fulfil the order.\u201D",
    },
  ],
  solutionsLabel: "Solution — five purpose-built agents",
  solutions: [
    {
      track: "Menu Intelligence Agent",
      detail:
        "Chef onboarding & listing — converts voice or free-text menu descriptions into structured, searchable menu data.",
    },
    {
      track: "Dietary Safety Agent",
      detail:
        "Customer safety — filters listings and orders against allergens and dietary restrictions, enforcing safety structurally rather than as a best-effort filter.",
    },
    {
      track: "Conflict & Availability Agent",
      detail:
        "Checkout & scheduling — resolves scheduling and capacity conflicts before an order is ever confirmed.",
    },
    {
      track: "Order Routing & Batching Agent",
      detail:
        "Operations & logistics — assigns and batches orders across chefs so one kitchen isn't overloaded while another sits idle.",
    },
    {
      track: "Feedback Synthesis Agent",
      detail:
        "Post-order improvement — turns raw customer feedback into structured signal that measurably improves the next listing.",
    },
  ],
  outcomeNote:
    "Each agent is scoped to one job and evaluated on its own metric, so success is tracked per-agent going forward against:",
  outcomes: [
    { dir: "down", label: "False-negative rate on flagged allergens (Dietary Safety)" },
    { dir: "up", label: "Onboarding sessions completed without manual staff intervention (Menu Intelligence)" },
    { dir: "up", label: "Reduction in post-checkout cancellations from capacity conflicts (Conflict & Availability)" },
    { dir: "down", label: "Kitchen utilization variance across active chefs (Routing & Batching)" },
    { dir: "up", label: "Structured feedback signals that lead to a measurable listing change (Feedback Synthesis)" },
  ],
  thesis:
    "Every agent in this system is scoped to one job, evaluated on its own, and built to fail without breaking the marketplace around it.",
  reflection:
    "I'd stand up an offline evaluation harness for each agent before wiring them together — measuring false-negative and utilization-variance metrics in isolation before trusting the orchestration layer.",
  },
  {
    tag: "AI Product Strategy · Consumer Health",
    title: "ProteinGPT — Your Protein Recommendation Engine",
    oneLiner:
      "An AI guide that cuts through a confusing, adulteration-prone supplement market to deliver personalized, trustable protein recommendations.",
    url: "https://proteingpt.lovable.app",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    pdf: "/case-studies/proteingpt-strategic-blueprint.pdf",
    accent: "magenta",
    problem:
      "Buyers face decision paralysis in a vast, complex protein-supplement market riddled with adulteration, mislabeling and contradictory dietary advice — leaving them overwhelmed and unable to trust product claims.",
    role:
      "Product Manager — prioritized the core value blockers (trust and decision speed), segmented buyers by intent, and defined the product bets and success metrics.",
    approachIntro:
      "Prioritized the biggest value-proposition blockers — trust and decision speed — then segmented demand into six distinct buyer personas, each with a different definition of \u201Ca good recommendation\u201D:",
    segments: [
      {
        name: "The Overwhelmed Beginner",
        share: "New lifters",
        need: "Simple guidance for a goal like \u201Cskinny guy who wants to gain weight fast.\u201D",
      },
      {
        name: "The Budget Optimizer",
        share: "Price-sensitive",
        need: "Value-for-money — \u201Cbest whey under \u20B92000.\u201D",
      },
      {
        name: "The Restricted Shopper",
        share: "Dietary limits",
        need: "Vegan/lactose/keto/allergen filtering that catches contradictions.",
      },
      {
        name: "The Skeptical Label-Reader",
        share: "Trust-driven",
        need: "Verifiable trust signals — certs and lab data, not marketing.",
      },
      {
        name: "The Medically Cautious User",
        share: "Health conditions",
        need: "Safe refusal and a redirect to a doctor.",
      },
      {
        name: "The Repeat Buyer",
        share: "Returning",
        need: "Continuity and memory across visits for restocking or switching.",
      },
    ],
    solutionsLabel: "Solution — six product bets",
    solutions: [
      {
        track: "Catalogue Expansion",
        detail:
          "Automate product-data pulls from retailer APIs (Amazon, Flipkart, Nutrabay) to scale breadth without manual entry.",
      },
      {
        track: "Buy-Now / Affiliate Deep Links",
        detail:
          "Direct purchase paths via affiliate redirects to close the loop from recommendation to purchase.",
      },
      {
        track: "Certification / Verification Layer",
        detail:
          "Surface verifiable trust signals — FSSAI registration and third-party lab data — and visibly flag unverified claims.",
      },
      {
        track: "Live Pricing Pipeline",
        detail:
          "Scheduled scrapes and webhooks to sync real-time price and stock.",
      },
      {
        track: "Persistent User Profile",
        detail:
          "Store goal, diet, budget and allergies behind an auth layer so returning users skip the setup.",
      },
      {
        track: "Expanded Medical Guardrails",
        detail:
          "Broaden the condition list and add a general \u201Cconsult a doctor\u201D fallback for safety.",
      },
    ],
    outcomeNote:
      "This is a forward-looking product strategy, so success would be tracked going forward against:",
    outcomes: [
      { dir: "up", label: "Activation — % of sessions reaching a concrete top-pick recommendation" },
      { dir: "up", label: "Coverage — % of queries answered from catalogue vs. \u201Cnot found\u201D" },
      { dir: "up", label: "Trust — click-through from recommendation → product detail (+ per-response rating)" },
      { dir: "up", label: "Conversion — click-through to buy-now and downstream purchase" },
      { dir: "up", label: "Retention — returning users per month & repeat sessions" },
      { dir: "up", label: "Safety — audited accuracy of medical-condition refusals (hold ~100%)" },
      { dir: "down", label: "Price accuracy — variance between displayed and live retailer price" },
      { dir: "up", label: "Qualitative — NPS / in-chat feedback after each recommendation" },
    ],
    thesis:
      "Close the market's trust and decision-friction gaps, and ProteinGPT becomes the indispensable AI guide for confident, convenient supplement purchases.",
    reflection:
      "I'd validate the affiliate-conversion assumption with a lightweight clickable prototype before investing in the live-pricing and catalogue-automation pipelines — the trust layer only pays off if users actually buy.",
  },
];

export const manifesto = {
  overline: "How I work",
  heading: "Six principles behind every product I ship.",
  chapters: [
    {
      num: "01",
      title: "Fall in love with the problem",
      body: "Solutions are cheap. Deeply understanding the user's problem is the only durable advantage.",
    },
    {
      num: "02",
      title: "Ship to learn, not to launch",
      body: "Every release is a hypothesis. Instrument it, read the signal, and let evidence steer the roadmap.",
    },
    {
      num: "03",
      title: "Taste is a strategy",
      body: "Craft compounds. The details users can't articulate are exactly what makes them stay.",
    },
    {
      num: "04",
      title: "Momentum over perfection",
      body: "A shipped 80% beats a theoretical 100%. Speed creates the feedback that makes products great.",
    },
    {
      num: "05",
      title: "Say no, generously",
      body: "Strategy is what you choose not to build. Protect focus like it's the scarcest resource — it is.",
    },
    {
      num: "06",
      title: "Metrics with a soul",
      body: "Numbers keep us honest, stories keep us human. The best PMs hold both at once.",
    },
  ],
};

export const sideProjects = [
  {
    title: "Multi LLM Comparison",
    stack: ["Next.js", "Supabase", "OpenRouter", "Vercel"],
    blurb: "A single-user web app for chatting with multiple LLMs at once and comparing their answers side by side — with per-response cost, token, and latency data.",
  },
  {
    title: "LLM as a Judge",
    stack: ["Supabase", "OpenRouter", "Vercel", "PostHog"],
    blurb: "Gets answers from multiple LLMs and returns the verdict.",
  },
  {
    title: "Google Review Generator App",
    stack: [],
    blurb: "Generate reviews with the least clicks possible.",
  },
];

export const contact = {
  heading: "Let's turn a hard problem into a shipped product.",
  socials: [
    { label: "Email", value: "richachandra07@gmail.com", href: "mailto:richachandra07@gmail.com" },
    { label: "LinkedIn", value: "/in/richachandra7", href: "https://www.linkedin.com/in/richachandra7" },
    { label: "Résumé", value: "View PDF", href: "/resume.pdf" },
  ],
};
