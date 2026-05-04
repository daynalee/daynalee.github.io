import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

  const isUberDirect = !!study.context;

  return (
    <div className="bg-background min-h-screen">

      {/* Back nav */}
      <div className="border-b border-border/50 bg-background sticky top-16 z-40">
        <div className="container mx-auto px-6 max-w-5xl py-3">
          <Link href="/case-studies">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Case Studies
            </span>
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1B3A2D] text-[#f5f0e8]"
      >
        <div className="container mx-auto px-6 max-w-5xl py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Left */}
            <div className="md:col-span-2 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-[#f5f0e8]">
                  {study.category}
                </span>
                <span className="text-[#f5f0e8]/50 text-xs font-semibold uppercase tracking-widest">{study.company}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif leading-tight">{study.title}</h1>
              <p className="text-[#f5f0e8]/70 text-base leading-relaxed max-w-xl">{study.tagline}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {study.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-[#f5f0e8]/75">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: metric + meta */}
            <div className="md:col-span-1 flex flex-col items-start md:items-end gap-5">
              <div className="bg-white/10 rounded-2xl p-6 text-center w-full md:max-w-[190px]">
                <div className="text-4xl md:text-5xl font-bold font-serif">{study.heroMetric.value}</div>
                <div className="text-xs uppercase tracking-widest text-[#f5f0e8]/55 mt-2">{study.heroMetric.label}</div>
              </div>
              <div className="text-xs text-[#f5f0e8]/50 space-y-1.5">
                <div><span className="font-semibold text-[#f5f0e8]/70">Role:</span> {study.role}</div>
                {study.team && <div><span className="font-semibold text-[#f5f0e8]/70">Team:</span> {study.team}</div>}
                {study.timeframe && <div><span className="font-semibold text-[#f5f0e8]/70">Timeframe:</span> {study.timeframe}</div>}
                {study.scope && <div><span className="font-semibold text-[#f5f0e8]/70">Scope:</span> {study.scope}</div>}
                {study.collaborators && <div><span className="font-semibold text-[#f5f0e8]/70">Partners:</span> {study.collaborators}</div>}
                {!study.team && <div><span className="font-semibold text-[#f5f0e8]/70">Period:</span> {study.duration}</div>}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── STATS BAR ── */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className={`grid grid-cols-${study.stats.length} divide-x divide-border`}>
            {study.stats.map((stat, i) => (
              <div key={i} className="py-5 px-6 text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="container mx-auto px-6 max-w-5xl py-16 space-y-16">

        {/* OVERVIEW */}
        <SectionRow label="Overview">
          <p className="text-foreground/80 text-base leading-relaxed">{study.overview}</p>
        </SectionRow>

        {/* CONTEXT — only if available */}
        {isUberDirect && study.context && (
          <>
            <Divider />
            <SectionRow label="Context">
              <div className="space-y-8">
                {/* Problem statement */}
                <div className="space-y-2">
                  <Label>Problem Statement</Label>
                  <p className="text-sm text-foreground/80 leading-relaxed">{study.context.problemStatement}</p>
                </div>

                {/* My role */}
                <div className="space-y-2">
                  <Label>My Role</Label>
                  <p className="text-sm text-foreground/80 leading-relaxed">{study.context.myRole}</p>
                </div>

                {/* Goals */}
                <div className="space-y-3">
                  <Label>Project Goals</Label>
                  <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-primary mt-0.5 w-16">Primary</span>
                      <p className="text-sm text-foreground/80">{study.context.goals.primary}</p>
                    </div>
                    <div className="border-t border-border pt-3 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Secondary</span>
                      <ul className="space-y-1.5 mt-1">
                        {study.context.goals.secondary.map((g, i) => (
                          <li key={i} className="text-sm text-foreground/75">
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SectionRow>
          </>
        )}

        {/* RESEARCH — only if available */}
        {study.research && (
          <>
            <Divider />
            <SectionRow label="Research">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.research.items.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-card border border-border rounded-xl p-5 space-y-2"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-primary">{item.label}</div>
                      <p className="text-sm text-foreground/75 leading-relaxed">{item.detail}</p>
                    </motion.div>
                  ))}
                </div>

                {study.research.metrics && (
                  <div className="space-y-3">
                    <Label>Metrics for Success</Label>
                    <div className="flex flex-wrap gap-2">
                      {study.research.metrics.map((m, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SectionRow>
          </>
        )}

        {/* CHALLENGES — only if available */}
        {study.challenges && (
          <>
            <Divider />
            <SectionRow label="Challenges">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.challenges.groups.map((group, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-card border border-border rounded-xl p-5 space-y-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground">{group.label}</div>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/70 leading-relaxed">
                          <span className="text-red-400 mt-1 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </SectionRow>
          </>
        )}

        {/* APPROACH */}
        <Divider />
        <SectionRow label="Approach">
          <div className="space-y-4">
            {study.approach.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5"
              >
                <div className="shrink-0 flex flex-col items-center gap-1 pt-1">
                  <div className="w-7 h-7 rounded-full bg-[#1B3A2D] text-[#f5f0e8] flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  {i < study.approach.length - 1 && (
                    <div className="w-px flex-1 bg-border min-h-[24px]" />
                  )}
                </div>
                <div className="pb-6 space-y-1">
                  <div className="text-sm font-semibold text-foreground">{item.step}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionRow>

        {/* RESULTS */}
        <Divider />
        <SectionRow label="Results">
          <div className="space-y-3">
            {study.results.map((result, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4"
              >
                <CheckCircle2 className="h-4 w-4 text-[#1B3A2D] shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80 leading-relaxed">{result}</span>
              </motion.div>
            ))}
          </div>
        </SectionRow>

        {/* MORE CASE STUDIES */}
        <div className="border-t border-border/50 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">More Case Studies</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudies
              .filter((c) => c.slug !== study.slug)
              .slice(0, 3)
              .map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                  <div className="group p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">{c.company}</div>
                        <div className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{c.title}</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                    </div>
                    <div className="text-xl font-bold text-primary">{c.heroMetric.value}</div>
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

function SectionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
    >
      <div className="md:col-span-1">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1 md:sticky md:top-32">{label}</p>
      </div>
      <div className="md:col-span-3">{children}</div>
    </motion.div>
  );
}

function Divider() {
  return <div className="border-t border-border/50" />;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{children}</p>;
}
