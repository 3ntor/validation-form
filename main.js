// Validation for Signup Form
function validateSignup() {
    let username = document.getElementById('signup-username').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let isValid = true;

    // Clear previous errors
    document.getElementById('signup-username-error').textContent = '';
    document.getElementById('signup-email-error').textContent = '';
    document.getElementById('signup-password-error').textContent = '';

    // Username validation
    if (username.trim() === '') {
        document.getElementById('signup-username-error').textContent = 'Username is required.';
        isValid = false;
    }

    // Email validation
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('signup-email-error').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('signup-password-error').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (isValid) {
        alert('Signup successful! Redirecting to login...');
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
}

// Validation for Login Form
function validateLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let isValid = true;

    // Clear previous errors
    document.getElementById('login-email-error').textContent = '';
    document.getElementById('login-password-error').textContent = '';

    // Email validation
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('login-email-error').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Password validation
    if (password === '') {
        document.getElementById('login-password-error').textContent = 'Password is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Login successful! Redirecting to Facebook...');
        window.location.href = 'https://www.facebook.com';
    }
}