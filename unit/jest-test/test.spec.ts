import { expect, test } from '@jest/globals'
import { registrationForm } from '../src/registrationForm'
import { INVALID_EMAILS, INVALID_LOGINS, INVALID_PASSWORDS, VALID_EMAILS, VALID_LOGINS, VALID_PASSWORDS, VALID_TEST_USER, VALIDATION_MESSAGES } from '../src/utils/types'

const randomstring = require('randomstring')

describe('Registration tests', () => {

    test('Should register the user with valid info successfully', () => {
        expect(registrationForm.reqister(VALID_TEST_USER.email, VALID_TEST_USER.login, VALID_TEST_USER.password, VALID_TEST_USER.password)).toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
    })
    

    describe('Registration tests for Email field', () => {
        for (const value in VALID_EMAILS) {
            const email = VALID_EMAILS[value as keyof typeof VALID_EMAILS]
            test(`Should register the user successfully while registration with email ${value} - "${email}" and valid data`, () => {
                expect(registrationForm.reqister(email, VALID_TEST_USER.login, VALID_TEST_USER.password, VALID_TEST_USER.password)).toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
            })
        }

        for (const value in INVALID_EMAILS) {
            const email = INVALID_EMAILS[value as keyof typeof INVALID_EMAILS]
            test(`Should show Email validation message "${VALIDATION_MESSAGES.INVALIDE_MAIL_FORMAT_MESSAGE}" while registration with email ${value} - "${email}" and valid data`, () => {
                expect(registrationForm.reqister(email, VALID_TEST_USER.login, VALID_TEST_USER.password, VALID_TEST_USER.password)).toEqual(VALIDATION_MESSAGES.INVALIDE_MAIL_FORMAT_MESSAGE)
            })
        }
    })

    describe('Registration tests for Login field', () => {
        for (const value in VALID_LOGINS) {
            const login = VALID_LOGINS[value as keyof typeof VALID_LOGINS]
            test(`Should register the user successfully while registration with login ${value} - "${login}" and valid data`, () => {
                expect(registrationForm.reqister(VALID_TEST_USER.email, login, VALID_TEST_USER.password, VALID_TEST_USER.password)).toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
            })
        }

        for (const value in INVALID_LOGINS) {
            const login = INVALID_LOGINS[value as keyof typeof INVALID_LOGINS]
            test(`Should show login validation message "${VALIDATION_MESSAGES.INVALID_LOGIN_FORMAT_MESSAGE}" while registration with login ${value} - "${login}" and valid data`, () => {
                expect(registrationForm.reqister(VALID_TEST_USER.email, login, VALID_TEST_USER.password, VALID_TEST_USER.password)).toEqual(VALIDATION_MESSAGES.INVALID_LOGIN_FORMAT_MESSAGE)
            })
        }
    })

    describe('Registration tests for Password field', () => {
        for (const value in VALID_PASSWORDS) {
            const password = VALID_PASSWORDS[value as keyof typeof VALID_PASSWORDS]
            test(`Should register the user successfully while registration with password ${value} - "${password}" and valid data`, () => {
                expect(registrationForm.reqister(VALID_TEST_USER.email, VALID_TEST_USER.login, password, password)).toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
            })
        }

        for (const value in INVALID_PASSWORDS) {
            const password = INVALID_PASSWORDS[value as keyof typeof INVALID_PASSWORDS]
            test(`Should show password validation message "${VALIDATION_MESSAGES.INVALID_PASSWORD_FORMAT_MESSAGE}" while registration with password ${value} - "${password}" and valid data`, () => {
                expect(registrationForm.reqister(VALID_TEST_USER.email, VALID_TEST_USER.login, password, password)).toEqual(VALIDATION_MESSAGES.INVALID_PASSWORD_FORMAT_MESSAGE)
            })
        }
    })

    describe('Registration tests for Confirm Password field', () => {
        test(`Should show confirm password validation message "${VALIDATION_MESSAGES.CONFIRM_PASSWORD_DOES_NOT_MATCH_MESSAGE}" while registration with confirm password that doesn't match password`, () => {
            expect(registrationForm.reqister(VALID_TEST_USER.email, VALID_TEST_USER.login, VALID_TEST_USER.password, randomstring.generate(8))).toEqual(VALIDATION_MESSAGES.CONFIRM_PASSWORD_DOES_NOT_MATCH_MESSAGE)
        })
    })
})