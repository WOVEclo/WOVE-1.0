// WOVE - Shopping Cart System

// Cart Management
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.updateCartCount();
  }

  loadCart() {
    const saved = localStorage.getItem('wove_cart');
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem('wove_cart', JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(product) {
    const existingItem = this.items.find(
      item => item.id === product.id && item.size === product.size
    );

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.items.push(product);
    }

    this.saveCart();
    
    // Track Add to Cart event
    this.trackAddToCart(product);
  }
  
  trackAddToCart(product) {
    // Google Analytics / GA4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'add_to_cart', {
        currency: 'GBP',
        value: product.price * product.quantity,
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          quantity: product.quantity,
          item_variant: product.size
        }]
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart', {
        content_name: product.name,
        content_ids: [product.id],
        content_type: 'product',
        value: product.price * product.quantity,
        currency: 'GBP'
      });
    }
  }

  removeItem(id, size) {
    this.items = this.items.filter(
      item => !(item.id === id && item.size === size)
    );
    this.saveCart();
  }

  updateQuantity(id, size, quantity) {
    const item = this.items.find(
      item => item.id === id && item.size === size
    );
    if (item) {
      item.quantity = Math.max(1, Math.min(10, quantity));
      this.saveCart();
    }
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateCartCount() {
    const badge = document.querySelector('.cart-count');
    const count = this.getItemCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  clear() {
    this.items = [];
    this.saveCart();
  }
}

const cart = new ShoppingCart();

document.addEventListener('DOMContentLoaded', function() {
  
  // UTM Parameter Tracking for Ad Campaigns
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {
    source: urlParams.get('utm_source'),
    medium: urlParams.get('utm_medium'),
    campaign: urlParams.get('utm_campaign'),
    term: urlParams.get('utm_term'),
    content: urlParams.get('utm_content')
  };
  
  // Store UTM params in sessionStorage for attribution
  if (utmParams.source || utmParams.medium || utmParams.campaign) {
    sessionStorage.setItem('wove_utm', JSON.stringify(utmParams));
    
    // Track campaign view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'campaign_view', {
        campaign_source: utmParams.source,
        campaign_medium: utmParams.medium,
        campaign_name: utmParams.campaign
      });
    }
  }
  
  // Splash Page Auto-redirect
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '1';
    }, 100);
    
    splash.addEventListener('click', function() {
      this.style.opacity = '0';
      this.style.transition = 'opacity 0.6s ease';
      setTimeout(() => {
        window.location.href = '/home';
      }, 600);
    });
    
    setTimeout(() => {
      if (splash && splash.style.opacity !== '0') {
        splash.click();
      }
    }, 3000);
  }

  // Size Selection
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = this.parentElement.dataset.productId;
      document.querySelectorAll(`[data-product-id="${productId}"] .size-btn`).forEach(b => {
        b.classList.remove('selected');
      });
      this.classList.add('selected');
    });
  });

  // Quantity Controls
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = document.querySelector(`.qty-input[data-product-id="${this.dataset.productId}"]`);
      if (input) {
        input.value = Math.max(1, parseInt(input.value) - 1);
      }
    });
  });

  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = document.querySelector(`.qty-input[data-product-id="${this.dataset.productId}"]`);
      if (input) {
        input.value = Math.min(10, parseInt(input.value) + 1);
      }
    });
  });

  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('change', function() {
      this.value = Math.max(1, Math.min(10, parseInt(this.value) || 1));
    });
  });

  // Add to Cart from Product Detail Page
  const detailAddButton = document.querySelector('.btn-add-to-cart-detail');
  if (detailAddButton) {
    detailAddButton.addEventListener('click', function() {
      const productId = this.dataset.productId;
      const sizeBtn = document.querySelector(`.size-btn.selected[data-size]`);
      
      if (!sizeBtn) {
        alert('Please select a size');
        return;
      }

      const size = sizeBtn.dataset.size;
      const qtyInput = document.querySelector(`.qty-input[data-product-id="${productId}"]`);
      const quantity = parseInt(qtyInput?.value || 1);

      const product = {
        id: productId,
        name: this.dataset.productName,
        price: parseFloat(this.dataset.productPrice),
        image: this.dataset.productImage,
        size: size,
        quantity: quantity
      };

      cart.addItem(product);

      // Visual feedback
      const originalText = this.textContent;
      this.textContent = 'Added to Cart ✓';
      this.style.background = '#2D5016';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 2000);
    });
  }

  // Cart Page Rendering
  if (document.getElementById('cart-items')) {
    renderCart();
  }

  // Checkout Button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      // Track Initiate Checkout
      const cartValue = cart.getTotal();
      const cartItems = cart.items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
        item_variant: item.size
      }));
      
      // Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
          currency: 'GBP',
          value: cartValue,
          items: cartItems
        });
      }
      
      // Facebook Pixel
      if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
          content_ids: cart.items.map(item => item.id),
          contents: cart.items.map(item => ({
            id: item.id,
            quantity: item.quantity
          })),
          value: cartValue,
          currency: 'GBP',
          num_items: cart.getItemCount()
        });
      }
      
      // For now, show alert
      // In production, this would create a Stripe Checkout Session
      alert('Checkout functionality will be connected to Stripe Checkout API');
      // window.location.href = '/order-confirmation';
    });
  }
  
  // Track Product Views on detail pages
  const productDetailPage = document.querySelector('.product-detail-page');
  if (productDetailPage) {
    const addButton = document.querySelector('.btn-add-to-cart-detail');
    if (addButton) {
      const productData = {
        id: addButton.dataset.productId,
        name: addButton.dataset.productName,
        price: parseFloat(addButton.dataset.productPrice)
      };
      
      // Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'view_item', {
          currency: 'GBP',
          value: productData.price,
          items: [{
            item_id: productData.id,
            item_name: productData.name,
            price: productData.price
          }]
        });
      }
      
      // Facebook Pixel
      if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
          content_name: productData.name,
          content_ids: [productData.id],
          content_type: 'product',
          value: productData.price,
          currency: 'GBP'
        });
      }
    }
  }
  
  // Collection Page - Filter Functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active from all
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        const products = document.querySelectorAll('.product-card-luxury');
        
        products.forEach(product => {
          if (filter === 'all') {
            product.style.display = 'block';
            // Re-trigger fade-in animation
            setTimeout(() => {
              product.classList.add('fade-in');
            }, 10);
          } else {
            const category = product.dataset.category;
            if (category === filter) {
              product.style.display = 'block';
              setTimeout(() => {
                product.classList.add('fade-in');
              }, 10);
            } else {
              product.style.display = 'none';
              product.classList.remove('fade-in');
            }
          }
        });
      });
    });
  }
  
  // Collection Page - Scroll Reveal Animation
  const productCards = document.querySelectorAll('.product-card-luxury');
  if (productCards.length > 0) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, index * 50); // Stagger animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    productCards.forEach(card => {
      observer.observe(card);
    });
  }
});

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartSummary = document.getElementById('cart-summary');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  if (cart.items.length === 0) {
    cartItemsContainer.innerHTML = '';
    cartEmpty.style.display = 'block';
    cartSummary.style.display = 'none';
    return;
  }

  cartEmpty.style.display = 'none';
  cartSummary.style.display = 'block';

  cartItemsContainer.innerHTML = cart.items.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p class="cart-item-meta">Size: ${item.size} | Quantity: ${item.quantity}</p>
        <p class="cart-item-price">£${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div class="cart-item-actions">
        <button 
          class="cart-item-remove" 
          onclick="removeFromCart('${item.id}', '${item.size}')"
        >
          Remove
        </button>
      </div>
    </div>
  `).join('');

  const total = cart.getTotal();
  subtotalEl.textContent = `£${total.toFixed(2)}`;
  totalEl.textContent = `£${total.toFixed(2)}`;
}

function removeFromCart(id, size) {
  cart.removeItem(id, size);
  renderCart();
}

// Restock Notification System with Modal
document.addEventListener('DOMContentLoaded', function() {
  // Create modal HTML
  const modalHTML = `
    <div id="restock-modal" class="restock-modal">
      <div class="restock-modal-content">
        <button class="restock-modal-close">&times;</button>
        <div class="restock-modal-header">
          <h2>Join Our Waitlist</h2>
          <p class="restock-welcome">Be the first to know when <span id="modal-product-name"></span> is back in stock. Plus, get exclusive updates on new arrivals and special offers.</p>
        </div>
        <form id="restock-form" class="restock-form">
          <div class="form-group">
            <label for="restock-name">Full Name *</label>
            <input type="text" id="restock-name" name="name" placeholder="John Smith" required>
          </div>
          <div class="form-group">
            <label for="restock-email">Email Address *</label>
            <input type="email" id="restock-email" name="email" placeholder="john@example.com" required>
          </div>
          <div class="form-group">
            <label for="restock-phone">Mobile Telephone *</label>
            <input type="tel" id="restock-phone" name="phone" placeholder="+44 7XXX XXXXXX" required>
          </div>
          <div class="form-checkbox">
            <input type="checkbox" id="newsletter-subscribe" name="newsletter" checked>
            <label for="newsletter-subscribe">Subscribe to our newsletter for exclusive offers and updates</label>
          </div>
          <button type="submit" class="restock-submit-btn">Notify Me</button>
          <p class="restock-privacy">We respect your privacy. Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  `;
  
  // Append modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modal = document.getElementById('restock-modal');
  const closeBtn = document.querySelector('.restock-modal-close');
  const form = document.getElementById('restock-form');
  let currentProductId = '';
  let currentProductName = '';
  let currentButton = null;
  
  // Handle notify me buttons
  document.querySelectorAll('.notify-me-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      currentProductId = this.dataset.productId;
      currentProductName = this.dataset.productName;
      currentButton = this;
      
      // Update modal product name
      document.getElementById('modal-product-name').textContent = currentProductName;
      
      // Show modal
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      
      // Focus first input
      setTimeout(() => {
        document.getElementById('restock-name').focus();
      }, 100);
    });
  });
  
  // Close modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    form.reset();
  });
  
  // Close on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      form.reset();
    }
  });
  
  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('restock-name').value.trim();
    const email = document.getElementById('restock-email').value.trim();
    const phone = document.getElementById('restock-phone').value.trim();
    const newsletter = document.getElementById('newsletter-subscribe').checked;
    
    // Disable submit button
    const submitBtn = form.querySelector('.restock-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
    
    // Send to API
    fetch('/api/restock-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        newsletter: newsletter,
        productId: currentProductId,
        productName: currentProductName
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Show success message
        modal.querySelector('.restock-modal-content').innerHTML = `
          <div class="restock-success">
            <div class="success-icon">✓</div>
            <h2>You're on the list!</h2>
            <p>${data.message}</p>
            ${newsletter ? '<p class="newsletter-confirm">You have been subscribed to our newsletter.</p>' : ''}
            <button class="restock-close-btn" onclick="document.getElementById('restock-modal').style.display='none'; document.body.style.overflow='auto';">Close</button>
          </div>
        `;
        
        // Update the notify button
        if (currentButton) {
          currentButton.textContent = 'NOTIFIED';
          currentButton.disabled = true;
          currentButton.style.opacity = '0.5';
        }
        
        // Auto close after 3 seconds
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 3000);
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Notify Me';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Notify Me';
    });
  });
});
