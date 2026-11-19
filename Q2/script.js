// Select HTML elements
const input = document.getElementById("userInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create validation function
function checkInput() {
    // Get user input
    const value = input.value.trim();

    // Check empty input
    if (value === "") {
        result.textContent = "Please enter a valid number!";
    } else {
        // Convert string to number
        const number = Number(value);

        // Check invalid number
        if (!Number.isFinite(number)) {
            result.textContent = "Please enter a valid number!";
        } else if (number < 10) {
            result.textContent = "The number is lower than 10";
        } else if (number > 10) {
            result.textContent = "The number is higher than 10";
        } else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Add click event
button.addEventListener("click", checkInput);