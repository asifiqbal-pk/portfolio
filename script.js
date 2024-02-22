document.addEventListener('DOMContentLoaded', function() {
    
    $(document).ready(function() {
        // Sidebar toggle functionality
        const toggleButton = document.getElementById('toggle-button');
        const sidebar = document.getElementById('sidebar');
        const contentArea = document.querySelector('body');
    
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    
        contentArea.addEventListener('click', function(e) {
            if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggleButton) {
                sidebar.classList.remove('active');
            }
        });
    
        // Enhanced navigation handling for portfolio-specific sections
        document.querySelectorAll('.portfolio-nav ul li a').forEach(link => {
            link.addEventListener('click', function(e) {
                const hrefAttribute = this.getAttribute('href');
                if (hrefAttribute.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(hrefAttribute);
                    document.querySelectorAll('.dynamic-content .content-section').forEach(section => {
                        section.classList.remove('active');
                    });
                    if (targetSection) {
                        targetSection.classList.add('active');
                    } else {
                        console.error('Target section not found: ' + hrefAttribute);
                    }
                }
            });
        });
    
        // Initialize Owl Carousel
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoHeight: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
    
        $('.play').on('click', function() {
            owl.trigger('play.owl.autoplay', [1000]);
        });
    
        $('.stop').on('click', function() {
            owl.trigger('stop.owl.autoplay');
        });
    
        // Functionality for Branding Portfolio
        $('a[data-bs-toggle="tab"]').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
        });
    
        // Modal Functionality for Portfolio Images
        $('.portfolio-wrapper img').click(function() {
            var src = $(this).attr('src');
            $('#modalImage').attr('src', src);
            $('#imageModal').css('display', 'block');
        });
    
        var $span = $(".close").first();
        $span.on('click', function() {
            $('#imageModal').css('display', 'none');
        });
    
        $(window).on('click', function(event) {
            if ($(event.target).is('#imageModal')) {
                $('#imageModal').css('display', 'none');
            }
        });
    });
});