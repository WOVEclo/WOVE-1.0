import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Product catalog organized by category
const products = {
  outerwear: [
    {
      id: 'cropped-anorak',
      name: 'Cropped Anorak',
      price: 165,
      image: '/static/products/cropped-anorak.jpg',
      hoverImage: '/static/products/cropped-anorak.jpg',
      category: 'Outerwear',
      material: 'Water-Resistant Canvas',
      colors: ['Olive', 'Black'],
      description: 'Contemporary cropped silhouette with functional details and technical fabric.',
      stripeLink: null,
      inStock: false
    },
    {
      id: 'city-parka',
      name: 'City Parka',
      price: 285,
      image: '/static/products/city-parka.jpg',
      hoverImage: '/static/products/city-parka.jpg',
      category: 'Outerwear',
      material: 'Insulated Wool Blend',
      colors: ['Charcoal', 'Navy'],
      badge: 'Limited',
      description: 'Premium urban parka combining warmth, style and weather protection.',
      stripeLink: null,
      inStock: false
    }
  ],
  essentials: [
    {
      id: 'essentials-hoodie',
      name: 'Essentials Hoodie',
      price: 95,
      image: '/static/products/essentials-set.jpg',
      hoverImage: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      material: 'Premium Cotton',
      colors: ['Black', 'Grey', 'Navy'],
      description: 'Classic heavyweight hoodie in premium cotton with refined fit.',
      inStock: false
    },
    {
      id: 'cloud-quarter-zip',
      name: 'Cloud Quarter Zip',
      price: 125,
      image: '/static/products/cloud-quarter-zip.jpg',
      hoverImage: '/static/products/cloud-quarter-zip.jpg',
      category: 'Essentials',
      material: 'Brushed Fleece',
      colors: ['Stone', 'Black'],
      description: 'Soft brushed fleece quarter-zip with relaxed fit and comfort stretch.',
      inStock: false
    },
    {
      id: 'cloud-hoodie',
      name: 'Cloud Hoodie',
      price: 135,
      image: '/static/products/cloud-hoodie.jpg',
      hoverImage: '/static/products/cloud-hoodie.jpg',
      category: 'Essentials',
      material: 'Cloud Fleece',
      colors: ['Cream', 'Black', 'Grey'],
      badge: 'New',
      description: 'Ultra-soft cloud fleece hoodie with oversized hood and kangaroo pocket.',
      inStock: false
    },
    {
      id: 'track-zip',
      name: 'Track Zip',
      price: 145,
      image: '/static/products/track-zip.jpg',
      hoverImage: '/static/products/track-zip.jpg',
      category: 'Essentials',
      material: 'Technical Knit',
      colors: ['Navy', 'Black'],
      description: 'Athletic-inspired track jacket with modern slim fit and zip pockets.',
      inStock: false
    }
  ],
  performance: [
    {
      id: 'second-skin-top',
      name: 'Second Skin Top',
      price: 75,
      image: '/static/products/second-skin-top.jpg',
      hoverImage: '/static/products/second-skin-top.jpg',
      category: 'Performance',
      material: 'Seamless Tech',
      colors: ['Black', 'White'],
      description: 'Seamless performance top with four-way stretch and moisture-wicking technology.',
      inStock: false
    },
    {
      id: 'second-skin-tee',
      name: 'Second Skin Tee',
      price: 65,
      image: '/static/products/second-skin-tee.jpg',
      hoverImage: '/static/products/second-skin-tee.jpg',
      category: 'Performance',
      material: 'Performance Jersey',
      colors: ['White', 'Black', 'Grey'],
      description: 'Fitted performance tee with technical fabric and athletic cut.',
      inStock: false
    },
    {
      id: 'worn-run-tee',
      name: 'Worn Run Tee',
      price: 55,
      image: '/static/products/worn-run-tee.jpg',
      hoverImage: '/static/products/worn-run-tee.jpg',
      category: 'Performance',
      material: 'Breathable Mesh',
      colors: ['Black', 'Navy'],
      description: 'Lightweight running tee with breathable mesh panels and reflective details.',
      inStock: false
    }
  ],
  bottoms: [
    {
      id: 'motion-pants',
      name: 'Motion Pants',
      price: 85,
      image: '/static/products/motion-pants.jpg',
      hoverImage: '/static/products/motion-pants.jpg',
      category: 'Bottoms',
      material: 'Stretch Canvas',
      colors: ['Black', 'Navy', 'Khaki'],
      description: 'Versatile pants with four-way stretch and tapered athletic fit.',
      inStock: false
    },
    {
      id: 'motion-shorts',
      name: 'Motion Shorts',
      price: 65,
      image: '/static/products/motion-shorts.jpg',
      hoverImage: '/static/products/motion-shorts.jpg',
      category: 'Bottoms',
      material: 'Quick-Dry Poly',
      colors: ['Black', 'Navy'],
      description: 'Performance shorts with moisture-wicking fabric and zip pockets.',
      inStock: false
    }
  ],
  accessories: [
    {
      id: 'off-duty-cap',
      name: 'Off Duty Cap',
      price: 45,
      image: '/static/products/off-duty-cap.jpg',
      hoverImage: '/static/products/off-duty-cap.jpg',
      category: 'Accessories',
      material: 'Cotton Twill',
      colors: ['Black', 'Navy', 'Stone'],
      description: 'Classic six-panel cap with adjustable back and curved brim.',
      inStock: false
    }
  ]
}

