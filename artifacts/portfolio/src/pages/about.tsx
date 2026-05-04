import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const skills = [
  {
    category: "Operations",
    items: ["Process Improvement", "Revenue Operations", "Go-To-Market Strategy", "Account Migration"],
  },
  {
    category: "Client Success",
    items: ["Relationship Management", "Workflow Optimization", "Cross-functional Collaboration", "Partner Strategy"],
  },
  {
    category: "Tools",
    items: ["Excel · SQL", "Figma", "Salesforce / CRM", "Unity"],
  },
];

export default function About() {
  return (
    <div className="py-16 container mx-auto px-6 max-w-5xl">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">About</p>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground">Dayna Lee</h1>
      </motion.div>

      {/* Two-column intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14"
      >
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            I thrive at the intersection of data, operations, and human experience. My career has been defined by a core belief: <strong className="text-foreground font-semibold">build systems that scale, but never forget the people using them.</strong>
          </p>
          <p>
            With 4+ years spanning hyper-growth tech at Uber and complex systems in healthcare, I translate ambiguous problems into clear, actionable strategies — whether recovering millions in lost revenue or streamlining patient care workflows.
          </p>
          <p>
            I bring an analytical approach to every engagement, grounded in empathy for end users and a relentless focus on outcomes that matter to the business.
          </p>
        </div>

        {/* Key facts */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          {[
            { label: "Background", value: "Operations & Client Success" },
            { label: "Specialties", value: "Revenue Operations, Process Design, Account Management" },
            { label: "Industries", value: "Tech (Uber), Healthcare" },
            { label: "Based in", value: "San Francisco Bay Area" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
              <span className="text-sm text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-border">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Skills & Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#1B3A2D] text-[#f5f0e8] rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <div className="text-lg font-serif mb-1">Ready to see the work?</div>
          <div className="text-[#f5f0e8]/65 text-sm">Browse case studies or review my full experience.</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/case-studies">
            <span className="inline-flex items-center gap-2 bg-[#f5f0e8] text-[#1B3A2D] text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-white transition-colors cursor-pointer">
              Case Studies
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link href="/experience">
            <span className="inline-flex items-center gap-2 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              Work Experience
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
