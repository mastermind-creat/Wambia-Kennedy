
document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input-field");
    const chatbotSend = document.getElementById("chatbot-send");

    // Toggle chatbot open/close
    chatbotToggle.addEventListener("click", () => {
        chatbotWindow.classList.toggle("open");
    });

    chatbotClose.addEventListener("click", () => {
        chatbotWindow.classList.remove("open");
    });

    // Function to add messages
    function addMessage(content, sender = "bot") {
        const message = document.createElement("div");
        message.classList.add("message", sender === "bot" ? "bot-message" : "user-message");
        
        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerHTML = `<p>${content}</p>`;
        
        message.appendChild(messageContent);
        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Typing indicator
    function showTyping() {
        const typing = document.createElement("div");
        typing.classList.add("message", "bot-message", "typing");
        typing.innerHTML = `<div class="message-content"><p>Typing...</p></div>`;
        chatbotMessages.appendChild(typing);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typing;
    }

        // Bot responses
    function botResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        let response = "🤔 Could you clarify that?";

        if (msg.includes("service")) {
            response = "💼 I provide Web Development, App Development, Logo Design, SEO Marketing, and more. Would you like a detailed breakdown?";
        } 
        else if (msg.includes("price") || msg.includes("cost")) {
            response = "💰 Pricing depends on the project. Websites usually start from Ksh. 20,000, apps from Ksh. 40,000. Can you share your budget so I can give a custom quote?";
        } 
        else if (msg.includes("contact")) {
            response = "📞 You can reach Wambia Kennedy directly at:<br>📧 kennyleyy0@gmail.com<br>📱 +254 743 394 373<br><br>Or chat with me now on WhatsApp 👉 <a href='https://wa.me/254743394373?text=Hi%20Wambia%2C%20I%20need%20help%20with...' target='_blank'>Click here</a>";
        } 
        else if (msg.includes("portfolio")) {
            response = "📂 You can view my portfolio here: <a href='https://lates-portfolio-v1.vercel.app/' target='_blank'>Portfolio Link</a>";
        } 
        else if (msg.includes("complex") || msg.includes("talk") || msg.includes("chat") || msg.includes("human")) {
            response = `<span>👨‍💻 Let me connect you directly to <span class="text-green-600"><strong>Wambia Kennedy</strong></span> for more details.<br><br>💬 Start a WhatsApp chat 👉 <a href='https://wa.me/254743394373?text=Hi%20Wambia%2C%20I%20have%20a%20question...' target='_blank' class="underline text-green-700">Click here</a></span>`;
        }

        const typing = showTyping();
        setTimeout(() => {
            typing.remove();
            addMessage(response, "bot");
        }, 1200);
    }


    // Send message
    function sendMessage() {
        const text = chatbotInput.value.trim();
        if (!text) return;

        addMessage(text, "user");
        chatbotInput.value = "";
        botResponse(text);
    }

    chatbotSend.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    // Quick replies
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("quick-reply")) {
            const message = e.target.getAttribute("data-message");
            addMessage(message, "user");
            botResponse(message);
        }
    });
});

