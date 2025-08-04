import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"
import { useState } from "react"

const fullStackProjects = [
  {
    title: "CureAI",
    description: "AI-based medical history management platform with diagnostic capabilities and patient-doctor communication.",
    features: [
      "AI powered exercise trainer",
      "Medical history management", 
      "Patient-doctor communication",
      "AI-powered disease prediction"
    ],
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "AI/ML", "OpenCV"],
    github: "https://github.com/monissheikh1234/Cure-AI",
    demo: "https://cure-ai-healthcare.onrender.com",
    featured: true,
    image: "cure-ai.png"
  },
  {
    title: "SyncScriptIO",
    description: "Real-time collaborative code editor for team development with live collaboration features.",
    features: [
      "Real-time code editing",
      "Live collaboration",
      "WebSocket integration",
      "Team development tools"
    ],
    tech: ["JavaScript", "WebSockets", "Real-time", "Collaboration"],
    github: "https://github.com/monissheikh1234/SyncScriptIO",
    demo: "https://syncscriptio-client.onrender.com",
    featured: true,
    image: "sync.jpg" // relative to public folder
  }
]

const aiMlProjects = [
  {
    title: "Gym Posture Detector",
    description: "Real-time posture correction using OpenCV and computer vision for gym exercises.",
    features: [
      "Real-time pose detection",
      "Exercise form correction",
      "Computer vision analysis",
      "Posture feedback system"
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing"],
    github: "https://github.com/monissheikh1234/Gym-Posture-Detection-and-Correction-using-OpenCV",
    demo: "coming-soon", // indicator for coming soon
    featured: true,
    image: "gym.jpg"
  },
  {
    title: "Laptop Price Prediction",
    description: "Machine learning model to predict laptop prices based on specifications and features.",
    features: [
      "Price prediction algorithm",
      "Feature engineering",
      "Model training",
      "Web interface"
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/monissheikh1234/laptop-price-prediction",
    demo: "https://laptoppricepredictionapp-hdsgjt35ra9nrsbnhhnpwk.streamlit.app/",
    featured: false,
    image: "laptop_price.png"
  },
  {
    title: "Face Detection",
    description: "Real-time face detection and recognition using computer vision and deep learning techniques.",
    features: [
      "Real-time face detection",
      "Face recognition",
      "Multiple face tracking",
      "Computer vision analysis",
      "Security and attendance systems"
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning"],
    github: "https://github.com/monissheikh1234/face-mask-detection",
    demo: "coming-soon", // indicator for coming soon
    featured: false,
    image: "face.png"
  },
  {
    title: "AI Powered Chat Application",
    description: "Intelligent chatbot application with natural language processing capabilities.",
    features: [
      "Natural language processing",
      "Conversational AI",
      "Context awareness",
      "Multi-language support"
    ],
    tech: ["Python", "NLP", "TensorFlow", "OpenAI", "FastAPI"],
    github: "https://github.com/monissheikh1234/ai-chat-app",
    demo: "https://ai-powered-chat-application-frontend.onrender.com",
    featured: false,
    image: "ai_chat.jpg"
  }
]

const dsaProjects = [
  {
    title: "Resume Creator C++",
    description: "C++ application for creating and managing professional resumes with dynamic content generation.",
    features: [
      "Dynamic resume generation",
      "Template-based design",
      "Data persistence",
      "Professional formatting"
    ],
    tech: ["C++", "File I/O", "Data Structures", "Object-Oriented Programming"],
    github: "https://github.com/monissheikh1234/CPP_PROJECTS_REPOSITORY/tree/main/Resume_creator_cpp",
    demo: "/", // demo removed
    featured: true
  },
  {
    title: "File Compressor",
    description: "C++ implementation of file compression algorithms for efficient data storage and transfer.",
    features: [
      "File compression algorithms",
      "Data encoding/decoding",
      "Memory optimization",
      "Cross-platform compatibility"
    ],
    tech: ["C++", "Compression Algorithms", "Data Structures", "Binary I/O"],
    github: "https://github.com/monissheikh1234/CPP_PROJECTS_REPOSITORY/tree/main/file_compressor",
    demo: "/", // demo removed
    featured: false
  },
  {
    title: "Supermarket Billing System",
    description: "C++ application for managing supermarket billing operations with inventory tracking.",
    features: [
      "Billing management",
      "Inventory tracking",
      "Receipt generation",
      "Data management"
    ],
    tech: ["C++", "Data Structures", "File Management", "Business Logic"],
    github: "https://github.com/monissheikh1234/CPP_PROJECTS_REPOSITORY/tree/main/supermarket_billing.cpp",
    demo: "/", // demo removed
    featured: false
  }
]

const otherProjects = [
  {
    title: "Weather App",
    description: "Weather application with real-time data and location-based forecasts.",
    features: [
      "Real-time weather data",
      "Location-based forecasts",
      "Responsive design",
      "Weather API integration"
    ],
    tech: ["JavaScript", "Weather API", "Responsive Design", "HTML/CSS"],
    github: "https://github.com/monissheikh1234/Wheather-app",
    demo: "https://monissheikh1234.github.io/Wheather-app/",
    featured: false,
    image: "wheather.png"
  },
  {
    title: "AI Disease Predictor",
    description: "Machine learning application for disease prediction and diagnostic assistance.",
    features: [
      "Disease prediction algorithms",
      "Machine learning models",
      "Diagnostic assistance",
      "Healthcare analytics"
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/monissheikh1234/AI_Disease_predictor",
    demo: "coming-soon", // show coming soon button
    featured: false,
    image: "disease_pred.png"
  }
]

export function Projects() {
  const [previewImg, setPreviewImg] = useState<string | null>(null)

  const renderProjectCard = (project: any, index: number, section?: string) => {
    const isPreviewing = previewImg === project.image;
    return (
      <Card key={index} className={`bg-card/50 backdrop-blur-sm neon-border ${section !== "dsa" ? "relative overflow-hidden" : ""}`}>
        {/* Preview Modal */}
        {isPreviewing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title + " Preview"}
                style={{
                  width: project.title === "Weather App" ? "70vw" : "90vw",
                  maxWidth: project.title === "Weather App" ? "350px" : "500px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px",
                  boxShadow: "0 0 40px #a855f7"
                }}
              />
              <button
                className="mt-4 px-6 py-2 rounded neon-border bg-card/70 text-primary font-semibold hover:bg-primary hover:text-background transition-colors"
                onClick={() => setPreviewImg(null)}
              >
                Close Image
              </button>
            </div>
          </div>
        )}
        {/* Card Content - hide when previewing */}
        {!isPreviewing && (
          <>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl cyber-glow">{project.title}</CardTitle>
                {project.featured && <Star className="h-5 w-5 text-accent" />}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1 h-1 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, idx: number) => (
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
                {/* DSA Projects: Remove Demo button and Preview */}
                {section === "dsa" ? null :
                  <>
                    {/* AI/ML Projects: Show "Coming Soon" for specific projects */}
                    {section === "aiml" && project.demo === "coming-soon" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="neon-border group bg-transparent hover:bg-green-500 hover:text-white border-green-500 text-green-600"
                        disabled
                      >
                        Coming Soon
                      </Button>
                    ) : (
                      // Other projects: Show Demo button if demo is not "/"
                      project.demo && project.demo !== "/" && (
                        <Button variant="outline" size="sm" className="neon-border group" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:text-primary" />
                            Demo
                          </a>
                        </Button>
                      )
                    )}
                    {/* Preview Button */}
                    {project.image && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="neon-border group"
                        onClick={() => setPreviewImg(project.image)}
                      >
                        Preview
                      </Button>
                    )}
                  </>
                }
              </div>
            </CardContent>
          </>
        )}
      </Card>
    )
  }

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

        {/* Full Stack Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="cyber-glow">Full Stack</span> Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {fullStackProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* AI/ML Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="cyber-glow">AI/ML</span> Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {aiMlProjects.map((project, index) => renderProjectCard(project, index, "aiml"))}
          </div>
        </div>

        {/* DSA Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="cyber-glow">DSA</span> Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {dsaProjects.map((project, index) => renderProjectCard(project, index, "dsa"))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Other <span className="cyber-glow">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>
      </div>
    </section>
  )
}