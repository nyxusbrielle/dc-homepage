
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all slides
    const slides = document.querySelectorAll('.slide');
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    
    // Hide all slides initially
    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }
    
    // Show specific slide by index
    function showSlide(index) {
        hideAllSlides();
        if (index >= 0 && index < totalSlides) {
            slides[index].style.display = 'block';
            currentSlideIndex = index;
        }
    }
    
    // Get slide index by year
    function getSlideIndexByYear(year) {
        const targetId = `${year}-rehearsal`;
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].id === targetId) {
                return i;
            }
        }
        return 0; // Default to first slide if not found
    }
    
    // Handle hash navigation on page load
    function handleHashNavigation() {
        const hash = window.location.hash;
        if (hash) {
            // Extract year from hash (e.g., #2006-collection -> 2006)
            const yearMatch = hash.match(/#(\d{4})-rehearsal/);
            if (yearMatch) {
                const year = yearMatch[1];
                const slideIndex = getSlideIndexByYear(year);
                showSlide(slideIndex);
                return;
            }
        }
        // Default to first slide if no valid hash
        showSlide(0);
    }
    
    // Navigation button functionality
    function goToNextSlide() {
        const nextIndex = (currentSlideIndex + 1) % totalSlides;
        showSlide(nextIndex);
        updateURL();
    }
    
    function goToPreviousSlide() {
        const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
        updateURL();
    }
    
    // Update URL hash based on current slide
    function updateURL() {
        const currentSlide = slides[currentSlideIndex];
        if (currentSlide && currentSlide.id) {
            window.location.hash = `#${currentSlide.id}`;
        }
    }
    
    // Add click event listeners to navigation buttons
    if (leftButton) {
        leftButton.addEventListener('click', function(e) {
            e.preventDefault();
            goToPreviousSlide();
        });
    }
    
    if (rightButton) {
        rightButton.addEventListener('click', function(e) {
            e.preventDefault();
            goToNextSlide();
        });
    }
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            goToNextSlide();
        } else if (e.key === 'ArrowLeft') {
            goToPreviousSlide();
        }
    });
    
    // Listen for hash changes (if user manually changes URL)
    window.addEventListener('hashchange', function() {
        handleHashNavigation();
    });
    
    // Listen for messages from parent window
    window.addEventListener('message', function(event) {
        if (event.data && event.data.action === 'scrollToSection') {
            const targetId = event.data.targetId;
            const yearMatch = targetId.match(/(\d{4})-rehearsal/);
            if (yearMatch) {
                const year = yearMatch[1];
                const slideIndex = getSlideIndexByYear(year);
                showSlide(slideIndex);
            }
        }
    });
    
    // Initialize the slideshow
    handleHashNavigation();
    
    // Image gallery functionality within each slide
    function initializeImageGallery() {
        const allImages = document.querySelectorAll('.slide img');
        const fullRehearsalContainer = document.getElementById('fullRehearsalContainer');
        const fullRehearsal = document.getElementById('fullRehearsal');
        
        allImages.forEach(function(img) {
            img.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Show full image
                if (fullRehearsalContainer && fullRehearsal) {
                    fullRehearsal.src = this.src;
                    fullRehearsalContainer.style.display = 'flex';
                    fullRehearsalContainer.style.position = 'fixed';
                    fullRehearsalContainer.style.top = '0';
                    fullRehearsalContainer.style.left = '0';
                    fullRehearsalContainer.style.width = '100%';
                    fullRehearsalContainer.style.height = '100%';
                    fullRehearsalContainer.style.backgroundColor = 'rgba(0,0,0,0.9)';
                    fullRehearsalContainer.style.zIndex = '10000';
                    fullRehearsalContainer.style.justifyContent = 'center';
                    fullRehearsalContainer.style.alignItems = 'center';
                    fullRehearsalContainer.style.cursor = 'pointer';
                    
                    fullRehearsal.style.maxWidth = '90%';
                    fullRehearsal.style.maxHeight = '90%';
                    fullRehearsal.style.objectFit = 'contain';
                }
            });
            
            // Add hover effect to images
            img.style.cursor = 'pointer';
            img.addEventListener('mouseenter', function() {
                this.style.opacity = '0.8';
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'all 0.3s ease';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
        });
        
        // Close full image when clicking on container
        if (fullRehearsalContainer) {
            fullRehearsalContainer.addEventListener('click', function() {
                this.style.display = 'none';
            });
        }
    }
    
    // Initialize image gallery
    initializeImageGallery();
});

// Additional CSS for smooth transitions
const collectionCSS = `
    .slide {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    .slide[style*="block"] {
        opacity: 1;
    }
    
    #fullRehearsalContainer {
        display: none;
    }
    
    .slide img {
        transition: all 0.3s ease;
    }
    
    .slide img:hover {
        transform: scale(1.05);
        opacity: 0.8;
    }
`;

// Inject CSS
function injectCollectionCSS() {
    const style = document.createElement('style');
    style.textContent = collectionCSS;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', injectCollectionCSS);