import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Global CSS dosyasında yönetiyoruz
    }),
  ],
  site: 'https://efkytech.com',
  base: '/',
  output: 'static',
});

