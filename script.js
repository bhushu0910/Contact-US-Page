const form = document.getElementById("contactForm");
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const firstNameError = document.getElementById("firstNameError");
        const lastNameError = document.getElementById("lastNameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        form.addEventListener("submit", (event) => {
            event.preventDefault(); 
            let isValid = true;

            // Validate first name
            if (firstNameInput.value.trim() === "") {
                firstNameError.textContent = "This field is required";
                isValid = false;
            } else {
                firstNameError.textContent = "";
            }

            // Validate last name
            if (lastNameInput.value.trim() === "") {
                lastNameError.textContent = "This field is required";
                isValid = false;
            } else {
                lastNameError.textContent = "";
            }

            // Validate email
            if (!validateEmail(emailInput.value)) {
                emailError.textContent = "Please enter a valid email address";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Validate message
            if (messageInput.value.trim() === "") {
                messageError.textContent = "This field is required";
                isValid = false;
            } else {
                messageError.textContent = "";
            }

            if (isValid) {
                // Submit the form if all fields are valid
                // You can replace this with your form submission logic
                alert("Form submitted successfully!");
                form.reset(); 
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
