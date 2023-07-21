import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  // eslint-disable-next-line no-undef
  e2e: nxE2EPreset(__dirname),
});
