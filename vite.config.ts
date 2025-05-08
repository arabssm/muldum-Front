// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // top-level 옵션: include/exclude, esbuildOptions, svgrOptions 만 허용
      svgrOptions: {
        prettier: false,
        svgo: true,
        svgoConfig: { plugins: [{ name: 'preset-default' }] },
        // default export 대신 named export 사용
        exportType: 'named',    // or 'default'
      },
    }),
  ],
});
