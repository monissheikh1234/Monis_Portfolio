import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"

const projects = [
  {
    title: "SmartShop Genie",
    description: "An innovative platform that seamlessly bridges online and in-store shopping with AI recommendations and AR navigation.",
    features: [
      "Virtual Store Map with clickable zones",
      "AI Cart Optimization with Smart Suggestions", 
      "Sparky AI Chat Assistant",
      "Mario-style Animated Avatar with bounce motion"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    github: "https://github.com/AryanJaiswal763/smartshop-genie-virtual-retail.git",
    featured: true
  },
  {
    title: "CureAI",
    description: "Cutting-edge healthcare web application integrating AI-driven posture detection and patient-doctor medical record management.",
    features: [
      "Patient & Doctor Panel",
      "AI-Powered Exercise Monitoring",
      "Medical Reports & Summaries",
      "Nutrition & Precaution Section"
    ],
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB", "Node.js", "Express.js", "OpenCV", "MediaPipe", "Python"],
    github: "https://github.com/Amuhacks-CureAI/Cure-AI.git",
    featured: true
  },
  {
    title: "Web Development Projects",
    description: "Collection of diverse web development projects showcasing various technologies and concepts.",
    features: [
      "CricScore - Sports scoring application",
      "User Management System",
      "Tic Tac Toe Game",
      "Multiple UI/UX implementations"
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Various APIs"],
    github: "https://github.com/AryanJaiswal763/Web-Dev-Projects.git",
    featured: false
  }
]

const dsa = [
  {
    title: "Data Structures & Algorithms",
    description: "Comprehensive DSA implementations and solutions in multiple programming languages.",
    github: "https://github.com/AryanJaiswal763/DSA.git",
    tech: ["C++", "Java", "Python"]
  },
  {
    title: "LeetCode Solutions",
    description: "My journey through LeetCode problems with optimized solutions and explanations.",
    github: "https://github.com/AryanJaiswal763/Leetcode.git", 
    tech: ["C++", "Java", "Python"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="cyber-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and AI/ML integration
          </p>
        </div>

        {/* Major Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl cyber-glow">{project.title}</CardTitle>
                  <Star className="h-5 w-5 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs neon-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="neon-border group" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:text-primary" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Minor Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other <span className="cyber-glow">Projects</span>
          </h3>
          <div className="grid gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs neon-border">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="neon-border group" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:text-primary" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* DSA Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            DSA <span className="cyber-glow">Journey</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {dsa.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                    <Button variant="outline" size="sm" className="neon-border group" asChild>
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:text-primary" />
                        View
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs neon-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}