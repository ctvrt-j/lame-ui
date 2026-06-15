import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@lamelabs\/ui\/styles\.css$/,
        replacement: path.resolve(dirname, '../../packages/ui/src/tokens/tokens.css'),
      },
      {
        find: /^@lamelabs\/ui$/,
        replacement: path.resolve(dirname, '../../packages/ui/src/index.ts'),
      },
    ],
  },
})
