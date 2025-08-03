import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Cloud,
  Brain,
  Award,
  BookOpen
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C/C++" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" }
    ]
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React.js" },
      { name: "HTML/CSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" }
      
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "WebSockets" }
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "DBMS" }
    ]
  },
  {
    title: "AI/ML & Tools",
    icon: Brain,
    skills: [
      { name: "TensorFlow" },
      { name: "OpenCV" },
      { name: "NLP" },
      { name: "Git/GitHub" },
      { name: "Docker" }
    ]
  },
  {
    title: "Cloud & Others",
    icon: Cloud,
    skills: [
      { name: "AWS Basics" },
      { name: "Computer Networks" },
      { name: "Operating Systems" },
      { name: "OOP" }
    ]
  }
]

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "AWS",
    description: "Fundamentals of AWS Cloud, including core services, security, architecture, pricing, and support.",
    link: ""
  },
  {
    title: "Full Stack Developer Bootcamp",
    provider: "GeeksforGeeks", 
    description: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, Git",
    link: "https://media.geeksforgeeks.org/courses/certificates/7b1798160088ea260873a3f1f30aa364.pdf"
  },
  {
    title: "Zero Trust Cloud Essentials",
    provider: "Coursera",
    description: "VPC, EC2, S3, IAM, RDS, Load Balancing, Auto Scaling, CloudFront, Route 53",
    link: "https://verify.skilljar.com/c/pg6zzk4ohaig"
  }
]

const moreCertifications = [
  {
    title: "C++ Programming Course Online - Complete Beginner to Advanced",
    provider: "GeeksforGeeks",
    description: "Comprehensive C++ programming from basics to advanced topics.",
    link: "https://media.geeksforgeeks.org/courses/certificates/3570bdf35f7b548f0e1988fcb2733f21.pdf"
  },
  {
    title: "Core Computer Science Subject for Interview Preparation",
    provider: "GeeksforGeeks",
    description: "Covers core CS subjects for interview readiness.",
    link: "https://media.geeksforgeeks.org/courses/certificates/9f4fb89ef53dcd71aaba8e521d237f69.pdf"
  },
  {
    title: "AIML Internship",
    provider: "AICTE",
    description: "Internship experience in AI/ML domain.",
    link: "https://drive.google.com/file/d/1BcFuxFDQEC1u9SA0Ha4qBl-2ok9rV2-i/view?usp=sharing"
  }
]

const softSkills = [
  "Problem-solving",
  "Time Management", 
  "Confident",
  "Effective Communication",
  "Consistent",
  "Leadership",
  "Team Collaboration",
  "Public Speaking"
]

export function Skills() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="cyber-glow">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across full-stack development, AI/ML, and cloud technologies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  <span className="cyber-glow">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="neon-border hover:bg-primary/10 transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Soft <span className="cyber-glow">Skills</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm neon-border hover:bg-primary/10 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            <Award className="inline-block mr-2 h-6 w-6 text-primary" />
            <span className="cyber-glow">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{cert.provider}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  {/* AWS certificate: show Coming Soon button */}
                  {cert.title === "AWS Certified Cloud Practitioner" ? (
                    <button
                      className="inline-flex items-center px-4 py-2 rounded neon-border bg-transparent border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors"
                      disabled
                    >
                      Coming Soon
                    </button>
                  ) : cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
            {/* Show more certifications if toggled */}
            {showMore && moreCertifications.map((cert, index) => (
              <Card key={cert.title} className="bg-card/50 backdrop-blur-sm neon-border group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{cert.provider}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-2 rounded neon-border bg-card/70 text-primary font-semibold hover:bg-primary hover:text-background transition-colors"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}