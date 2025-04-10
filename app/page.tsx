import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

