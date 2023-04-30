import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts'
  },
};
export default defineConfig(config);
