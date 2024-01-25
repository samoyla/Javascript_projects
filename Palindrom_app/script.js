function isPalindrome(str) {
    const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanString === cleanString.split('').reverse().join('');
}

function checkPalindrome() {
    const userInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (userInput === "") {
        alert("Please input a value");
        return;
    }

    if (isPalindrome(userInput)) {
        resultElement.textContent = `${userInput} is a palindrome`;
    } else {
        resultElement.textContent = `${userInput} is not a palindrome`;
    }
}