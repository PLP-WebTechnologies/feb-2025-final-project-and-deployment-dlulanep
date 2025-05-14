document.addEventListener("DOMContentLoaded", function() {
    // Form validation for the contact form
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        let valid = true;

        // Simple validation
        if (name === "") {
            alert("Name is required.");
            valid = false;
        }
        if (email === "") {
            alert("Email is required.");
            valid = false;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }
        if (message === "") {
            alert("Message is required.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Image slider functionality (if needed)
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Initialize the slider
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});