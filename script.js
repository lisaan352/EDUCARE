document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
           
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('header').offsetHeight, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! We have received your query and will contact you shortly.');
            contactForm.reset();
            
        });
    }
});