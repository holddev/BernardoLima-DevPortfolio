import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import deno from '@astrojs/deno';

// https://astro.build/config

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
  output: 'server',
  adapter: deno(),
});
