"use client"

import type React from "react"

import { Code, Layers, Palette, Smartphone, Zap, Database, GitBranch, Terminal } from "lucide-react"
import AnimateOnScroll from "./animate-on-scroll"

type Skill = {
  name: string
  icon: React.ReactNode
  items: string[]
}

export default function Skills() {
  const skills: Skill[] = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6" />,
      items: ["HTML5", "JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
      name: "UI/UX",
      icon: <Palette className="h-6 w-6" />,
      items: ["Figma", "Canvas", "Shadcn UI", "Hero UI"],
    },
    {
      name: "CSS",
      icon: <Layers className="h-6 w-6" />,
      items: ["Tailwind CSS", "SASS/SCSS", "Bootstrap"],
    },
    {
      name: "Backend",
      icon: <Database className="h-6 w-6" />,
      items: ["Node.js", "Express", "RESTful APIs", "SpringBoot", "Laravel"],
    },
    {
      name: "Control Versiones",
      icon: <GitBranch className="h-6 w-6" />,
      items: ["Git", "GitHub", "Bitbucket"],
    },
    {
      name: "Herramientas",
      icon: <Terminal className="h-6 w-6" />,
      items: ["VS Code", "npm", "bun", "pnpm", "Vite", "NetBeans", "Postman"],
    },
    {
      name: "Idiomas",
      icon: <Smartphone className="h-6 w-6" />,
      items: ["Castellano", "Catalán", "Inglés"],
    },
    {
      name: "Titulaciones",
      icon: <Zap className="h-6 w-6" />,
      items: ["Web Vitals", "Lazy Loading", "Code Splitting", "Bundle Optimization", "Caching"],
    },
  ]

  return (
    <section id="skills" className="section-container">
      <AnimateOnScroll>
        <h2 className="section-title text-center">Habilidades</h2>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} delay={index * 100}>
            <div className="p-6 rounded-2xl apple-card bg-zinc-50 dark:bg-zinc-900 h-full border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800">{skill.icon}</div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}

