# typescript-automation-project

### typescript-automation-project repository includes:

#### E2E tests for https://www.onliner.by web site using frameworks:

- Cypress
- WebdriverIO
- Playwright
- Selenium

#### API tests for web site https://jsonplaceholder.typicode.com using frameworks:

- Jest
- Axios
- HTTP/HTTPS
- Axios-logger

#### Unit tests for function RegistrationForm using frameworks:

Registration form path: "typescript-automation-project/unit/src/registrationForm.ts"

- Jest
- Randomstring

### Tests running:

### You can use "-npm i" and run tests scripts by "npm run"

**Cypress**

- npm run cy-run - run Cypress tests in headless mode
- npm run cy-open - run Cypress tests by Cypress runner app
- npm run cy-report - generate allure report for Cypress tests

**WebdriverIO**
(For running tests WebdriverIO you have to switch to wdio folder "cd ./wdio")

- npm run wdio - run WebdriverIO tests
- npm run wdio-report - generate allure report for WebdriverIO tests

**Playwright**

- npm run playwright - run Playwright tests
- npm run playwright-report - show HTML report for Playwright tests
- npm run playwright-allure-report - generate allure report for Playwright tests

**Selenium**

- npm run selenium - run Selenium tests

**API**

- npm run api-test - run API tests
- npm run api-coverage - show API tests coverage

### Test paths

- API tests - typescript-automation-project/api/jest-test/test.spec.ts
- Unit tests - typescript-automation-project/unit/jest-test/test.spec.ts
- Cypress tests - typescript-automation-project/cypress/e2e
- Playwright tests - typescript-automation-project/playwright/tests
- Selenium tests - typescript-automation-project/selenium/tests
