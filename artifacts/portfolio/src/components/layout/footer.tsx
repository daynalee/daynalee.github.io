import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dayna Lee. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