// Splash Page
app.get('/', (c) => {
  return c.render(
    <>
      <div class="splash-page" id="splash">
        <h1 class="splash-logo">WOVE</h1>
      </div>
    </>
  )
})

// Main Homepage
app.get('/home', (c) => {
  const allProducts = [...products.outerwear, ...products.performance, ...products.essentials]
  
  return c.render(
    <>
      <nav class="nav-minimal nav-minimal-simple">
        <div class="nav-content">
          <ul class="nav-menu-center">
            <li><a href="/home">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart" class="cart-link">
              Cart
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
      </nav>

      <section class="hero-editorial hero-with-logo">
        <div class="hero-logo-text">
          <h1>WOVE</h1>
        </div>
        <div class="hero-image-large">
          <img src="/static/hero-bag.jpg" alt="WOVE Collection" />
        </div>
      </section>

      <section class="editorial-intro">
        <div class="editorial-content">
          <p>Where craft meets contemporary design.</p>
          <p>Each piece in our collection represents the intersection of performance and timeless elegance.</p>
          <a href="/collection" class="btn-shop-collection">Shop Collection</a>
        </div>
      </section>
      
      <section class="value-props">
        <div class="value-prop-grid">
          <div class="value-prop-item">
            <h3>Free UK Shipping</h3>
            <p>On orders over £150</p>
          </div>
          <div class="value-prop-item">
            <h3>30 Day Returns</h3>
            <p>Easy, hassle-free returns</p>
          </div>
          <div class="value-prop-item">
            <h3>Premium Quality</h3>
            <p>Made in Portugal</p>
          </div>
          <div class="value-prop-item">
            <h3>Secure Checkout</h3>
            <p>Powered by Stripe</p>
          </div>
        </div>
      </section>

      <footer class="footer-minimal">
        <p>© 2026 WOVE. All rights reserved.</p>
      </footer>
    </>
  )
})

