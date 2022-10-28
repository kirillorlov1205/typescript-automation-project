Sign up
As a customer, I want to be able to sign up so I can access all functions of the app:
1. Sign up form has input data fields:
1.1. Email - required, text input, email format
1.2. Login - required, text input, minimum 6 characters, maximum 12 characters, at least one uppercase letter, one lowercase letter
1.2. Password - required, text input, at least 8 characters, including at least 1 lowercase and 1 uppercase letters, 1 number
1.3. Confirm password - required, text input, should match to the Password field
2. If the user enters invalid data in fields, error message is displayed:
2.1. Email field - 'Please provide valid email (example: Tonny@gmail.com)'
2.2. Login field - 'Login should have minimum six characters, maximum 12 characters, at least one uppercase letter, one lowercase letter'
2.3. Password field - 'Password must be at least 8 characters including at least 1 lowercase and 1 uppercase letters, 1 number'
2.4. If entries in "Password" and "Confirm Password" do not match, error message "Passwords do not match. Please, try again" is displayed
2.6. If user enters valid data in fields, success message 'User has been registered seccessfully' is displayed