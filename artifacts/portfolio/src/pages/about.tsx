import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const softSkills = [
  "Client Communication",
  "Positive Go-Getter",
  "Open Minded",
  "Strategic Problem Solving",
  "Data Driven Decisions",
  "Prioritization",
];

const tools = [
  "Salesforce",
  "HubSpot",
  "Asana",
  "JIRA",
  "Notion",
  "SQL",
  "Excel",
  "Figma",
  "Unity",
];

const adventures = [
  {
    emoji: "🏔️",
    place: "Japan",
    detail: "Snowboarding the slopes",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    alt: "Snowy mountain slopes in Japan",
  },
  {
    emoji: "🇨🇳",
    place: "China",
    detail: "Solo exploring",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
    alt: "Exploring China",
  },
  {
    emoji: "🐕",
    place: "Thailand",
    detail: "Volunteering at a dog shelter",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    alt: "Dogs at a shelter in Thailand",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 max-w-5xl pt-16 pb-12"
      >
        <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-5 leading-none tracking-tight">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed font-medium">
          Operations background with a passion for creating meaningful connections focused on partner loyalty and revenue impact.
        </p>
      </motion.div>

      {/* ── MY JOURNEY ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-12 border-t border-border"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">My Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-base text-foreground/75 leading-relaxed">
            <p>
              Hi! I graduated from WSU in 2020 with a BA in International Business and a minor in French. From there I started my career managing a healthcare facility near Seattle and working with patients during covid.
            </p>
            <p>
              Then I started my life at Uber and moved to SF. On my team at Uber, I got to work cross functionally with eng and finance on building scalable systems to increase revenue, enable collections, and optimize onboarding.
            </p>
            <p>
              Most recently I've been solo travelling through Asia where I spent most of my time exploring China, snowboarding in Japan, and volunteering at a dog shelter in Thailand.
            </p>
          </div>

          {/* Quick facts card */}
          <div className="bg-[#1B3A2D] text-[#f5f0e8] rounded-2xl p-7 space-y-5">
            {[
              { label: "Education", value: "BA International Business, WSU 2020 · Minor in French" },
              { label: "Based in", value: "San Francisco Bay Area" },
              { label: "Industries", value: "Tech (Uber), Healthcare" },
              { label: "Currently", value: "Exploring, travelling, building" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-[#f5f0e8]/50 text-xs font-bold uppercase tracking-widest">{label}</span>
                <span className="text-sm text-[#f5f0e8]/85">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── ADVENTURES (photo grid) ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-12 border-t border-border"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Beyond Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {adventures.map((a, i) => (
            <motion.div
              key={a.place}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted"
            >
              <img
                src={a.img}
                alt={a.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-2xl mb-1">{a.emoji}</div>
                <div className="text-white font-bold text-base">{a.place}</div>
                <div className="text-white/70 text-xs">{a.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── SKILLS & TOOLS ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-12 border-t border-border"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">Skills & Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Soft skills */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Soft Skills</p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Data & Project Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FUN FACTS strip ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-border bg-card"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { emoji: "🎓", label: "WSU 2020", sub: "International Business" },
              { emoji: "🗣️", label: "French Minor", sub: "Oui, vraiment" },
              { emoji: "🌏", label: "Asia Solo Trip", sub: "China · Japan · Thailand" },
              { emoji: "🎮", label: "Built a Game", sub: "Moon Fruit Match Up in Unity" },
            ].map((f) => (
              <div key={f.label} className="py-6 px-4 text-center">
                <div className="text-2xl mb-1">{f.emoji}</div>
                <div className="text-sm font-semibold text-foreground">{f.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-14"
      >
        <div className="bg-[#1B3A2D] text-[#f5f0e8] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xl font-serif mb-1">Ready to see the work?</div>
            <div className="text-[#f5f0e8]/60 text-sm">Browse case studies or review my full experience.</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/case-studies">
              <span className="inline-flex items-center gap-2 bg-[#f5f0e8] text-[#1B3A2D] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white transition-colors cursor-pointer">
                Case Studies
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link href="/experience">
              <span className="inline-flex items-center gap-2 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                Work Experience
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
