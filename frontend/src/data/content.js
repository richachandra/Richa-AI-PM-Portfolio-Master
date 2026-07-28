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
  { label: "Past Product Work", target: "work" },
  { label: "Case Studies", target: "case-studies" },
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
    { value: "PSPO & PSM", label: "Certified" },
    { value: "99.5%", label: "Platform uptime" },
  ],
};

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
    tag: "Retention",
    title: "Turning churn into a growth loop",
    metric: "+27% 90-day retention",
    description:
      "A deep-dive into how we redesigned the activation journey for a consumer AI product, tying every step to a measurable habit.",
    image:
      "https://images.unsplash.com/photo-1510717029971-27681a0e9da9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    accent: "cyan",
  },
  {
    tag: "Monetization",
    title: "Pricing that doubled ARPU",
    metric: "2.1× revenue per user",
    description:
      "Rearchitecting a freemium model with usage-based tiers, willingness-to-pay research and a frictionless upgrade path.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    accent: "magenta",
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
    title: "Framer of Mind",
    stack: ["React", "Motion", "OpenAI"],
    blurb: "A daily journaling app that reframes anxious thoughts using CBT prompts.",
  },
  {
    title: "Shipd",
    stack: ["Next.js", "Postgres", "Stripe"],
    blurb: "A tiny changelog tool for indie makers who hate writing changelogs.",
  },
  {
    title: "Palette Radio",
    stack: ["Swift", "CoreML"],
    blurb: "Generates color palettes from the mood of any song you're listening to.",
  },
  {
    title: "Standup Bot",
    stack: ["Node", "Slack API"],
    blurb: "Async standups that actually get read — summarized by AI every morning.",
  },
];

export const contact = {
  heading: "Let's build something",
  socials: [
    { label: "Email", value: "richachandra07@gmail.com", href: "mailto:richachandra07@gmail.com" },
    { label: "LinkedIn", value: "/in/richachandra7", href: "https://www.linkedin.com/in/richachandra7" },
    { label: "Résumé", value: "View PDF", href: "/resume.pdf" },
  ],
};
