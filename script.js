//your JS code here. If required.
// Keep track of the currently playing audio
let currentAudio = null;

// Function to play sound
function playSound(soundName) {
    // Stop any currently playing sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new Audio instance and play the selected sound
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
}

// Function to stop sound
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Add event listeners to all buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");

    // Add click event to each sound button
    buttons.forEach(button => {
        const soundName = button.getAttribute("data-sound");
        button.addEventListener("click", () => playSound(soundName));
    });

    // Add click event to the stop button
    stopButton.addEventListener("click", stopSound);
});
