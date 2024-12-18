document.addEventListener("DOMContentLoaded", () => {
    // Chatbot functionality
    const chatLog = document.getElementById('chatlog');
    const userInput = document.getElementById('user-input');

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value;
        appendMessage('user', message);
        userInput.value = '';

        if (message.toLowerCase().includes('hi')) {
            appendMessage('bot', 'Yes, how can I help you?');
        } else if (message.toLowerCase().includes('who created this website')) {
            appendMessage('bot', 'Quantum Quill group.');
        } else if (message.toLowerCase().includes('objectives of this community')) {
            appendMessage('bot', 'Our function is to provide all kinds of online services and tools.');
        } else if (message.toLowerCase().includes('suffering from errors or bugs or problems')) {
            appendMessage('bot', 'Try reloading your browser or go to the support section to explain your problem. It will be soon fixed.');
        } else {
            appendMessage('bot', 'I am not sure how to respond to that. Please check our FAQ or contact support.');
        }
    }

    window.sendMessage = sendMessage;

    // Close event section
    window.closeEvent = function(eventId) {
        document.getElementById(eventId).style.display = 'none';
    };
});