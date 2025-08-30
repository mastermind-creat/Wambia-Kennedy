// Theme toggler logic
      const themeToggle = document.getElementById("theme-toggle");
      const themeToggleIcon = document.getElementById("theme-toggle-icon");
      const htmlEl = document.documentElement;

      // Set default theme to dark
      if (!localStorage.getItem("theme")) {
        htmlEl.classList.add("dark");
        localStorage.setItem("theme", "dark");
        themeToggleIcon.classList.remove("fa-sun");
        themeToggleIcon.classList.add("fa-moon");
      } else {
        if (localStorage.getItem("theme") === "dark") {
          htmlEl.classList.add("dark");
          themeToggleIcon.classList.remove("fa-sun");
          themeToggleIcon.classList.add("fa-moon");
        } else {
          htmlEl.classList.remove("dark");
          themeToggleIcon.classList.remove("fa-moon");
          themeToggleIcon.classList.add("fa-sun");
        }
      }

      themeToggle.addEventListener("click", () => {
        if (htmlEl.classList.contains("dark")) {
          htmlEl.classList.remove("dark");
          localStorage.setItem("theme", "light");
          themeToggleIcon.classList.remove("fa-moon");
          themeToggleIcon.classList.add("fa-sun");
        } else {
          htmlEl.classList.add("dark");
          localStorage.setItem("theme", "dark");
          themeToggleIcon.classList.remove("fa-sun");
          themeToggleIcon.classList.add("fa-moon");
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Project data for modals
        const projects = {
          1: {
            title: "Portfolio Website",
            description:
              "A modern, responsive portfolio website that showcases professional work and skills with elegant animations and clean design. Built with the latest web technologies for optimal performance and user experience.",
            features: [
              "Responsive design that works on all devices",
              "Smooth animations and transitions",
              "Interactive project showcases",
              "Contact form with validation",
              "SEO optimized for better visibility",
              "Fast loading times and performance",
            ],
            tech: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "Font Awesome",
            ],
            image: "images/projects/portfolio.png",
            liveLink: "#",
            codeLink: "#",
          },
          2: {
            title: "AJIRA Job Portal",
            description:
              "A comprehensive job portal system designed to connect job seekers with employers efficiently. Features advanced search algorithms, user management, and real-time notifications.",
            features: [
              "Advanced job search and filtering",
              "User registration and profile management",
              "Employer dashboard for job posting",
              "Real-time notifications system",
              "Resume upload and management",
              "Admin panel for system management",
            ],
            tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "AJAX", "JavaScript"],
            image: "images/projects/ajira.png",
            liveLink: "#",
            codeLink: "#",
          },
          3: {
            title: "Online Library System",
            description:
              "A digital library management system that streamlines book cataloging, user management, and borrowing processes. Perfect for educational institutions and libraries.",
            features: [
              "Book cataloging and categorization",
              "User registration and authentication",
              "Borrowing and return management",
              "Fine calculation system",
              "Search and filter functionality",
              "Reports and analytics dashboard",
            ],
            tech: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap"],
            image: "images/projects/online_library.png",
            liveLink: "#",
            codeLink: "#",
          },
          4: {
            title: "SACCO Management System",
            description:
              "A comprehensive financial management system designed specifically for Savings and Credit Cooperative Organizations. Handles member management, loans, and financial reporting.",
            features: [
              "Member registration and management",
              "Loan application and processing",
              "Savings account management",
              "Financial reporting and analytics",
              "Payment tracking system",
              "Multi-branch support",
            ],
            tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
            image: "images/projects/sacco.png",
            liveLink: "#",
            codeLink: "#",
          },
          5: {
            title: "WRS Management System",
            description:
              "A warehouse management system that optimizes inventory tracking, order processing, and logistics management. Provides real-time insights for better decision making.",
            features: [
              "Inventory tracking and management",
              "Order processing and fulfillment",
              "Real-time stock monitoring",
              "Barcode scanning integration",
              "Reporting and analytics",
              "Multi-location support",
            ],
            tech: ["C#", "ASP.NET", "SQL Server", "Bootstrap", "JavaScript"],
            image: "images/projects/wrs.png",
            liveLink: "#",
            codeLink: "#",
          },
          6: {
            title: "Springs Management System",
            description:
              "A specialized management system for springs and water resource management with environmental monitoring features. Helps track water quality and resource utilization.",
            features: [
              "Water quality monitoring",
              "Resource utilization tracking",
              "Environmental data collection",
              "Reporting and analytics",
              "Alert system for anomalies",
              "Historical data analysis",
            ],
            tech: ["Python", "Flask", "SQLite", "Chart.js", "Bootstrap"],
            image: "images/projects/springs.png",
            liveLink: "#",
            codeLink: "#",
          },
          7: {
            title: "Personal Welding Website",
            description:
              "A professional website for a welding business, featuring service listings, gallery, contact form, and testimonials. Designed for local outreach and customer engagement.",
            features: [
              "Service listings with detailed descriptions",
              "Photo gallery of completed welding projects",
              "Online contact form for inquiries",
              "Customer testimonials section",
              "Responsive design for all devices",
              "SEO optimized for local search",
            ],
            tech: ["HTML5", "Tailwind CSS", "JavaScript", "Node.js", "Vercel"],
            image: "images/projects/welding.png",
            liveLink: "https://welding-flax.vercel.app/",
            codeLink: "https://github.com/mastermind-creat/Welding",
          },
        };

        // Filter projects
        const filterButtons = document.querySelectorAll(".filter-btn");
        const projectCards = document.querySelectorAll(".project-card");

        filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            // Update active button
            filterButtons.forEach((btn) => {
              btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            // Filter projects with animation
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                if (filter === "all" || card.dataset.category === filter) {
                  card.style.display = "block";
                  card.classList.add("animate-fade-in-up");
                } else {
                  card.style.display = "none";
                }
              }, index * 100);
            });
          });
        });

        // Search functionality
        const searchInput = document.getElementById("search");

        searchInput.addEventListener("input", () => {
          const searchTerm = searchInput.value.toLowerCase();

          projectCards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card
              .querySelector("p")
              .textContent.toLowerCase();

            if (
              title.includes(searchTerm) ||
              description.includes(searchTerm)
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });

        // Modal functionality
        const modal = document.getElementById("project-modal");
        const closeModal = document.getElementById("close-modal");
        const viewDetailsButtons =
          document.querySelectorAll(".view-details-btn");

        viewDetailsButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const projectId = button.dataset.project;
            const project = projects[projectId];

            // Populate modal with project data
            document.getElementById("modal-image").src = project.image;
            document.getElementById("modal-title").textContent = project.title;
            document.getElementById("modal-description").textContent =
              project.description;

            const featuresList = document.getElementById("modal-features");
            featuresList.innerHTML = "";
            project.features.forEach((feature) => {
              const li = document.createElement("li");
              li.className = "flex items-start";
              li.innerHTML = `<i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i><span>${feature}</span>`;
              featuresList.appendChild(li);
            });

            const techContainer = document.getElementById("modal-tech");
            techContainer.innerHTML = "";
            project.tech.forEach((tech) => {
              const span = document.createElement("span");
              span.className = "tech-badge";
              span.textContent = tech;
              techContainer.appendChild(span);
            });

            document.getElementById("modal-live-link").href = project.liveLink;
            document.getElementById("modal-code-link").href = project.codeLink;

            // Show modal
            modal.classList.remove("invisible", "opacity-0");
            document.body.style.overflow = "hidden";
          });
        });

        closeModal.addEventListener("click", () => {
          modal.classList.add("invisible", "opacity-0");
          document.body.style.overflow = "auto";
        });

        // Close modal when clicking outside
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.add("invisible", "opacity-0");
            document.body.style.overflow = "auto";
          }
        });

        // Load more projects (simulated)
        const loadMoreButton = document.getElementById("load-more");

        loadMoreButton.addEventListener("click", () => {
          loadMoreButton.innerHTML =
            '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';
          loadMoreButton.disabled = true;

          setTimeout(() => {
            loadMoreButton.innerHTML =
              '<i class="fas fa-check mr-2"></i>All Projects Loaded';
            loadMoreButton.disabled = true;
            loadMoreButton.classList.remove(
              "from-blue-600",
              "to-purple-600",
              "hover:scale-105"
            );
            loadMoreButton.classList.add(
              "from-slate-400",
              "to-slate-500",
              "cursor-not-allowed"
            );
          }, 1500);
        });

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        });
      });