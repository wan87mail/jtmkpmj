// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site configuration
  site: 'https://jtmk.example.com',

  // Build configuration
  build: {
    // Inline stylesheets smaller than this limit
    inlineStylesheets: 'auto'
  },

  // Vite configuration
  vite: {
    server: {
      // Allow all hosts (for tunnels like Cloudflare, ngrok, etc.)
      allowedHosts: true
    }
  },

  // Development server configuration
  server: {
    port: 4321,
    host: true
  }
});
