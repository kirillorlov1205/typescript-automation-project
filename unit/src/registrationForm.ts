import { VALIDATION_MESSAGES } from './utils/types'

export class RegistrationForm {

    public constructor() { }

    public reqister(user: { email: string, login: string, password: string, confirmPassword: string }) {
        if (!this.emailValidation(user.email)) {
            return VALIDATION_MESSAGES.INVALIDE_MAIL_FORMAT_MESSAGE
        } else if (!this.loginValidation(user.login)) {
            return VALIDATION_MESSAGES.INVALID_LOGIN_FORMAT_MESSAGE
        } else if (!this.passwordValidation(user.password)) {
            return VALIDATION_MESSAGES.INVALID_PASSWORD_FORMAT_MESSAGE
        } else if (!this.confirmPasswordValidation(user.password, user.confirmPassword)) {
            return VALIDATION_MESSAGES.CONFIRM_PASSWORD_DOES_NOT_MATCH_MESSAGE
        } else {
            return 'User has been registered seccessfully'
        }
    }

    private emailValidation(email: string): boolean {
        const emailRegEx = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
        return emailRegEx.test(email)
    }

    private loginValidation(login: string): boolean {
        const loginRegEx = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,12}$/
        return loginRegEx.test(login)
    }

    private passwordValidation(password: string) {
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/
        return passwordRegEx.test(password)
    }

    private confirmPasswordValidation(password: string, confirmPassword: string) {
        return confirmPassword === password
    }
}

export const registrationForm = new RegistrationForm()