import { registrationForm } from "../src/registrationForm";
import { TEST_USER } from "../src/utils/constants";

const successfullRegistrationMessage: string = "User has been registered seccessfully";
const invalidLoginFormatMessage: string = "Login should be between 2 to 12 characters";
const invalidPasswordFormatMessage: string = "Password should be between 6 to 12 characters";
const ConfirmPasswordDoesNotMatchMessage: string = "Confirm password should match password";
const randomstring = require("randomstring");

describe("Registration tests", () => {

    test("Should register the user with valid info successfully", () => {
        expect(registrationForm.reqister(TEST_USER.login, TEST_USER.password, TEST_USER.password)).toStrictEqual(successfullRegistrationMessage);
    })

    describe("Registration tests for login field", () => {

        const loginPositiveBoundaryValues = [2, 3, 11, 12]
        loginPositiveBoundaryValues.forEach((value) => {
            test(`Should register the user successfully while registration with login containing (${value}) characters and valid password`, () => {
                expect(registrationForm.reqister(randomstring.generate(value), TEST_USER.password, TEST_USER.password)).toStrictEqual(successfullRegistrationMessage);
            })
        })

        const loginNegativeBoundaryValues = [0, 1, 13]
        loginNegativeBoundaryValues.forEach((value) => {
            test(`Should show login validation message "${invalidLoginFormatMessage}" while registration with login containing (${value}) characters`, () => {
                expect(registrationForm.reqister(randomstring.generate(value), TEST_USER.password, TEST_USER.password)).toStrictEqual(invalidLoginFormatMessage);
            })
        })
    })

    describe("Registration tests for password field", () => {

        let password;

        const passwordPositiveBoundaryValues = [6, 7, 11, 12]
        passwordPositiveBoundaryValues.forEach((value) => {
            test(`Should register the user successfully while registration with password containing (${value}) characters and valid login`, () => {
                password = randomstring.generate(value);
                expect(registrationForm.reqister(TEST_USER.login, password, password)).toStrictEqual(successfullRegistrationMessage);
            })
        })

        const passwordNegativeBoundaryValues = [0, 5, 13]
        passwordNegativeBoundaryValues.forEach((value) => {
            test(`Should show password validation message "${invalidPasswordFormatMessage}" while registration with password containing (${value}) characters`, () => {
                password = randomstring.generate(value);
                expect(registrationForm.reqister(TEST_USER.login, password, password)).toStrictEqual(invalidPasswordFormatMessage);
            })
        })
    })

    describe("Registration tests for confirm password field", () => {
        test(`Should show confirm password validation message "${ConfirmPasswordDoesNotMatchMessage}" while registration with confirm password that doesn't match password`, () => {
            expect(registrationForm.reqister(TEST_USER.login, TEST_USER.password, randomstring.generate(7))).toStrictEqual(ConfirmPasswordDoesNotMatchMessage);
        })
    })
})