import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Client Partner",
    company: "Unity",
    teams: "Unity Ads · Publisher Success",
    period: "2024",
    summary: "Led end-to-end publisher adoption and monetization strategy for a newly launched Unity Ads feature — Multiple Ad Units waterfall setup — that had no documentation, onboarding process, or internal best practices at launch.",
    highlights: [
      { metric: "+5%", detail: "Publisher revenue increase through waterfall and price floor optimization" },
      { metric: "10%", detail: "Of managed publishers adopted the feature within 9 months" },
      { metric: "0 → docs", detail: "Built implementation and best-practice documentation from scratch, enabling future scaled rollouts" },
    ],
    caseStudies: [
      { slug: "unity-ads", label: "Unity Ads Case Study" },
    ],
  },
  {
    role: "Monetization Operations",
    company: "Uber Direct",
    teams: "Uber · Uber Direct",
    period: "2021 — 2023",
    summary: "Founder of monetization operations on Uber Direct, managing 500+ merchant hierarchies across countries, generating $16M in monthly invoices, recovering $7M in delinquent balances, and driving invoice automation from 0% to 96% through data-driven systems integration.",
    highlights: [
      { metric: "500+", detail: "Merchant hierarchies managed across multiple countries" },
      { metric: "$16M", detail: "In monthly invoices generated through scalable billing operations" },
      { metric: "$7M", detail: "In delinquent balances recovered" },
      { metric: "0% → 96%", detail: "Invoice automation achieved through data-driven systems integration" },
    ],
    caseStudies: [
      { slug: "uber-direct", label: "Uber Direct Case Study" },
    ],
  },
  {
    role: "Client Success & Onboarding Ops",
    company: "Uber Eats",
    teams: "Uber · Uber Eats",
    period: "2020 — 2021",
    summary: "Managed onboarding for 1000+ Postmates merchants, handling serviceability, pricing setup, and contract updates. Hosted demos and partnered cross functionally to automate self-serve onboarding, while creating guides to streamline future processes.",
    highlights: [
      { metric: "1,000+", detail: "Postmates merchants onboarded to Uber Eats" },
      { metric: "Self-serve", detail: "Onboarding automation built in partnership with cross-functional teams" },
      { metric: "Guides", detail: "Created to standardize and streamline future onboarding processes" },
    ],
    caseStudies: [
      { slug: "uber-eats", label: "Uber Eats Case Study" },
    ],
  },
  {
    role: "Operations Consultant",
    company: "Healthcare",
    teams: "Pacific Pain Institute",
    period: "2018 — 2020",
    summary: "Redesigned patient intake and clinical workflows to improve throughput, reduce administrative burden, and standardize communication with external partners.",
    highlights: [
      { metric: "25%", detail: "Reduction in average patient intake time through workflow redesign and staff process standardization" },
      { metric: "Higher", detail: "Daily patient throughput achieved without adding headcount" },
      { metric: "Standardized", detail: "Communication templates and intake protocols deployed across clinic locations" },
    ],
    caseStudies: [
      { slug: "pacific-pain", label: "Pacific Pain Case Study" },
    ],
  },
];

const totalImpact = [
  { value: "$23M+", label: "Revenue Impact" },
  { value: "$7M", label: "Recovered" },
  { value: "1,000+", label: "Accounts Migrated" },
  { value: "25%", label: "Faster Patient Intake" },
];

export default function Experience() {
  return (
    <div className="py-16 container mx-auto px-6 max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Background</p>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Work Experience</h1>
        <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
          4+ years driving operational improvements in high-growth tech and complex healthcare environments.
        </p>
      </motion.div>

      {/* Impact banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#1B3A2D] text-[#f5f0e8] rounded-xl mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#f5f0e8]/10">
          {totalImpact.map((item) => (
            <div key={item.label} className="py-6 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold font-serif">{item.value}</div>
              <div className="text-[#f5f0e8]/55 text-xs uppercase tracking-wider mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience entries */}
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* Left: meta */}
            <div className="md:col-span-1 space-y-1 pt-1">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{exp.period}</div>
              <div className="text-base font-serif font-semibold text-primary">{exp.company}</div>
              <div className="text-xs text-muted-foreground">{exp.teams}</div>
            </div>

            {/* Right: content */}
            <div className="md:col-span-3 bg-card border border-border rounded-xl p-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.summary}</p>
              </div>

              {/* Highlights — metric + description */}
              <div className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="shrink-0 min-w-[52px] text-right">
                      <span className="text-sm font-bold text-primary">{h.metric}</span>
                    </div>
                    <div className="text-sm text-foreground/75 leading-relaxed border-l border-border pl-4">{h.detail}</div>
                  </div>
                ))}
              </div>

              {/* Case study links */}
              {exp.caseStudies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {exp.caseStudies.map((cs) => (
                    <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline underline-offset-4 cursor-pointer">
                        {cs.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
