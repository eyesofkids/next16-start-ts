import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierRecommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Prettier 整合
      'prettier/prettier': 'warn',
      // TypeScript 規則
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off', // 開發時允許 any
      // React 規則
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      // 一般規則
      'no-console': 'off', // 開發時允許 console
      'prefer-const': 'warn',
      'no-var': 'warn', // 開發時允許 var
      'no-const-assign': 'warn',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    '*.config.js',
    '*.config.mjs',
    '*.config.ts',
    'next-env.d.ts',
    '.next/types/**',
  ]),
]);

export default eslintConfig;
