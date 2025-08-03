// Chatbot Toggle
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatbot = document.getElementById('closeChatbot');

chatbotToggle.addEventListener('click', () => {
    chatbotModal.classList.toggle('hidden');
});

closeChatbot.addEventListener('click', () => {
    chatbotModal.classList.add('hidden');
});

// Chatbot Functionality
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const sendChatbotMessage = document.getElementById('sendChatbotMessage');

sendChatbotMessage.addEventListener('click', async () => {
    const message = chatbotInput.value.trim();
    chatbotInput.value = '';
    if (!message) return;

    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'mb-4 text-right';
    userMessageDiv.innerHTML = `
        <div class="bg-red-100 dark:bg-green-900 text-gray-900 dark:text-white rounded-lg p-3 inline-block max-w-[80%]">
            <p>${message}</p>
        </div>
    `;
    chatbotMessages.appendChild(userMessageDiv);

    // Add typing indicator
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'mb-4';
    botMessageDiv.innerHTML = `
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 inline-block">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatbotMessages.appendChild(botMessageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Fetch response from Vercel API
    try {
        const response = await fetch('https://seme-tvc-ajira.vercel.app/api/deepseek', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();
        const reply = data.reply || "Oops! I couldn't get a response right now.";

        botMessageDiv.innerHTML = `
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 inline-block max-w-[80%]">
                <p>${reply}</p>
            </div>
        `;
    } catch (error) {
        console.error('Chatbot error:', error);
        botMessageDiv.innerHTML = `
            <div class="bg-red-100 text-red-700 rounded-lg p-3 inline-block max-w-[80%]">
                <p>Oops! Something went wrong. Please try again later.</p>
            </div>
        `;
    }

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatbotMessage.click();
    }
});
