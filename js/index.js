 // GitHub Calendar setup
        GitHubCalendar(".calendar", "mastermind-creat", {
            responsive: true,
            tooltips: true,
            global_stats: true,
            summary_text: "My GitHub contributions in the last year"
        });

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        const iconMoon = document.getElementById('icon-moon');
        const iconSun = document.getElementById('icon-sun');

        function updateThemeIcons() {
            if (html.classList.contains('dark')) {
                iconMoon.classList.add('hidden');
                iconSun.classList.remove('hidden');
            } else {
                iconMoon.classList.remove('hidden');
                iconSun.classList.add('hidden');
            }
        }

        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        updateThemeIcons();

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
            updateThemeIcons();
        });
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('pointer-events-none');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.add('opacity-0');
                mobileMenu.classList.add('pointer-events-none');
            });
        });
        
        // Sticky header
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('bg-white', 'dark:bg-gray-800', 'shadow-md');
            } else {
                header.classList.remove('bg-white', 'dark:bg-gray-800', 'shadow-md');
            }
        });
        
        // Animated role text
        const roles = ["Web Developer", "Graphic Designer", "Tech Enthusiast"];
        let currentRole = 0;
        const roleElement = document.getElementById('role-text');
        
        function changeRole() {
            roleElement.classList.remove('animate-role');
            void roleElement.offsetWidth; // Trigger reflow
            roleElement.classList.add('animate-role');
            roleElement.textContent = roles[currentRole];
            currentRole = (currentRole + 1) % roles.length;
        }
        
        setInterval(changeRole, 3000);
        
        // Scroll animations
        const sections = document.querySelectorAll('.section');
        
        function checkScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
        
        // Form submission
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would typically integrate with EmailJS or another service
            alert('Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        });
        
        // Initialize progress bars animation
        document.querySelectorAll('.progress-bar').forEach(bar => {
            // This is just for demo purposes - in a real app you might want to trigger this on scroll
            bar.style.width = bar.style.width;
        });

        // Service modals
        const serviceModal = document.getElementById('service-modal');
        const closeModal = document.getElementById('close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');
        const modalFeatures = document.getElementById('modal-features');

        // Service data with prices
        const services = {
            'KRA Services': {
                price: 'Ksh 200+',
                description: 'Comprehensive tax registration and filing services to keep you compliant with Kenyan regulations.',
                features: [
                    'KRA PIN Registration (Ksh 200)',
                    'Filing Returns (Ksh 150)',
                    'Tax Compliance Certificates (Ksh 500)',
                    'iTax Assistance (Ksh 100)'
                ]
            },
            'HELB Assistance': {
                price: 'Ksh. 200+',
                description: 'Expert guidance through the HELB application process for both new and returning applicants.',
                features: [
                    'First-time Applications (Ksh 400)',
                    'Subsequent Applications (Ksh 200)',
                    'Loan Repayment Plans (Ksh 300)',
                    'Clearance Certificates (Ksh 500)'
                ]
            },
            'Computer Maintenance': {
                price: 'Ksh 300+',
                description: 'Keep your systems running smoothly with professional maintenance and optimization services.',
                features: [
                    'OS Installation (Ksh 1500)',
                    'Software Installations (Ksh 300-800)',
                    'Updates (Ksh 300)',
                    'Virus Removal (Ksh 700)'
                ]
            },
            'System Development': {
                price: 'Ksh 3,000+',
                description: 'Custom software solutions tailored to your specific needs and requirements.',
                features: [
                    'Fullstack Development (Ksh 10,000+)',
                    'School Project Development (Ksh 3,000+)',
                    'Custom Projects for Students (Ksh 5,000+)',
                    'Database Integration (Ksh 10,000+)'
                ]
            },
            'Web Development': {
                price: 'Ksh 1,000+',
                description: 'Modern, responsive websites that showcase your brand and engage your audience.',
                features: [
                    'UI/UX Design (Ksh 1,000+)',
                    'Personal Website/Portfolio (Ksh 3,000+)',
                    'Business Websites (Ksh 5,000+)',
                    'E-commerce Solutions (Ksh 10,000+)'
                ]
            },
            'Graphic Design': {
                price: 'Ksh 500+',
                description: 'Creative visual solutions that communicate your message effectively.',
                features: [
                    'Logo Design (Ksh 1,500)',
                    'Birthday/Wedding Cards (Ksh 800)',
                    'Posters (Ksh 1,200)',
                    'Social Media Graphics (Ksh 500)'
                ]
            }
        };

        // Open modal when service details button is clicked
        document.querySelectorAll('.service-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = btn.closest('.service-card');
                const serviceTitle = card.querySelector('h3').textContent;
                const service = services[serviceTitle];
                
                modalTitle.textContent = serviceTitle;
                modalPrice.textContent = `Price: ${service.price}`;
                modalDescription.textContent = service.description;
                
                // Clear previous features
                modalFeatures.innerHTML = '';
                
                // Add new features
                service.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.className = 'flex items-center';
                    li.innerHTML = `<i class="fas fa-check-circle text-blue-500 dark:text-blue-400 mr-2"></i><span>${feature}</span>`;
                    modalFeatures.appendChild(li);
                });
                
                serviceModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal
        closeModal.addEventListener('click', () => {
            serviceModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) {
                serviceModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        // Blog filter functionality
        document.querySelectorAll('#blog .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                // In a real implementation, you would filter blog posts here
                document.querySelectorAll('#blog .filter-btn').forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
                btn.classList.add('bg-blue-600', 'text-white');
            });
        });

        // Blog search functionality
        document.getElementById('blog-search').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // In a real implementation, you would search blog posts here
        });

        // Load GitHub activity
        async function loadGitHubActivity() {
            try {
                const response = await fetch('https://api.github.com/users/mastermind-creat/events');
                const data = await response.json();
                
                let html = '';
                data.slice(0, 5).forEach(event => {
                    if (event.type === 'PushEvent') {
                        const repo = event.repo.name.split('/')[1];
                        const date = new Date(event.created_at).toLocaleDateString();
                        
                        html += `
                            <div class="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                                <div class="flex items-center mb-2">
                                    <span class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mr-2">${repo}</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">${date}</span>
                                </div>
                                <p class="text-gray-700 dark:text-gray-300">${event.payload.commits[0].message}</p>
                            </div>
                        `;
                    }
                });
                
                document.getElementById('github-feed').innerHTML = html || '<p>No recent activity found</p>';
            } catch (error) {
                document.getElementById('github-feed').innerHTML = '<p>Failed to load GitHub activity</p>';
            }
        }

        // Load Twitter feed (Note: Twitter API requires authentication)
        function loadTwitterFeed() {
            // In a real implementation, you would use Twitter API here
            document.getElementById('twitter-feed').innerHTML = `
                <p class="text-gray-500 dark:text-gray-400">
                    Twitter feed would appear here. Requires Twitter API integration.
                </p>
                <a href="https://x.com/MastermindCreat?s=09" target="_blank" class="inline-block mt-4 text-blue-500 hover:underline">
                    View my Twitter profile <i class="fas fa-external-link-alt ml-1"></i>
                </a>
            `;
        }

        // Load initial data
        loadGitHubActivity();
        loadTwitterFeed();

        // Markdown editor/preview toggle for blog posts
        function setupMarkdownEditor() {
            const markdownEditor = document.getElementById('markdown-editor');
            if (markdownEditor) {
                const preview = document.getElementById('markdown-preview');
                const textarea = document.getElementById('markdown-content');
                
                textarea.addEventListener('input', (e) => {
                    // In a real implementation, you would convert markdown to HTML here
                    // Using a library like marked.js or showdown
                    preview.innerHTML = marked(e.target.value);
                });
            }
        }

        // Chatbot functionality
        const chatbotWidget = document.getElementById('chatbot-widget');
        const chatbotModal = document.getElementById('chatbot-modal');
        const closeChatbot = document.getElementById('close-chatbot');
        const chatbotMessages = document.getElementById('chatbot-messages');
        const chatbotInput = document.getElementById('chatbot-input');
        const sendChat = document.getElementById('send-chat');

        // FAQ responses
        const faqResponses = {
            "services": "I offer web development, graphic design, KRA services, HELB assistance, and computer maintenance. Check my Services section for details!",
            "pricing": "My pricing starts from Ksh 500 for graphic designs and Ksh 3,000 for websites. See my Projects section for pricing tiers.",
            "contact": "You can reach me at +254 743 394 373 or kennyleyy0@gmail.com. I'm also on WhatsApp!",
            "experience": "I have 5+ years of experience in web development and design.",
            "portfolio": "You can view my portfolio projects in the Projects section of this website."
        };

        chatbotWidget.addEventListener('click', () => {
            chatbotModal.classList.toggle('hidden');
        });

        closeChatbot.addEventListener('click', () => {
            chatbotModal.classList.add('hidden');
        });

        function addBotMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-[80%]';
            messageDiv.innerHTML = `<p>${text}</p>`;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function addUserMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'bg-blue-500 text-white p-3 rounded-lg max-w-[80%] ml-auto';
            messageDiv.innerHTML = `<p>${text}</p>`;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        sendChat.addEventListener('click', sendMessage);
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        function sendMessage() {
            const message = chatbotInput.value.trim();
            if (message) {
                addUserMessage(message);
                chatbotInput.value = '';
                
                // Simple AI response logic
                setTimeout(() => {
                    let response = "I'm not sure I understand. Try asking about my services, pricing, or experience.";
                    const lowerMsg = message.toLowerCase();
                    
                    if (lowerMsg.includes('service') || lowerMsg.includes('offer')) {
                        response = faqResponses.services;
                    } else if (lowerMsg.includes('price') || lowerMsg.includes('cost')) {
                        response = faqResponses.pricing;
                    } else if (lowerMsg.includes('contact') || lowerMsg.includes('reach')) {
                        response = faqResponses.contact;
                    } else if (lowerMsg.includes('experience') || lowerMsg.includes('year')) {
                        response = faqResponses.experience;
                    } else if (lowerMsg.includes('portfolio') || lowerMsg.includes('work')) {
                        response = faqResponses.portfolio;
                    }
                    
                    addBotMessage(response);
                }, 500);
            }
        }

        // Call this when loading a blog post editor page
        setupMarkdownEditor();