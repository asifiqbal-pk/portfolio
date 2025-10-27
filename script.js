// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure jQuery is loaded before using $()
    if (typeof jQuery != 'undefined') {
        $(document).ready(function() {
            // Sidebar toggle functionality
            const toggleButton = document.getElementById('toggle-button');
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('main-content');

            if (toggleButton && sidebar && mainContent) {
                toggleButton.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                    mainContent.classList.toggle('active');
                });

                // Close sidebar when clicking outside on mobile (if active)
                mainContent.addEventListener('click', function(e) {
                    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggleButton) {
                        sidebar.classList.remove('active');
                        mainContent.classList.remove('active');
                    }
                });

                // Close sidebar when a navigation link is clicked (for mobile sidebar)
                const navLinks = document.querySelectorAll('#sidebar-content .vertical-nav ul li a');
                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        if (sidebar.classList.contains('active')) {
                            sidebar.classList.remove('active');
                            mainContent.classList.remove('active');
                        }
                    });
                });
            }

            // Portfolio navigation handling (for portfolio.html)
            // This ensures that when a portfolio category is clicked, the correct section is shown.
            document.querySelectorAll('.portfolio-nav ul li a').forEach(link => {
                link.addEventListener('click', function(e) {
                    const hrefAttribute = this.getAttribute('href');
                    if (hrefAttribute.startsWith('#')) {
                        e.preventDefault();
                        const targetSection = document.querySelector(hrefAttribute);

                        // Remove 'active' from all content sections
                        document.querySelectorAll('.dynamic-content .content-section').forEach(section => {
                            section.classList.remove('active');
                        });

                        // Add 'active' to the clicked section
                        if (targetSection) {
                            targetSection.classList.add('active');
                        } else {
                            console.error('Target section not found: ' + hrefAttribute);
                        }
                    }
                });
            });

            // Set the first portfolio tab as active on page load for portfolio.html
            // This ensures content is visible immediately.
            const firstPortfolioTab = document.querySelector('.portfolio-nav ul li a');
            if (firstPortfolioTab) {
                const initialTarget = document.querySelector(firstPortfolioTab.getAttribute('href'));
                if (initialTarget) {
                    initialTarget.classList.add('active');
                }
            }

            // Initialize Owl Carousel (for testimonials.html)
            // Checks if an element with class 'owl-carousel' exists before initializing.
            var owl = $('.owl-carousel');
            if (owl.length) {
                owl.owlCarousel({
                    items: 1, // Display one item at a time
                    loop: true, // Loop the carousel
                    margin: 10, // Space between items
                    autoplay: true, // Enable autoplay
                    autoHeight: false, // Auto height based on content
                    autoplayTimeout: 5000, // Autoplay interval (5 seconds)
                    autoplayHoverPause: true, // Pause autoplay on hover
                    nav: true, // Show navigation arrows
                    dots: true, // Show navigation dots
                    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"] // Custom nav icons
                });

                // Play/Stop buttons (if implemented in HTML)
                $('.play').on('click', function() {
                    owl.trigger('play.owl.autoplay', [1000]);
                });

                $('.stop').on('click', function() {
                    owl.trigger('stop.owl.autoplay');
                });
            }

            // Functionality for Branding Portfolio tabs (for portfolio.html)
            // This handles the tab switching for different branding categories.
            $('a[data-bs-toggle="tab"]').on('click', function(e) {
                e.preventDefault(); // Prevent default link behavior
                $(this).tab('show'); // Use Bootstrap's tab method to show the tab
            });

            // Modal Functionality for Portfolio Images (for portfolio.html)
            // This creates a lightbox effect when clicking on portfolio images.
            $('.portfolio-wrapper img').click(function() {
                var src = $(this).attr('src'); // Get the source of the clicked image
                $('#modalImage').attr('src', src); // Set the modal image source
                $('#imageModal').css('display', 'flex'); // Show the modal (using flex for centering)
            });

            // Close modal when close button is clicked
            var $span = $(".close").first();
            $span.on('click', function() {
                $('#imageModal').css('display', 'none'); // Hide the modal
            });

            // Close modal when clicking outside the image content
            $(window).on('click', function(event) {
                if ($(event.target).is('#imageModal')) {
                    $('#imageModal').css('display', 'none'); // Hide the modal
                }
            });
        });
    } else {
        console.error("jQuery is not loaded. Please ensure jQuery script is loaded before this script.");
    }
});
