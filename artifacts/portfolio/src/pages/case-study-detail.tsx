import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const categoryColor: Record<string, string> = {
  "Real Case": "bg-[#1B3A2D] text-[#e8f0eb]",
  "Hypothetical Case": "bg-[#2d3a1b] text-[#e8f0eb]",
  "Creative Project": "bg-[#3a2d1b] text-[#f0ebe8]",
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-lg">Case study not found.</p>
          <Link href="/case-studies" className="text-primary underline underline-offset-4">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Back nav */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-6 max-w-5xl py-4">
          <Link href="/case-studies">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Case Studies
            </span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1B3A2D] text-[#f5f0e8]"
      >
        <div className="container mx-auto px-6 max-w-5xl py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColor[study.category] ?? "bg-white/10 text-white"}`}>
                  {study.category}
                </span>
                <span className="text-[#f5f0e8]/50 text-xs font-medium uppercase tracking-widest">{study.company}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif leading-tight">{study.title}</h1>
              <p className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed max-w-xl">{study.tagline}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {study.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-[#f5f0e8]/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key metric */}
            <div className="md:col-span-1 flex flex-col items-start md:items-end gap-6">
              <div className="bg-white/10 rounded-2xl p-6 text-center w-full md:max-w-[180px]">
                <div className="text-4xl md:text-5xl font-bold font-serif text-[#f5f0e8]">{study.heroMetric.value}</div>
                <div className="text-xs uppercase tracking-widest text-[#f5f0e8]/60 mt-2">{study.heroMetric.label}</div>
              </div>
              <div className="text-xs text-[#f5f0e8]/50 space-y-1">
                <div><span className="font-semibold text-[#f5f0e8]/70">Role:</span> {study.role}</div>
                <div><span className="font-semibold text-[#f5f0e8]/70">Period:</span> {study.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick stats */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-3 divide-x divide-border">
            {study.stats.map((stat, i) => (
              <div key={i} className="py-5 px-6 text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 max-w-5xl py-16 space-y-16">

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">Overview</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-foreground/80 text-base leading-relaxed">{study.overview}</p>
            </div>
          </div>
        </motion.section>

        <div className="border-t border-border/50" />

        {/* Problem / Approach / Results — 3 column scannable layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-500 text-xs font-bold">1</div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Problem</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{study.problem}</p>
          </motion.section>

          {/* Approach */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 text-xs font-bold">2</div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Approach</h2>
            </div>
            <ol className="space-y-4">
              {study.approach.map((item, i) => (
                <li key={i} className="space-y-1">
                  <div className="text-xs font-semibold text-foreground">{item.step}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ol>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-[#1B3A2D] text-xs font-bold">3</div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Results</h2>
            </div>
            <ul className="space-y-3">
              {study.results.map((result, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#1B3A2D] mt-1 font-bold text-xs">✓</span>
                  <span className="text-sm text-foreground/80 leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Navigation to other studies */}
        <div className="border-t border-border/50 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">More Case Studies</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudies
              .filter((c) => c.slug !== study.slug)
              .slice(0, 3)
              .map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                  <div className="group p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">{c.company}</div>
                        <div className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{c.title}</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                    </div>
                    <div className="mt-2 text-lg font-bold text-primary">{c.heroMetric.value}</div>
                    <div className="text-xs text-muted-foreground">{c.heroMetric.label}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
