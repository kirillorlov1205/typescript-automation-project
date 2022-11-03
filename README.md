# typescript-automation-project

## typescript-automation-project repository includes:

### E2E tests for https://www.onliner.by web site by frameworks:

- Cypress
- WebdriverIO
- Playwright
- Selenium

### API tests for web site https://jsonplaceholder.typicode.com by frameworks:

- Jest
- Axios
- HTTP/HTTPS
- Axios-logger

### Unit tests for function RegistrationForm by frameworks:
Registration form path: finalProject/unit/src/registrationForm.ts
- Jest
- Randomstring

### Tests structure:

You can use -npm i and run scripts for tests by npm run

- Cypress
  npm run cy:run - run Cypress tests in headless mode
  npm run cy:open - run Cypress tests by Cypress runner app
  npm run cy:report - generate allure report for Cypress tests
- WebdriverIO

- Playwright
  npm run playwright - run Playwright tests
  npm run playwright-report - show HTML report for Playwright tests
  npm run playwright-allure-report - generate allure report for Playwright tests

- Selenium
npm run selenium - run Selenium tests

- API
npm run api-test - run API tests
npm run api-coverage - show API tests coverage