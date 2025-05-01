 
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const genderInput = document.getElementById('gender');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const comfirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateForm(){
        let valid = true;

        // ...email vaildation...

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError.textContent = '';
        }
        
        // ...password validation...
        if (passwordInput.value.length < 4) {
            passwordError.textContent = 'Password must be at least 4 characters long.';
            valid = false;
        } else {
            passwordError.textContent = '';
        }
       submitBtn.disabled = !valid;
    }

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    document.getElementById('myForm').addEventListener('submit', function (e){
        e.preventDefault();
        alert("Form submitted successfully!");
    });