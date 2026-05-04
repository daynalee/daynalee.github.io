export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  tagline: string;
  category: "Real Case" | "Hypothetical Case" | "Creative Project";
  heroMetric: { value: string; label: string };
  stats: { value: string; label: string }[];
  role: string;
  duration: string;
  overview: string;
  problem: string;
  approach: { step: string; detail: string }[];
  results: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "uber-direct",
    company: "Uber Direct",
    title: "Recovery of Uncollectible Credit Card Debt",
    tagline: "Recollected $7M in previously written-off merchant balances through cross-functional process redesign.",
    category: "Real Case",
    heroMetric: { value: "$7M", label: "Revenue Recovered" },
    stats: [
      { value: "$7M", label: "Recovered" },
      { value: "100%", label: "Cross-functional" },
      { value: "CC Merchants", label: "Target Segment" },
    ],
    role: "Client Success & Revenue Operations",
    duration: "2020 — 2023",
    overview:
      "I led a cross-functional initiative within Uber Direct to close a gap in our monetization flow: merchants with outstanding credit card balances had no penalty mechanism, and billing was tracked inconsistently. Unpaid balances in the CC merchant segment had accumulated to over $7M.",
    problem:
      "Merchants with outstanding credit card balances faced no enforcement action. Tracking was fragmented across teams, and there was no systematic billing process — resulting in millions in revenue left uncollected with no recovery path.",
    approach: [
      { step: "Audit & Scope", detail: "Mapped all outstanding balances across the CC merchant segment, quantified the gap, and identified the root cause: missing penalty logic and siloed ownership." },
      { step: "Cross-functional alignment", detail: "Partnered with Finance, Product, and Legal to establish ownership, define penalty thresholds, and create a billing escalation framework." },
      { step: "Outreach system", detail: "Designed a tiered communication and collection workflow — from automated reminders to manual escalation — with clear SLAs at each stage." },
      { step: "Tracking & accountability", detail: "Built shared dashboards to track balance recovery in real time, ensuring visibility across teams and preventing future accumulation." },
    ],
    results: [
      "$7M in previously uncollectible revenue recovered",
      "Established repeatable penalty and billing process for CC merchant segment",
      "Reduced future uncollectible risk through systematic tracking",
      "Aligned cross-functional stakeholders around a single collection workflow",
    ],
    tags: ["Revenue Operations", "Process Design", "Cross-functional", "Merchant Success"],
  },
  {
    slug: "uber-eats",
    company: "Uber Eats",
    title: "Postmates to Uber Eats Account Migration",
    tagline: "Migrated 1,000+ accounts from Postmates to Uber Eats with zero churn and no service disruption.",
    category: "Real Case",
    heroMetric: { value: "1,000+", label: "Accounts Migrated" },
    stats: [
      { value: "1,000+", label: "Accounts Migrated" },
      { value: "0", label: "Churn" },
      { value: "Seamless", label: "Transition" },
    ],
    role: "Client Success & Revenue Operations",
    duration: "2020 — 2023",
    overview:
      "Following Uber's acquisition of Postmates, I was responsible for migrating over 1,000 restaurant accounts from the Postmates platform to Uber Eats — a high-stakes transition requiring precise coordination across ops, product, and partner success.",
    problem:
      "Post-acquisition, Postmates restaurant partners needed to be moved to Uber Eats without disrupting their business operations, revenue, or customer relationships. Any friction risked partner churn and revenue loss at scale.",
    approach: [
      { step: "Segmentation", detail: "Categorized the 1,000+ accounts by complexity, revenue tier, and risk of churn to sequence the migration intelligently." },
      { step: "Communication playbook", detail: "Developed a partner communication strategy that explained the change clearly, addressed common objections, and set accurate expectations for the transition." },
      { step: "Hands-on support", detail: "Provided dedicated support to high-value accounts through the onboarding process — menu transfers, settings review, and first-week check-ins." },
      { step: "Monitoring & follow-up", detail: "Tracked post-migration performance metrics for each account and intervened proactively when early signals of dissatisfaction appeared." },
    ],
    results: [
      "1,000+ accounts successfully migrated to Uber Eats",
      "Zero churn attributable to the migration process",
      "Maintained partner revenue continuity throughout transition",
      "Created reusable migration playbook for future platform consolidations",
    ],
    tags: ["Account Management", "Change Management", "Client Success", "Operations"],
  },
  {
    slug: "pacific-pain",
    company: "Pacific Pain",
    title: "Patient Intake Time Reduction",
    tagline: "Cut patient intake time by 25% by redesigning clinical workflows and reducing administrative bottlenecks.",
    category: "Real Case",
    heroMetric: { value: "25%", label: "Faster Intake" },
    stats: [
      { value: "25%", label: "Time Reduced" },
      { value: "Intake", label: "Process Redesigned" },
      { value: "Higher", label: "Patient Throughput" },
    ],
    role: "Operations Consultant",
    duration: "2018 — 2020",
    overview:
      "Pacific Pain's clinic was experiencing significant delays in patient intake, leading to longer wait times, lower throughput, and declining patient satisfaction. I was brought in to identify the root causes and redesign the intake process end-to-end.",
    problem:
      "Patient intake was slow and inconsistent — redundant data entry, unclear staff handoffs, and paper-based processes were causing delays at every step. This reduced daily patient capacity and negatively impacted the patient experience.",
    approach: [
      { step: "Process mapping", detail: "Shadowed clinic staff and mapped every step of the intake process to identify bottlenecks, redundancies, and handoff failures." },
      { step: "Root cause analysis", detail: "Identified three key failure points: duplicated data collection, unclear check-in ownership, and manual insurance verification." },
      { step: "Workflow redesign", detail: "Redesigned the intake sequence to eliminate redundancy, clarify staff roles, and digitize key steps — reducing average intake time per patient." },
      { step: "Training & rollout", detail: "Trained staff on updated protocols and created reference materials to ensure consistent adoption across shifts." },
    ],
    results: [
      "25% reduction in average patient intake time",
      "Increased daily patient throughput without adding headcount",
      "Improved patient satisfaction scores post-implementation",
      "Standardized intake protocols adopted across clinic locations",
    ],
    tags: ["Healthcare Operations", "Process Improvement", "Workflow Design", "Efficiency"],
  },
  {
    slug: "health-staff",
    company: "Health Staff",
    title: "Collections Prioritization & Partner Outreach",
    tagline: "Built a collections prioritization system and designed outreach templates to improve external partner recovery rates.",
    category: "Hypothetical Case",
    heroMetric: { value: "Ops", label: "Strategy" },
    stats: [
      { value: "Tiered", label: "Collections System" },
      { value: "Email + VM", label: "Outreach Designed" },
      { value: "Partners", label: "External Focus" },
    ],
    role: "Revenue Operations Consultant",
    duration: "Hypothetical Case",
    overview:
      "This hypothetical case explores how a healthcare staffing company could improve collections from external partners (facilities and agencies) by implementing a prioritization framework and a structured outreach strategy.",
    problem:
      "Collections from external partners were inconsistent and reactive — outreach was ad-hoc, there was no prioritization logic, and communication templates were nonexistent, leaving recoverable revenue on the table.",
    approach: [
      { step: "Collections audit", detail: "Segmented outstanding balances by partner type, age, and amount to identify highest-priority recovery opportunities." },
      { step: "Prioritization framework", detail: "Built a tiered scoring system to direct outreach effort toward accounts with the highest recovery likelihood and greatest revenue impact." },
      { step: "Outreach design", detail: "Drafted email and voicemail templates for each stage of the collection cycle — initial reminder, follow-up, and escalation — balancing professional tone with urgency." },
      { step: "Workflow integration", detail: "Mapped how the templates and prioritization logic would integrate into existing CRM workflows for repeatable execution." },
    ],
    results: [
      "Clear prioritization logic to focus effort on highest-value accounts",
      "Standardized outreach templates for email and voicemail across all collection stages",
      "Reduced time spent per account through templated, structured communication",
      "Scalable framework adaptable to other partner-facing collections scenarios",
    ],
    tags: ["Revenue Operations", "Collections", "Healthcare", "Outreach Strategy"],
  },
  {
    slug: "ops-sight",
    company: "Ops Sight",
    title: "GTM Strategy for Pre-Revenue Startup",
    tagline: "Developed a go-to-market strategy for a pre-revenue operations startup — from ICP definition to launch sequencing.",
    category: "Hypothetical Case",
    heroMetric: { value: "GTM", label: "Strategy Built" },
    stats: [
      { value: "ICP", label: "Defined" },
      { value: "0→1", label: "Pre-Revenue" },
      { value: "Full GTM", label: "Delivered" },
    ],
    role: "Strategy Consultant",
    duration: "Hypothetical Case",
    overview:
      "Ops Sight is a hypothetical pre-revenue startup building workflow automation tools for operations teams. This case study outlines the GTM strategy I developed — covering ideal customer profile, positioning, channel strategy, and launch sequencing.",
    problem:
      "As a pre-revenue startup with no existing customers, Ops Sight needed a clear GTM strategy to guide their first 90 days: who to target, how to reach them, and what message would resonate.",
    approach: [
      { step: "ICP definition", detail: "Identified the ideal customer profile based on pain points, company size, and budget — ops leaders at Series A–C companies with manual, high-volume workflows." },
      { step: "Positioning & messaging", detail: "Developed a positioning framework differentiating Ops Sight on speed-to-value versus competitors, with messaging tailored to ops vs. executive audiences." },
      { step: "Channel strategy", detail: "Selected outbound (LinkedIn, email) as the primary acquisition channel for early traction, with content marketing as a secondary channel for inbound over time." },
      { step: "Launch sequencing", detail: "Built a 90-day launch plan: weeks 1–4 focused on outreach and discovery calls, weeks 5–8 on pilot customers, weeks 9–12 on feedback integration and case study creation." },
    ],
    results: [
      "Clear ICP and positioning framework ready for sales and marketing execution",
      "90-day launch roadmap with measurable milestones",
      "Channel strategy prioritized for early traction with limited resources",
      "Messaging differentiated against key competitors",
    ],
    tags: ["GTM Strategy", "Startups", "Product Marketing", "Operations"],
  },
  {
    slug: "moon-fruit",
    company: "Moon Fruit Match Up",
    title: "Designing & Developing a Fruit Catching Game",
    tagline: "Designed and built a fully playable fruit-catching mobile game in Unity — concept to launch.",
    category: "Creative Project",
    heroMetric: { value: "Unity", label: "Game Built" },
    stats: [
      { value: "Unity", label: "Engine" },
      { value: "Full Build", label: "Design to Dev" },
      { value: "Mobile", label: "Platform" },
    ],
    role: "Designer & Developer",
    duration: "Creative Project",
    overview:
      "Moon Fruit Match Up was a personal project to explore game design and development in Unity. I handled the full process — game mechanics, visual design, and technical implementation — to ship a playable mobile game.",
    problem:
      "I had no prior Unity experience and wanted to build practical skills in game design and development by completing a real, functional project from scratch.",
    approach: [
      { step: "Game design", detail: "Defined core game mechanics: a fruit-catching loop with increasing speed and difficulty tiers, scoring system, and simple win/lose states." },
      { step: "Visual design", detail: "Designed game assets — characters, backgrounds, and UI — with a playful, colorful aesthetic suited to a casual mobile audience." },
      { step: "Unity implementation", detail: "Built the game in Unity, implementing physics-based catching mechanics, spawn logic, and score tracking in C#." },
      { step: "Testing & iteration", detail: "Playtested with friends, iterated on difficulty balance and visual clarity, and polished interactions for a smooth player experience." },
    ],
    results: [
      "Fully playable fruit-catching game shipped in Unity",
      "Hands-on experience with full game development lifecycle",
      "Built C# scripting and Unity physics skills from zero",
      "Demonstrated creative range beyond traditional ops and CS work",
    ],
    tags: ["Unity", "Game Design", "C#", "Creative"],
  },
  {
    slug: "honey-melon",
    company: "Honey Melon Cafe",
    title: "Concept Creation & Launch of a Boutique Cafe",
    tagline: "Took a cafe concept from brand idea to operational reality — menu, identity, and launch strategy.",
    category: "Creative Project",
    heroMetric: { value: "0→1", label: "Cafe Launched" },
    stats: [
      { value: "Brand", label: "Identity Created" },
      { value: "Menu", label: "Designed" },
      { value: "Full Launch", label: "Concept to Open" },
    ],
    role: "Founder / Creative Lead",
    duration: "Creative Project",
    overview:
      "Honey Melon Cafe was a passion project to explore what it takes to build a brand and business from scratch. I developed the full concept — name, visual identity, menu design, and launch strategy — for a boutique beverage cafe.",
    problem:
      "Starting with nothing but an idea, I needed to build a compelling, coherent brand and operational foundation that could realistically support a cafe launch.",
    approach: [
      { step: "Concept & positioning", detail: "Defined the brand positioning: a cozy, health-forward cafe focused on fresh fruit beverages and a welcoming neighborhood vibe." },
      { step: "Brand identity", detail: "Designed the visual identity — name, color palette, logo direction, and tone of voice — to feel approachable yet distinctive." },
      { step: "Menu design", detail: "Developed the beverage menu with a focus on seasonal ingredients, visual appeal for social media, and healthy ingredient alternatives." },
      { step: "Launch planning", detail: "Created an operational launch checklist and soft-launch event plan to build early community awareness and gather feedback." },
    ],
    results: [
      "Full brand and concept developed from zero",
      "Menu designed with seasonal focus and social-media-friendly presentation",
      "Launch strategy created with soft-open event and community outreach plan",
      "Demonstrated brand thinking, operations planning, and creative execution",
    ],
    tags: ["Brand Strategy", "Concept Design", "Launch Planning", "Creative"],
  },
  {
    slug: "pair-pour",
    company: "Pair & Pour",
    title: "UX Wireframing for a Beverage Pairing App",
    tagline: "Designed the UX and wireframes for a beverage pairing app — concept to Figma prototype.",
    category: "Creative Project",
    heroMetric: { value: "Figma", label: "Prototype Built" },
    stats: [
      { value: "Figma", label: "Tool" },
      { value: "UX Flows", label: "Designed" },
      { value: "Conceptual", label: "Project" },
    ],
    role: "UX Designer",
    duration: "Conceptual Project",
    overview:
      "Pair & Pour is a conceptual app that helps users find the right beverage pairing for any meal or occasion. I used this project to develop my Figma skills and practice end-to-end UX design — from user flows to high-fidelity wireframes.",
    problem:
      "Choosing the right wine, cocktail, or non-alcoholic pairing for a meal is confusing for most people. There's no simple, opinionated guide that makes this decision easy and fun.",
    approach: [
      { step: "User research", detail: "Defined target user: home cooks and casual entertainers who want confident pairing suggestions without deep beverage knowledge." },
      { step: "User flows", detail: "Mapped the core user journey: input a dish → receive curated pairing suggestions → explore and save favorites." },
      { step: "Wireframing", detail: "Designed low- and mid-fidelity wireframes in Figma for the core screens: home, search, pairing result, and saved favorites." },
      { step: "Prototype & feedback", detail: "Built a clickable prototype in Figma and tested it with peers to validate the flow and identify friction points." },
    ],
    results: [
      "Fully clickable Figma prototype for core user flows",
      "Clear UX framework for a novel consumer use case",
      "Demonstrated user-centered design thinking and Figma proficiency",
      "Identified key design principles: simplicity, confidence, and delight",
    ],
    tags: ["UX Design", "Figma", "Prototyping", "Consumer App"],
  },
];
