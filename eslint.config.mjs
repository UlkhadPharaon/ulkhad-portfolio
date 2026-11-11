import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'node_modules/**',
    'out/**',
    'build/**',
    // Static assets only; MediaPipe's generated JS (prepare:mediapipe) is machine-written
    'public/**',
    'next-env.d.ts',
  ]),
]);
