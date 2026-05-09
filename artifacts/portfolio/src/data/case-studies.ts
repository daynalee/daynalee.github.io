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
    slug: "unity-ads",
    company: "Unity",
    title: "Driving Publisher Revenue Through Multiple Ad Units Adoption",
    tagline: "Led end-to-end adoption of a newly launched Unity Ads feature — building the strategy, documentation, and experimentation framework that drove a 5% revenue lift across managed publishers.",
    category: "Real Case",
    heroMetric: { value: "+5%", label: "Publisher Revenue" },
    stats: [
      { value: "+5%", label: "Revenue Increase" },
      { value: "10%", label: "Publishers Adopted" },
      { value: "9 months", label: "Time to Impact" },
    ],
    role: "Client Partner",
    team: "Publisher Success",
    timeframe: "2024",
    scope: "Managed Publisher Portfolio",
    collaborators: "Engineering, Product, Publishers",
    duration: "2024",
    overview:
      "Led publisher adoption and monetization strategy for Unity Ads' Multiple Ad Units waterfall setup — a newly released product feature that lacked GA documentation, implementation resources, and optimization best practices. Partnered cross-functionally with Engineering, Product, and publishers to troubleshoot integrations, configure waterfall setups, and develop scalable operational guidance.",

    context: {
      problemStatement:
        "Publishers were interested in using Multiple Ad Units to drive incremental revenue, but no implementation documentation or onboarding process existed. Internal teams lacked established best practices and publishers needed technical and monetization support to adopt the feature successfully.",
      myRole:
        "Owned end-to-end strategy and implementation — from partnering with Engineering to troubleshoot SDK and developer issues, to configuring waterfall setups internally, researching industry benchmarks, running A/B tests, monitoring revenue impact, and building reusable documentation for future publisher onboarding.",
      goals: {
        primary: "Drive publisher adoption of Multiple Ad Units and increase revenue through optimized waterfall and price floor configurations",
        secondary: [
          "Build implementation documentation where none existed",
          "Develop and validate monetization best practices through experimentation",
          "Create scalable onboarding resources for future publisher rollouts",
        ],
      },
    },

    research: {
      items: [
        {
          label: "Industry Benchmarking",
          detail:
            "Researched how other publishers structured waterfall segmentation and pricing to identify industry-standard configurations and optimization patterns.",
        },
        {
          label: "Publisher Discovery",
          detail:
            "Assessed each managed publisher's technical readiness, SDK version, and current monetization setup to identify the best candidates for early adoption.",
        },
        {
          label: "Engineering Partnership",
          detail:
            "Worked directly with Engineering to understand the SDK integration requirements, troubleshoot developer blockers, and configure waterfall setups within the Unity Ads dashboard.",
        },
      ],
      metrics: [
        "% revenue lift per publisher",
        "% of managed publishers adopted",
        "Fill rate impact from floor changes",
        "A/B test performance on price floor variants",
      ],
    },

    challenges: {
      groups: [
        {
          label: "No Existing Resources",
          items: [
            "No GA documentation, onboarding guide, or implementation checklist existed for the feature at launch",
            "Internal teams had no established best practices or optimization benchmarks to reference",
          ],
        },
        {
          label: "Technical Complexity",
          items: [
            "Publishers required hands-on SDK troubleshooting and developer support to complete integrations",
            "Waterfall configuration required internal setup and testing before publishers could go live",
          ],
        },
        {
          label: "Monetization Risk",
          items: [
            "Price floor changes risked negatively impacting fill rates if not validated carefully",
            "Each publisher's inventory structure required custom segmentation rather than a one-size-fits-all approach",
          ],
        },
      ],
    },

    problem:
      "Unity Ads launched Multiple Ad Units with no documentation, no onboarding process, and no internal best practices. Publishers needed technical and monetization guidance to adopt the feature — and without it, a high-potential revenue driver sat unused across the managed publisher base.",

    approach: [
      {
        step: "Implementation & Enablement",
        detail:
          "Worked directly with publishers and Engineering to enable Multiple Ad Units integrations, troubleshoot SDK issues, and configure waterfall structures within the Unity Ads dashboard for each publisher.",
      },
      {
        step: "Monetization Strategy",
        detail:
          "Researched how other publishers structured waterfall segmentation and tested multiple pricing strategies to determine optimal floor configurations for different inventory types.",
      },
      {
        step: "Experimentation",
        detail:
          "Ran A/B tests on price floors and inventory segmentation to identify setups that improved monetization without negatively impacting fill rates, using results to refine the playbook.",
      },
      {
        step: "Scaling Adoption",
        detail:
          "Partnered with Product to create a best-practices guide that standardized implementation, optimization, and troubleshooting workflows — enabling future publisher rollouts without requiring hands-on support for every integration.",
      },
    ],

    results: [
      "Increased publisher revenue by 5% through waterfall and price floor optimization",
      "Drove adoption across 10% of managed publishers within 9 months",
      "Established foundational documentation and operational processes where none previously existed",
      "Helped position Multiple Ad Units as a scalable incremental revenue strategy both internally and externally",
    ],

    tags: ["Client Success", "Monetization", "Publisher Operations", "A/B Testing", "Product Adoption", "Documentation"],
  },
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
    title: "Migrating Postmates Merchants to Uber Eats Post Acquisition",
    tagline: "Migrated 100% of Postmates merchant accounts to Uber Eats by Q2 with 94% OTR reliability and minimal disruption to operations or partner trust.",
    category: "Real Case",
    heroMetric: { value: "100%", label: "Accounts Migrated" },
    stats: [
      { value: "100%", label: "Accounts Migrated by Q2" },
      { value: "94%", label: "OTR Reliability" },
      { value: "70%", label: "On Supported Pricing" },
    ],
    role: "Client Success Operations Specialist",
    team: "Eats Client Success Ops US&C",
    timeframe: "Q1 2022 – Q2 2022",
    scope: "U.S. & Canada (US&C) Merchants",
    collaborators: "AMs, Legal, PEng, Product, FRM",
    duration: "Q1 2022 – Q2 2022",
    overview:
      "Following Uber's acquisition of Postmates, we faced major challenges integrating two systems and migrating merchants from the Postmates platform to Uber Eats without disrupting their operations or compromising their satisfaction. This case study focuses on the cross-functional collaboration and system integration required to successfully migrate thousands of accounts.",

    context: {
      problemStatement:
        "Uber needed to migrate thousands of Postmates merchant accounts to Uber Eats without disrupting operations, losing merchant trust, or compromising order reliability — while building internal scalable systems to support future partner migrations.",
      myRole:
        "I was responsible for partnering cross-functionally with teams to transition account data and ensure merchant readiness, reduce time to activation, and enable 100% of accounts to successfully use the Eats platform.",
      goals: {
        primary: "Migrate 100% of Postmates accounts to Uber Eats with no disruption to merchant operations or order reliability",
        secondary: [
          "Correct account data gaps and ensure compatibility with Uber's systems",
          "Reduce time to activation per account through scalable tooling",
          "Standardize pricing, billing, and zoning for all migrated merchants",
        ],
      },
    },

    research: {
      items: [
        {
          label: "Architecture Audit",
          detail:
            "Audited Postmates merchant structure and current onboarding workflow and pain points to assess compatibility with Uber's systems.",
        },
        {
          label: "System Gap Analysis",
          detail:
            "Identified API gaps, outdated hierarchies, service area mismatches, unscalable workflows, fragmented tools, and inconsistent data practices across the two platforms.",
        },
        {
          label: "Client Awareness and Involvement",
          detail:
            "Defined each partner's current level of involvement with managing their account data and activation process, as well as their comfort with onboarding tools and dashboards.",
        },
        {
          label: "Billing Practices and Campaigns",
          detail:
            "Reviewed standard pricing structures and incentives available to Postmates merchants via their contracts and identified non-supported promotions and pricing structures.",
        },
        {
          label: "Monitoring and Testing",
          detail:
            "Identified testing procedures and test account creation to validate migrated data, prepare for the first cohort, and ensure no service disruptions at launch.",
        },
      ],
      metrics: [
        "% increase in OTR",
        "% accounts onboarded to Eats",
        "% decrease in support tickets",
      ],
    },

    challenges: {
      groups: [
        {
          label: "Merchant Communication and Trust",
          items: [
            "When courier issues or API integrations arose, merchants were unaware of the backend work required for a fix",
            "Communications shared with merchants about new processes led to confusion and decreased merchant trust",
          ],
        },
        {
          label: "Billing and Pricing",
          items: [
            "Uber's pricing implementation tooling did not support the same tiered and variable pricing structures that Postmates did",
            "Merchants were contractually signed to specific pricing, giving Uber low flexibility on changes without proper documentation updates",
          ],
        },
        {
          label: "Systems and Data",
          items: [
            "No centralized system to track migration progress or enforce best practices",
            "Postmates zoning and serviceability areas included plots that Eats tagged as non-serviceable",
            "Zone names and defined areas did not match or had overlap between platforms",
          ],
        },
        {
          label: "Org and Process",
          items: [
            "Building new processes and integrating with the Postmates Legacy Team created unclear delegation of responsibilities",
            "Loss of information during communication handoffs between teams slowed execution",
          ],
        },
      ],
    },

    problem:
      "Thousands of Postmates merchant accounts needed to move to Uber Eats without disrupting operations, trust, or revenue. System incompatibilities, billing structure gaps, zoning mismatches, and unclear team ownership made a clean migration extremely difficult.",

    approach: [
      {
        step: "Phase 1: Data Migration and Systems Alignment",
        detail:
          "Audited and corrected account data across both platforms, resolved API and zoning gaps with Engineering, and created test cohorts to validate data integrity before full migration. Built centralized tracking to monitor migration progress and enforce data standards.",
      },
      {
        step: "Phase 2: Onboarding Optimization and Merchant Experience",
        detail:
          "Streamlined the activation workflow to reduce time to launch per account. Coordinated with AMs to communicate clearly with merchants, address billing and pricing concerns, and support contract updates for non-compliant pricing. Created merchant-facing resources to reduce confusion and inbound support volume.",
      },
      {
        step: "Bulk Tooling with Engineering",
        detail:
          "Co-designed and launched bulk migration tooling with Engineering that enabled faster data transfers with built-in validation checks, reducing manual error and supporting scalable changes to legacy Postmates accounts.",
      },
    ],

    results: [
      "Migrated 100% of Postmates accounts by Q2 with minimal disruption to business and partners",
      "94% OTR reliability for migrated accounts, confirming courier dispatching logic, segmentation, and system integrations were accurate",
      "70% of merchants moved onto supported pricing through contract updates and alignment with AMs on new terms",
      "Backfilled data and integrated multiple systems enabling accurate tracking of merchant data and reduced time to onboard",
      "Bulk tooling built with Engineering enabled faster data migrations with more checks in place, reducing manual error and supporting future scalable migrations",
    ],

    tags: ["Account Migration", "Systems Integration", "Client Success", "Cross-functional", "Change Management"],
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
