import { expect, test } from '@jest/globals'
import { registrationForm } from '../src/registrationForm'
import { INVALID_EMAILS, INVALID_LOGINS, INVALID_PASSWORDS, VALID_EMAILS, VALID_LOGINS, VALID_PASSWORDS, VALID_TEST_USER, VALIDATION_MESSAGES } from '../src/utils/types'
import randomstring from 'randomstring'

const { email, login, password, confirmPassword } = VALID_TEST_USER;

describe('Registration tests', () => {

    test('Should register the user with valid info successfully', () => {
        expect(registrationForm.register({ email, login, password, confirmPassword }))
            .toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
    })

    describe('Registration tests for Email field', () => {
        for (const value in VALID_EMAILS) {
            const validEmail = VALID_EMAILS[value as keyof typeof VALID_EMAILS]
            test(`Should register the user successfully while registration with email ${value} - "${validEmail}" and valid data`, () => {
                expect(registrationForm.register({ email: validEmail, login, password, confirmPassword }))
                    .toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
            })
        }

        for (const value in INVALID_EMAILS) {
            const invalidEmail = INVALID_EMAILS[value as keyof typeof INVALID_EMAILS]
            test(`Should show Email validation message "${VALIDATION_MESSAGES.INVALIDE_MAIL_FORMAT_MESSAGE}" while registration with email ${value} - "${invalidEmail}" and valid data`, () => {
                expect(registrationForm.register({ email: invalidEmail, login, password, confirmPassword })).
                    toEqual(VALIDATION_MESSAGES.INVALIDE_MAIL_FORMAT_MESSAGE)
            })
        }
    })

    describe('Registration tests for Login field', () => {
        for (const value in VALID_LOGINS) {
            const validLogin = VALID_LOGINS[value as keyof typeof VALID_LOGINS]
            test(`Should register the user successfully while registration with login ${value} - "${validLogin}" and valid data`, () => {
                expect(registrationForm.register({ email, login: validLogin, password, confirmPassword }))
                    .toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
            })
        }

        for (const value in INVALID_LOGINS) {
            const invalidLogin = INVALID_LOGINS[value as keyof typeof INVALID_LOGINS]
            test(`Should show login validation message "${VALIDATION_MESSAGES.INVALID_LOGIN_FORMAT_MESSAGE}" while registration with login ${value} - "${invalidLogin}" and valid data`, () => {
                expect(registrationForm.register({ email, login: invalidLogin, password, confirmPassword }))
                    .toEqual(VALIDATION_MESSAGES.INVALID_LOGIN_FORMAT_MESSAGE)
            })
        }
    })

    describe('Registration tests for Password field', () => {
        for (const value in VALID_PASSWORDS) {
            const validPassword = VALID_PASSWORDS[value as keyof typeof VALID_PASSWORDS]
            test(`Should register the user successfully while registration with password ${value} - "${validPassword}" and valid data`, () => {
                expect(registrationForm.register({ email, login, password: validPassword, confirmPassword: validPassword }))
                    .toEqual(VALIDATION_MESSAGES.SUCCESSFULL_REGISTRATION_MESSAGE)
            })
        }

        for (const value in INVALID_PASSWORDS) {
            const invalidPassword = INVALID_PASSWORDS[value as keyof typeof INVALID_PASSWORDS]
            test(`Should show password validation message "${VALIDATION_MESSAGES.INVALID_PASSWORD_FORMAT_MESSAGE}" while registration with password ${value} - "${invalidPassword}" and valid data`, () => {
                expect(registrationForm.register({ email, login, password: invalidPassword, confirmPassword: invalidPassword }))
                    .toEqual(VALIDATION_MESSAGES.INVALID_PASSWORD_FORMAT_MESSAGE)
            })
        }
    })

    describe('Registration tests for Confirm Password field', () => {
        test(`Should show confirm password validation message "${VALIDATION_MESSAGES.CONFIRM_PASSWORD_DOES_NOT_MATCH_MESSAGE}" while registration with confirm password that doesn't match password`, () => {
            expect(registrationForm.register({ email, login, password, confirmPassword: randomstring.generate(8) }))
                .toEqual(VALIDATION_MESSAGES.CONFIRM_PASSWORD_DOES_NOT_MATCH_MESSAGE)
        })
    })
})