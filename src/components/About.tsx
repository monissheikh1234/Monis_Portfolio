import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Target, Brain } from "lucide-react"

export function About() {
  const achievements = [
    { icon: GraduationCap, title: "CGPA 9.02", desc: "BTech AI/ML" },
    { icon: Award, title: "HSC 84.17%", desc: "12th Grade" },
    { icon: Target, title: "SSC 92.40%", desc: "10th Grade" },
    { icon: Brain, title: "3+ Projects", desc: "Major Projects" }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="cyber-glow">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI/ML and full-stack development with a track record of building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm neon-border p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gradient-cyber">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a final year student at Shri Ramdeobaba College of Engineering and Management, 
                  pursuing BTech specializing in AI/ML. With a strong foundation in both theoretical 
                  concepts and practical implementation, I've developed a passion for creating 
                  innovative solutions that bridge the gap between technology and real-world problems.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My expertise spans across full-stack development, machine learning, and cloud 
                  technologies. I'm particularly interested in building AI-powered applications 
                  that can make a meaningful impact in healthcare, e-commerce, and user experience.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="neon-border">Problem Solver</Badge>
                  <Badge variant="outline" className="neon-border">Team Leader</Badge>
                  <Badge variant="outline" className="neon-border">Quick Learner</Badge>
                  <Badge variant="outline" className="neon-border">Public Speaker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border p-6 text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                  <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="cyber-glow">Education</span>
          </h3>
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm neon-border p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-primary">B.Tech - Computer Science and Engineering (AI/ML)</h4>
                    <p className="text-muted-foreground">Shri Ramdeobaba College of Engineering and Management</p>
                    <p className="text-sm text-muted-foreground">CGPA: 9.02</p>
                  </div>
                  <Badge variant="outline" className="neon-border mt-2 md:mt-0">2022 - 2026</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm neon-border p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-primary">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-muted-foreground">Shri Mohanlal Rughwani Sindhi Hindi High School and Jr College</p>
                    <p className="text-sm text-muted-foreground">Percentage: 84.17%</p>
                  </div>
                  <Badge variant="outline" className="neon-border mt-2 md:mt-0">2022</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm neon-border p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-primary">Secondary School Certificate (SSC)</h4>
                    <p className="text-muted-foreground">St. John's High School</p>
                    <p className="text-sm text-muted-foreground">Percentage: 92.40%</p>
                  </div>
                  <Badge variant="outline" className="neon-border mt-2 md:mt-0">2020</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}