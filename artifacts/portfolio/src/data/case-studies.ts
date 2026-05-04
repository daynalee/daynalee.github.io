export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  tagline: string;
  category: "Real Case" | "Hypothetical Case" | "Creative Project";
  heroMetric: { value: string; label: string };
  stats: { value: string; label: string }[];
  role: string;
  team?: string;
  timeframe?: string;
  scope?: string;
  collaborators?: string;
  duration: string;
  overview: string;
  context?: {
    problemStatement: string;
    myRole: string;
    goals: { primary: string; secondary: string[] };
  };
  research?: {
    items: { label: string; detail: string }[];
    metrics?: string[];
  };
  challenges?: {
    groups: { label: string; items: string[] }[];
  };
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
    tagline: "Recovered $7M in outstanding credit card merchant balances through cross-functional process redesign, new collections workflows, and product enhancements.",
    category: "Real Case",
    heroMetric: { value: "$7M", label: "Recovered" },
    stats: [
      { value: "$7M", label: "Revenue Recovered" },
      { value: "90%", label: "Decrease in Arrears" },
      { value: "2,000+", label: "Accounts Backfilled" },
    ],
    role: "Monetization Operations Specialist",
    team: "Direct Ops US&C",
    timeframe: "Q1 2023 – Q1 2024",
    scope: "U.S. & Canada (US&C) Merchants",
    collaborators: "FinOps, Legal, Engineering, Enablement",
    duration: "Q1 2023 – Q1 2024",
    overview:
      "I led a cross-functional initiative within Uber Direct to address a gap in our monetization flow: the lack of penalty actions for merchants with outstanding credit card balances and inefficient tracking and billing of those balances. This case study focuses on the credit card merchant segment, where total unpaid balances had reached over $7M.",

    context: {
      problemStatement:
        "Our system allowed credit card merchants to continue operations despite having unpaid invoices. This created a growing pool of uncollectible revenue and exposed the business to financial risk. Key contributors included incorrect account billing setups, outdated contact information, missing or inactive policies, and inconsistent charge workflows.",
      myRole:
        "I was responsible for investigating root causes, designing operational workflows, and implementing scalable solutions to recover lost revenue and prevent future risk.",
      goals: {
        primary: "Recover outstanding balances from billed credit card merchants",
        secondary: [
          "Correct invalid account emails and fix billing policies for unbilled accounts",
          "Create and implement constraints to limit future debt accrual",
          "Build scalable handoff processes for long-term monitoring",
        ],
      },
    },

    research: {
      items: [
        {
          label: "Data Audit",
          detail:
            "Analyzed AR aging reports and identified $7M+ in unpaid balances across thousands of credit card merchant accounts in US&C. Partner A and their decentralized billing structure accounted for 87% of total debt.",
        },
        {
          label: "Root Cause Analysis",
          detail:
            "Discovered key issues including incorrect billing emails, lack of merchant visibility into balances, and invalid payment policies causing invoices to go unbilled entirely.",
        },
        {
          label: "Systems Investigation",
          detail:
            "Partnered with FinOps and Engineering to understand how BAM and Commerce systems logged billing failures and notifications when CC pulls failed.",
        },
        {
          label: "Stakeholder Interviews",
          detail:
            "Coordinated with Account Managers, FinOps, and Partner A stakeholders to understand merchant confusion, hesitations to pay, and pain points with the invoicing system.",
        },
      ],
      metrics: [
        "$ amount in signed payment plans",
        "$ amount recollected",
        "% increase in successful CC pulls",
        "# CC entities billed",
        "Stop growth of arrears",
      ],
    },

    challenges: {
      groups: [
        {
          label: "Communication & Data Gaps",
          items: [
            "Placeholder or outdated billing emails prevented merchants from receiving invoices or system alerts",
            "Missing or inaccurate contact info for hundreds of merchant entities",
            "Merchants unaware of unpaid balances or unable to log into dashboards",
          ],
        },
        {
          label: "Operational & Process Issues",
          items: [
            "No standardized or automated process for recollection",
            "Fragmented tools and manual workflows led to delays in outreach and tracking",
            "Inconsistent invoice formats, policies, and account configurations",
          ],
        },
        {
          label: "Merchant Experience Issues",
          items: [
            "Poor UX led to merchant hesitation — no visibility into aggregated balance, difficulty updating payment methods",
            "Failed lump-sum charges triggered fraud blocks on credit cards",
            "Limited merchant support resources for resolving billing confusion",
          ],
        },
        {
          label: "Cross-functional Misalignment",
          items: [
            "Misalignment between Operations, FinOps, and Engineering on ownership and workflows",
            "No unified escalation path for urgent accounts",
            "Lack of automated constraints to stop further balance accrual",
          ],
        },
      ],
    },

    problem:
      "Credit card merchants could continue operating despite unpaid invoices, with no enforcement mechanism. Billing emails were incorrect, tracking was siloed, and there was no collections process — resulting in $7M+ in unrecoverable arrears and growing exposure.",

    approach: [
      {
        step: "Phase 1 — Merchant Outreach",
        detail:
          "Grouped merchants into cohorts based on marketplace status, outstanding balance, and engagement likelihood. Obtained contact info from Partner A POCs, cross-referencing account data with the Eats platform. Connected with Legal to create external email templates. Worked with CommOps to build and train a temp team for outreach and inbound handling. Created workflow for support agents and a tracker to monitor outreach feedback and results.",
      },
      {
        step: "Phase 2 — Collections Enablement",
        detail:
          "Created a live tracker for balances by account — age, amounts billed/unbilled, reason for failed payment. Attempted mass outreach by cohort after correcting billing emails. Updated dashboard interface and changed rules and notification systems for failed CC pulls. Created new workflows to accept multiple payment forms across multiple dates.",
      },
      {
        step: "FinOps & Legal Integration",
        detail:
          "Worked with FinOps to create write-off, reserve, and payment plan processes and contracts — previously only available for ACH merchants. Transitioned monitoring of stale balances to OTC with quarterly reviews.",
      },
      {
        step: "Long-term Prevention",
        detail:
          "Developed playbooks for proactive CC merchant engagement and account management. Created manual suspension process and built framework for long-term automated suspension and implementation of credit limits for CC accounts. Designed roadmap for product enhancements including a 'Pay Now' feature and automated suspension.",
      },
    ],

    results: [
      "Recovered $7M in outstanding credit card balances",
      "90% decrease in arrears through invoice aggregation, reissuance, and transitioning balances to correct journal entries",
      "Backfilled data and billing policy for 2,000+ accounts, enabling internal tooling to successfully communicate post-pull failures",
      "Built Early Detection System monitoring account health, credit balance, and usage — notifying team when accounts approach limits",
      "Created manual suspension process internally triggered by Ops in coordination with AM and Finance",
      "Built operational handoff flow for GR FinOps and OTC to enable scalable, ongoing collections",
      "Designed product roadmap for 'Pay Now' feature and automated suspension",
    ],

    tags: ["Revenue Operations", "Collections", "Process Design", "Cross-functional", "FinOps", "Merchant Success"],
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
      { step: "Communication playbook", detail: "Developed a partner communication strategy that explained the change clearly, addressed common objections, and set accurate expectations." },
      { step: "Hands-on support", detail: "Provided dedicated support to high-value accounts through onboarding — menu transfers, settings review, and first-week check-ins." },
      { step: "Monitoring & follow-up", detail: "Tracked post-migration performance metrics and intervened proactively when early signals of dissatisfaction appeared." },
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
      { value: "Higher", label: "Patient Throughput" },
      { value: "No new hires", label: "Headcount Neutral" },
    ],
    role: "Operations Consultant",
    duration: "2018 — 2020",
    overview:
      "Pacific Pain's clinic was experiencing significant delays in patient intake, leading to longer wait times, lower throughput, and declining patient satisfaction. I redesigned the intake process end-to-end.",
    problem:
      "Patient intake was slow and inconsistent — redundant data entry, unclear staff handoffs, and paper-based processes caused delays at every step, reducing daily patient capacity.",
    approach: [
      { step: "Process mapping", detail: "Shadowed clinic staff and mapped every step of the intake process to identify bottlenecks, redundancies, and handoff failures." },
      { step: "Root cause analysis", detail: "Identified three key failure points: duplicated data collection, unclear check-in ownership, and manual insurance verification." },
      { step: "Workflow redesign", detail: "Redesigned the intake sequence to eliminate redundancy, clarify staff roles, and digitize key steps." },
      { step: "Training & rollout", detail: "Trained staff on updated protocols and created reference materials for consistent adoption across shifts." },
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
      "This hypothetical case explores how a healthcare staffing company could improve collections from external partners by implementing a prioritization framework and a structured outreach strategy.",
    problem:
      "Collections from external partners were inconsistent and reactive — outreach was ad-hoc, there was no prioritization logic, and communication templates were nonexistent.",
    approach: [
      { step: "Collections audit", detail: "Segmented outstanding balances by partner type, age, and amount to identify highest-priority recovery opportunities." },
      { step: "Prioritization framework", detail: "Built a tiered scoring system to direct outreach effort toward accounts with the highest recovery likelihood and greatest revenue impact." },
      { step: "Outreach design", detail: "Drafted email and voicemail templates for each stage of the collection cycle — initial reminder, follow-up, and escalation." },
      { step: "Workflow integration", detail: "Mapped how templates and prioritization logic would integrate into existing CRM workflows for repeatable execution." },
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
      { value: "90-day", label: "Launch Plan" },
    ],
    role: "Strategy Consultant",
    duration: "Hypothetical Case",
    overview:
      "Ops Sight is a hypothetical pre-revenue startup building workflow automation tools for operations teams. This case outlines the GTM strategy I developed — covering ICP, positioning, channel strategy, and launch sequencing.",
    problem:
      "As a pre-revenue startup with no existing customers, Ops Sight needed a clear GTM strategy to guide their first 90 days: who to target, how to reach them, and what message would resonate.",
    approach: [
      { step: "ICP definition", detail: "Identified the ideal customer profile — ops leaders at Series A–C companies with manual, high-volume workflows." },
      { step: "Positioning & messaging", detail: "Developed positioning differentiating Ops Sight on speed-to-value vs. competitors, tailored to ops vs. executive audiences." },
      { step: "Channel strategy", detail: "Selected outbound (LinkedIn, email) as the primary acquisition channel, with content marketing as a secondary inbound channel." },
      { step: "Launch sequencing", detail: "Built a 90-day plan: weeks 1–4 outreach and discovery, weeks 5–8 pilot customers, weeks 9–12 feedback and case study creation." },
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
      "Moon Fruit Match Up was a personal project to explore game design and development in Unity. I handled the full process — game mechanics, visual design, and technical implementation.",
    problem:
      "I had no prior Unity experience and wanted to build practical skills in game design and development by completing a real, functional project from scratch.",
    approach: [
      { step: "Game design", detail: "Defined core mechanics: a fruit-catching loop with increasing speed, difficulty tiers, scoring system, and win/lose states." },
      { step: "Visual design", detail: "Designed game assets — characters, backgrounds, and UI — with a playful aesthetic suited to a casual mobile audience." },
      { step: "Unity implementation", detail: "Built the game in Unity, implementing physics-based catching mechanics, spawn logic, and score tracking in C#." },
      { step: "Testing & iteration", detail: "Playtested with friends, iterated on difficulty balance and visual clarity, and polished interactions." },
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
      "Honey Melon Cafe was a passion project to explore what it takes to build a brand and business from scratch — name, visual identity, menu design, and launch strategy.",
    problem:
      "Starting with nothing but an idea, I needed to build a compelling, coherent brand and operational foundation that could realistically support a cafe launch.",
    approach: [
      { step: "Concept & positioning", detail: "Defined brand positioning: a cozy, health-forward cafe focused on fresh fruit beverages and a welcoming neighborhood vibe." },
      { step: "Brand identity", detail: "Designed visual identity — name, color palette, logo direction, and tone of voice — to feel approachable yet distinctive." },
      { step: "Menu design", detail: "Developed the beverage menu with seasonal ingredients, visual appeal for social media, and healthy alternatives." },
      { step: "Launch planning", detail: "Created an operational launch checklist and soft-launch event plan to build early community awareness." },
    ],
    results: [
      "Full brand and concept developed from zero",
      "Menu designed with seasonal focus and social-media-friendly presentation",
      "Launch strategy with soft-open event and community outreach plan",
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
      "Pair & Pour is a conceptual app that helps users find the right beverage pairing for any meal. I used this project to develop my Figma skills and practice end-to-end UX design.",
    problem:
      "Choosing the right wine, cocktail, or non-alcoholic pairing for a meal is confusing for most people. There's no simple, opinionated guide that makes this easy and fun.",
    approach: [
      { step: "User research", detail: "Defined target user: home cooks and casual entertainers who want confident pairing suggestions without deep beverage knowledge." },
      { step: "User flows", detail: "Mapped the core journey: input a dish → receive curated pairing suggestions → explore and save favorites." },
      { step: "Wireframing", detail: "Designed low- and mid-fidelity wireframes in Figma for core screens: home, search, pairing result, and saved favorites." },
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
