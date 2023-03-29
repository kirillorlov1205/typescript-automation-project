import { defineConfig } from 'cypress'
import { ASSETS_FOLDER, DEFAULT_WAITNG_TIME } from 'cypress/api/support/constants'
import { BASE_URL } from './support/constants'

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: false,
    json: true,
  },
  
  e2e: {
    specPattern: 'cypress/api/**/*.cy.ts',
    baseUrl: BASE_URL,
    defaultCommandTimeout: DEFAULT_WAITNG_TIME,
    videosFolder: `${ASSETS_FOLDER}/videos`,
    downloadsFolder: `${ASSETS_FOLDER}/downloads`,
    screenshotsFolder: `${ASSETS_FOLDER}/screenshots`,
    fixturesFolder: 'cypress/fixtures',
    chromeWebSecurity: false,
    supportFile: false,
  },
})