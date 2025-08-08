'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const dictionary = {
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre Mim',
    skills: 'Competências',
    projects: 'Projetos',
    certifications: 'Certificações',
    experience: 'Experiência',
    awards: 'Prêmios',
    contact: 'Contato',
    
    // Hero Section
    welcome: 'Bem-vindo ao meu portfólio',
    headline: 'Desenvolvedor Full-Stack & Analista de QA',
    heroDescription: 'Apaixonado por construir aplicações web escaláveis e responsivas, entregando software de alta qualidade.',
    
    // About Section
    aboutTitle: 'Sobre Mim',
    aboutDescription: 'Manuel Pires Luís é um Desenvolvedor Full-Stack e Analista de QA com experiência em JavaScript, TypeScript, React, Node.js, Express, MongoDB, MySQL, HTML, CSS. Especializado em metodologias Ágeis e Scrum. Apaixonado por construir aplicações web escaláveis e responsivas, entregando software de alta qualidade. Habilidades interpessoais: Trabalho em equipe, liderança, pensamento criativo, resolução de problemas. Fluente em Português (nativo) e Inglês (fluente).',
    
    // Skills Section
    skillsTitle: 'Competências',
    technicalSkills: 'Competências Técnicas',
    softSkills: 'Competências Interpessoais',
    programmingLanguages: 'Linguagens de Programação',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Bases de Dados',
    testingQA: 'Testes & QA',
    versionControl: 'Controle de Versão',
    toolsOthers: 'Ferramentas & Outros',
    additionalSkills: 'Competências Adicionais',
    teamwork: 'Trabalho em Equipe',
    leadership: 'Liderança',
    creativity: 'Criatividade',
    problemSolving: 'Resolução de Problemas',
    communication: 'Comunicação',
    continuousLearning: 'Aprendizagem Contínua',
    
    // Projects Section
    projectsTitle: 'Projetos',
    viewProject: 'Ver Projeto',
    
    // Certifications Section
    certificationsTitle: 'Certificações',
    
    // Experience Section
    experienceTitle: 'Experiência',
    present: 'presente',
    
    // Awards Section
    awardsTitle: 'Prêmios',
    academicImpactAward: 'Prêmio de Impacto Acadêmico',
    universidadeLuanda: 'Universidade de Luanda',
    academicImpactDescription: 'Reconhecimento pelo desempenho acadêmico excepcional e contribuição',
    programmingChampionship: '14º lugar – Campeonato Nacional de Programação AOCPC',
    aocpcOrganization: 'Comitê Olímpico de Angola para Concursos de Programação',
    programmingChampionshipDescription: 'Classificação nacional no campeonato de programação competitiva',
    
    // Contact Section
    contactTitle: 'Contato',
    contactDescription: 'Vamos trabalhar juntos! Entre em contato comigo.',
    email: 'Email',
    phone: 'Telefone',
    
    // Contact Form
    sendMessage: 'Enviar Mensagem',
    name: 'Nome',
    namePlaceholder: 'Seu nome completo',
    emailPlaceholder: 'seu.email@exemplo.com',
    subject: 'Assunto',
    subjectPlaceholder: 'Assunto da sua mensagem',
    message: 'Mensagem',
    messagePlaceholder: 'Escreva sua mensagem aqui...',
    sending: 'Enviando...',
    messageSuccess: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    messageError: 'Erro ao enviar mensagem. Tente novamente.',
    
    // Footer
    allRightsReserved: 'Todos os direitos reservados.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    certifications: 'Certifications',
    experience: 'Experience',
    awards: 'Awards',
    contact: 'Contact',
    
    // Hero Section
    welcome: 'Welcome to my portfolio',
    headline: 'Full-Stack Developer & QA Analyst',
    heroDescription: 'Passionate about building scalable, responsive web applications and delivering high-quality software.',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'Manuel Pires Luís is a Full-Stack Developer and QA Analyst with experience in JavaScript, TypeScript, React, Node.js, Express, MongoDB, MySQL, HTML, CSS. Skilled in Agile and Scrum methodologies. Passionate about building scalable, responsive web applications and delivering high-quality software. Soft skills: Team player, leadership, creative thinking, problem solving. Fluent in Portuguese (native) and English (fluent).',
    
    // Skills Section
    skillsTitle: 'Skills',
    technicalSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    programmingLanguages: 'Programming Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    testingQA: 'Testing & QA',
    versionControl: 'Version Control',
    toolsOthers: 'Tools & Others',
    additionalSkills: 'Additional Skills',
    teamwork: 'Teamwork',
    leadership: 'Leadership',
    creativity: 'Creativity',
    problemSolving: 'Problem Solving',
    communication: 'Communication',
    continuousLearning: 'Continuous Learning',
    
    // Projects Section
    projectsTitle: 'Projects',
    viewProject: 'View Project',
    
    // Certifications Section
    certificationsTitle: 'Certifications',
    
    // Experience Section
    experienceTitle: 'Experience',
    present: 'present',
    
    // Awards Section
    awardsTitle: 'Awards',
    academicImpactAward: 'Academic Impact Award',
    universidadeLuanda: 'Universidade de Luanda',
    academicImpactDescription: 'Recognition for outstanding academic performance and contribution',
    programmingChampionship: '14th place – AOCPC National Programming Championship',
    aocpcOrganization: 'Angola Olympic Committee for Programming Contests',
    programmingChampionshipDescription: 'National ranking in competitive programming championship',
    
    // Contact Section
    contactTitle: 'Contact',
    contactDescription: 'Let\'s work together! Get in touch with me.',
    email: 'Email',
    phone: 'Phone',
    
    // Contact Form
    sendMessage: 'Send Message',
    name: 'Name',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'your.email@example.com',
    subject: 'Subject',
    subjectPlaceholder: 'Subject of your message',
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    sending: 'Sending...',
    messageSuccess: 'Message sent successfully! I\'ll get back to you soon.',
    messageError: 'Error sending message. Please try again.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return dictionary[language][key as keyof typeof dictionary['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
