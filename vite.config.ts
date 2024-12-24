import { defineConfig, PluginOption } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from "vite-plugin-environment";
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), 
    svgr(), 
    EnvironmentPlugin('all'), 
    tsconfigPaths(),
    visualizer({
      template: "treemap",
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html",
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
        api: 'modern-compiler'
      },
    },
  },
})
