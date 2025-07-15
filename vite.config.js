import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Specify the root directory
  base: "./", // or ''
  
  // Development server settings
  server: {
    port: 3000,
    open: true
  },
  
  // CSS processing
  css: {
    devSourcemap: true
  },
  
  // Build settings
  build: {
    outDir: 'docs',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});