document.addEventListener('DOMContentLoaded', function() {
    
    // Sidebar toggle functionality
    const toggleButton = document.getElementById('toggle-button');
    const sidebar = document.getElementById('sidebar');
    const contentArea = document.querySelector('body'); // Selecting the body as the area to listen for clicks

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    contentArea.addEventListener('click', function(e) {
    // Check if sidebar is active and the clicked target is not the sidebar or toggle button
        if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggleButton) {
            sidebar.classList.remove('active');
        }
    });
   
    // Enhanced navigation handling for portfolio-specific sections
    const portfolioLinks = document.querySelectorAll('.portfolio-nav ul li a');

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const hrefAttribute = this.getAttribute('href');
            // Check if the href attribute contains '#', indicating an internal section link
            if (hrefAttribute.startsWith('#')) {
                e.preventDefault(); // Prevent default link behavior for internal navigation

                const targetId = hrefAttribute;
                const targetSection = document.querySelector(targetId);
                const contentSections = document.querySelectorAll('.dynamic-content .content-section');

                // Hide all content sections
                contentSections.forEach(section => section.classList.remove('active'));

                // Show the target content section
                if (targetSection) {
                    targetSection.classList.add('active');
                } else {
                    console.error('Target section not found: ' + targetId);
                }
            }
        });
    });
});


//Owl Carousel Initialization and Controls//
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoHeight:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// Modal Functionality for Portfolio Images //

    $(document).ready(function(){
        // Select all images within the portfolio-wrapper class and add click event
        $('.portfolio-wrapper img').click(function(){
            var src = $(this).attr('src'); // Get the source of the clicked image
            $('#modalImage').attr('src', src); // Set the source of the modal image to the clicked image's source
            $('#imageModal').css('display', 'block'); // Display the modal
        });

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            $('#imageModal').css('display', 'none');
        }

        // Also close the modal if the user clicks anywhere outside of the modal image
        window.onclick = function(event) {
            if (event.target == document.getElementById('imageModal')) {
                $('#imageModal').css('display', 'none');
            }
        }
    });

