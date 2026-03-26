const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let successMsg = document.getElementById("successMsg");

    let isValid = true;

    // Clear previous messages
    document.querySelectorAll(".error").forEach(el => el.innerText = "");
    successMsg.innerText = "";

    // Name validation
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    } else {
        showSuccess(name);
    }

    // Email validation
    if (!validateEmail(email.value)) {
        showError(email, "Enter valid email");
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Password validation
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        showSuccess(password);
    }

    // Final success message
    if (isValid) {
        successMsg.innerText = "Form submitted successfully!";
    }
});

// Show error
function showError(input, message) {
    input.classList.add("error-border");
    input.classList.remove("success");
    input.nextElementSibling.innerText = message;
}

// Show success
function showSuccess(input) {
    input.classList.add("success");
    input.classList.remove("error-border");
}

// Email validation function
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