// Stories Page
app.get('/stories', (c) => {
  return c.render(
    <>
      <nav class="nav-minimal">
        <div class="nav-content">
          <a href="/home" class="logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu-center">
            <li><a href="/home">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories" class="active">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart" class="cart-link">
              Cart
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
      </nav>

      <section class="about-page">
        <div class="about-hero">
          <h1>OUR STORY</h1>
          <p class="about-subtitle">A journey from vision to reality</p>
        </div>

        <div class="about-timeline">
          
          <div class="timeline-item">
            <div class="timeline-year">2024</div>
            <div class="timeline-content">
              <h2>THE BEGINNING</h2>
              <p>Born from a singular vision: to redefine modern menswear through the lens of technical innovation and timeless design. In a small studio, our founder began experimenting with performance fabrics traditionally reserved for athletic wear, reimagining them for everyday elegance.</p>
              <p>The first collection—three pieces—sold out within hours. We knew we had struck a chord.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2025</div>
            <div class="timeline-content">
              <h2>EXPANSION & EVOLUTION</h2>
              <p>What started as a passion project evolved into a full collection. We expanded our range to include outerwear, essentials, and performance pieces—all united by meticulous attention to fabric, fit, and function.</p>
              <p>Our philosophy remained unchanged: create fewer, better things. Each piece must earn its place in your wardrobe through uncompromising quality and design integrity.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2026</div>
            <div class="timeline-content">
              <h2>SPRING / SUMMER</h2>
              <p>Our most ambitious collection to date. Thirteen pieces that represent the pinnacle of our craft—from the Air Shell Jacket with its featherweight construction to the Second Skin Tee that moves like a second layer.</p>
              <p>We've refined every detail: the precise fall of a collar, the exact weight of a fabric, the perfect balance between structure and fluidity.</p>
            </div>
          </div>

        </div>

        <div class="about-philosophy">
          <h2>OUR PHILOSOPHY</h2>
          <div class="philosophy-grid">
            <div class="philosophy-item">
              <h3>QUALITY OVER QUANTITY</h3>
              <p>We believe in creating pieces that last—both in construction and design. Every WOVE garment is built to be worn for years, not seasons.</p>
            </div>
            <div class="philosophy-item">
              <h3>TECHNICAL EXCELLENCE</h3>
              <p>Performance fabrics aren't just for athletes. We source materials that breathe, move, and adapt—bringing technical innovation to everyday wear.</p>
            </div>
            <div class="philosophy-item">
              <h3>TIMELESS DESIGN</h3>
              <p>Trends fade. Style endures. We design for the long term, creating pieces that transcend seasonal fashion cycles.</p>
            </div>
            <div class="philosophy-item">
              <h3>METICULOUS CRAFT</h3>
              <p>Every seam, every stitch, every detail is considered. We obsess over the smallest elements because excellence lives in the details.</p>
            </div>
          </div>
        </div>

        <div class="about-mission">
          <blockquote>
            "We don't create fashion. We create pieces that become part of who you are—garments that move with you, enhance your presence, and stand the test of time."
          </blockquote>
          <p class="mission-signature">— WOVE</p>
        </div>

      </section>

      <footer class="footer-minimal">
        <p>© 2026 WOVE. All rights reserved.</p>
      </footer>
    </>
  )
})

