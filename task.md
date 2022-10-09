#### Task 1

- Implement registration form class.
- Describe each field of this form with methods, that would behave depending on the valid or invalid parameters provided.
- Create unit testing framework for this form class on the basis of the following criteria:

1. `>= 7` positive tests
2. `>= 3` exception cases tests
3. use either `mocha` or `jest` framework for tests running
4. add a script to run the tests: `unit:test`

#### Task 2

- Create testing framework for API testing for any web application with open API following the criteria:

1. cover 5 basic methods: `GET`, `POST`, `PATCH`, `PUT`, and `DELETE`
2. `>= 7` tests at least 2 of which should check non-`2xx` status codes
3. use the API that differs from the one tested in the scope of homework No `18`
4. use any API library (`supertest`, `superagent`, `axios`, `node-fetch`, etc.) and any test runner (`mocha` or `jest`) covered in the course
5. add a script to run the tests: `api:test`

#### Task 3

- Create testing framework for UI testing for any web application following the criteria:

1. use any testing framework covered in the course: `wdio` + `cucumber`, `playwright`, or `cypress`
2. `>= 7` tests
3. it is not prohibited to use the same framework structure as in the corresponding homeworks, but it is obligatory to write tests that differ from the ones that you've already wrote in the scope of your homeworks
4. implement `PageObject` and `PageFactory` patterns
5. use different selector and locator types
6. organize tests with `describe()` blocks where needed, use hooks if you find it rational
7. add `allure` or any other side reporter to your tests
8. add a script to run the tests - `ui:test`, and to generate and open a report: `ui:report`

General requirements:

- code should be written in the separate private repository with one `package.json`, `tsconfig.json`, and `.gitignore` files (`.eslintrc.json` if you decide to use it)
- each task code should be placed in the separate folder, for example: `unit`, `api`, and `ui` accordingly. All config files except the ones listed above should be placed in the corresponding folders
- code should be visible to the teacher at least ONE DAY before the defense date (18.10.2022)
- it is recommended not to push your code directly to `main` branch, but create a separate branch with your code and create a Pull Request to merge this code to `main`. It would be more convenient to use it while presenting your work
