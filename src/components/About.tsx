import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Target, Brain } from "lucide-react"
import { ErrorBoundary } from "./ErrorBoundary"
import { SafeIcon } from "./SafeIcon"

export function About() {
  const achievements = [
    { icon: GraduationCap, title: "CGPA 8.90", desc: "BTech AI/ML" },
    { icon: Award, title: "HSC 75%", desc: "12th Grade" },
    { icon: Target, title: "SSC 89.80%", desc: "10th Grade" },
    { icon: Brain, title: "2 Projects", desc: "Major Projects" }
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
                I am a passionate and driven engineering student with a strong foundation in software development, artificial intelligence, and full-stack web technologies. I enjoy building impactful solutions, from AI-powered medical platforms to smart hardware systems, and have demonstrated my abilities through national-level hackathons and real-world projects. With a blend of technical expertise, creative problem-solving, and a continuous learning mindset, I aim to contribute meaningfully to innovative teams and create technology that improves lives.
                </p>
                {/* <p className="text-muted-foreground mb-6 leading-relaxed">
                  My expertise spans across full-stack development, machine learning, and cloud 
                  technologies. I'm particularly interested in building AI-powered applications 
                  that can make a meaningful impact in healthcare, e-commerce, and user experience.
                </p> */}
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="neon-border">Problem Solver</Badge>
                  <Badge variant="outline" className="neon-border">Team Leader</Badge>
                  <Badge variant="outline" className="neon-border">Quick Learner</Badge>
                  <Badge variant="outline" className="neon-border">Positive Attitude</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm neon-border p-6 text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <SafeIcon 
                    icon={achievement.icon} 
                    className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" 
                  />
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
                    <p className="text-sm text-muted-foreground">CGPA: 8.90</p>
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
                    <p className="text-muted-foreground">Bhalerao Junior Science College</p>
                    <p className="text-sm text-muted-foreground">Percentage: 75%</p>
                  </div>
                  <Badge variant="outline" className="neon-border mt-2 md:mt-0">2020</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm neon-border p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-primary">Secondary School Certificate (SSC)</h4>
                    <p className="text-muted-foreground">Nagar Parishad HighSchool Saoner</p>
                    <p className="text-sm text-muted-foreground">Percentage: 89.80%</p>
                  </div>
                  <Badge variant="outline" className="neon-border mt-2 md:mt-0">2018</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}