// Collection Page - Editorial Showcase (No Categories)
app.get('/collection', (c) => {
  // Combine all products into one seamless collection
  const allProducts = [
    ...products.performance,
    ...products.outerwear,
    ...products.essentials,
    ...products.bottoms,
    ...products.accessories
  ];

  return c.render(
    <>
      <nav class="nav-minimal">
        <div class="nav-content">
          <a href="/home" class="logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu-center">
            <li><a href="/home">Home</a></li>
            <li><a href="/collection" class="active">Collection</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart" class="cart-link">
              Cart
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
      </nav>

      <section class="collection-hero-luxury">
        <div class="collection-hero-content">
          <p class="collection-season">Spring / Summer 2026</p>
          <h1>Collection</h1>
        </div>
      </section>
      
      <section class="collection-filter-bar">
        <div class="filter-container">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="outerwear">Outerwear</button>
          <button class="filter-btn" data-filter="essentials">Essentials</button>
          <button class="filter-btn" data-filter="performance">Performance</button>
        </div>
      </section>

      <section class="collection-editorial-luxury">
        <div class="product-grid-luxury-asymmetric">
          {allProducts.map((product, index) => {
            const isLarge = index % 7 === 0 || index % 7 === 3;
            return (
              <div class={`product-card-luxury ${isLarge ? 'product-large' : ''}`} data-category={product.category.toLowerCase()}>
                <a href={`/product/${product.id}`} class="product-link-luxury">
                  {product.badge && (
                    <span class="product-badge">{product.badge}</span>
                  )}
                  <button class="wishlist-btn" aria-label="Add to wishlist">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5L8.825 16.45C4.4 12.475 1.5 9.875 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.575 2.125 9.025 2.875 10 4.025C10.975 2.875 12.425 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.875 15.6 12.475 11.175 16.45L10 17.5Z" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  </button>
                  <div class="product-image-luxury">
                    <img src={product.image} alt={product.name} class="product-img-main" loading="lazy" />
                    <img src={product.hoverImage} alt={product.name} class="product-img-hover" loading="lazy" />
                  </div>
                  <div class="product-info-luxury">
                    <h3>{product.name}</h3>
                    {product.material && (
                      <p class="product-material">{product.material}</p>
                    )}
                    <span class="product-price-luxury">£{product.price}</span>
                    {product.colors && product.colors.length > 0 && (
                      <div class="product-colors">
                        {product.colors.map(color => (
                          <span class="color-dot" title={color} data-color={color.toLowerCase()}></span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
                {product.inStock === false && (
                  <div class="sold-out-overlay">
                    <span class="sold-out-badge">SOLD OUT</span>
                    <button class="notify-me-btn" data-product-id={product.id} data-product-name={product.name}>
                      Notify Me
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <footer class="footer-minimal">
        <p>© 2026 WOVE. All rights reserved.</p>
      </footer>
    </>
  )
})

// Product Detail Page
app.get('/product/:id', (c) => {
  const id = c.req.param('id')
  const allProducts = [...products.outerwear, ...products.performance, ...products.essentials, ...products.bottoms, ...products.accessories]
  const product = allProducts.find(p => p.id === id)
  
  if (!product) {
    return c.redirect('/collection')
  }
  
  return c.render(
    <>
      <nav class="nav-minimal">
        <div class="nav-content">
          <a href="/home" class="logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu-center">
            <li><a href="/home">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart" class="cart-link">
              Cart
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
      </nav>

      <section class="product-detail-page">
        <div class="product-detail-content">
          <div class="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div class="product-detail-info">
            <h1>{product.name}</h1>
            <p class="product-category">{product.category}</p>
            <p class="product-price-detail">£{product.price}</p>
            
            <div class="product-description">
              <p>{product.description}</p>
            </div>
            
            <div class="product-options">
              <div class="size-selector">
                <label>Size</label>
                <div class="size-buttons" data-product-id={product.id}>
                  <button class="size-btn" data-size="S">S</button>
                  <button class="size-btn" data-size="M">M</button>
                  <button class="size-btn" data-size="L">L</button>
                  <button class="size-btn" data-size="XL">XL</button>
                </div>
              </div>
              
              <div class="quantity-selector">
                <label>Quantity</label>
                <div class="quantity-controls">
                  <button class="qty-btn qty-minus" data-product-id={product.id}>−</button>
                  <input type="number" class="qty-input" value="1" min="1" max="10" data-product-id={product.id} />
                  <button class="qty-btn qty-plus" data-product-id={product.id}>+</button>
                </div>
              </div>
            </div>
            
            <button 
              class="btn-add-to-cart-detail" 
              data-product-id={product.id}
              data-product-name={product.name}
              data-product-price={product.price}
              data-product-image={product.image}
            >
              Add to Cart
            </button>
            
            <div class="product-details">
              <h3>Details</h3>
              <ul>
                <li>Premium technical fabric</li>
                <li>Contemporary minimal design</li>
                <li>Made in Portugal</li>
                <li>Model is 6'1" and wears size M</li>
              </ul>
            </div>
            
            <div class="product-care">
              <h3>Care Instructions</h3>
              <ul>
                <li>Machine wash cold</li>
                <li>Tumble dry low</li>
                <li>Do not bleach</li>
                <li>Iron low heat if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer-minimal">
        <p>© 2026 WOVE. All rights reserved.</p>
      </footer>
    </>
  )
})

// Search placeholder
app.get('/search', (c) => c.redirect('/home'))

// Product Feed API for Ad Campaigns (Facebook/Google)
app.get('/api/product-feed.json', (c) => {
  const allProducts = [
    ...products.outerwear,
    ...products.performance,
    ...products.essentials,
    ...products.bottoms,
    ...products.accessories
  ];
  
  const feed = allProducts.map(product => ({
    id: product.id,
    title: product.name,
    description: product.description,
    link: `https://webapp.pages.dev/product/${product.id}`,
    image_link: `https://webapp.pages.dev${product.image}`,
    price: `${product.price} GBP`,
    availability: 'in stock',
    condition: 'new',
    brand: 'WOVE',
    product_type: product.category,
    google_product_category: 'Apparel & Accessories > Clothing > Men\'s Clothing'
  }));
  
  return c.json(feed);
})

// Restock Notification API
app.post('/api/restock-notification', async (c) => {
  try {
    const { name, email, phone, newsletter, productId, productName } = await c.req.json();
    
    // Validate name
    if (!name || name.trim().length < 2) {
      return c.json({ success: false, message: 'Please enter your full name' }, 400);
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return c.json({ success: false, message: 'Please enter a valid email address' }, 400);
    }
    
    // Validate phone
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phone || phone.trim().length < 10 || !phoneRegex.test(phone)) {
      return c.json({ success: false, message: 'Please enter a valid phone number' }, 400);
    }
    
    // In a real app, you would:
    // 1. Store in database (Cloudflare D1)
    // 2. Send confirmation email
    // 3. Add to email marketing list (if newsletter === true)
    // 4. Send SMS notification when back in stock
    
    // For now, just log and return success
    console.log(`
      Restock notification:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Newsletter: ${newsletter}
      Product: ${productName} (${productId})
    `);
    
    return c.json({ 
      success: true, 
      message: `Thank you, ${name.split(' ')[0]}! We'll notify you when ${productName} is back in stock.` 
    });
  } catch (error) {
    console.error('Restock notification error:', error);
    return c.json({ success: false, message: 'Something went wrong. Please try again.' }, 500);
  }
})

// Cart page
app.get('/cart', (c) => {
  return c.render(
    <>
      <nav class="nav-minimal">
        <div class="nav-content">
          <a href="/home" class="logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu-center">
            <li><a href="/home">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart" class="active">Cart</a>
          </div>
        </div>
      </nav>

      <section class="cart-page">
        <div class="cart-container">
          <h1>Shopping Cart</h1>
          
          <div id="cart-items" class="cart-items">
            {/* Cart items will be populated by JavaScript */}
          </div>
          
          <div id="cart-empty" class="cart-empty" style="display: none;">
            <p>Your cart is empty</p>
            <a href="/collection" class="btn-continue-shopping">Continue Shopping</a>
          </div>
          
          <div id="cart-summary" class="cart-summary" style="display: none;">
            <div class="summary-row">
              <span>Subtotal</span>
              <span id="cart-subtotal">£0.00</span>
            </div>
            <div class="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div class="summary-row summary-total">
              <span>Total</span>
              <span id="cart-total">£0.00</span>
            </div>
            <button id="checkout-btn" class="btn-checkout">Proceed to Checkout</button>
          </div>
        </div>
      </section>

      <footer class="footer-minimal">
        <p>© 2026 WOVE. All rights reserved.</p>
      </footer>
    </>
  )
})

// Order confirmation page (Stripe success redirect)
app.get('/order-confirmation', (c) => {
  return c.render(
    <>
      <nav class="nav-minimal">
        <div class="nav-content">
          <a href="/home" class="logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu-center">
            <li><a href="/home">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart" class="cart-link">
              Cart
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
      </nav>

      <section class="confirmation-page">
        <div class="confirmation-content">
          <h1>Order Confirmed</h1>
          <p class="confirmation-message">Thank you for your order. You will receive a confirmation email shortly.</p>
          <a href="/collection" class="btn-continue-shopping">Continue Shopping</a>
        </div>
      </section>

      <footer class="footer-minimal">
        <p>© 2026 WOVE. All rights reserved.</p>
      </footer>
    </>
  )
})

export default app
