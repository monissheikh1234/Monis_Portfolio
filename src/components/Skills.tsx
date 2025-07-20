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
      { name: "Bootstrap" },
      { name: "Angular" }
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
    title: "Data Structures and Algorithms",
    provider: "Coursera",
    description: "Arrays, Linked Lists, Trees, Graphs, Searching & Sorting, Recursion, Dynamic Programming",
    link: "https://www.coursera.org/account/accomplishments/certificate/1VWI7QELKNDO"
  },
  {
    title: "Full Stack Developer Bootcamp",
    provider: "GeeksforGeeks", 
    description: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, Git",
    link: "https://media.geeksforgeeks.org/courses/certificates/1c5f6a29b85345fb31f64731de008efe.pdf"
  },
  {
    title: "Architecting Solutions on AWS",
    provider: "Coursera",
    description: "VPC, EC2, S3, IAM, RDS, Load Balancing, Auto Scaling, CloudFront, Route 53",
    link: "https://www.coursera.org/account/accomplishments/certificate/LIFYYO0NS8AB"
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
        </div>
      </div>
    </section>
  )
}