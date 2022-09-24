export class RegistrationForm {

    constructor() { }

    reqister(login: string, password: string, confirmPassword: string) {
        if (this.loginValidation(login)) {
            return "Login should be between 2 to 12 characters";
        } else if (this.passwordValidation(password)) {
            return "Password should be between 6 to 12 characters";
        } else if (this.confirmPasswordValidation(password, confirmPassword)) {
            return "Confirm password should match password";
        } else {
            return "User has been registered seccessfully";
        }
    }

    loginValidation(login: string): boolean {
        if (!login || login.length > 12 || login.length < 2) {
            return true;
        }
        return false;
    }

    passwordValidation(password: string) {
        if (!password || password.length > 12 || password.length < 6) {
            return true;
        }
        return false;
    }

    confirmPasswordValidation(password: string, confirmPassword: string) {
        if (confirmPassword !== password) {
            return true;
        }
        return false;
    }
}

export const registrationForm = new RegistrationForm();