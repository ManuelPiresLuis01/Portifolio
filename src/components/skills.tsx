"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/contexts/language-context";

export default function Skills() {
  const { t } = useLanguage();
  const technicalSkills = [
    {
      category: "Linguagens",
      skills: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML",
        "CSS",
        "C",
        "Java",
        "PHP",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "Shadcn/ui",
        "Framer Motion",
        "React Icons",
        "styled-components",
        "Tailwind CSS",
        "Bootstrap",
        "CSS Modules",
        "Design responsivo",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Mongoose",
        "Zod",
        "Desenvolvimento de APIs restful",
        "Autenticação e Autorização (JWT, OAuth)",
        "Middleware",
        "Boas práticas de desenvolvimento",
        "Padrões de projeto (MVC, Singleton)",
        "Documentação de APIs (Swagger, reademe)",
      ],
    },
    {
      category: "Bancos de Dados",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Testes e Qualidade",
      skills: [
        "Testes manuais",
        "Testes automatizados",
        "Processos de QA",
        "Vitest",
        "Playwright",
        "React Testing Library",
        "Supertest",
        "Fundamentos de testes de software",
        "Documentação de testes",
        "Testes funcionais e de integração",
      ],
    },
    {
      category: "Controle de Versão",
      skills: ["Git", "GitHub", "GitLab"],
    },
    {
      category: "Cloud e Deploy",
      skills: [
        "AWS",
        "Render",
        "Vercel",
        "PM2",
        "Nodemon",
        "Deploy com Vercel, Render, GitHub Pages e AWS",
      ],
    },
    {
      category: "Gerenciadores de Pacotes",
      skills: ["NPM", "Yarn", "NPX"],
    },
    {
      category: "Design e Gestão",
      skills: ["Canvas", "Jira", "Confluence", "Trello"],
    },
    {
      category: "Ferramentas de Desenvolvimento",
      skills: [
        "VSCode",
        "Postman",
        "Insomnia",
        "Xamp",
        "Wamp",
        "Workbench",
      ],
    },
    {
      category: "Metodologias Ágeis",
      skills: ["Scrum", "Kanban"],
    },
    {
      category: "Metodologias Ágeis",
      skills: ["Scrum", "Kanban"],
    },
  ];

  const softSkills = [
    "teamwork",
    "leadership",
    "creativity",
    "problemSolving",
    "communication",
    "continuousLearning",
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t("skillsTitle")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              {t("technicalSkills")}
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-800"
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-300">
                    {t(skillGroup.category)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-black text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              {t("softSkills")}
            </h3>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 h-fit">
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-black rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-gray-300">{t(skill)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
