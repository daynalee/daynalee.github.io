import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 container mx-auto px-4 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">About Me</h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I thrive at the intersection of data, operations, and human experience. My career has been defined by a simple principle: build systems that scale, but never forget the people using them.
              </p>
              <p>
                With over four years of experience spanning hyper-growth tech at Uber and complex systems in healthcare, I've honed the ability to translate ambiguous problems into clear, actionable strategies. Whether it's recovering millions in lost revenue or streamlining patient care workflows, I rely on rigorous analysis grounded in deep empathy for the end user.
              </p>
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative shadow-lg">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
          </div>
        </div>

        <div className="bg-card p-10 rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-serif mb-8 text-primary">Skills & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 border-b pb-2">Operations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Process Improvement</li>
                <li>Revenue Operations</li>
                <li>Go-To-Market Strategy</li>
                <li>Account Migration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 border-b pb-2">Client Success</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Relationship Management</li>
                <li>Workflow Optimization</li>
                <li>Cross-functional Communication</li>
                <li>Partner Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 border-b pb-2">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Data Analysis (Excel, SQL)</li>
                <li>Figma</li>
                <li>Salesforce / CRMs</li>
                <li>Unity (Creative Projects)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
