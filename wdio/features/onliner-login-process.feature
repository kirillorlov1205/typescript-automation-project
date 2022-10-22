@login
Feature: Onliner login

    Background:
        Given the User opens web page https://www.onliner.by

    @validCredentials
    Scenario: Valid credentials
        When the User logs in with valid Email and valid Password
        Then the User successfully logged in and sees protection pop-up

    @emptyEmail
    Scenario: Empty email
        When the User logs in with empty Email and valid Password
        Then the User sees validation message 'Укажите ник или e-mail'

    @emptyPassword
    Scenario: Empty password
        When the User logs in with valid Email and empty Password
        Then the User sees validation message 'Укажите пароль'