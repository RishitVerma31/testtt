function validateSignupForm() {
    // Reset error messages
    document.getElementById("full-name-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("username-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("confirm-password-error").style.display = "none";

    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var valid = true;

    // Validate full name
    if (fullName.trim() === "") {
        document.getElementById("full-name-error").textContent = "Full Name is required.";
        document.getElementById("full-name-error").style.display = "block";
        valid = false;
    }

    // Validate email
    if (email.trim() === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        document.getElementById("email-error").style.display = "block";
        valid = false;
    }

    // Validate username
    if (username.trim() === "") {
        document.getElementById("username-error").textContent = "Username is required.";
        document.getElementById("username-error").style.display = "block";
        valid = false;
    }

    // Validate password
    if (password.trim() === "") {
        document.getElementById("password-error").textContent = "Password is required.";
        document.getElementById("password-error").style.display = "block";
        valid = false;
    }

    // Validate confirm password
    if (confirmPassword.trim() === "") {
        document.getElementById("confirm-password-error").textContent = "Please confirm your password.";
        document.getElementById("confirm-password-error").style.display = "block";
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        document.getElementById("confirm-password-error").style.display = "block";
        valid = false;
    }

    return valid;
}
