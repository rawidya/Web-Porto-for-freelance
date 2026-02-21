document.addEventListener('DOMContentLoaded', () => {
    // 1. Real-time Greeting
    const greeting = document.getElementById('hero-greet');
    if (greeting) {
        const hour = new Date().getHours();
        let text = "Halo! 👋";
        if (hour < 12) text = "Selamat Pagi! ☕";
        else if (hour < 18) text = "Selamat Siang! ☀️";
        else text = "Selamat Malam! 🌙";
        greeting.innerText = text;
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Tech Stack "Lihat Code" Logic
    const techCards = document.querySelectorAll('.tech-card');
    const modal = document.getElementById('code-modal');
    const codeDisplay = document.getElementById('code-display');
    const closeBtn = document.querySelector('.close');

    techCards.forEach(card => {
        card.addEventListener('click', () => {
            const code = card.getAttribute('data-code');
            codeDisplay.textContent = code;
            modal.style.display = 'block';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // 5. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .tech-card, .portfolio-card, .price-card').forEach(el => {
        el.classList.add('hide');
        observer.observe(el);
    });
});
