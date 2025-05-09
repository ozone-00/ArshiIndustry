import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['8948-2400-74e0-10-61fb-547a-3ecf-1627-63cf.ngrok-free.app']
  },
  base:"/Arshi-INDUSTRIES "
});
