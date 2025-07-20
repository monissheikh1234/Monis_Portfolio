import { useEffect, useState } from "react"

const codeSnippets = [
  "const portfolio = new Developer('Aryan Jaiswal');",
  "function innovate() { return creativity + code; }",
  "class AIMLStudent extends Engineer {",
  "  constructor() { super('problemSolver'); }",
  "import React from 'react';",
  "const smartShoppe = await AI.optimize(cart);",
  "if (passion === coding) { return success; }",
  "async function buildFuture() {",
  "const skills = [...frontend, ...backend, ...ai];",
  "export default AryanJaiswal;",
  "npm install future-tech",
  "git commit -m 'Added innovation'",
  "docker run --name aryan-portfolio",
  "SELECT * FROM achievements WHERE student='Aryan';",
  "machine_learning.predict(career_success);",
  "console.log('Building tomorrow today');",
]

export function CodeBackground() {
  const [lines, setLines] = useState<Array<{ id: number; text: string; x: number; delay: number }>>([])

  useEffect(() => {
    const generateLine = () => {
      const id = Date.now() + Math.random()
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      const x = Math.random() * 100
      const delay = Math.random() * 2

      return { id, text, x, delay }
    }

    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev, generateLine()].slice(-8) // Keep only last 8 lines
        return newLines
      })
    }, 3000)

    // Initialize with some lines
    setLines(Array.from({ length: 5 }, generateLine))

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      <div className="absolute inset-0 cyber-grid" />
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute text-xs font-mono text-primary animate-pulse"
          style={{
            left: `${line.x}%`,
            top: `-50px`,
            animation: `matrix-rain 15s linear infinite`,
            animationDelay: `${line.delay}s`,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  )
}