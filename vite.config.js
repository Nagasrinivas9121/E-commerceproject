import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
=======
  plugins: [react()],
>>>>>>> 7e5b03f3072fbc9e5ec83b0717427dba68d38abe
})
