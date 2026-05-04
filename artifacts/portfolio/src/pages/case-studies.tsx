import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "@/data/case-studies";

const categories = ["Real Case", "Hypothetical Case", "Creative Project"] as const;

const categoryMeta: Record<string, { label: string; description: string }> = {
  "Real Case": {
    label: "Real Cases",
    description: "Live work with measurable business outcomes",
  },
  "Hypothetical Case": {
    label: "Hypothetical Cases",
    description: "Structured exercises demonstrating strategic thinking",
  },
  "Creative Project": {
    label: "Creative Projects",
    description: "Personal projects exploring design and product",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CaseStudies() {
  return (
    <div className="py-16 container mx-auto px-6 max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Case Studies</h1>
        <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
          A focused collection of work spanning revenue operations, client success, and creative execution. Each card links to a full breakdown.
        </p>
      </motion.div>

      {/* Grouped sections */}
      {categories.map((cat, catIdx) => {
        const studies = caseStudies.filter((c) => c.category === cat);
        const meta = categoryMeta[cat];
        return (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="mb-14"
          >
            {/* Section label */}
            <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-border">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">{meta.label}</h2>
              <span className="text-xs text-muted-foreground">{meta.description}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {studies.map((study, i) => (
                <motion.div key={study.slug} variants={cardVariants} initial="hidden" animate="show" transition={{ delay: i * 0.07 }}>
                  <Link href={`/case-studies/${study.slug}`}>
                    <div className="group relative flex flex-col justify-between bg-[#1B3A2D] text-[#f5f0e8] p-6 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full min-h-[210px]">
                      {/* Hover arrow */}
                      <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-[#f5f0e8]/30 group-hover:text-[#f5f0e8]/80 transition-colors duration-200" />

                      <div className="space-y-3 pr-6">
                        {/* Company */}
                        <p className="text-[#f5f0e8]/50 text-xs font-semibold uppercase tracking-widest">{study.company}</p>
                        {/* Title */}
                        <h3 className="text-lg font-serif leading-snug">{study.title}</h3>
                        {/* Tagline — 2 lines max */}
                        <p className="text-[#f5f0e8]/65 text-xs leading-relaxed line-clamp-2">{study.tagline}</p>
                      </div>

                      {/* Bottom: key metric */}
                      <div className="mt-6 pt-4 border-t border-[#f5f0e8]/15 flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold font-serif">{study.heroMetric.value}</div>
                          <div className="text-[#f5f0e8]/50 text-xs uppercase tracking-wider">{study.heroMetric.label}</div>
                        </div>
                        <span className="text-xs text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/70 transition-colors font-medium">
                          View case →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
