# Manuel Pires Luís — Developer Documentation

A thoughtfully organized developer-facing README for the bilingual portfolio of Manuel Pires Luís. This document describes architecture, conventions, component patterns, translation system, styling, deployment, and practical guidelines to help contributors move fast while keeping the codebase consistent, accessible, and performant.

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)  
2. [Architecture & Patterns](#architecture--patterns)  
3. [Folder Structure](#folder-structure)  
4. [Key Technologies](#key-technologies)  
5. [Translation System](#translation-system)  
6. [Component Structure & Examples](#component-structure--examples)  
7. [Styling Guidelines](#styling-guidelines)  
8. [Adding New Features](#adding-new-features)  
9. [Refactoring Guidelines](#refactoring-guidelines)  
10. [Deployment & Environment](#deployment--environment)  
11. [Troubleshooting & Debugging](#troubleshooting--debugging)  
12. [Additional Resources](#additional-resources)

---

## 🎯 Project Overview

This is a bilingual (Portuguese / English) portfolio website for Manuel Pires Luís, built with modern Next.js (App Router), TypeScript, and Tailwind CSS. The codebase emphasizes:

- Performance
- Accessibility (a11y)
- Maintainability and developer ergonomics
- Clear translation & context patterns

Key user-facing features:
- Bilingual support (pt/en)
- Responsive, mobile-first design
- Smooth motion with Framer Motion
- Dark, professional theme
- Validated contact form handled with Next.js Server Actions
- SEO-friendly markup and metadata

---

## 🏗️ Architecture & Patterns

Design approach:
- Component-based architecture (modular, reusable)
- Atomic design organization (atoms → molecules → organisms → pages)
- React Context for language management
- Server Actions for form handling & server-side logic
- Custom hooks for reusable client logic
- TypeScript-first: explicit types and interfaces

Data & event flow (high-level):
```
User Interaction → Component → Context (Language) → Dictionary → Rendered Content
Form Submission → Client Component → Server Action → Email/API → UI Response
```

---

## 📁 Folder Structure

A clear topology for the app:

```
manuel-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                      # shadcn/ui components (auto-generated)
│   ├── about.tsx
│   ├── awards.tsx
│   ├── certifications.tsx
│   ├── contact.tsx
│   ├── contact-form.tsx
│   ├── experience.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── projects.tsx
│   └── skills.tsx
├── contexts/
│   └── language-context.tsx
├── actions/
│   └── contact-action.ts
├── hooks/
├── lib/
│   └── utils.ts
├── public/
└── types/
```

Guideline: keep components focused and small (aim <200 LOC), extract repeated UI into `components/ui` or small reusable components.

---

## 🔧 Key Technologies

Core:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod (validation)
- shadcn/ui
- Lucide React (icons)

Dev tooling:
- ESLint (linting)
- Prettier (formatting, if used)
- PostCSS + Autoprefixer
- Optional: bundle analysis (webpack / turbpacks tools)

---

## 🌐 Translation System

Centralized dictionary lives in `contexts/language-context.tsx`. Language switching is managed by React Context and a small hook for convenience.

Example dictionary:
```typescript
const dictionary = {
  pt: {
    home: 'Início',
    about: 'Sobre Mim',
    contact: 'Contacto',
    // ...
  },
  en: {
    home: 'Home',
    about: 'About Me',
    contact: 'Contact',
    // ...
  }
}
```

Using the translation hook:
```typescript
const { t, language, setLanguage } = useLanguage()

<h1>{t('aboutTitle')}</h1>

setLanguage('pt') // or 'en'
```

Adding translations:
1. Add the new key to both `pt` and `en` objects.
2. Use a descriptive key that matches existing naming (e.g., `heroCta`, `projectsTitle`).
3. Use `t('keyName')` in components.

Best practice: avoid deeply nested keys for simple strings; prefer namespaced keys for complex sections (e.g., `projects.card.title`).

---

## 🧩 Component Structure & Examples

Pattern for interactive sections (client components + animation):

```typescript
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
```

Guidelines:
- Use `'use client'` for interactive components or when using hooks.
- Prefer composition: smaller components composed into sections.
- Type props and state; avoid implicit `any`.
- Provide ARIA attributes and use semantic HTML (nav, main, header, footer, section, h1-h6).
- Provide keyboard-accessible controls and visible focus states.

---

## 🎨 Styling Guidelines

Color palette (dark-first):
- Background: `bg-black`, `bg-gray-900`
- Text: `text-white`, `text-gray-300`, `text-gray-400`
- Borders: `border-gray-800`, `border-gray-600`
- Accent: light backgrounds or `bg-white text-black` for CTA contrast

Responsive breakpoints (Tailwind defaults):
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Animation & motion patterns:
- Default fade-in from bottom:
```typescript
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
```
- Staggered lists:
```typescript
transition={{ duration: 0.8, delay: index * 0.12 }}
```

Utility:
- Keep components style-driven by Tailwind classes.
- Extract repeated class collections into `cn()` helper or a `classNames` utility in `lib/utils.ts`.

---

## ➕ Adding New Features

Adding a new section:
1. Create `components/[section].tsx` following the Section pattern.
2. Add translations for `pt` and `en`.
3. Import and include in `app/page.tsx`.
4. Add navigation entry in `components/header.tsx`.

Adding form fields:
1. Update Zod schema used by the form.
2. Update React Hook Form inputs (with proper `register`).
3. Add translations for labels/placeholders.
4. Update the server action (`actions/contact-action.ts`) to accept and validate the new field.

Adding a language:
1. Add the language to the `Language` type.
2. Add a complete translation object to the dictionary.
3. Update any language toggle UI.
4. Verify all strings display correctly.

---

## 🔄 Refactoring Guidelines

Principles:
- Single Responsibility: components do one thing.
- DRY: extract shared UI & logic.
- Consistent naming: `PascalCase` for components, `camelCase` for functions/variables.
- Explicit types: avoid `any`.

Performance techniques:
- Use dynamic imports for large, rarely used modules.
- Memoize heavy computations with `useMemo` and event handlers with `useCallback`.
- Use Next.js Image for optimized images.
- Regularly analyze bundle size.

Common refactors:
- Extract repeated card patterns to `InfoCard`.
- Move complex state logic into custom hooks (`useXyz`).

---

## 🚀 Deployment & Environment

Environment variables (.env.local):
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add any email/service keys (server-only) as needed: e.g. SMTP_URL, SENDGRID_API_KEY
```

Local development:
```bash
npm install
npm run dev
```

Production:
```bash
npm run build
npm start
```

Recommended platforms:
- Vercel (first choice for Next.js)
- Netlify (good Next.js support)
- Railway (for back-end services)

Pre-deploy checklist:
- [ ] All translations present
- [ ] Forms validated and tested
- [ ] Responsive across breakpoints
- [ ] SEO metadata configured
- [ ] Performance audited
- [ ] Accessibility verified (focus order, semantics)

---

## 🐛 Troubleshooting & Debugging

Common issues
- Hydration mismatch: ensure consistent server/client rendering and stable IDs.
- Missing translations: confirm dictionary keys and spelling.
- Animation not firing: check `viewport` settings and client vs server boundaries.
- Form validation errors: make Zod schema mirror the form fields.
- Tailwind classes not applied: confirm PostCSS/Tailwind config and purge paths.

Debugging tools:
- React DevTools
- Browser DevTools (Network, Console)
- Lighthouse for performance & accessibility
- Next.js built-in error overlay

---

## 📚 Additional Resources

- Next.js Docs — https://nextjs.org/docs  
- Tailwind CSS — https://tailwindcss.com/docs  
- Framer Motion — https://www.framer.com/motion/  
- React Hook Form — https://react-hook-form.com/  
- shadcn/ui — https://ui.shadcn.com/

---

Last Updated: 2025-10-28  
Version: 1.0.0  
Maintainer: Manuel Pires Luís — @ManuelPiresLuis01
