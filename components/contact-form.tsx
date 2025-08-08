'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useLanguage } from '@/contexts/language-context'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData()
      
      // Web3Forms configuration
      formData.append('access_key', 'YOUR_ACCESS_KEY_HERE') // Replace with actual key
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('subject', data.subject)
      formData.append('message', data.message)
      formData.append('from_name', 'Portfolio Contact Form')
      formData.append('to_email', 'manuelpiresluis@gmail.com')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <Card className="bg-black border-gray-800">
        <CardHeader>
          <CardTitle className="text-white text-center">
            {t('sendMessage')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                {t('name')} *
              </Label>
              <Input
                id="name"
                {...register('name')}
                className="bg-gray-900 border-gray-700 text-white focus:border-gray-500 focus:ring-gray-500"
                placeholder={t('namePlaceholder')}
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                {t('email')} *
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="bg-gray-900 border-gray-700 text-white focus:border-gray-500 focus:ring-gray-500"
                placeholder={t('emailPlaceholder')}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-300">
                {t('subject')} *
              </Label>
              <Input
                id="subject"
                {...register('subject')}
                className="bg-gray-900 border-gray-700 text-white focus:border-gray-500 focus:ring-gray-500"
                placeholder={t('subjectPlaceholder')}
              />
              {errors.subject && (
                <p className="text-red-400 text-sm">{errors.subject.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">
                {t('message')} *
              </Label>
              <Textarea
                id="message"
                {...register('message')}
                rows={5}
                className="bg-gray-900 border-gray-700 text-white focus:border-gray-500 focus:ring-gray-500 resize-none"
                placeholder={t('messagePlaceholder')}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>{t('sending')}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>{t('sendMessage')}</span>
                </div>
              )}
            </Button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{t('messageSuccess')}</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{t('messageError')}</span>
              </motion.div>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
