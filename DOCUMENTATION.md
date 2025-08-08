# Manuel Portfolio - Developer Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Folder Structure](#folder-structure)
4. [Key Technologies](#key-technologies)
5. [Translation System](#translation-system)
6. [Component Structure](#component-structure)
7. [Styling Guidelines](#styling-guidelines)
8. [Adding New Features](#adding-new-features)
9. [Refactoring Guidelines](#refactoring-guidelines)
10. [Deployment](#deployment)

## 🎯 Project Overview

This is a bilingual (Portuguese/English) portfolio website for Manuel Pires Luís, built with Next.js 14, TypeScript, and Tailwind CSS. The project follows modern React patterns with a focus on performance, accessibility, and maintainability.

### Key Features
- **Bilingual Support**: Complete Portuguese/English translation system
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for enhanced UX
- **Dark Theme**: Professional black and white color scheme
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Semantic HTML and proper meta tags

## 🏗️ Architecture

### Design Patterns
- **Component-Based Architecture**: Modular, reusable components
- **Context Pattern**: Language management with React Context
- **Server Actions**: Form handling with Next.js Server Actions
- **Custom Hooks**: Reusable logic extraction
- **Atomic Design**: Components organized by complexity level

### Data Flow
\`\`\`
User Interaction → Component → Context (Language) → Dictionary → Rendered Content
Form Submission → Client Component → Server Action → Response → UI Update
\`\`\`

## 📁 Folder Structure

\`\`\`
manuel-portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main page component
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (auto-generated)
│   ├── about.tsx                # About section component
│   ├── awards.tsx               # Awards section component
│   ├── certifications.tsx       # Certifications section component
│   ├── contact.tsx              # Contact section component
│   ├── contact-form.tsx         # Contact form component
│   ├── experience.tsx           # Experience section component
│   ├── header.tsx               # Navigation header component
│   ├── hero.tsx                 # Hero/landing section component
│   ├── projects.tsx             # Projects showcase component
│   └── skills.tsx               # Skills section component
├── contexts/                     # React contexts
│   └── language-context.tsx     # Language management context
├── actions/                      # Server actions
│   └── contact-action.ts        # Contact form server action
├── hooks/                        # Custom hooks (if needed)
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities (cn function)
├── public/                      # Static assets
└── types/                       # TypeScript type definitions (if needed)
\`\`\`

## 🔧 Key Technologies

### Core Dependencies
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **shadcn/ui**: Pre-built UI components
- **Lucide React**: Icon library

### Development Dependencies
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🌐 Translation System

### Dictionary Structure
The translation system uses a centralized dictionary in `contexts/language-context.tsx`:

\`\`\`typescript
const dictionary = {
  pt: {
    // Portuguese translations
    home: 'Início',
    about: 'Sobre Mim',
    // ... more translations
  },
  en: {
    // English translations
    home: 'Home',
    about: 'About Me',
    // ... more translations
  }
}
\`\`\`

### Usage in Components
\`\`\`typescript
const { t, language, setLanguage } = useLanguage()

// Use translation
<h1>{t('aboutTitle')}</h1>

// Change language
setLanguage('pt') // or 'en'
\`\`\`

### Adding New Translations
1. Add the key-value pair to both `pt` and `en` objects in the dictionary
2. Use the `t()` function in your component
3. Ensure the key is descriptive and follows the existing naming convention

## 🧩 Component Structure

### Section Components
Each major section follows this pattern:
\`\`\`typescript
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

export default function SectionName() {
  const { t } = useLanguage()

  return (
    <section id="section-name" className="py-20 bg-[color]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section content */}
        </motion.div>
      </div>
    </section>
  )
}
\`\`\`

### Component Guidelines
- **Use TypeScript**: Always type your props and state
- **Client Components**: Use `'use client'` for interactive components
- **Animations**: Use Framer Motion for smooth animations
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Include proper ARIA labels and semantic HTML

## 🎨 Styling Guidelines

### Color Scheme
- **Background**: `bg-black`, `bg-gray-900`
- **Text**: `text-white`, `text-gray-300`, `text-gray-400`
- **Borders**: `border-gray-800`, `border-gray-600`
- **Accents**: `bg-white text-black` for buttons

### Responsive Breakpoints
\`\`\`css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
\`\`\`

### Animation Patterns
\`\`\`typescript
// Standard fade-in from bottom
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}

// Staggered animations
transition={{ duration: 0.8, delay: index * 0.2 }}
\`\`\`

## ➕ Adding New Features

### Adding a New Section
1. Create a new component in `components/[section-name].tsx`
2. Follow the section component pattern
3. Add translations to the dictionary
4. Import and add to `app/page.tsx`
5. Add navigation link to `components/header.tsx`

### Adding New Form Fields
1. Update the Zod schema in the form component
2. Add the field to the form JSX
3. Add translations for labels and placeholders
4. Update the server action to handle the new field

### Adding New Languages
1. Add the new language to the `Language` type
2. Add the complete translation object to the dictionary
3. Update the language toggle button
4. Test all sections with the new language

## 🔄 Refactoring Guidelines

### Code Organization
- **Single Responsibility**: Each component should have one clear purpose
- **DRY Principle**: Extract reusable logic into custom hooks or utilities
- **Consistent Naming**: Use descriptive names for components and functions
- **Type Safety**: Always use TypeScript types and interfaces

### Performance Optimization
- **Lazy Loading**: Use dynamic imports for heavy components
- **Memoization**: Use `useMemo` and `useCallback` for expensive operations
- **Image Optimization**: Use Next.js Image component for images
- **Bundle Analysis**: Regularly check bundle size

### Best Practices
1. **Keep components small**: Max 200 lines per component
2. **Extract custom hooks**: For complex state logic
3. **Use proper TypeScript**: Avoid `any` types
4. **Test responsiveness**: Check all breakpoints
5. **Validate forms**: Always validate on both client and server
6. **Handle loading states**: Show loading indicators for async operations

### Common Refactoring Tasks

#### Extracting Reusable Components
\`\`\`typescript
// Before: Repeated card structure
<div className="bg-black border-gray-800 p-6">
  <h3>{title}</h3>
  <p>{description}</p>
</div>

// After: Reusable Card component
<InfoCard title={title} description={description} />
\`\`\`

#### Moving to Custom Hooks
\`\`\`typescript
// Before: Component with complex state
const [data, setData] = useState()
const [loading, setLoading] = useState(false)
// ... complex logic

// After: Custom hook
const { data, loading, error } = useDataFetching()
\`\`\`

## 🚀 Deployment

### Environment Variables
Create a `.env.local` file for local development:
\`\`\`env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### Build Process
\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### Deployment Platforms
- **Vercel**: Recommended (automatic deployments)
- **Netlify**: Alternative with good Next.js support
- **Railway**: For full-stack applications

### Pre-deployment Checklist
- [ ] All translations are complete
- [ ] Forms are working correctly
- [ ] Responsive design is tested
- [ ] SEO metadata is configured
- [ ] Performance is optimized
- [ ] Accessibility is validated

## 🐛 Troubleshooting

### Common Issues
1. **Hydration Errors**: Ensure client/server rendering consistency
2. **Translation Missing**: Check dictionary keys match usage
3. **Animation Issues**: Verify Framer Motion setup
4. **Form Validation**: Check Zod schema matches form fields
5. **Styling Issues**: Verify Tailwind classes are correct

### Debug Tools
- **React DevTools**: Component inspection
- **Next.js DevTools**: Performance monitoring
- **Browser DevTools**: Network and console debugging
- **Lighthouse**: Performance and accessibility auditing

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Maintainer**: Development Team
