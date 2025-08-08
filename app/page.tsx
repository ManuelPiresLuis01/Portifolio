'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Certifications from '@/components/certifications'
import Experience from '@/components/experience'
import Awards from '@/components/awards'
import Contact from '@/components/contact'
import { LanguageProvider } from '@/contexts/language-context'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-roboto">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Awards />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}
