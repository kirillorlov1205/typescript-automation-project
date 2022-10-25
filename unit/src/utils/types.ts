export const VALID_TEST_USER = {
    email: 'testEmail@gmail.com',
    login: 'Login12',
    password: 'Password12',
    confirmPassword: 'Password12'
}

export const INVALID_PASSWORDS = {
    withoutCapitalLetter: 'testpass1',
    withoutLowercaseLetter: 'TESTPASS1',
    withoutNumber: 'testPass',
    withMoreThanLimitCharacters: 'testPass12345',
    withLessThanLimitCharacters: 'TestPa1',
}

export const VALID_PASSWORDS = {
    withMaxLimitCharacters: 'testPass1234',
    withMinLimitCharacters: 'testPas1',
}

export const INVALID_LOGINS = {
    withoutCapitalLetter: 'testlogin',
    withoutLowercaseLetter: 'TESTLOGIN',
    withMoreThanLimitCharacters: 'testLogin1234',
    withLessThanLimitCharacters: 'Test1',
}

export const VALID_LOGINS = {
    withMinLimitCharacters: 'testLo',
    withMaxLimitCharacters: 'testLogin123',
}

export const VALID_EMAILS = {
    withValidHyphenPrefix: 'abc-d@mail.com',
    withValidDotsPrefix: 'abc.def@mail.com',
    withValidCharacterPrefix: 'abc_def@mail.com',
    withValidDomain: 'abcdef@mail.cc',
    withValidHyphenDomain: 'abc.def@mail-archive.com',
}

export const INVALID_EMAILS = {
    withInvalidHyphenPrefix: 'abc-@mail.com',
    withInvalidDotsPrefix: 'abc..def@mail.com',
    withInvalidCharacterPrefix: 'abc#def@mail.com',
    withInvalidTopDomain: 'abc.def@mail.c',
    withInvalidCharacterDomain: 'abc.def@mail#archive.com',
    withoutTopDomain: 'abc.def@mail',
    withTwoDotsInTopDomain: 'abc.def@mail..com',
}

export enum VALIDATION_MESSAGES {
    SUCCESSFULL_REGISTRATION_MESSAGE = 'User has been registered seccessfully',
    INVALIDE_MAIL_FORMAT_MESSAGE = 'Please provide valid email (example: Tonny@gmail.com)',
    INVALID_LOGIN_FORMAT_MESSAGE = 'Login should have minimum 6 characters, maximum 12 characters, at least one uppercase letter, one lowercase letter',
    INVALID_PASSWORD_FORMAT_MESSAGE = 'Password should have minimum 8 characters, maximum 12 characters, at least one uppercase letter, one lowercase letter and one number',
    CONFIRM_PASSWORD_DOES_NOT_MATCH_MESSAGE = 'Passwords do not match. Please, try again',
}