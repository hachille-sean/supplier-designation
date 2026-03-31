import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Scroll chat to bottom on load
    const chatArea = document.getElementById('chatArea');
    if (chatArea) {
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    // Add gentle delay to sequential animations for message bubbles
    const bubbles = document.querySelectorAll('.message-bubble');
    bubbles.forEach((bubble, index) => {
        bubble.style.animationDelay = `${index * 0.15}s`;
    });
});
