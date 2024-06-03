import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react' //ORIGINAL
// import react from '@vitejs/plugin-react-swc' //DARO-VERSION

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
