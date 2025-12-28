
// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-text h1');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
});

// Scroll-triggered animations
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Parallax effect for hero image
function parallaxEffect() {
    const heroImg = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroImg.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0005})`;
    });
}

// Scroll-to-top button functionality
function scrollToTop() {
    const button = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active navigation highlighting
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Interactive skills grid
function interactiveSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skill.classList.toggle('expanded');
            const isExpanded = skill.classList.contains('expanded');
            skill.style.transform = isExpanded ? 'scale(1.1)' : '';
            skill.style.zIndex = isExpanded ? '10' : '';
        });
    });
}

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    parallaxEffect();
    scrollToTop();
    highlightNavOnScroll();
    interactiveSkills();

    // Why Hire Me button functionality
    document.getElementById("hireBtn").addEventListener("click", function () {
        const reasons = [
            "1. Strong foundation in Computer Science principles.",
            "2. Quick to adapt, learn and implement new technologies.",
            "3. Disciplined work ethic and attention to detail.",
            "4. Able to handle tasks under pressure.",
        ];

        alert("Professional Strengths:\n\n" + reasons.join("\n\n"));
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('active');
    });
});
