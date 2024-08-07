import { defineConfig, PluginOption } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(),  visualizer({
    template: "treemap", // or sunburst
    open: false,
    gzipSize: true,
    brotliSize: true,
    filename: "analyse.html", // will be saved in project's root
  }) as PluginOption,],
  server: {
    port: 3000,
  },
})
