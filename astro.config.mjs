import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vercel from '@astrojs/vercel';

// https://astro.build/config


export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
  output: 'server',
  adapter: vercel(),
});


//probando astro...