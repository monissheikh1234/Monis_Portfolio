import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Calendar
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
              value: "monissheikh0102@gmail.com",
        href: "mailto:monissheikh0102@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9011272753",
      href: "tel:+919011272753"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagpur, India",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
              href: "https://www.linkedin.com/in/monis-mustaque-sheikh-756096276/",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
              href: "https://github.com/monissheikh1234",
      color: "hover:text-gray-400"
    },
    {
      icon: ExternalLink,
      label: "Codolio",
              href: "https://codolio.com/profile/monissheikh1234",
      color: "hover:text-green-400"
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="cyber-glow">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's build something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card/50 backdrop-blur-sm neon-border">
              <CardHeader>
                <CardTitle className="text-2xl cyber-glow">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>


            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm neon-border">
              <CardHeader>
                <CardTitle className="text-xl cyber-glow">Connect Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`neon-border group ${social.color}`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="neon-border">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    Available for hire
                  </Badge>
                  <Badge variant="outline" className="neon-border">
                    Open to collaborations
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}