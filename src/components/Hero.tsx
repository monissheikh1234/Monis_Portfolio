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
                <a href="https://calyx-production-media.s3.amazonaws.com/resume_files/Aryan-Jaiswal-B.Tech.-ComputerScience%26Engineering-2025-07-22-15-21-53-335497.pdf?response-content-disposition=filename%3DResume_AryanJaiswal_2026.pdf%3B%20filename%2A%3Dutf-8%27%27Resume_AryanJaiswal_2026.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4V756IASVQYSUV7M%2F20250722%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250722T152339Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiAN9hhK4yVdg5acuu7DBV%2FXjI8vpyyGhGovCclm6MtCiQIhALMEaJwkNsRS6ajgGuUty61BCd1i3JYLWJug%2Bx%2BkBfVuKo8FCPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMODcxODc0MDUyMTMzIgwmNRu3jV8Goz9wlS4q4wQ5o8RmtVpr3A%2BCcOaPJot0KTdsJmLKs7P5VbF9U0YEmZXEHIyezbITpanBPB364Yc7Z7Y8RFlRbK539bAV%2FOGcLs8M9NlLuW4iF7FjJxgW0aQ2XLpW13fqz8rKDkbNWvCg2iQuh%2FGdbwJZQCKRSP2Yf5rVa3NEkA2XMEs%2B3ki0eePSvkscAdfNU68%2B%2FIPkZfztZjrk6ZojnLMAUdcoAEx%2BLa02ZUU3WjMnpP8sp5HKit4R5B6%2FALfTqBSHHAVN5Ll3MH%2FHakX8QHq3qgLvKi8RAHRM9a8QR5RLC%2B8pccpyXbVRhhO6cgthBsCoQmbL1LIn%2BXHtCEfGEoI9HoKrJAacEl534524JfECdVNmywrZWO70eRIdtUHRg%2FLBceL4Tkxzxwi6Dth2lp2yw7gEYn8ibOfhMVfgFmZyubCAzLMbaWRsfR2UdO1fPQPJA0UDDZOwXj1BOuv6BcDoWs2M48jO9B1avGY%2BDHOgfC8MxSGDZOEFylEuANz4QM%2Bj6TZWJt7NTG5SZGSBc4MdAun7lfM2h8ck1VuxwJtwu0YmaXZ2TdSgS%2BAZakhAEhmO3bSNU2gzkKCQA7XKjZL3%2FmBKga6FOicswW2pdkHm2spAjl5QzSLq8aVb%2FZmG6rzlWBmpWAblzPAMW1D%2FibY%2BVZ3JtvdzfDGLrdkXKoa2z6zQ2rC4xpfU3oxBY6F5cMMFdh%2Fpkz6khGW4Ydmg3RXNdPNa5A%2FwW7yXElG%2Fwcn12oz%2BCBtOtVeNnLgAjvZ%2FfraaEXQQfv96Mprh9%2BgNpQ0r8T50xAzrHDeGcG0FrAgsOlXUck%2F76llBGzDF1v7DBjqaAbYFC7%2F%2B7qK3YdecOYCMx5f4Eb1%2F3ghsXxKPDHs8bUy5GYQxOfEZMOCRJ4gl2V0%2B1AsXnbDnMMdisJdyj2DFJxJOMl6aH6h7phZ5vu3lJjXOwp%2B1PhwCis3xW%2FrdP%2Fv4y1VqGJODiADyLsW6XxTmWugcT4oRvtJFL46q7fXwXjx6yjxqnqMmJ4%2Fl%2BBWvWB5Z9Pl%2FnYm8QHO0Soo%3D&X-Amz-Signature=cc9308599d29c5869c6c18bbacfc39e7590840fb3465af0adfcf6bf7070d50bc" target="_blank" rel="noopener noreferrer">
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
