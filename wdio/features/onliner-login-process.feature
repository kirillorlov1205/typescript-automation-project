@login
Feature: Onliner login

    Background:
        Given The user opens web page https://www.onliner.by

    @validCredentials
    Scenario: Valid credentials
        When The user logs in with valid Email and valid Password
        Then The user successfully logged in and sees protection pop-up

    @emptyEmail
    Scenario: Empty email
        When The user logs in with empty Email and valid Password
        Then The user sees validation message 'Укажите ник или e-mail'

    @emptyPassword
    Scenario: Empty password
        When The user logs in with valid Email and empty Password
        Then The user sees validation message 'Укажите пароль'