"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimateOnScroll from "./animate-on-scroll"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
    alert("Mensaje enviado con éxito!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="section-title text-center">Contacto</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">¡Hablemos!</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones y/o
                oportunidades laborales.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a
                    href="mailto:arisoler97@gmail.com"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    arisoler97@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <Github className="h-5 w-5" />
                  </div>
                  <a
                    href="https://github.com/Ariadnasolber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    https://github.com/Ariadnasolber
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <a
                    href="https://linkedin.com/in/ariadnasolber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    linkedin.com/in/ariadnasolber
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="apple-card bg-white dark:bg-zinc-900 p-6 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="rounded-lg border-zinc-300 dark:border-zinc-700 focus:ring-black dark:focus:ring-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="rounded-lg border-zinc-300 dark:border-zinc-700 focus:ring-black dark:focus:ring-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje..."
                    required
                    className="rounded-lg border-zinc-300 dark:border-zinc-700 focus:ring-black dark:focus:ring-white min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="apple-button w-full flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

