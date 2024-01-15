import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'build', // o firebase procura a pasta build para deploy e essa config altera o nome de dist para build
  },
})
