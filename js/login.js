
    document.addEventListener('DOMContentLoaded', function () {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('userLogin').value;
        const password = document.getElementById('passLogin').value;
        
        if (username.trim() === '' || password.trim() === '') {
            alert('Username and password are required');
        } else {
            alert('Login successful');
            // loginForm.submit();
        }
    });
    
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const newUsername = document.getElementById('userSignUp').value;
        const newPassword = document.getElementById('passSignUp').value;
        const repeatedPassword = document.getElementById('passRepeat').value;
        const email = document.getElementById('emailSignUp').value;
        
        if (newUsername.trim() === '' || newPassword.trim() === '' || repeatedPassword.trim() === '' || email.trim() === '') {
            alert('All fields in the sign-up form are required');
        } else if (newPassword !== repeatedPassword) {
            alert('Passwords do not match');
        } else {
            alert('Sign-up successful');

            // signupForm.submit();
        }
    });
});