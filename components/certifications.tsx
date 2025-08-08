'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'

export default function Certifications() {
  const { t } = useLanguage()

  const certifications = [
    { name: 'Jira Certification', year: '2025' },
    { name: 'Scrum Certification', year: '2025' },
    { name: 'Responsive Website: HTML5 and CSS3', year: '2023' },
    { name: 'Programming Foundations: Software Testing/QA', year: '2025' },
    { name: 'Understanding Manual Testing', year: '2025' },
    { name: 'Certificação em React library code', year: '2024' },
    { name: 'Certificado de Inglês', year: '2021 e 2024' },
    { name: 'Certificado de Pedagogia e Didática', year: '2022-2023' },
    { name: 'Certificado de Tecnologia de um Bootcamp', year: '2023' }
  ]

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('certificationsTitle')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-white" />
                    <span className="text-sm text-gray-400">{cert.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-white text-sm leading-relaxed">
                    {cert.name}
                  </CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
