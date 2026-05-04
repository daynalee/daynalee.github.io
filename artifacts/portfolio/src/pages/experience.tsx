import { motion } from "framer-motion";

const experiences = [
  {
    role: "Client Success & Revenue Operations",
    company: "Uber (Uber Direct & Uber Eats)",
    period: "2020 — 2023",
    description: "Spearheaded complex account migrations and revenue recovery initiatives across major Uber divisions.",
    achievements: [
      "Led the recollection of $7M in previously uncollectible revenue for Uber Direct through process analysis and targeted interventions.",
      "Managed the seamless migration of over 1000+ accounts from Postmates to the Uber Eats platform without service disruption.",
      "Collaborated with cross-functional teams to identify and resolve systemic operational bottlenecks."
    ]
  },
  {
    role: "Operations Consultant",
    company: "Healthcare Sector (Pacific Pain)",
    period: "2018 — 2020",
    description: "Redesigned patient intake and workflow processes to maximize clinic efficiency and patient satisfaction.",
    achievements: [
      "Decreased patient intake time by 25% by analyzing workflow data and implementing streamlined operational protocols.",
      "Drafted and standardized communication templates for external partners and patient interactions.",
      "Ensured regulatory compliance while increasing daily patient throughput."
    ]
  }
];

export default function Experience() {
  return (
    <div className="py-20 container mx-auto px-4 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-primary">Work Experience</h1>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{exp.period}</div>
                  <div className="text-lg font-serif mt-1 text-primary">{exp.company}</div>
                </div>
                
                <div className="md:col-span-3 bg-card p-8 rounded-2xl border shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">{exp.role}</h3>
                  <p className="text-muted-foreground mb-6">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-3 mt-1.5">•</span>
                        <span className="text-sm text-foreground/80 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t text-center"
          >
            <h3 className="text-xl font-serif mb-4">Total Impact Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-primary text-primary-foreground rounded-xl text-center">
                <div className="text-3xl font-bold mb-1">$23M+</div>
                <div className="text-xs opacity-80 uppercase tracking-wider">Revenue Impact</div>
              </div>
              <div className="p-6 bg-primary text-primary-foreground rounded-xl text-center">
                <div className="text-3xl font-bold mb-1">$7M</div>
                <div className="text-xs opacity-80 uppercase tracking-wider">Recollection</div>
              </div>
              <div className="p-6 bg-primary text-primary-foreground rounded-xl text-center">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-xs opacity-80 uppercase tracking-wider">Accts Migrated</div>
              </div>
              <div className="p-6 bg-primary text-primary-foreground rounded-xl text-center">
                <div className="text-3xl font-bold mb-1">25%</div>
                <div className="text-xs opacity-80 uppercase tracking-wider">Time Reduced</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
