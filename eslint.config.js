import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser'; // ← ADD THIS

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),

  // Base configs
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'], // ← use the flat version
  prettier,                              // ← disables formatting rules
  ...svelte.configs['flat/prettier'],    // ← extra Prettier fixes for Svelte

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off', // TS handles this
    },
  },

  // === Svelte-specific override ===
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser, // ← this is the key line
      parserOptions: {
        parser: ts.parser, // ← parses <script lang="ts">
        // Remove projectService: true — it breaks many setups and isn't needed
        extraFileExtensions: ['.svelte'],
      },
    },
  },

  // Optional: stricter rules for .ts files only
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      // your other TS rules
    },
  }
);