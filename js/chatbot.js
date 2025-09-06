document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input-field");
    const chatbotSend = document.getElementById("chatbot-send");

    // Store conversation context
    let conversationContext = {
        lastTopic: null,
        userDetails: { projectType: null }
    };

    // Flag to track if user has interacted
    let hasInteracted = false;

    // Array of polite closers for variety
    const closers = ["Anything else I can help with? 😊", "Let me know what else you need! 🚀", "What’s next on your mind? 😄"];

    // Function to get a random element from an array
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Function to add messages with timestamp
    function addMessage(content, sender = "bot") {
        const message = document.createElement("div");
        message.classList.add("message", sender === "bot" ? "bot-message" : "user-message");
        
        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerHTML = `<p>${content}</p><span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
        
        message.appendChild(messageContent);
        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to add dynamic quick replies
    function addQuickReplies(replies) {
        const quickReplyContainer = document.createElement("div");
        quickReplyContainer.classList.add("quick-replies");
        replies.forEach(reply => {
            const button = document.createElement("button");
            button.classList.add("quick-reply");
            button.setAttribute("data-message", reply);
            button.setAttribute("aria-label", `Ask about ${reply.toLowerCase()}`);
            button.textContent = reply;
            quickReplyContainer.appendChild(button);
        });
        const lastMessage = chatbotMessages.querySelector(".bot-message:last-child .message-content");
        if (lastMessage) {
            lastMessage.appendChild(quickReplyContainer);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }

    // Typing indicator
    function showTyping() {
        const typing = document.createElement("div");
        typing.classList.add("message", "bot-message", "typing");
        typing.innerHTML = `<div class="message-content"><p>Typing...</p><span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>`;
        chatbotMessages.appendChild(typing);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typing;
    }

    // Notification dot toggle
    function showNotificationDot() {
        document.querySelector(".notification-dot").style.display = "block";
    }

    function hideNotificationDot() {
        document.querySelector(".notification-dot").style.display = "none";
    }

    // Auto-start conversation after 30 seconds
    function autoStartConversation() {
        if (!hasInteracted && !chatbotWindow.classList.contains("open")) {
            chatbotWindow.classList.add("open");
            const introMessage = "👋 Hi! I noticed you've been here for a bit. I'm Wambia's AI assistant, ready to help with your project needs! Want to explore my services or see my portfolio? 😊";
            const typing = showTyping();
            setTimeout(() => {
                typing.remove();
                addMessage(introMessage, "bot");
                addQuickReplies(["Tell me about your services", "What are your prices?", "Show me your portfolio"]);
                showNotificationDot();
            }, 1200);
        }
    }

    // Set timeout for auto-start (30 seconds)
    let autoStartTimeout = setTimeout(autoStartConversation, 30000);

    // Toggle chatbot open/close
    chatbotToggle.addEventListener("click", () => {
        chatbotWindow.classList.toggle("open");
        hasInteracted = true;
        clearTimeout(autoStartTimeout); // Cancel auto-start if user interacts
        hideNotificationDot();
    });

    chatbotClose.addEventListener("click", () => {
        chatbotWindow.classList.remove("open");
        hasInteracted = true;
        clearTimeout(autoStartTimeout);
    });

    // Enhanced botResponse function
    function botResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();
        let response = getRandomElement(["🤔 Could you clarify that?", "Hmm, can you tell me more? 😊", "Not sure I got that, could you explain?"]);
        let intent = null;

        // Intent recognition
        if (msg.includes("service") || msg.includes("what do you do") || msg.includes("offer")) {
            intent = "services";
            response = "💼 I provide Web Development, App Development, Logo Design, SEO Marketing, and more. Would you like a detailed breakdown of any of these services? 😊";
            conversationContext.lastTopic = "services";
        } 
        else if (msg.includes("price") || msg.includes("cost") || msg.includes("how much")) {
            intent = "pricing";
            if (conversationContext.lastTopic === "services" && conversationContext.userDetails.projectType) {
                response = `💰 For ${conversationContext.userDetails.projectType}, prices start at ${conversationContext.userDetails.projectType === "website" ? "Ksh. 20,000" : "Ksh. 40,000"}. Can you share your budget for a more tailored quote? 😄`;
            } else {
                response = "💰 Pricing depends on the project. Websites usually start from Ksh. 10,000 depending on the complexity and number of pages, apps from Ksh. 40,000. Can you share your budget or specify a service for a custom quote? 😊";
            }
            conversationContext.lastTopic = "pricing";
        } 
        else if (msg.includes("contact") || msg.includes("reach") || msg.includes("get in touch")) {
            intent = "contact";
            response = "📞 You can reach Wambia Kennedy directly at:<br>📧 kennyleyy0@gmail.com<br>📱 +254 743 394 373<br><br>Or chat now on WhatsApp 👉 <a href='https://wa.me/254743394373?text=Hi%20Wambia%2C%20I%20need%20help%20with...' target='_blank'>Click here</a><br><br>Want to discuss a specific project? 😄";
            conversationContext.lastTopic = "contact";
        } 
        else if (msg.includes("portfolio") || msg.includes("work") || msg.includes("projects")) {
            intent = "portfolio";
            response = "📂 You can view my portfolio here: <a href='https://lates-portfolio-v1.vercel.app/' target='_blank'>Portfolio Link</a><br><br>Interested in a specific type of project? 😊";
            conversationContext.lastTopic = "portfolio";
        } 
        else if (msg.includes("complex") || msg.includes("talk") || msg.includes("chat") || msg.includes("human")) {
            intent = "human";
            response = `<span>👨‍💻 Let me connect you to <span class="text-green-600"><strong>Wambia Kennedy</strong></span> for more details.<br><br>💬 Start a WhatsApp chat 👉 <a href='https://wa.me/254743394373?text=Hi%20Wambia%2C%20I%20have%20a%20question...' target='_blank' class="text-green-700 underline">Click here</a><br><br>Or share more details here, and I’ll assist! 😊</span>`;
            conversationContext.lastTopic = "human";
        }
        else if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
            intent = "greeting";
            response = "Hi! Excited to assist you! 😊 Want to explore my services, pricing, or portfolio?";
            conversationContext.lastTopic = "greeting";
        }
        else if (conversationContext.lastTopic) {
            if (conversationContext.lastTopic === "services") {
                if (msg.includes("web") || msg.includes("website")) {
                    intent = "services_website";
                    conversationContext.userDetails.projectType = "website";
                    response = "🌐 Web development includes responsive, user-friendly websites tailored to your needs. Want to know about pricing or specific features? 😊";
                }
                else if (msg.includes("app") || msg.includes("application")) {
                    intent = "services_app";
                    conversationContext.userDetails.projectType = "app";
                    response = "📱 App development covers iOS and Android apps, from simple to complex platforms. Interested in costs or the process? 😄";
                }
                else {
                    response = "🤔 Could you specify which service you’re curious about, like websites or apps? I’d love to dive deeper! 😊";
                }
            }
            else if (conversationContext.lastTopic === "pricing" && (msg.includes("budget") || msg.match(/\d+/))) {
                intent = "budget";
                const budgetMatch = msg.match(/\d+/);
                if (budgetMatch) {
                    conversationContext.userDetails.budget = parseInt(budgetMatch[0]);
                    response = `Thanks for sharing! A budget of Ksh. ${conversationContext.userDetails.budget},000 is noted. I can tailor a ${conversationContext.userDetails.projectType || "project"} to fit that. Want to discuss specific features? 😊`;
                } else {
                    response = "💰 Got a rough budget in mind? That’ll help me suggest the best options! 😄";
                }
            }
            else {
                response = "🤔 I’m not sure I caught that. Could you share more about what you’re looking for, like a specific service or pricing details? 😊";
            }
        }

        // Add a closer to encourage further interaction
        response += `<br><br>${getRandomElement(closers)}`;

        // Show typing indicator and send response
        const typing = showTyping();
        setTimeout(() => {
            typing.remove();
            addMessage(response, "bot");

            // Add dynamic quick replies based on intent
            if (intent === "services") {
                addQuickReplies(["Tell me about websites", "Tell me about apps", "What are your prices?"]);
            } else if (intent === "pricing") {
                addQuickReplies(["Share my budget", "Tell me about websites", "Tell me about apps"]);
            } else if (intent === "greeting") {
                addQuickReplies(["Tell me about your services", "What are your prices?", "Show me your portfolio"]);
            }
        }, 1200);
    }

    // Send message
    function sendMessage() {
        const text = chatbotInput.value.trim();
        if (!text) return;

        addMessage(text, "user");
        chatbotInput.value = "";
        hasInteracted = true;
        clearTimeout(autoStartTimeout);
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
            hasInteracted = true;
            clearTimeout(autoStartTimeout);
            botResponse(message);
        }
    });
});