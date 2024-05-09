import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    prot: 5000,
    //Get the backend to run on port 5000 and rid of the CORS error
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
