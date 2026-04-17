/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Background Image Slider Logic ---
    const slides = document.querySelectorAll('.slide-bg');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per image

    function nextSlide() {
        // Fade out current slide
        slides[currentSlide].classList.remove('opacity-100');
        slides[currentSlide].classList.add('opacity-0');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Fade in new slide
        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-100');
    }

    // Start the slider
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // --- 2. Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 3. Navbar Shadow on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/85', 'bg-white/95'); // Slightly more opaque on scroll
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-white/85');
        }
    });
});
