import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    title: "Uber Direct",
    description: "Recollection of $7M in previously uncollectible revenue through systematic process improvement.",
    category: "Real Cases",
  },
  {
    title: "Uber Eats",
    description: "Migration of 1000+ accounts from Postmates to Uber Eats, ensuring seamless transition and zero churn.",
    category: "Real Cases",
  },
  {
    title: "Pacific Pain",
    description: "Decreased patient intake time by 25% by overhauling operational workflows.",
    category: "Real Cases",
  },
  {
    title: "Health Staff",
    description: "Prioritized collections and drafted targeted communication strategies to external partners.",
    category: "Hypothetical Cases",
  },
  {
    title: "Ops Sight",
    description: "Developed GTM Strategy for a pre-revenue startup, establishing strong market entry foundation.",
    category: "Hypothetical Cases",
  },
  {
    title: "Moon Fruit Match Up",
    description: "Designed and developed a fruit catching game in Unity, blending creativity with technical execution.",
    category: "Creative Projects",
  },
  {
    title: "Honey Melon Cafe",
    description: "Concept creation and successful launch of a boutique cafe experience.",
    category: "Creative Projects",
  },
  {
    title: "Pair & Pour",
    description: "Wireframing and UX exploration for a beverage pairing app using Figma.",
    category: "Creative Projects",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CaseStudies() {
  return (
    <div className="py-20 container mx-auto px-4 max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Case Studies</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A collection of projects showcasing my approach to problem solving, operational efficiency, and creative execution across various domains.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cases.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group relative flex flex-col justify-between bg-[#1B3A2D] text-[#fdfbf7] p-8 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight className="h-6 w-6 text-[#fdfbf7]" />
            </div>

            <div>
              <Badge variant="outline" className="border-[#fdfbf7]/30 text-[#fdfbf7] mb-6 backdrop-blur-sm bg-black/10">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-serif mb-4 leading-snug">{project.title}</h3>
              <p className="text-[#fdfbf7]/80 text-sm leading-relaxed line-clamp-4">
                {project.description}
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#fdfbf7]/20 flex items-center text-sm font-medium text-[#fdfbf7]/90 group-hover:text-[#fdfbf7] transition-colors">
              View details
              <motion.span 
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
