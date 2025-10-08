// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: undefined, // Static site, no adapter needed
  site: 'https://www.oosby.com', // Your production URL
  build: {
    assets: 'assets' // Custom assets directory for better caching
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false, // Better for small sites
      rollupOptions: {
        output: {
          // Better asset naming for caching
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  },
  // Cloudflare Pages optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
