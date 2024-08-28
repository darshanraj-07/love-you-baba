// script.js

document.addEventListener('DOMContentLoaded', function() {
    var messages = [
        "Dear Dad, thank you for always being there with love, support, and a helping hand.",
        "To the world's greatest dad, you inspire me every day!",
        "Happy Father’s Day to the man who taught me everything I know.",
        "Dad, your love is a treasure. Happy Father’s Day!",
        "You’re my hero, Dad. Wishing you a wonderful Father's Day!"
    ];

    var images = [
        "baba1.jpg",
        "baba2.jpg",
        "baba3.jpg",
        "baba4.jpg",
        "baba5.jpg",
        "baba6.jpg",
        "baba7.jpg"
    ];

    var messageIndex = 0; // Separate index for messages
    var imageIndex = 0;   // Separate index for images
    var button = document.getElementById('changeMessage');
    var wishElement = document.querySelector('.wish p');
    var carouselImage = document.getElementById('carouselImage');

    button.addEventListener('click', function() {
        // Cycle through messages
        messageIndex = (messageIndex + 1) % messages.length;
        wishElement.textContent = messages[messageIndex];

        // Update imageIndex independently and reset if necessary
        imageIndex = (imageIndex + 1) % images.length;
        carouselImage.src = images[imageIndex];
    });

    // Automatically change the image every 5 seconds
    setInterval(function() {
        imageIndex = (imageIndex + 1) % images.length;
        carouselImage.src = images[imageIndex];
    }, 5000);

    // Play background music automatically
    var bgMusic = document.getElementById('bgMusic');
    bgMusic.play().catch(error => {
        console.log("Autoplay is disabled, playing music on interaction.");
    });

    // Attempt to play music on any user interaction if autoplay fails
    document.body.addEventListener('click', function() {
        bgMusic.play();
    });
});
