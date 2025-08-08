'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'InLib – Biblioteca Digital',
      description: 'Digital library platform built with vanilla JavaScript',
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://manuelpiresluis01.github.io/InLib-Biblioteca-Digital/'
    },
    {
      title: 'SportEcommerce – Loja Virtual',
      description: 'E-commerce platform for sports equipment',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      url: 'https://manuelpiresluis01.github.io/site-do-curso-de-bootstrap-da-udemy/'
    },
    {
      title: 'Mensagens',
      description: 'Real-time messaging application',
      tech: ['React.js', 'Node.js', 'TypeScript', 'MySQL'],
      url: 'https://envie-mensagens.onrender.com/'
    },
    {
      title: 'Portfolio React + TypeScript',
      description: 'Personal portfolio built with React and TypeScript',
      tech: ['React.js', 'TypeScript', 'CSS'],
      url: 'https://portifolio-gx4d.onrender.com/'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('projectsTitle')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('viewProject')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
