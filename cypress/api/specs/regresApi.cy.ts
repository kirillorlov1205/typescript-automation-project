import { BASE_URL, REGRES_TEST_USER, REGRES_REGISTRATION_VALID_TEST_USER, REGRES_LOGIN_VALID_TEST_USER } from 'cypress/api/support/constants';

describe('reqres.in api testing', () => {

    describe('GET', () => {

        it('Get user with id 1', () => {
            cy.request('GET', `${BASE_URL}/users/1`).then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.body.data).to.have.property('email', 'george.bluth@reqres.in')
            })
        })

        it('Get users list by page 2', () => {
            cy.request('GET', `${BASE_URL}/users?page=2`).then((response) => {
                expect(response.body).to.have.property('per_page', 6)
                expect(response.body.data).to.have.length(6)
            })
        })

        it('Get users total count', () => {
            cy.request('GET', `${BASE_URL}/users?page=1`).then((response) => {
                expect(response.body).to.have.property('total', 12)
            })
        })

        it('Get user by invalid id', () => {
            cy.request({
                method: 'GET',
                url: `${BASE_URL}/users/26`,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(404)
            })
        })
    })

    describe('POST', () => {

        describe('User creation', () => {

            it(`Create user with name: "${REGRES_TEST_USER.name}" and job: "${REGRES_TEST_USER.job}"`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/users`,
                    body: REGRES_TEST_USER,
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body).to.have.property('name', REGRES_TEST_USER.name)
                    expect(response.body).to.have.property('job', REGRES_TEST_USER.job)
                })
            })

            it(`Create user with name: "${REGRES_TEST_USER.name}" and without a job`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/users`,
                    body: { name: REGRES_TEST_USER.name },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body).to.have.property('name', REGRES_TEST_USER.name)
                    expect(response.body).not.to.have.property('job')
                })
            })

            it(`Create user without a name and with job: "${REGRES_TEST_USER.job}"`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/users`,
                    body: { job: REGRES_TEST_USER.job },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body).to.have.property('job', REGRES_TEST_USER.job)
                    expect(response.body).not.to.have.property('name')
                })
            })

            it(`Create user without a name and with job: "${REGRES_TEST_USER.job}"`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/users`,
                    body: { job: REGRES_TEST_USER.job },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body).to.have.property('job', REGRES_TEST_USER.job)
                    expect(response.body).not.to.have.property('name')
                })
            })
        })

        describe('User registration', () => {

            it(`Successful registration with email: "${REGRES_REGISTRATION_VALID_TEST_USER.email}" 
            and password: ${REGRES_REGISTRATION_VALID_TEST_USER.password}`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/register`,
                    body: REGRES_REGISTRATION_VALID_TEST_USER,
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('id')
                    expect(response.body).to.have.property('token')
                })
            })

            it(`Unsuccessful registration with email: "${REGRES_REGISTRATION_VALID_TEST_USER.email}" and empty password`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/register`,
                    failOnStatusCode: false,
                    body: { email: REGRES_REGISTRATION_VALID_TEST_USER.email },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(400)
                    expect(response.body).to.have.property('error', 'Missing password')
                })
            })

            it(`Unsuccessful registration with an empty email and password: "${REGRES_REGISTRATION_VALID_TEST_USER.password}"`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/register`,
                    failOnStatusCode: false,
                    body: { password: REGRES_REGISTRATION_VALID_TEST_USER.password },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(400)
                    expect(response.body).to.have.property('error', 'Missing email or username')
                })
            })
        })

        describe('Login', () => {

            it(`Successful login with email: "${REGRES_LOGIN_VALID_TEST_USER.email}", password: "${REGRES_LOGIN_VALID_TEST_USER.password}"`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/login`,
                    body: REGRES_LOGIN_VALID_TEST_USER,
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('token')
                })
            })

            it(`Unsuccessful login with email: "${REGRES_LOGIN_VALID_TEST_USER.email}" and empty password`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/login`,
                    failOnStatusCode: false,
                    body: { email: REGRES_LOGIN_VALID_TEST_USER.email },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(400)
                    expect(response.body).to.have.property('error', 'Missing password')
                })
            })

            it(`Unsuccessful login with an empty email and password: "${REGRES_LOGIN_VALID_TEST_USER.password}"`, () => {
                cy.request({
                    method: 'POST',
                    url: `${BASE_URL}/login`,
                    failOnStatusCode: false,
                    body: { password: REGRES_LOGIN_VALID_TEST_USER.password },
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }).then((response) => {
                    expect(response.status).to.eq(400)
                    expect(response.body).to.have.property('error', 'Missing email or username')
                })
            })
        })
    })

    describe('PUT', () => {

        it('Update user name with id 3 by PUT method', () => {
            cy.request({
                method: 'PUT',
                url: `${BASE_URL}/users/3`,
                body: { name: REGRES_TEST_USER.name },
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('name', REGRES_TEST_USER.name)
            })
        })

        it('Update user job with id 2 by PUT method', () => {
            cy.request({
                method: 'PUT',
                url: `${BASE_URL}/users/2`,
                body: { job: REGRES_TEST_USER.job },
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('job', REGRES_TEST_USER.job)
            })
        })
    })

    describe('PATCH', () => {

        it('Update user name with id 6 by PATCH method', () => {
            cy.request({
                method: 'PATCH',
                url: `${BASE_URL}/users/6`,
                body: { name: REGRES_TEST_USER.name },
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('name', REGRES_TEST_USER.name)
            })
        })

        it('Update user job with id 7 by PATCH method', () => {
            cy.request({
                method: 'PATCH',
                url: `${BASE_URL}/users/7`,
                body: { job: REGRES_TEST_USER.job },
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('job', REGRES_TEST_USER.job)
            })
        })
    })

    describe('DELETE', () => {

        it('Delete user with id 10', () => {
            cy.request({
                method: 'DELETE',
                url: `${BASE_URL}/users/10`,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((response) => {
                expect(response.status).to.eq(204)
            })
        })
    })
})