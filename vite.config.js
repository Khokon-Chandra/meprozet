import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html', // Entry for index.html
        report: './src/report.html', // Entry for report.html
      },
    },
    outDir: '../dist', // Output directory
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
