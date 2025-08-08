'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'
import ContactForm from '@/components/contact-form'

export default function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: 'manuelpiresluis@gmail.com',
      href: 'mailto:manuelpiresluis@gmail.com'
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+244 929 004 469',
      href: 'https://wa.me/message/JISLF55NZR2PN1'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ManuelPiresLuis01',
      href: 'https://github.com/ManuelPiresLuis01'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Manuel Pires Luis',
      href: 'https://www.linkedin.com/in/manuel-pires-l-5275852aa/'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('contactTitle')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <contact.icon className="w-8 h-8 text-white" />
                        <div>
                          <CardTitle className="text-white">{contact.label}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto text-gray-300 hover:text-white"
                      >
                        <a href={contact.href} target="_blank" rel="noopener noreferrer">
                          {contact.value}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2025 Manuel Pires Luís. {t('allRightsReserved')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
