import { defineConfig, PluginOption } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from "vite-plugin-environment"
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), 
    svgr(), 
    EnvironmentPlugin('all'), 
    tsconfigPaths(),
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html", // will be saved in project's root
  }) as PluginOption],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
  },
})
