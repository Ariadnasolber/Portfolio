"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import AnimateOnScroll from "./animate-on-scroll"

export default function CurrentlyWorking() {
  return (
    <section id="currently-working" className="section-container bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="section-title text-center">Actualmente trabajando en</h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="rounded-2xl overflow-hidden apple-card bg-white dark:bg-zinc-900">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Proyecto actual"
                width={1200}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold">Proyecto Secreto</h3>
                  <p className="text-zinc-200">Lanzamiento próximamente</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Proyecto Innovador</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Estoy trabajando en un nuevo proyecto que combina las últimas tecnologías frontend para crear
                    experiencias de usuario excepcionales.
                  </p>
                </div>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Más información"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4">
                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
                  <div className="bg-black dark:bg-white h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span>Progreso</span>
                  <span>70%</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800">
                  Next.js 14
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800">
                  Framer Motion
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

