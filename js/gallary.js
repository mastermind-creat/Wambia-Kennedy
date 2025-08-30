// Gallery data
      const galleryItems = [
        {
          id: 1,
          title: "Tech Startup Logo",
          category: "logo",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        },
        {
          id: 2,
          title: "Music Festival Poster",
          category: "poster",
          image:
            "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 3,
          title: "Digital Skills Training",
          category: "logo",
          image: "images/graphics/digitalskills.png",
        },
        {
          id: 4,
          title: "Coffee Shop Logo",
          category: "logo",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 5,
          title: "Art Exhibition Poster",
          category: "poster",
          image:
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
        },
        {
          id: 6,
          title: "Business Card Design",
          category: "card",
          image:
            "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 7,
          title: "Fitness Brand Logo",
          category: "logo",
          image:
            "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 8,
          title: "Movie Poster Design",
          category: "poster",
          image:
            "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        },
        {
          id: 9,
          title: "Birthday Card Design",
          category: "card",
          image:
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 10,
          title: "Restaurant Branding",
          category: "branding",
          image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        },
        {
          id: 11,
          title: "Concert Poster",
          category: "poster",
          image:
            "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 12,
          title: "Holiday Greeting Card",
          category: "card",
          image:
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 13,
          title: "Tech Startup Logo",
          category: "logo",
          image: "images/graphics/logo.jpg",
        },
        {
          id: 14,
          title: "Music Festival Poster",
          category: "poster",
          image: "images/graphics/new.png",
        },
        {
          id: 15,
          title: "Wedding Invitation Card",
          category: "card",
          image: "images/graphics/success.jpg",
        },
        {
          id: 16,
          title: "Coffee Shop Logo",
          category: "logo",
          image: "images/graphics/African_cup.png",
        },
        {
          id: 17,
          title: "Art Exhibition Poster",
          category: "poster",
          image: "images/graphics/Alicia.jpg",
        },
        {
          id: 18,
          title: "Business Card Design",
          category: "card",
          image: "images/graphics/Birthday.jpg",
        },
        {
          id: 19,
          title: "Fitness Brand Logo",
          category: "logo",
          image: "images/graphics/ajira.jpg",
        },
        {
          id: 20,
          title: "Movie Poster Design",
          category: "poster",
          image: "images/graphics/graphic1.png",
        },
        {
          id: 21,
          title: "Birthday Card Design",
          category: "card",
          image: "images/graphics/stvcAjira.jpg",
        },
        {
          id: 22,
          title: "Wedding Invitation Card",
          category: "card",
          image: "images/graphics/african.png",
        },
        {
          id: 3,
          title: "Coffee Shop Logo",
          category: "card",
          image:
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 24,
          title: "Art Exhibition Poster",
          category: "poster",
          image: "images/graphics/flower.jpg",
        },
        {
          id: 25,
          title: "Business Card Design",
          category: "card",
          image: "images/graphics/Fullstack Foundry.png",
        },
        {
          id: 26,
          title: "Fitness Brand Logo",
          category: "logo",
          image: "images/graphics/linkedin.png",
        },
        {
          id: 27,
          title: "Movie Poster Design",
          category: "poster",
          image: "images/graphics/logo.png",
        },
        {
          id: 28,
          title: "Birthday Card Design",
          category: "card",
          image: "images/graphics/projectTracko.jpg",
        },
        {
          id: 29,
          title: "Restaurant Logo",
          category: "logo",
          image: "images/graphics/systemdev.png",
        },
        {
          id: 30,
          title: "Concert Poster",
          category: "poster",
          image: "images/graphics/training.png",
        },
        {
          id: 31,
          title: "Holiday Greeting Card",
          category: "card",
          image: "images/graphics/worship.jpg",
        },
      ];

      // Initialize gallery
      const galleryGrid = document.getElementById("gallery-grid");
      const filterButtons = document.querySelectorAll(".filter-btn");
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxTitle = document.getElementById("lightbox-title");
      const lightboxCategory = document.getElementById("lightbox-category");
      const closeLightbox = document.getElementById("close-lightbox");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
      const pricingModal = document.getElementById("pricing-modal");
      const closePricing = document.getElementById("close-pricing");
      const getQuoteBtn = document.getElementById("get-quote-btn");
      const quoteForm = document.getElementById("quote-form");
      const quoteBtn = document.getElementById("quote-btn");
      const closeQuote = document.getElementById("close-quote");
      const contactBtn = document.getElementById("contact-btn");
      const pricingBtn = document.getElementById("pricing-btn");
      const contactHeroBtn = document.getElementById("contact-hero-btn");
      const loadMoreBtn = document.getElementById("load-more");
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      let currentImageIndex = 0;
      let filteredItems = [...galleryItems];
      let displayedItems = 8; // Initial number of items to display
      let currentFilter = "all";

      // Render gallery items
      function renderGallery(items, limit = displayedItems) {
        galleryGrid.innerHTML = "";
        const itemsToShow = items.slice(0, limit);

        itemsToShow.forEach((item, index) => {
          const galleryItem = document.createElement("div");
          galleryItem.className = `gallery-item relative overflow-hidden rounded-xl shadow-md transition-all duration-300 ${item.category}`;
          galleryItem.setAttribute("data-category", item.category);
          galleryItem.setAttribute("data-index", index);

          // Determine icon based on category
          let categoryIcon = "fa-palette"; // default
          if (item.category === "logo") categoryIcon = "fa-brush";
          if (item.category === "poster") categoryIcon = "fa-image";
          if (item.category === "card") categoryIcon = "fa-envelope";
          if (item.category === "branding") categoryIcon = "fa-tags";

          galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${
            item.title
          }" class="w-full h-64 object-cover lazy" loading="lazy">
                    <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-6">
                        <div class="flex items-center mb-2">
                            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white mr-3">
                                <i class="fas ${categoryIcon} text-sm"></i>
                            </div>
                            <span class="text-indigo-300 text-sm font-medium">${
                              item.category.charAt(0).toUpperCase() +
                              item.category.slice(1)
                            }</span>
                        </div>
                        <h3 class="text-white font-bold text-xl mb-4">${
                          item.title
                        }</h3>
                        <div class="flex space-x-3">
                            <button class="view-btn px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm hover:bg-white/20 transition border border-white/20">
                                <i class="fas fa-expand mr-1"></i> View
                            </button>
                            <button class="download-btn px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm hover:bg-white/20 transition border border-white/20" data-id="${
                              item.id
                            }">
                                <i class="fas fa-download mr-1"></i> Download
                            </button>
                        </div>
                    </div>
                `;

          galleryGrid.appendChild(galleryItem);

          // Add click event to open lightbox
          const viewBtn = galleryItem.querySelector(".view-btn");
          viewBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            currentImageIndex = index;
            openLightbox();
          });

          galleryItem.addEventListener("click", (e) => {
            if (
              !e.target.classList.contains("download-btn") &&
              !e.target.classList.contains("view-btn")
            ) {
              currentImageIndex = index;
              openLightbox();
            }
          });
        });

        // Update load more button visibility
        if (limit >= items.length) {
          loadMoreBtn.style.display = "none";
        } else {
          loadMoreBtn.style.display = "inline-block";
        }

        // Lazy load images
        lazyLoadImages();
      }

      // Lazy load images
      function lazyLoadImages() {
        const lazyImages = document.querySelectorAll(".lazy");

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.getAttribute("src");
              img.classList.add("loaded");
              observer.unobserve(img);
            }
          });
        });

        lazyImages.forEach((img) => {
          observer.observe(img);
        });
      }

      // Filter gallery items
      function filterGallery(category) {
        currentFilter = category;
        if (category === "all") {
          filteredItems = [...galleryItems];
        } else {
          filteredItems = galleryItems.filter(
            (item) => item.category === category
          );
        }
        displayedItems = 8; // Reset to initial count when filtering
        renderGallery(filteredItems);

        // Update active filter button
        filterButtons.forEach((btn) => {
          if (btn.dataset.filter === category) {
            btn.classList.remove(
              "bg-gray-200",
              "dark:bg-gray-700",
              "text-gray-700",
              "dark:text-gray-300"
            );
            btn.classList.add("bg-indigo-600", "text-white");
            btn.classList.add("active");
          } else {
            btn.classList.remove("bg-indigo-600", "text-white", "active");
            btn.classList.add(
              "bg-gray-200",
              "dark:bg-gray-700",
              "text-gray-700",
              "dark:text-gray-300"
            );
          }
        });
      }

      // Open lightbox
      function openLightbox() {
        const item = filteredItems[currentImageIndex];
        lightboxImg.src = item.image;
        lightboxImg.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxCategory.textContent =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        lightbox.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }

      // Close lightbox
      function closeLightboxFunc() {
        lightbox.classList.add("hidden");
        document.body.style.overflow = "";
      }

      // Navigate lightbox images
      function navigateLightbox(direction) {
        if (direction === "prev") {
          currentImageIndex =
            (currentImageIndex - 1 + filteredItems.length) %
            filteredItems.length;
        } else {
          currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
        }
        const item = filteredItems[currentImageIndex];
        lightboxImg.src = item.image;
        lightboxImg.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxCategory.textContent =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
      }

      // Open pricing modal
      function openPricingModal() {
        pricingModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }

      // Close pricing modal
      function closePricingModal() {
        pricingModal.classList.add("hidden");
        document.body.style.overflow = "";
      }

      // Toggle quote form
      function toggleQuoteForm() {
        quoteForm.classList.toggle("active");
        if (quoteForm.classList.contains("active")) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }

      // Scroll to contact section
      function scrollToContact() {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }

      // Download image
      function downloadImage(id) {
        const item = galleryItems.find((item) => item.id === id);
        if (item) {
          // In a real implementation, this would download the actual high-res file
          alert(
            `Downloading: ${item.title}\n\nIn a real implementation, this would trigger a file download.`
          );
        }
      }

      // Share image
      function shareImage(id) {
        const item = galleryItems.find((item) => item.id === id);
        if (item) {
          // In a real implementation, this would use the Web Share API or open share dialogs
          alert(
            `Sharing: ${item.title}\n\nShare options would appear here in a real implementation.`
          );
        }
      }

      // Load more items
      function loadMoreItems() {
        displayedItems += 4; // Load 4 more items
        if (currentFilter === "all") {
          renderGallery(galleryItems, displayedItems);
        } else {
          renderGallery(
            galleryItems.filter((item) => item.category === currentFilter),
            displayedItems
          );
        }
      }

      // Toggle mobile menu
      function toggleMobileMenu() {
        mobileMenu.classList.toggle("hidden");
      }

      // Close mobile menu when clicking on a link
      function closeMobileMenu() {
        mobileMenu.classList.add("hidden");
      }

      // Event listeners
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => filterGallery(btn.dataset.filter));
      });

      closeLightbox.addEventListener("click", closeLightboxFunc);
      prevBtn.addEventListener("click", () => navigateLightbox("prev"));
      nextBtn.addEventListener("click", () => navigateLightbox("next"));
      closePricing.addEventListener("click", closePricingModal);
      getQuoteBtn.addEventListener("click", () => {
        closePricingModal();
        toggleQuoteForm();
      });
      quoteBtn.addEventListener("click", toggleQuoteForm);
      closeQuote.addEventListener("click", toggleQuoteForm);
      contactBtn.addEventListener("click", scrollToContact);
      contactHeroBtn.addEventListener("click", scrollToContact);
      pricingBtn.addEventListener("click", openPricingModal);
      loadMoreBtn.addEventListener("click", loadMoreItems);
      mobileMenuButton.addEventListener("click", toggleMobileMenu);

      // Close mobile menu when clicking on links
      document.querySelectorAll("#mobile-menu a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });

      // Close modals when clicking outside
      window.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          closeLightboxFunc();
        }
        if (e.target === pricingModal) {
          closePricingModal();
        }
      });

      // Event delegation for download buttons
      document.addEventListener("click", (e) => {
        if (
          e.target.classList.contains("download-btn") ||
          e.target.closest(".download-btn")
        ) {
          e.preventDefault();
          e.stopPropagation();
          const btn = e.target.classList.contains("download-btn")
            ? e.target
            : e.target.closest(".download-btn");
          downloadImage(parseInt(btn.dataset.id));
        }
      });

      // Theme toggle functionality
      const themeToggle = document.getElementById("theme-toggle");
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      // Check for saved theme preference or use system preference
      const currentTheme =
        localStorage.getItem("theme") ||
        (prefersDarkScheme.matches ? "dark" : "light");

      if (currentTheme === "dark") {
        document.documentElement.classList.add("dark");
      }

      themeToggle.addEventListener("click", () => {
        const html = document.documentElement;
        html.classList.toggle("dark");

        const theme = html.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Initialize
      renderGallery(galleryItems);