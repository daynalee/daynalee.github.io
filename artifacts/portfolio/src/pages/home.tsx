import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Download, Mail, Linkedin, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center pt-20 pb-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="space-y-4">
                <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                  Client Success | Revenue Operations | Process Improvement
                </p>
                <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
                  Analytical Mind, <br />
                  <span className="text-primary italic">Empathetic Lens</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm a data driven problem solver with 4+ years in operations and client success at Uber and in healthcare driving more than $23M+ in annual revenue impact.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/case-studies" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">
                  About Me
                </Link>
                <Link href="/experience" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">
                  Work Experience
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-4 flex flex-col space-y-6 bg-card p-8 rounded-2xl border shadow-sm"
            >
              <h3 className="font-serif text-2xl mb-2">Connect</h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="bg-background p-2 rounded-full border group-hover:border-primary transition-colors">
                    <Download className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Download CV</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="bg-background p-2 rounded-full border group-hover:border-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Email Me</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="bg-background p-2 rounded-full border group-hover:border-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="bg-background p-2 rounded-full border group-hover:border-primary transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Blog</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}
