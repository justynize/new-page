const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const submitBtn = document.getElementById("submitBtn");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm() {
    let valid = true;

    // ...email vaildation...

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // ...password validation...
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    submitBtn.disabled = !valid;
}

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    window.alert("Form submitted successfully!");
});