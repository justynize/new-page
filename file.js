 
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

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
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
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



     

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const genderInput = document.getElementById('gender');
    const emailInput2 = document.getElementById('email2');
    const passwordInput2 = document.getElementById('password2');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn2 = document.getElementById('submitBtn2');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    const genderError = document.getElementById('genderError');
    const emailError2 = document.getElementById('emailError2');
    const passwordError2 = document.getElementById('passwordError2');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateForm() {
        let valid = true;

        // ...Name validation...

        if (nameInput.value.trim() === "") {
            nameError.textContent = 'Please enter your name*';
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // ...Phone validation...

        if (phoneInput.value.trim() === "") {
            phoneError.textContent = 'Please enter your phone No*.';
            valid = false;
        } else {
            phoneError.textContent = "";
        }

        // ...Date of birth validation...

        if (dateInput.value.trim() === "") {
            dateError.textContent = 'Please enter your date of birth*.';
            valid = false;
        } else {
            dateError.textContent = "";
        }

        // ...Gender validation...

        if (genderInput.value === "") {
            genderError.textContent = "Enter your sex*.";
            valid = false;
        } else {
            genderError.textContent = "";
        }

        // ...Email validation...

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput2.value)) {
            emailError2.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError2.textContent = '';
        }

        //... Password validation...

        if (passwordInput2.value.length < 6) {
            passwordError2.textContent = 'Password must be at least 6 characters long.';
            valid = false;
        } else {
            passwordError2.textContent = '';
        }

        // ...Confirm password validation...

        if (confirmPasswordInput.value !== passwordInput2.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            valid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        submitBtn2.disabled = !valid;
    }

    
    
    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
    dateInput.addEventListener('input', validateForm);
    genderInput.addEventListener('input', validateForm);
    emailInput2.addEventListener('input', validateForm);
    passwordInput2.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

   
    document.getElementById('myForm2').addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });




    