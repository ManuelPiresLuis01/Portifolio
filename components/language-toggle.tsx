'use client'

import { motion } from 'framer-motion'
import { Languages, Globe2 } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface LanguageToggleProps {
  variant?: 'default' | 'compact' | 'icon-only'
  className?: string
}

export default function LanguageToggle({ variant = 'default', className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  if (variant === 'icon-only') {
    return (
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 rounded-full transition-all duration-300 group ${className}`}
      >
        <Globe2 className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
      </motion.button>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center space-x-1 px-2 py-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 rounded-md transition-all duration-300 ${className}`}
      >
        <Languages className="w-4 h-4 text-gray-300" />
        <span className="text-sm font-medium text-white">
          {language.toUpperCase()}
        </span>
      </motion.button>
    )
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center space-x-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300 group ${className}`}
    >
      <Languages className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
      <div className="flex items-center space-x-1">
        <span className={`text-sm font-medium transition-colors ${
          language === 'en' ? 'text-white' : 'text-gray-400'
        }`}>
          EN
        </span>
        <span className="text-gray-500">|</span>
        <span className={`text-sm font-medium transition-colors ${
          language === 'pt' ? 'text-white' : 'text-gray-400'
        }`}>
          PT
        </span>
      </div>
      
      {/* Active Language Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
        initial={false}
        animate={{
          scaleX: 1,
          originX: language === 'en' ? 0.3 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
