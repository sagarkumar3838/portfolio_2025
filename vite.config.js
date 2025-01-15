import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true,
      filename: 'bundle-stats.html',
    }),
  ],
  
    build: {
      chunkSizeWarningLimit: 1000, // Set the limit to 1000 kB
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  
  
})
