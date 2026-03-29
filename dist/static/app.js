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
      // For now, redirect to order confirmation
      // In production, this would create a Stripe Checkout Session
      alert('Checkout functionality will be connected to Stripe Checkout API');
      // window.location.href = '/order-confirmation';
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
