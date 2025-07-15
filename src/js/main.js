// Bootstrap Theme Entry Point

// Import your custom SCSS FIRST (this will compile to CSS)
import '../scss/bootstrap.scss';

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import individual Bootstrap components if you want to reduce bundle size
// import { Modal, Dropdown, Collapse, Tooltip, Popover } from 'bootstrap';

console.log('🎨 Bootstrap custom theme loaded successfully!');
console.log('🔍 CSS should be injected now - check the <head> for <style> tags');

// Custom JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert-dismissible');
    alerts.forEach(alert => {
        setTimeout(() => {
            const closeBtn = alert.querySelector('.btn-close');
            if (closeBtn) {
                closeBtn.click();
            }
        }, 5000);
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation class to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all component sections
    const sections = document.querySelectorAll('.component-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Custom theme switcher (if you want to add dark mode toggle)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Form validation enhancement
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Custom loading states for buttons
    const loadingButtons = document.querySelectorAll('[data-loading-text]');
    loadingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            const loadingText = this.getAttribute('data-loading-text');
            
            this.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status"></span>${loadingText}`;
            this.disabled = true;
            
            // Simulate async operation (replace with actual async work)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Enhanced navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    if (navbar && navbar.classList.contains('fixed-top')) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
});

// Theme switcher with select element
function initThemeSwitcher() {
    const themeSelect = document.getElementById('theme-select');
    
    // Set initial theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Set the select element to match the current theme
    if (themeSelect) {
        themeSelect.value = savedTheme;
        
        // Add onChange event listener
        themeSelect.addEventListener('change', function(e) {
            setTheme(e.target.value);
        });
    }
}

function setTheme(theme) {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Optional: Update select if called programmatically
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect && themeSelect.value !== theme) {
        themeSelect.value = theme;
    }
    
    // Optional: Dispatch custom event for other components to listen to
    document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme } 
    }));
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initThemeSwitcher);

// Optional: Listen for theme changes elsewhere in your app
document.addEventListener('themeChanged', function(e) {
    console.log('Theme changed to:', e.detail.theme);
    // Add any additional theme change logic here
});