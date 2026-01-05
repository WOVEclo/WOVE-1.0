// WOVE - Luxury Minimal Interactions

document.addEventListener('DOMContentLoaded', function() {
  
  // Splash Page - Click anywhere to enter
  const splash = document.getElementById('splash');
  if (splash) {
    // Fade in splash
    setTimeout(() => {
      splash.style.opacity = '1';
    }, 100);
    
    // Click anywhere to enter
    splash.addEventListener('click', function() {
      this.style.opacity = '0';
      this.style.transition = 'opacity 0.6s ease';
      
      setTimeout(() => {
        window.location.href = '/home';
      }, 600);
    });
    
    // Auto-enter after 3 seconds if no click
    setTimeout(() => {
      if (splash && splash.style.opacity !== '0') {
        splash.click();
      }
    }, 3000);
  }
  
  // Quick Add to Cart Button
  const quickAddButtons = document.querySelectorAll('.btn-quick-add');
  quickAddButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const originalText = this.textContent;
      this.textContent = 'Added';
      this.style.background = '#333';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 1500);
    });
  });
  
  // Product Detail Add to Cart
  const detailAddButton = document.querySelector('.btn-add-to-cart-detail');
  if (detailAddButton) {
    detailAddButton.addEventListener('click', function() {
      const originalText = this.textContent;
      this.textContent = 'Added to Cart';
      this.style.background = '#333';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 2000);
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
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Fade in elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe product items
  document.querySelectorAll('.product-item-luxury, .product-editorial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});
