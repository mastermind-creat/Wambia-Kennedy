        // GitHub Calendar setup
        GitHubCalendar(".calendar", "mastermind-creat", {
            responsive: true,
            tooltips: true,
            global_stats: true,
            summary_text: "My GitHub contributions in the last year"
        });

        // Scroll Progress Indicator
        const scrollProgress = document.getElementById('scroll-progress');
        const backToTop = document.getElementById('back-to-top');

        function updateScrollProgress() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }

        function toggleBackToTop() {
            if (window.pageYOffset > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        }

        window.addEventListener('scroll', () => {
            updateScrollProgress();
            toggleBackToTop();
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // ==========================
        // MODERN SCROLL ANIMATIONS
        // ==========================

        // Enhanced Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Add section transition effect
                    if (entry.target.classList.contains('section-transition')) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 200);
                    }
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .fade-in, .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .section-transition').forEach(el => {
            observer.observe(el);
        });

        // ==========================
        // ENHANCED SCROLL EFFECTS
        // ==========================

        // Section-to-section smooth transitions
        function initSectionTransitions() {
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';

            function updateActiveSection() {
                const scrollPos = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        if (currentSection !== sectionId) {
                            currentSection = sectionId;
                            
                            // Add entrance animation to section
                            section.classList.add('animate');
                            
                            // Update navigation active state
                            updateNavigationActive(sectionId);
                        }
                    }
                });
            }

            function updateNavigationActive(sectionId) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

            window.addEventListener('scroll', updateActiveSection);
            updateActiveSection(); // Initial call
        }

        // Magnetic button effect
        function initMagneticButtons() {
            const magneticButtons = document.querySelectorAll('.btn-magnetic');
            
            magneticButtons.forEach(button => {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
                });
                
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translate(0px, 0px) scale(1)';
                });
            });
        }

        // Enhanced floating elements animation
        function initFloatingElements() {
            const floatingElements = document.querySelectorAll('.floating-text, .float-animation');
            
            floatingElements.forEach((element, index) => {
                // Add random delay for more natural movement
                element.style.animationDelay = `${index * 0.5}s`;
                
                // Add mouse interaction
                element.addEventListener('mouseenter', () => {
                    element.style.animationPlayState = 'paused';
                    element.style.transform = 'translateY(-15px) scale(1.05)';
                });
                
                element.addEventListener('mouseleave', () => {
                    element.style.animationPlayState = 'running';
                    element.style.transform = '';
                });
            });
        }

        // ==========================
        // CUSTOM CURSOR
        // ==========================

        // Create custom cursor elements
        const cursorDot = document.createElement('div');
        const cursorOutline = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        cursorOutline.className = 'cursor-outline';
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        // Cursor movement
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth cursor dot movement
            cursorDot.style.left = mouseX - 4 + 'px';
            cursorDot.style.top = mouseY - 4 + 'px';

            // Smooth cursor outline movement
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            cursorOutline.style.left = outlineX - 20 + 'px';
            cursorOutline.style.top = outlineY - 20 + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor hover effects
        document.querySelectorAll('a, button, .service-card, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('cursor-hover');
            });
        });

        // ==========================
        // PARALLAX EFFECTS
        // ==========================

        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
            
            parallaxElements.forEach(el => {
                const speed = el.classList.contains('parallax-slow') ? 0.5 : 
                             el.classList.contains('parallax-medium') ? 0.3 : 0.1;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }

        window.addEventListener('scroll', updateParallax);

        // ==========================
        // TEXT REVEAL ANIMATION
        // ==========================

        function initTextReveal() {
            const textElements = document.querySelectorAll('.text-reveal');
            textElements.forEach(el => {
                const text = el.textContent;
                el.innerHTML = text.split('').map(char => 
                    char === ' ' ? ' ' : `<span>${char}</span>`
                ).join('');
            });
        }

        // ==========================
        // PROGRESS BARS ANIMATION
        // ==========================

        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width') || bar.style.width;
                if (width) {
                    bar.style.setProperty('--progress-width', width);
                    setTimeout(() => {
                        bar.classList.add('animate');
                    }, 100);
                }
            });
        }

        // Animate modern skills progress bars
        function animateSkillsProgress() {
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                const progressBar = item.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width');
                    if (width) {
                        progressBar.style.setProperty('--skill-width', width);
                        progressBar.style.width = width;
                    }
                }
            });
        }

        // ==========================
        // CARD TILT EFFECT
        // ==========================

        function initCardTilt() {
            const cards = document.querySelectorAll('.card-tilt');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                });
            });
        }

        // ==========================
        // LOADING ANIMATIONS
        // ==========================

        function showSkeletonLoading() {
            const skeletonElements = document.querySelectorAll('.skeleton');
            skeletonElements.forEach(el => {
                el.style.display = 'block';
            });
        }

        function hideSkeletonLoading() {
            const skeletonElements = document.querySelectorAll('.skeleton');
            skeletonElements.forEach(el => {
                el.style.display = 'none';
            });
        }

        // ==========================
        // MICRO-INTERACTIONS
        // ==========================

        // Add wiggle effect to buttons on click
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.add('wiggle');
                setTimeout(() => {
                    this.classList.remove('wiggle');
                }, 500);
            });
        });

        // Add bounce effect to cards on hover
        document.querySelectorAll('.service-card, .project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('bounce-in');
            });
        });

        // ==========================
        // LOADING SCREEN
        // ==========================

        function showLoadingScreen() {
            const loadingScreen = document.getElementById('loading-screen');
            const loadingBar = document.getElementById('loading-bar');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 100) progress = 100;
                loadingBar.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        loadingScreen.style.opacity = '0';
                        loadingScreen.style.visibility = 'hidden';
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                        }, 300);
                    }, 500);
                }
            }, 100);
        }

        // ==========================
        // FLOATING ACTION MENU
        // ==========================

        function initFloatingActionMenu() {
            const fabToggle = document.getElementById('fab-toggle');
            const fabOptions = document.getElementById('fab-options');
            const fabIcon = document.getElementById('fab-icon');
            let isOpen = false;

            fabToggle.addEventListener('click', () => {
                isOpen = !isOpen;
                
                if (isOpen) {
                    fabOptions.classList.remove('opacity-0', 'invisible', 'scale-75');
                    fabOptions.classList.add('opacity-100', 'visible', 'scale-100');
                    fabIcon.style.transform = 'rotate(45deg)';
                } else {
                    fabOptions.classList.add('opacity-0', 'invisible', 'scale-75');
                    fabOptions.classList.remove('opacity-100', 'visible', 'scale-100');
                    fabIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (isOpen && !fabToggle.contains(e.target) && !fabOptions.contains(e.target)) {
                    isOpen = false;
                    fabOptions.classList.add('opacity-0', 'invisible', 'scale-75');
                    fabOptions.classList.remove('opacity-100', 'visible', 'scale-100');
                    fabOptions.style.pointerEvents = 'none';
                    fabIcon.style.transform = 'rotate(0deg)';
                }
            });
        }

        // ==========================
        // TYPING ANIMATION
        // ==========================

        function initTypingAnimation() {
            const roleText = document.getElementById('role-text');
            const roles = [
                'Web Developer',
                'Graphic Designer', 
                'Tech Enthusiast',
                'UI/UX Designer',
                'Full Stack Developer'
            ];
            
            let currentRole = 0;
            let currentChar = 0;
            let isDeleting = false;
            
            function typeRole() {
                const current = roles[currentRole];
                
                if (isDeleting) {
                    roleText.textContent = current.substring(0, currentChar - 1);
                    currentChar--;
                } else {
                    roleText.textContent = current.substring(0, currentChar + 1);
                    currentChar++;
                }
                
                let typeSpeed = isDeleting ? 50 : 100;
                
                if (!isDeleting && currentChar === current.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && currentChar === 0) {
                    isDeleting = false;
                    currentRole = (currentRole + 1) % roles.length;
                    typeSpeed = 500;
                }
                
                setTimeout(typeRole, typeSpeed);
            }
            
            typeRole();
        }

        // ==========================
        // SMOOTH SCROLLING
        // ==========================

        function initSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // ==========================
        // PARTICLE EFFECTS
        // ==========================

        function initParticles() {
            if (typeof particlesJS !== 'undefined') {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: 80, density: { enable: true, value_area: 800 } },
                        color: { value: '#3b82f6' },
                        shape: { type: 'circle' },
                        opacity: { value: 0.5, random: false },
                        size: { value: 3, random: true },
                        line_linked: { enable: true, distance: 150, color: '#3b82f6', opacity: 0.4, width: 1 },
                        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                    },
                    retina_detect: true
                });
            }
        }

        // ==========================
        // INITIALIZE ALL FEATURES
        // ==========================

        // Initialize on DOM load
        document.addEventListener('DOMContentLoaded', () => {
            showLoadingScreen();
            initTextReveal();
            initCardTilt();
            animateProgressBars();
            animateSkillsProgress();
            initFloatingActionMenu();
            initTypingAnimation();
            initSmoothScrolling();
            initParticles();
            initSectionTransitions();
            initMagneticButtons();
            initFloatingElements();
        });

        // ==========================
        // PERFORMANCE OPTIMIZATIONS
        // ==========================

        // Throttle scroll events for better performance
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener('scroll', () => {
            requestTick();
            ticking = false;
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
        const menuToggle = document.getElementById("menu-toggle");
        const menuClose = document.getElementById("menu-close");
        const mobileMenu = document.getElementById("mobile-menu");

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("opacity-100");
            mobileMenu.classList.toggle("pointer-events-auto");
            mobileMenu.classList.toggle("opacity-0");
            mobileMenu.classList.toggle("pointer-events-none");
        });

        menuClose.addEventListener("click", () => {
            mobileMenu.classList.add("opacity-0", "pointer-events-none");
            mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
        });

        // Optional: close menu when a link is clicked
        document.querySelectorAll("#mobile-menu a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("opacity-0", "pointer-events-none");
                mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
            });
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
                        'Software Development': {
                price: 'Ksh 70,000+',
                description: 'Custom software solutions designed to solve real business challenges with scalability in mind.',
                features: [
                    'Fullstack Development (Ksh 90,000+)',
                    'School Project Development (Ksh 10,000+)',
                    'Custom Projects for Students (Ksh 12,000+)',
                    'Database Integration (Ksh 40,000+)'
                ]
            },
            'Web Development': {
                price: 'Ksh 10,000+',
                description: 'Responsive, modern websites that elevate your brand presence and drive engagement.',
                features: [
                    'UI/UX Design (Ksh 5,000+)',
                    'Personal Website/Portfolio (Ksh 12,000+)',
                    'Business Websites (Ksh 20,000+)',
                    'E-commerce Solutions (Ksh 50,000+)'
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
            },
            'Virtual Assistance': {
                price: 'Ksh 3,000+ per task / Ksh 15,000+ monthly',
                description: 'Reliable virtual assistance services to help you stay productive, whether remotely or onsite.',
                features: [
                    'Remote Administrative Support (Ksh 3,000+ per task)',
                    'Social Media Management (Ksh 8,000+ monthly)',
                    'Email & Calendar Management (Ksh 5,000+ monthly)',
                    'Onsite Assistance – Events Coverage (Photography & Videography) (Ksh 10,000+ per event)',
                    'Data Entry & Research (Ksh 4,000+ per task)'
                ]
            },

            'Deployment, Hosting & Troubleshooting': {
                price: 'Ksh 4,000+ per task',
                description: 'Professional support for deployment, hosting, and troubleshooting to keep your projects running smoothly.',
                features: [
                    'Deployments on Vercel, Netlify & GitHub Pages (Ksh 4,000+ per project)',
                    'WordPress Setup & Hosting (Ksh 6,000+ per site)',
                    'Firebase & Supabase Integration (Ksh 5,000+ per setup)',
                    'Server / Hosting Troubleshooting & Fixes (Ksh 3,000+ per issue)',
                    'Custom Domain & SSL Configuration (Ksh 2,500+ per setup)'
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

        