import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const roles = [
  "AI/ML Engineer",
  "Full Stack Developer", 
  "Problem Solver",
  "Tech Enthusiast"
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let currentIndex = 0
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= role.length) {
        setDisplayText(role.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
        
        setTimeout(() => {
          setIsTyping(true)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-cyber rounded-full blur-lg opacity-50 animate-pulse" />
              <img
                src="/lovable-uploads/9164574a-9be6-4e35-aa03-41b896ed34d1.png"
                alt="Aryan Jaiswal"
                className="relative w-80 h-80 rounded-full object-cover neon-border shadow-neon floating"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-neon">
                Available for hire!
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left md:order-1">
            <Badge variant="outline" className="mb-4 neon-border">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Open to opportunities
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="cyber-glow">Aryan</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
              I'm a{" "}
              <span className="text-primary font-semibold">
                {displayText}
                <span className={`terminal-cursor ${isTyping ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Final year BTech student at Shri Ramdeobaba College specializing in AI/ML. 
              Passionate about building innovative solutions with modern technologies and AI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="shadow-neon group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="neon-border group" asChild>
                <a href="https://peach-libbey-78.tiiny.site" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="https://linkedin.com/in/aryan-deepak-jaiswal-59151b31a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="https://github.com/AryanJaiswal763" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="mailto:aryanjaiswal763@gmail.com">
                  <Mail className="h-5 w-5 group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="tel:9096509485">
                  <Phone className="h-5 w-5 group-hover:text-primary" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neon-border group" asChild>
                <a href="https://codolio.com/profile/aryanJaiswal" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 group-hover:text-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
