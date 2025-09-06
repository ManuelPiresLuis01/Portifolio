import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manuel Pires Luís - Full-Stack Developer & QA Analyst',
  description: 'Portfolio of Manuel Pires Luís, a Full-Stack Developer and QA Analyst from Angola. Experienced in JavaScript, TypeScript, React, Node.js, and more.',
  keywords: 'Full-Stack Developer, QA Analyst, JavaScript, TypeScript, React, Node.js, Angola, Web Development',
  authors: [{ name: 'Manuel Pires Luís' }],
  openGraph: {
    title: 'Manuel Pires Luís - Full-Stack Developer & QA Analyst',
    description: 'Portfolio of Manuel Pires Luís, a Full-Stack Developer and QA Analyst from Angola.',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} font-roboto`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
