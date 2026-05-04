import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-primary">
          Dayna Lee
        </Link>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
