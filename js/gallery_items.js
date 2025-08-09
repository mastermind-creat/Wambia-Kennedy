const galleryItems = [
            { src: "images/graphics/logo.jpg", title: "Logo Design", category: "Logo", download: "images/graphics/logo.jpg" },
            { src: "images/graphics/Birthday.jpg", title: "Birthday Card", category: "Card", download: "images/graphics/Birthday.jpg" },
            { src: "images/graphics/new.png", title: "Event Poster", category: "Poster", download: "images/graphics/new.png" },
            { src: "images/graphics/success.jpg", title: "Success Card Graphic", category: "Card", download: "images/graphics/success.jpg" },
            { src: "images/graphics/African_cup.png", title: "Cup Design", category: "Cup", download: "images/graphics/African_cup.png" },
            { src: "images/graphics/Alicia.jpg", title: "Business Poster", category: "Poster", download: "images/graphics/Alicia.jpg" }
        ];

        let currentLightbox = 0;

        function openLightbox(idx) {
            currentLightbox = idx;
            const item = galleryItems[idx];
            document.getElementById('lightbox-img').src = item.src;
            document.getElementById('lightbox-title').textContent = item.title;
            document.getElementById('lightbox-category').textContent = `Category: ${item.category}`;
            document.getElementById('lightbox-actions').innerHTML = `
                <a href="${item.download}" download class="btn btn-social"><i class="fas fa-download"></i></a>
                <button class="btn btn-primary" onclick="scrollToContact();closeLightbox()">Hire Me</button>
                <a href="https://wa.me/254743394373?text=Hi,+I+saw+your+design+gallery+and+I+want+to+work+with+you!" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="mailto:kennyleyy0@gmail.com?subject=Design%20Inquiry%20-%20${encodeURIComponent(item.title)}" class="btn btn-social"><i class="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourportfolio.com&title=${encodeURIComponent(item.title)}" target="_blank" class="btn btn-social"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://wa.me/?text=Check+out+this+${encodeURIComponent(item.title)}+https://yourportfolio.com" target="_blank" class="btn btn-social"><i class="fab fa-whatsapp"></i></a>
                <a href="https://twitter.com/intent/tweet?text=Check+out+this+${encodeURIComponent(item.title)}+https://yourportfolio.com" target="_blank" class="btn btn-social"><i class="fab fa-twitter"></i></a>
                <button class="btn btn-tertiary" onclick="openPricingModal('${item.title}');closeLightbox()">Get Custom Design</button>
            `;
            document.getElementById('lightbox-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function prevLightbox() {
            currentLightbox = (currentLightbox - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentLightbox);
        }

        function nextLightbox() {
            currentLightbox = (currentLightbox + 1) % galleryItems.length;
            openLightbox(currentLightbox);
        }

        function openPricingModal(title) {
            document.getElementById('pricing-title').textContent = `${title} - Custom Design`;
            document.getElementById('pricing-price').textContent = "Starting at Ksh 500";
            document.getElementById('pricing-description').textContent = `Get a custom ${title} tailored to your needs. Contact for a quote!`;
            document.getElementById('pricing-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closePricingModal() {
            document.getElementById('pricing-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function openQuoteModal() {
            document.getElementById('quote-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeQuoteModal() {
            document.getElementById('quote-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }

        document.getElementById('quote-btn').addEventListener('click', openQuoteModal);

        document.getElementById('quote-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Quote request sent! I will get back to you soon.');
            closeQuoteModal();
            e.target.reset();
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                document.querySelectorAll('.gallery-item').forEach(item => {
                    item.classList.toggle('hidden', filter !== 'all' && item.getAttribute('data-category') !== filter);
                    if (!item.classList.contains('hidden')) {
                        item.classList.add('animate-fade-in');
                    }
                });
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
                btn.classList.add('bg-blue-600', 'text-white');
            });
        });

        function fadeUpOnScroll() {
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (item.getBoundingClientRect().top < window.innerHeight * 0.85) {
                    item.classList.add('animate-fade-in');
                }
            });
        }

        window.addEventListener('scroll', fadeUpOnScroll);
        window.addEventListener('load', fadeUpOnScroll);

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });