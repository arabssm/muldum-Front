import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
      svgrOptions: {
        // 💥 용량 제한 무시하고 트랜스파일 강제
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ name: 'preset-default' }],
        },
      },
    }),
  ],
});
