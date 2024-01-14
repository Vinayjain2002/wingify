// JavaScript code for form validation, user interactions, etc.

// Example: Validating email format
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
        // Display error message
    } else {
        // Remove error message
    }
});
