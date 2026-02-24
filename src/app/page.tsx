'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // mark component as mounted (previous logic)
    setMounted(true)

    // show loading screen briefly then redirect
    const timer = setTimeout(() => {
      window.location.href = 'https://manuelpiresluis.vercel.app/'
    }, 1500) // adjust delay if desired

    return () => clearTimeout(timer)
  }, [])

  // while waiting for the redirect just render a full‑screen loader
  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        {/* simple spinning circle using Tailwind animate-spin */}
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // fallback content (very unlikely to be seen)
  return null
}
