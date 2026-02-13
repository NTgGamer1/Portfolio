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