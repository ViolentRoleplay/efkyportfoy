import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Global CSS dosyasında yönetiyoruz
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  site: 'https://efkytech.com',
  base: '/',
  output: 'hybrid', // API routes için hybrid mode (static pages + server endpoints)
  adapter: vercel(), // Vercel deployment için
});

