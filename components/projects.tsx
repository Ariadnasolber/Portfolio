"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import AnimateOnScroll from "./animate-on-scroll"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "NexGG",
      description: "Next.gg es una plataforma web desarrollada con React que ofrece estadísticas detalladas y actualizadas sobre League of Legends, inspirada en sitios como Blitz.gg. El sistema recolecta y presenta información proveniente de la API pública de Riot Games",
      image: "nexgg2.png",
      tags: ["React", "Supabase", "Tailwind4", "RiotAPI", "Express"],
      link: "#",
    },
    {
      id: 2,
      title: "Nike Clone",
      description: "Plataforma web de e-commerce desarrollada con Angular standalone components. Inspirada en la tienda oficial de Nike, simula un entorno de venta de productos deportivos, incorporando funcionalidades clave como gestión de usuarios, formularios y control de stock.",
      image: "nikeclone.png",
      tags: ["TypeScript", "Angular", "Iconify", "Express", "Supabase"],
      link: "#",
    },
    {
      id: 3,
      title: "iTech Podcast",
      description: "Plataforma de reproducción de podcasts inspirada en el diseño y la experiencia de usuario de Apple, desarrollada con Next.js. Su objetivo principal es ofrecer una interfaz moderna, accesible y visualmente atractiva.",
      image: "d-itechpodcast.png",
      tags: ["NextJs", "Tailwind4", "ShadcnUI"],
      link: "#",
    },
    {
      id: 4,
      title: "Pong",
      description: "El clásico Pong Game desarrollado con JavaScript, inspirado en el clásico juego de arcade. El proyecto incluye un sistema de puntuación, controles intuitivos y una interfaz clasica que ofrece una experiencia de juego nostálgica y entretenida.",
      image: "pong.png",
      tags: ["JS", "HTML/CSS", "Tailwind CSS"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="section-container bg-zinc-50 dark:bg-zinc-950 rounded-xl">
      <AnimateOnScroll>
        <h2 className="section-title text-center">Mis proyectos</h2>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 150}>
            <div className="group apple-card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <div className="relative overflow-hidden aspect-video ">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a
                    href={project.link}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}

