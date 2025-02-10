const form = document.querySelector('form');
const input = document.getElementById('text-input');
const checkBtn = document.getElementById("check-btn");
const systemReply = document.getElementById("result"); 
let userInput;

systemReply.style.display = "none";

// Prevent form submission
form.addEventListener('submit', (e) => e.preventDefault());

checkBtn.addEventListener('click', function() {
    // Get the input value
    userInput = input.value;

    // Check for empty input
    if (!userInput) {
        alert("Please input a value");
        return;
    }

    //Clean input
    let uniformInput = userInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Save the original input
    const originalInput = input.value;

    //Reverse uniformInput and check if it is the same as uniformInput
    const reversedInput = uniformInput.split('').reverse().join('');

    if (uniformInput === reversedInput) {
        systemReply.innerHTML = `${originalInput} is a palindrome`;
        systemReply.style.display = "block";
    } else {
        systemReply.style.display = "block";
        systemReply.innerHTML = `${originalInput} is not a palindrome`;
    }
});




