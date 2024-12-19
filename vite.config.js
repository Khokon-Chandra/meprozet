import { defineConfig } from 'vite';

export default defineConfig({
    root: './src', // Set the root directory to ./src
    build: {
        outDir: '../dist', // Output directory for the build files
        emptyOutDir: true,
    },
    server: {
        open: true, // Automatically open the app in your browser
    },
});
