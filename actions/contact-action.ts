'use server'

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000))

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: 'All fields are required'
    }
  }

  // Here you would typically:
  // 1. Send email using a service like Resend, SendGrid, or Nodemailer
  // 2. Save to database
  // 3. Send to a webhook
  // 4. Integrate with a CRM

  console.log('Contact form submission:', {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  })

  // Simulate success/failure (90% success rate)
  const isSuccess = Math.random() > 0.1

  return {
    success: isSuccess,
    message: isSuccess 
      ? 'Message sent successfully!' 
      : 'Failed to send message. Please try again.'
  }
}
