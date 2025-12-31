# EfkyTech Portfolio Website

Modern, responsive portfolio website for EfkyTech built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Astro** - Static site framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - Interactive components

## 🌐 Deployment

This site is optimized for deployment on Vercel or Netlify. Simply connect your repository and deploy!

## 📝 Configuration

### Contact Form

The contact form uses Formspree. To set it up:

1. Go to https://formspree.io and create a free account
2. Create a new form and get your form ID
3. Update the form action URL in `src/pages/contact.astro`:
   ```astro
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

Alternatively, you can replace the form with direct email links or use another form service.

