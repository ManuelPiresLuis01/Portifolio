'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/src/components/header'
import Hero from '@/src/components/hero'
import About from '@/src/components/about'
import Skills from '@/src/components/skills'
import Projects from '@/src/components/projects'
import Certifications from '@/src/components/certifications'
import Experience from '@/src/components/experience'
import Awards from '@/src/components/awards'
import Contact from '@/src/components/contact'
import { LanguageProvider } from '@/src/contexts/language-context'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-roboto relative">
        
        <motion.div
          className="fixed pointer-events-none z-50 rounded-full"
          animate={{ x: coords.x - 75, y: coords.y - 75 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            width: 100,
            height: 100,
            background:
              'radial-gradient(circle, #ffffff66, transparent 70%)',
          }}
        />

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
