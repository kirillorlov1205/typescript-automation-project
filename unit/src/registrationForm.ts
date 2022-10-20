export class RegistrationForm {

    public constructor() { }

    public reqister(email: string, login: string, password: string, confirmPassword: string) {
        if (!this.emailValidation(email)) {
            return 'Please provide valid email (example: Tonny@gmail.com)';
        } else if (!this.loginValidation(login)) {
            return 'Login should have minimum 6 characters, maximum 12 characters, at least one uppercase letter, one lowercase letter';
        } else if (!this.passwordValidation(password)) {
            return 'Password should have minimum 8 characters, maximum 12 characters, at least one uppercase letter, one lowercase letter and one number';
        } else if (!this.confirmPasswordValidation(password, confirmPassword)) {
            return 'Passwords do not match. Please, try again';
        } else {
            return 'User has been registered seccessfully';
        }
    }

    private emailValidation(email: string): boolean {
        const emailRegEx = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegEx.test(email);
    }

    private loginValidation(login: string): boolean {
        const loginRegEx = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,12}$/;
        return loginRegEx.test(login);
    }

    private passwordValidation(password: string) {
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
        return passwordRegEx.test(password);   
    }

    private confirmPasswordValidation(password: string, confirmPassword: string) {
        return confirmPassword === password;
    }
}

export const registrationForm = new RegistrationForm();