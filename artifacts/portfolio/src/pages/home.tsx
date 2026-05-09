import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Download, Mail, Linkedin, Globe } from "lucide-react";

const metrics = [
  { value: "$23M+", label: "Revenue Impact" },
  { value: "4+ yrs", label: "Ops & Client Success" },
  { value: "$7M", label: "Revenue Recovered" },
  { value: "1,000+", label: "Accounts Migrated" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container mx-auto px-6 max-w-5xl pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Identity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Client Success · Revenue Operations · Process Improvement
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-[1.1] tracking-tight">
              Analytical Mind,{" "}
              <span className="text-primary italic">Empathetic Lens</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              I'm a data-driven problem solver with 5+ years in operations and client success at Unity, Uber, and in healthcare — driving over <strong className="text-foreground font-semibold">$23M in revenue impact</strong>.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/case-studies">
                <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
                  View Case Studies
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/experience">
                <span className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                  Work Experience
                </span>
              </Link>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground px-5 py-2.5 rounded-lg hover:text-foreground hover:bg-accent transition-colors cursor-pointer">
                  About Me
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Connect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 bg-card border border-border rounded-xl p-6 space-y-4"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Connect</p>
            {[
              { icon: Download, label: "Download CV", href: "#" },
              { icon: Mail, label: "Email Me", href: "mailto:dayna@example.com" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Globe, label: "Blog", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact metrics strip */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="border-y border-border bg-card"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {metrics.map((m) => (
              <div key={m.label} className="py-6 px-6 text-center">
                <div className="text-2xl md:text-3xl font-bold font-serif text-primary">{m.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Case study preview */}
      <section className="container mx-auto px-6 max-w-5xl py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Featured Work</p>
            <Link href="/case-studies">
              <span className="text-xs text-primary hover:underline underline-offset-4 cursor-pointer font-medium">
                All case studies →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { company: "Unity", title: "Driving Publisher Revenue Through Multiple Ad Units Adoption", metric: "+5%", label: "Publisher Revenue", slug: "unity-ads" },
              { company: "Uber Direct", title: "Recovery of Uncollectible Credit Card Debt", metric: "$7M", label: "Recovered", slug: "uber-direct" },
              { company: "Uber Eats", title: "Postmates to Uber Eats Migration", metric: "1,000+", label: "Accounts Migrated", slug: "uber-eats" },
            ].map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <Link href={`/case-studies/${item.slug}`}>
                  <div className="group bg-[#1B3A2D] text-[#f5f0e8] rounded-xl p-5 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                    <p className="text-[#f5f0e8]/50 text-xs font-semibold uppercase tracking-widest mb-2">{item.company}</p>
                    <h3 className="text-base font-serif leading-snug mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                    <div className="mt-auto pt-4 border-t border-[#f5f0e8]/15 flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-bold">{item.metric}</div>
                        <div className="text-[#f5f0e8]/50 text-xs uppercase tracking-wider">{item.label}</div>
                      </div>
                      <span className="text-xs text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/70 transition-colors">View →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
