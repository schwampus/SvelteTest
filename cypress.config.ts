import { defineConfig } from 'cypress';
import viteConfig from './vite.config';
import cucumber from '@badeball/cypress-cucumber-preprocessor';

export default defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      cucumber.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{ts,tsx,js,jsx,feature}'
  },
  component: {
    devServer: {
      framework: 'svelte',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
  },
});