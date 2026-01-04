// WOVE - Clean JavaScript for Minimal Interactions

document.addEventListener('DOMContentLoaded', function() {
  
  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = this.querySelector('input[type="email"]');
      const button = this.querySelector('button');
      
      if (input && input.value) {
        button.textContent = 'Subscribed';
        button.style.background = '#666';
        
        setTimeout(() => {
          button.textContent = 'Subscribe';
          button.style.background = '#000';
          input.value = '';
        }, 2000);
      }
    });
  }
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80;
          window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  console.log('WOVE - Premium Menswear');
});
