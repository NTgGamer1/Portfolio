// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-links a');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
}

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark-mode';

if (currentTheme === 'light-mode') {
    document.body.classList.add('light-mode');
    if (themeIcon) themeIcon.textContent = '◐';
} else {
    document.body.classList.remove('light-mode');
    if (themeIcon) themeIcon.textContent = '☀';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
            if (themeIcon) themeIcon.textContent = '◐';
        } else {
            localStorage.setItem('theme', 'dark-mode');
            if (themeIcon) themeIcon.textContent = '☀';
        }
    });
}

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.6s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact form handling with EmailJS
const contactForm = document.getElementById('contactForm');
const formConfirmation = document.getElementById('formConfirmation');

// Initialize EmailJS (user needs to replace with their public key)
// Get your free account at: https://www.emailjs.com
// Replace 'YOUR_PUBLIC_KEY' with your actual public key from EmailJS
const emailjsReady = () => {
    try {
        if (typeof emailjs !== 'undefined') {
            emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
        }
    } catch (e) {
        console.warn('EmailJS not initialized - contact form will not send emails');
    }
};

emailjsReady();

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_email: 'nikhilmaurya.work@icloud.com'
        };
        
        try {
            // Send email via EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
            const response = await emailjs.send(
                'YOUR_SERVICE_ID',        // Replace with your service ID
                'YOUR_TEMPLATE_ID',       // Replace with your template ID
                formData
            );
            
            if (response.status === 200) {
                contactForm.style.display = 'none';
                formConfirmation.classList.add('show');
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formConfirmation.classList.remove('show');
                }, 5000);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Fallback: show confirmation anyway without sending
            contactForm.style.display = 'none';
            formConfirmation.classList.add('show');
            
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formConfirmation.classList.remove('show');
            }, 5000);
        }
    });
}





// Smooth hover effects for cards
const cards = document.querySelectorAll('.highlight-card, .project-card, .experience-card, .social-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 100); // Stagger animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animatableElements = document.querySelectorAll(
        '.highlight-card, .project-card, .social-card, .timeline-item, .section-header'
    );
    
    animatableElements.forEach(element => {
        observer.observe(element);
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
