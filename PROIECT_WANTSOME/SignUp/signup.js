function validateForm(event) {
    event.preventDefault();

    // Get form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirmPass').value;

    // Get error message elements
    let usernameError = document.getElementById('username-error');
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    let confirmPassError = document.getElementById('confirmPass-error');
    let generalError = document.getElementById('general-error');

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPassError.textContent = '';
    generalError.textContent = '';

    // Validation flags
    let isValid = true;

    // Check if all fields are empty
    if (username === '' && email === '' && password === '' && confirmPass === '') {
        generalError.textContent = 'All fields must be filled out.';
        return false;
    }

    // Username validation
    if (username.length < 8 || username.length > 12) {
        usernameError.textContent = 'Username must be between 8 and 12 characters.';
        isValid = false;
    }

    // Email validation (basic example)
    if (!email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Invalid Email address.';
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPass) {
        confirmPassError.textContent = "Passwords don't match.";
        isValid = false;
    }

    // If all validations pass, allow form submission
    if (isValid) {
        document.getElementById('signup-form').submit();
    }
}
