"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { useLanguage } from "@/src/contexts/language-context";
import ContactForm from "@/src/components/contact-form";
import { contactInfo } from "../mock/contact";

export default function Contact() {
  const { t } = useLanguage();
  const date = new Date();

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
            {t("contactTitle")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("contactDescription")}
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
                          <CardTitle className="text-white">
                            {contact.label}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto text-gray-300 hover:text-white"
                      >
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
            © {date.getFullYear() } Manuel Pires Luís. {t("allRightsReserved")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
