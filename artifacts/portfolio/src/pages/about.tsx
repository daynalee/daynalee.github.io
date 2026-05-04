import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import puppyPhoto from "@assets/Screenshot_2026-05-04_at_1.59.12_PM_1777928354733.png";

const softSkills = [
  "Client Communication",
  "Positive Go-Getter",
  "Open Minded",
  "Strategic Problem Solving",
  "Data Driven Decisions",
  "Prioritization",
];

const tools = [
  "Salesforce", "HubSpot", "Asana", "JIRA", "Notion",
  "SQL", "Excel", "Figma", "Unity",
];

const travel = [
  { year: "2019", detail: "Studied abroad in France for a year" },
  { year: "2020", detail: "Spent 4 months solo backpacking through Europe" },
  { year: "2024", detail: "Moved to China for a year and spent a few months exploring Oceania and other parts of Asia" },
];

const volunteering = [
  { place: "Thailand", detail: "Cared for and rehomed 100+ dogs" },
  { place: "US", detail: "Feed homeless and create care packages during the holidays" },
  { place: "France & China", detail: "Shared my life in the US and helped students practice English" },
  { place: "Australia", detail: "Community led beach cleanups and cared for animals at a sanctuary" },
];

const creating = [
  {
    label: "Photography",
    sub: "Digital & Film",
    note: null,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
  },
  {
    label: "Foodie",
    sub: "Cooking & Reviews",
    note: "I love hosting and preparing food for pals 你饿了吗？",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    label: "Design",
    sub: "Procreate & Figma",
    note: null,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
];

const inMotion = [
  {
    label: "Snowboarding",
    note: "First try I ate it, but the next one was better ><",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
  },
  {
    label: "Paddle Boarding",
    note: null,
    img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
  },
  {
    label: "Hiking",
    note: "Mailbox Peak",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  {
    label: "Rafting",
    note: null,
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="bg-background">

      {/* ── MY JOURNEY (professional) ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 max-w-5xl pt-16 pb-14"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">About</p>
        <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-8 leading-tight">About Me</h1>
        <p className="text-base text-foreground/60 max-w-2xl mb-10 leading-relaxed font-medium">
          Operations background with a passion for creating meaningful connections focused on partner loyalty and revenue impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
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

          <div className="bg-[#1B3A2D] text-[#f5f0e8] rounded-2xl p-7 space-y-4">
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

      {/* ── BEYOND THE RESUME hero ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#1B3A2D] text-[#f5f0e8] overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-5xl py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f5f0e8]/50 mb-2">Welcome to my Life</p>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-none">Beyond the Resume</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-xl md:text-2xl font-semibold leading-snug text-[#f5f0e8]">
                Hi! I'm a curious creator who loves movement, making, and meaning.
              </p>
              <p className="text-base text-[#f5f0e8]/70 leading-relaxed">
                I love being outdoors, painting, photography, trying new things, and being with friends. I'm happiest when I'm creating or in motion and I truly believe we were made to explore, build, and inspire!
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#f5f0e8]/10 flex items-center justify-center border-2 border-dashed border-[#f5f0e8]/20">
              <div className="text-center space-y-2 px-6">
                <div className="text-3xl">📸</div>
                <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">Add your photo here<br/>Replace this placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── TRAVEL + VOLUNTEERING ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-16 border-b border-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Travel */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Travel</h3>
            <div className="space-y-5">
              {travel.map((t) => (
                <div key={t.year} className="flex gap-5 items-start">
                  <span className="shrink-0 text-sm font-bold text-primary min-w-[40px]">{t.year}</span>
                  <p className="text-sm text-foreground/75 leading-relaxed">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering + puppy photo */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Volunteering</h3>
            <div className="grid grid-cols-5 gap-4 mb-5">
              <div className="col-span-2 rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={puppyPhoto}
                  alt="Puppy from Thailand shelter"
                  className="w-full h-full object-cover object-left"
                />
              </div>
              <div className="col-span-3 space-y-4">
                {volunteering.map((v) => (
                  <div key={v.place}>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-0.5">{v.place}</span>
                    <p className="text-xs text-foreground/70 leading-relaxed">{v.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Fun Fact</span>
              <p className="text-xs text-foreground/70 leading-relaxed italic">
                In New Zealand the Kererū (New Zealand Wood Pigeon) can be spotted drunk and falling out of trees because they eat berries and then they ferment as they lay in the sun &gt;&lt;
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── CREATING ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-16 border-b border-border"
      >
        <div className="flex items-baseline gap-4 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">stay curious</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How I Spend my Freetime</h2>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Creating</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {creating.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <div className="text-sm font-bold text-foreground">{c.label}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.sub}</div>
                {c.note && (
                  <p className="text-xs text-foreground/60 leading-relaxed pt-1">{c.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── IN MOTION ── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-5xl py-16 border-b border-border"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">In Motion</h2>
        <p className="text-xs text-muted-foreground italic mb-10">c'est le voyage qui fait l'aventure</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {inMotion.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"}`}
            >
              <img
                src={a.img}
                alt={a.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-white font-bold text-sm">{a.label}</div>
                {a.note && <div className="text-white/65 text-xs mt-0.5">{a.note}</div>}
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
        className="container mx-auto px-6 max-w-5xl py-16 border-b border-border"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Soft Skills</p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Data & Project Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors">
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
        className="bg-card border-b border-border"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { emoji: "🎓", label: "WSU 2020", sub: "International Business" },
              { emoji: "🗣️", label: "French Minor", sub: "Oui, vraiment" },
              { emoji: "🌏", label: "Solo Traveller", sub: "France · Europe · Asia · Oceania" },
              { emoji: "🐕", label: "100+ Dogs", sub: "Rehomed in Thailand" },
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
                Case Studies <ArrowRight className="h-3.5 w-3.5" />
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
