import { defineConfig } from 'cypress'
import AllureWriter from '@shelex/cypress-allure-plugin/writer'
import { ASSETS_FOLDER, BASE_URL, DEFAULT_WAITNG_TIME } from 'cypress/e2e/support/constants'
import { logger } from 'cypress/e2e/support/logger'

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    baseUrl: BASE_URL,
    defaultCommandTimeout: DEFAULT_WAITNG_TIME,
    supportFile: 'cypress/e2e/support/index.ts',
    videosFolder: `${ASSETS_FOLDER}/videos`,
    downloadsFolder: `${ASSETS_FOLDER}/downloads`,
    screenshotsFolder: `${ASSETS_FOLDER}/screenshots`,
    fixturesFolder: 'cypress/e2e/fixtures',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          logger.info(message)
          return null
        },
      })
      AllureWriter(on, config)
      return config
    },
    env: {
      allure: 'true',
      allureResultsPath: 'cypress/assets/allure-results'
    },
  },
})