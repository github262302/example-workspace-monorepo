import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig(env => {
  const isBuild = env.command == 'build'
  if (isBuild) {
    return {
      plugins: [vue()],
      build: {
        lib: { entry: './install.js', formats: ['es'] },
        rollupOptions:{
          external:["vue","tools"]
        }
      }
    }
  }
  return {
    plugins: [vue()]
  }
})
