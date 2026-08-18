document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            
            // Prevent body scroll when menu is active
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Sticky Header Styling on Scroll
    const header = document.querySelector('.site-header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately to check initial load state

    // 3. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing once revealed to avoid repeating animation
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.1, // trigger when 10% visible
            rootMargin: '0px 0px -50px 0px' // adjust trigger slightly before entry
        });
        
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers or users with prefers-reduced-motion
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // 4. Active Nav Link Indicator on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const activeNavObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        root: null,
        threshold: 0.5, // active when section takes 50% of screen
        rootMargin: '-80px 0px -20% 0px' // offset header
    });
    
    sections.forEach(section => activeNavObserver.observe(section));

    // 5. Contact Form Submission Handling
    // TIP: Vervang 'YOUR_FORMSPREE_ID' door de ID die je krijgt na het aanmaken van een formulier op Formspree.io (bijv. 'mqkvpjpd')
    const FORMSPREE_ID = 'xeajpowk';
    
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    
    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const submitBtn = contactForm.querySelector('.btn-submit');
            
            // Simple validation
            if (!nameInput.value.trim() || !emailInput.value.trim()) {
                formFeedback.textContent = 'Vul alstublieft alle verplichte velden in.';
                formFeedback.className = 'form-feedback error';
                return;
            }
            
            // Show loading state
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Verzenden...';
            submitBtn.disabled = true;
            
            const handleSuccess = () => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                // Show success feedback
                formFeedback.textContent = `Tige dank, ${nameInput.value.trim()}! We hebben je aanmelding ontvangen en houden je op de hoogte.`;
                formFeedback.className = 'form-feedback success';
                
                // Reset form
                contactForm.reset();
                
                // Hide feedback after 8 seconds
                setTimeout(() => {
                    formFeedback.style.opacity = '0';
                    setTimeout(() => {
                        formFeedback.textContent = '';
                        formFeedback.style.opacity = '';
                    }, 300);
                }, 8000);
            };

            const handleError = (message) => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                formFeedback.textContent = message || 'Er is een fout opgetreden. Probeer het later nog eens.';
                formFeedback.className = 'form-feedback error';
            };

            if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
                // Simulation fallback if Formspree is not configured yet
                setTimeout(handleSuccess, 1200);
            } else {
                // Real Formspree AJAX request
                fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        handleSuccess();
                    } else {
                        response.json().then(data => {
                            if (data && data.errors) {
                                handleError(data.errors.map(error => error.message).join(', '));
                            } else {
                                handleError('Er is een probleem opgetreden bij het verzenden.');
                            }
                        }).catch(() => handleError());
                    }
                })
                .catch(() => handleError('Netwerkfout. Controleer je internetverbinding en probeer het opnieuw.'));
            }
        });
    }

    // 6. Interactive Card Float Effect (parallax-like on hover)
    const heroCard = document.querySelector('.hero-card');
    if (heroCard && !prefersReducedMotion) {
        const inner = heroCard.querySelector('.hero-card-inner');
        
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within element
            const y = e.clientY - rect.top;  // y position within element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 12; // tilt max 12 deg
            const rotateY = ((centerX - x) / centerX) * 12;
            
            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        heroCard.addEventListener('mouseleave', () => {
            inner.style.transform = '';
        });
    }
});
