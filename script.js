let currentSlide = 1;
const totalSlides = 4;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const slideNumber = document.getElementById('slideNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Clamp to valid range
    currentSlide = n;
    if (currentSlide > totalSlides) {
        currentSlide = totalSlides;
    }
    if (currentSlide < 1) {
        currentSlide = 1;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show current slide
    slides[currentSlide - 1].classList.add('active');

    // Update slide number
    slideNumber.textContent = `${currentSlide} / ${totalSlides}`;

    // Update button states
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    } else if (e.key === 'Home') {
        e.preventDefault();
        showSlide(1);
    } else if (e.key === 'End') {
        e.preventDefault();
        showSlide(totalSlides);
    } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Initialize
showSlide(currentSlide);
