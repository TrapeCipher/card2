const text = "CyberSec / Coding"; // Text to type
const typingSpeed = 50; // Speed of typing (milliseconds per character)
const backspacingSpeed = 50; // Speed of backspacing (milliseconds per character)
const delayAfterTyping = 6000; // Delay after finishing typing (5 seconds)
const delayAfterBackspacing = 1000; // Delay after backspacing before restarting (1 second)

const typewriterElement = document.getElementById("typewriter");

function typeWriter(index = 0) {
    if (index < text.length) {
        typewriterElement.textContent += text[index];
        setTimeout(() => {
            typeWriter(index + 1);
        }, typingSpeed);
    } else {
        setTimeout(() => {
            backspace(text.length);
        }, delayAfterTyping);
    }
}

function backspace(index) {
    if (index > 0) {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, index - 1);
        setTimeout(() => {
            backspace(index - 1);
        }, backspacingSpeed);
    } else {
        setTimeout(() => {
            typeWriter(); // Restart typing after backspacing
        }, delayAfterBackspacing);
    }
}

// Start the typing effect
typeWriter();