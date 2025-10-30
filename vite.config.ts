import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteBridge } from 'vite-bridge';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for Node.js v18 compatibility
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    server: {
      // CRITICAL: This port must not be changed!
      port: 3000,
      host: true,
      hmr: {
        clientPort: 443,
        protocol: 'wss'
      }
    },
    plugins: [
      react(),
      mode == 'development' && viteBridge()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './src'),
      }
    },
    build: {
      outDir: 'dist/public'
    }
  }
})
