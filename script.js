// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Hero Image Slider ---
    const slides = document.querySelectorAll('.slide');
    let currentHeroSlide = 0;

    const nextHeroSlide = () => {
        slides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % slides.length;
        slides[currentHeroSlide].classList.add('active');
    };

    // Slow transition for hero (5 seconds)
    setInterval(nextHeroSlide, 5000);


    // --- 2. Tip Section Carousel (The "Swipe Nicely" Logic) ---
    const tipTrack = document.querySelector('.tip-slider-track');
    const nextBtn = document.getElementById('nextTip');
    const prevBtn = document.getElementById('prevTip');
    
    if (tipTrack && nextBtn) {
        let currentScrollPos = 0;

        const slideTips = (direction) => {
            // Calculate width of one card + its gap
            const cardWidth = document.querySelector('.modal-card-container').offsetWidth + 40; 
            const maxScroll = tipTrack.scrollWidth - tipTrack.offsetWidth;

            if (direction === 'next') {
                currentScrollPos = Math.min(currentScrollPos + cardWidth, maxScroll);
            } else {
                currentScrollPos = Math.max(currentScrollPos - cardWidth, 0);
            }

            // Apply the "slow and nice" movement
            tipTrack.style.transform = `translateX(-${currentScrollPos}px)`;
        };

        nextBtn.addEventListener('click', () => slideTips('next'));
        prevBtn.addEventListener('click', () => slideTips('prev'));
    }


    // --- 3. Navbar Glassmorphism ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-effect', 'shadow-md', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('glass-effect', 'shadow-md', 'py-2');
            navbar.classList.add('py-4');
        }
    });


    // --- 4. Reveal on Scroll Animation ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check


    // --- 5. Smooth Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
