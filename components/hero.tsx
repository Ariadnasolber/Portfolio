"use client"
import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimateOnScroll from "./animate-on-scroll"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hola, soy{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                Ariadna
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300 font-medium">Frontend Developer</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
              Bienvenido a mi portfolio.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="apple-button flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar CV
              </Button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                Ver proyectos
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-700 dark:from-zinc-300 dark:to-zinc-900 rounded-3xl -rotate-6 scale-95 opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 rounded-3xl rotate-3 scale-95 opacity-70"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 apple-card">
              <Image
                src="profilepic.png"
                alt="Tu Nombre"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

