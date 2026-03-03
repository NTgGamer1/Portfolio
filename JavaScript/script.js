const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-links a');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const formConfirmation = document.getElementById('formConfirmation');

const closeNavMenu = () => {
    if (!hamburgerBtn || !navMenu) return;
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
};

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', closeNavMenu);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            closeNavMenu();
        }
    });
}

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
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');
        if (themeIcon) themeIcon.textContent = isLightMode ? '◐' : '☀';
    });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage);
});

if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach((card) => {
                const isVisible = filter === 'all' || card.getAttribute('data-category') === filter;
                card.style.display = isVisible ? 'flex' : 'none';
                if (isVisible) {
                    card.style.animation = 'fadeIn 0.6s ease';
                }
            });
        });
    });
}

const showFormConfirmation = () => {
    if (!contactForm || !formConfirmation) return;

    contactForm.style.display = 'none';
    formConfirmation.classList.add('show');

    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formConfirmation.classList.remove('show');
    }, 5000);
};

const isConfiguredValue = (value) =>
    typeof value === 'string' && value.trim() !== '' && !value.startsWith('YOUR_');

const isEmailConfigValid = (config) =>
    config &&
    isConfiguredValue(config.publicKey) &&
    isConfiguredValue(config.serviceId) &&
    isConfiguredValue(config.templateId);

if (contactForm && formConfirmation) {
    const contactConfig = window.CONTACT_FORM_CONFIG || {};
    const emailJsAvailable = typeof emailjs !== 'undefined';
    const emailConfigured = emailJsAvailable && isEmailConfigValid(contactConfig);

    if (emailConfigured) {
        emailjs.init(contactConfig.publicKey);
    } else {
        console.warn('EmailJS config missing or incomplete. Using confirmation fallback.');
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!emailConfigured) {
            showFormConfirmation();
            return;
        }

        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_email: contactConfig.toEmail || 'nikhilmaurya.work@icloud.com'
        };

        try {
            const response = await emailjs.send(
                contactConfig.serviceId,
                contactConfig.templateId,
                formData
            );
            if (response.status === 200) {
                showFormConfirmation();
            }
        } catch (error) {
            console.error('Error sending email:', error);
            showFormConfirmation();
        }
    });
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    document
        .querySelectorAll('.highlight-card, .project-card, .social-card, .timeline-item, .section-header')
        .forEach((element) => {
            observer.observe(element);
        });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
