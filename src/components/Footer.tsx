import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold cyber-glow mb-4">ARYAN.DEV</h3>
            <p className="text-muted-foreground max-w-sm">
              Building innovative solutions with AI/ML and full-stack development. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
            <div className="space-y-2 mb-4">
              <p className="text-muted-foreground">aryanjaiswal763@gmail.com</p>
              <p className="text-muted-foreground">+91 9096509485</p>
              <p className="text-muted-foreground">Nagpur, India</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="https://linkedin.com/in/aryan-deepak-jaiswal-59151b31a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="https://github.com/AryanJaiswal763" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="mailto:aryanjaiswal763@gmail.com">
                  <Mail className="h-4 w-4 group-hover:text-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Aryan Jaiswal. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}