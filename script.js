// ============================================
// Qwen Glass AI - JavaScript
// Animations, scroll effects, and interactivity
// ============================================

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements on page load
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-on-scroll');
    fadeInElements.forEach(element => {
        element.classList.add('fade-in-on-scroll');
        observer.observe(element);
    });
    
    // Smooth scroll for navigation links
    setupSmoothScroll();
    
    // Setup button interactions
    setupButtonInteractions();
});

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Button interaction effects
function setupButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function() {
            // Show a simple feedback
            const originalText = this.textContent;
            this.textContent = 'Coming Soon...';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Stagger animation for cards
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.solution-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Intersection Observer for scroll-triggered animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
};

// Initialize animations on load
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Counter animation for statistics (if added)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Enhance solution cards with hover effects
document.addEventListener('DOMContentLoaded', () => {
    const solutionCards = document.querySelectorAll('.solution-card');
    
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
        });
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fade in elements as they come into view
const fadeInOnScroll = () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeInElements.forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Mobile menu toggle (for future mobile menu implementation)
let mobileMenuOpen = false;

function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuOpen) {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Add scroll reveal animation to workflow comparison
const observeWorkflow = () => {
    const workflowSteps = document.querySelectorAll('.workflow-steps .step');
    
    workflowSteps.forEach((step, index) => {
        step.style.opacity = '0.7';
        step.style.animation = `slideInLeft 0.5s ease-out ${index * 0.1}s forwards`;
    });
};

document.addEventListener('DOMContentLoaded', observeWorkflow);

// Tooltip functionality
const createTooltip = (element, text) => {
    element.addEventListener('mouseenter', function(e) {
        const tooltip = document.createElement('div');
        tooltip.textContent = text;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#1a1a2e';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px 12px';
        tooltip.style.borderRadius = '6px';
        tooltip.style.fontSize = '12px';
        tooltip.style.whiteSpace = 'nowrap';
        tooltip.style.zIndex = '1000';
        tooltip.style.pointerEvents = 'none';
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    });
    
    element.addEventListener('mouseleave', function() {
        const tooltips = document.querySelectorAll('[data-tooltip]');
        tooltips.forEach(t => t && t.remove());
    });
};

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll performance
const debouncedScroll = debounce(() => {
    // Scroll event logic here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals/menus
        if (mobileMenuOpen) {
            toggleMobileMenu();
        }
    }
});

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// Add ripple effect to buttons
const addRippleEffect = () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            // Optional: Add ripple styles via CSS
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'rippleAnimation 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
};

document.addEventListener('DOMContentLoaded', addRippleEffect);

// Form validation (for future contact forms)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--secondary-color)';
        }
    });
    
    return isValid;
};

// Add loading state to buttons
const setButtonLoading = (button, isLoading) => {
    if (isLoading) {
        button.disabled = true;
        button.textContent = 'Loading...';
        button.style.opacity = '0.6';
    } else {
        button.disabled = false;
        button.textContent = button.getAttribute('data-original-text') || 'Submit';
        button.style.opacity = '1';
    }
};

// Expand/collapse functionality for FAQs (if added)
const setupFAQToggle = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const content = item.querySelector('.faq-content');
        
        if (toggle && content) {
            toggle.addEventListener('click', () => {
                content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
                item.classList.toggle('active');
            });
        }
    });
};

// Call setup on page load
document.addEventListener('DOMContentLoaded', setupFAQToggle);

// Print styles
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

// Add scroll indicator
const addScrollIndicator = () => {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.position = 'fixed';
    scrollIndicator.style.top = '0';
    scrollIndicator.style.left = '0';
    scrollIndicator.style.height = '3px';
    scrollIndicator.style.background = 'linear-gradient(90deg, var(--primary-color), var(--accent-color))';
    scrollIndicator.style.zIndex = '999';
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercentage + '%';
    });
};

document.addEventListener('DOMContentLoaded', addScrollIndicator);

console.log('🚀 Qwen Glass AI - Landing Page Ready!');
