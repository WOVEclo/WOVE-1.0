// WOVE - Interactive Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Category Filter on Collection Page
  const categoryLinks = document.querySelectorAll('.category-list a');
  const productCards = document.querySelectorAll('.product-card');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Get selected category
      const category = this.getAttribute('data-category');
      
      // Filter products
      productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Add to Cart Button
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const originalText = this.innerHTML;
      
      // Change button state
      this.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Added to Cart
      `;
      this.style.background = '#10B981';
      
      // Reset after 2 seconds
      setTimeout(() => {
        this.innerHTML = originalText;
        this.style.background = '';
      }, 2000);
    });
  });
  
  // Wishlist Button
  const wishlistButtons = document.querySelectorAll('.btn-icon');
  
  wishlistButtons.forEach((button, index) => {
    if (index % 2 === 0) { // Every other button (wishlist)
      button.addEventListener('click', function() {
        const svg = this.querySelector('svg');
        const path = svg.querySelector('path');
        
        if (svg.getAttribute('fill') === 'currentColor') {
          svg.setAttribute('fill', 'none');
          this.style.background = '';
        } else {
          svg.setAttribute('fill', 'currentColor');
          this.style.background = '#FEE2E2';
        }
      });
    }
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe feature cards and product cards
  document.querySelectorAll('.feature-card, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Console branding
  console.log('%cWOVE', 'font-size: 32px; font-weight: bold;');
  console.log('%cPremium Menswear | SS26', 'font-size: 12px; color: #666;');
});
