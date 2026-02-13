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
            themeIcon.textContent = '◐';
        } else {
            localStorage.setItem('theme', 'dark-mode');
            themeIcon.textContent = '☀';
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

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formConfirmation = document.getElementById('formConfirmation');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        contactForm.style.display = 'none';
        formConfirmation.classList.add('show');
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formConfirmation.classList.remove('show');
        }, 5000);
    });
}





// Smooth hover effects for cards
const cards = document.querySelectorAll('.highlight-card, .project-card, .experience-card, .social-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
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
