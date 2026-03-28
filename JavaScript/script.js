const navBar = document.querySelector('nav');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-links a');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const formConfirmation = document.getElementById('formConfirmation');
const formStatus = document.getElementById('formStatus');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealVariants = ['reveal-up', 'reveal-left', 'reveal-scale'];
const web3FormsEndpoint = 'https://api.web3forms.com/submit';
const mobileNavBreakpoint = 768;
let navOverlay;

const isMobileViewport = () => window.innerWidth <= mobileNavBreakpoint;

const finalizeRevealState = (element) => {
    element.classList.remove('reveal', 'animate', ...revealVariants);
    element.style.removeProperty('--reveal-delay');
};

const replayFadeIn = (element) => {
    if (prefersReducedMotion) {
        element.style.animation = '';
        return;
    }

    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = 'fadeIn 0.6s ease';
};

const syncMobileNavOffset = () => {
    if (!navBar) return;

    const navBottom = navBar.getBoundingClientRect().bottom;
    const offset = Math.max(Math.round(navBottom + 10), 72);
    document.documentElement.style.setProperty('--mobile-nav-top', `${offset}px`);
};

const syncNavAccessibility = () => {
    if (!hamburgerBtn || !navMenu) return;

    const isOpen = navMenu.classList.contains('active');
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
};

const setMenuState = (shouldOpen) => {
    if (!hamburgerBtn || !navMenu) return;

    const isOpen = shouldOpen && isMobileViewport();
    hamburgerBtn.classList.toggle('active', isOpen);
    navMenu.classList.toggle('active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    syncNavAccessibility();
};

const closeNavMenu = () => {
    setMenuState(false);
};

const ensureNavOverlay = () => {
    if (navOverlay || !document.body) return;

    navOverlay = document.createElement('button');
    navOverlay.type = 'button';
    navOverlay.className = 'nav-overlay';
    navOverlay.setAttribute('aria-label', 'Close navigation menu');
    navOverlay.setAttribute('aria-hidden', 'true');
    navOverlay.setAttribute('tabindex', '-1');
    document.body.appendChild(navOverlay);
    navOverlay.addEventListener('click', closeNavMenu);
};

const updateActiveNavLinks = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        const isActive = href === currentPage;
        link.classList.toggle('active', isActive);
    });
};

if (hamburgerBtn && navMenu) {
    ensureNavOverlay();
    syncMobileNavOffset();
    syncNavAccessibility();

    hamburgerBtn.addEventListener('click', () => {
        syncMobileNavOffset();
        setMenuState(!navMenu.classList.contains('active'));
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (isMobileViewport()) {
                closeNavMenu();
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active') || !isMobileViewport()) return;

        if (!e.target.closest('nav')) {
            closeNavMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNavMenu();
        }
    });

    const handleViewportChange = () => {
        syncMobileNavOffset();

        if (!isMobileViewport()) {
            closeNavMenu();
            return;
        }

        syncNavAccessibility();
    };

    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', syncMobileNavOffset);
        window.visualViewport.addEventListener('scroll', syncMobileNavOffset);
    }
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

updateActiveNavLinks();

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
                    replayFadeIn(card);
                } else {
                    card.style.animation = '';
                }
            });
        });
    });
}

const setFormStatus = (message = '', state = '') => {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.classList.remove('show', 'is-error');

    if (!message) return;

    formStatus.classList.add('show');
    if (state === 'error') {
        formStatus.classList.add('is-error');
    }
};

const toggleContactFormLoading = (isLoading) => {
    if (!contactSubmitBtn) return;

    contactSubmitBtn.disabled = isLoading;
    contactSubmitBtn.classList.toggle('is-loading', isLoading);
    contactSubmitBtn.setAttribute('aria-busy', String(isLoading));
};

const hideFormConfirmation = () => {
    if (!formConfirmation) return;
    formConfirmation.classList.remove('show');
};

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const accessKeyField = contactForm.elements.access_key;
        const accessKey = typeof accessKeyField?.value === 'string' ? accessKeyField.value.trim() : '';

        hideFormConfirmation();
        setFormStatus();

        if (!accessKey || accessKey.includes('YOUR_WEB3FORMS_ACCESS_KEY')) {
            setFormStatus('Add your real Web3Forms access key before using the live form.', 'error');
            return;
        }

        toggleContactFormLoading(true);

        try {
            const formData = new FormData(contactForm);
            const payload = Object.fromEntries(formData.entries());

            const response = await fetch(web3FormsEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok || result.success === false) {
                throw new Error(result.message || 'Unable to send your message right now.');
            }

            contactForm.reset();
            setFormStatus();
            if (formConfirmation) {
                formConfirmation.classList.add('show');
            }
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : 'Something went wrong. Please try again.';
            setFormStatus(errorMessage, 'error');
        } finally {
            toggleContactFormLoading(false);
        }
    });
}

if (!prefersReducedMotion) {
    document.body.classList.add('motion-ready');
    document.querySelectorAll('.nav-links .nav-link').forEach((link, index) => {
        link.style.setProperty('--nav-delay', `${140 + index * 80}ms`);
    });
    requestAnimationFrame(() => {
        document.body.classList.add('motion-entered');
    });
}

const applyRevealTargets = () => {
    const revealGroups = [
        { selector: '.section-header', variant: 'reveal-left', step: 0 },
        { selector: '.timeline-item', variant: 'reveal-left', step: 90 },
        { selector: '.highlight-card', variant: 'reveal-scale', step: 120 },
        { selector: '.project-card', variant: 'reveal-up', step: 90 },
        { selector: '.social-card', variant: 'reveal-scale', step: 90 }
    ];

    revealGroups.forEach(({ selector, variant, step }) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('reveal', variant);
            element.style.setProperty('--reveal-delay', `${index * step}ms`);
            element.addEventListener('animationend', (event) => {
                if (event.target !== element) return;
                finalizeRevealState(element);
            }, { once: true });
        });
    });
};

if ('IntersectionObserver' in window && !prefersReducedMotion) {
    applyRevealTargets();

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
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
