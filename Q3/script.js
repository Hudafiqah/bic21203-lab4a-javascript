// Select button and list
const button = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Create function
function generateNumbers() {
    // Clear existing items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // Create new list item
        const listItem = document.createElement("li");
        // Set text
        listItem.textContent = "The number is " + i;
        // Add item to ordered list
        numberList.appendChild(listItem);
    }
}

// Add click event
button.addEventListener("click", generateNumbers);