document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    document.getElementById('toggle-button').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
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
            // External links work as normal, no need for preventDefault() or additional logic
        });
    });
});



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



