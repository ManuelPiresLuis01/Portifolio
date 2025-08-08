'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h2>
          
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
