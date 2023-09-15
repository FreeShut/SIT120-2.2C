function togglePasswordVisibility() {
    let passwordField = document.getElementById('password');
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Hide the signup form
    document.querySelector('.signup-container').style.display = 'none';

    // Show the success message with the background image of "2.jpg"
    document.getElementById('successMessage').style.display = 'flex'; // Changing to flex to keep the centered style
});

function login() {
    // Stub: You'd typically call your backend or an authentication service.
    showSuccess();
}

function googleLogin() {
    // Stub: You'd typically call an OAuth2 service or something like Firebase Authentication.
    showSuccess();
}

function showSuccess() {
    // Hide the signup form
    document.querySelector('.signup-container').style.display = 'none';

    // Show the success message with the background image of "2.jpg"
    document.getElementById('successMessage').style.display = 'flex';
}