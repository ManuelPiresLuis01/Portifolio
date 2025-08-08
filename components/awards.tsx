'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'

export default function Awards() {
  const { t } = useLanguage()

  const awards = [
    {
      titleKey: 'academicImpactAward',
      organizationKey: 'universidadeLuanda',
      descriptionKey: 'academicImpactDescription'
    },
    {
      titleKey: 'programmingChampionship',
      organizationKey: 'aocpcOrganization',
      descriptionKey: 'programmingChampionshipDescription'
    }
  ]

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('awardsTitle')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                    </div>
                    <CardTitle className="text-white text-lg leading-relaxed">
                      {t(award.titleKey)}
                    </CardTitle>
                    <p className="text-gray-400 font-semibold">{t(award.organizationKey)}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{t(award.descriptionKey)}</p>
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
