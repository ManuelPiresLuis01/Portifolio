'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      company: 'MAMBOO Tecnologia',
      position: 'Front-End Developer and QA Analyst',
      period: '2025',
      description: 'Frontend development and quality assurance testing'
    },
    {
      company: 'TÁBOM Consultoria e Investimento',
      position: 'Programming Assistant',
      period: '2024',
      description: 'Programming support and development assistance'
    },
    {
      company: 'Centro de Investigação da Universidade de Luanda',
      position: 'Full-Stack Developer',
      period: `2023–${t('present')}`,
      description: 'Full-stack web development and research projects'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('experienceTitle')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-6 h-6 text-white" />
                        <div>
                          <CardTitle className="text-white">{exp.position}</CardTitle>
                          <CardDescription className="text-gray-400 font-semibold">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
