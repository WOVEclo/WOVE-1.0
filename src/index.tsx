import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Product catalog organized by category
const products = {
  performance: [
    {
      id: 'second-skin-top',
      name: 'Second Skin Top',
      price: '£75',
      image: '/static/products/second-skin-top.jpg',
      category: 'Performance',
      description: 'Technical long sleeve in taupe'
    },
    {
      id: 'worn-run-tee',
      name: 'Worn Run Tee',
      price: '£55',
      image: '/static/products/worn-run-tee.jpg',
      category: 'Performance',
      description: 'Distressed organic cotton'
    }
  ],
  outerwear: [
    {
      id: 'air-shell-jacket',
      name: 'Air Shell Jacket',
      price: '£125',
      image: '/static/products/air-shell-jacket.jpg',
      category: 'Outerwear',
      description: 'Ultralight shell with reflective branding'
    },
    {
      id: 'cropped-anorak',
      name: 'Cropped Anorak',
      price: '£165',
      image: '/static/products/cropped-anorak.jpg',
      category: 'Outerwear',
      description: 'Technical chest yoke and drawstrings'
    },
    {
      id: 'city-parka',
      name: 'City Parka',
      price: '£285',
      image: '/static/products/city-parka.jpg',
      category: 'Outerwear',
      description: 'Refined parka with dual zipper system'
    }
  ],
  essentials: [
    {
      id: 'essentials-hoodie',
      name: 'Essentials Hoodie',
      price: '£95',
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      description: 'Charcoal grey marl, sold separately'
    },
    {
      id: 'essentials-jogger',
      name: 'Essentials Jogger',
      price: '£85',
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      description: 'Charcoal grey marl, sold separately'
    },
    {
      id: 'cloud-quarter-zip',
      name: 'Cloud Quarter Zip',
      price: '£125',
      image: '/static/products/cloud-quarter-zip.jpg',
      category: 'Essentials',
      description: 'Black fleece with side pockets'
    },
    {
      id: 'cloud-hoodie',
      name: 'Cloud Hoodie',
      price: '£135',
      image: '/static/products/cloud-hoodie.jpg',
      category: 'Essentials',
      description: 'Full zip with drawcord details'
    },
    {
      id: 'track-zip',
      name: 'Track Zip',
      price: '£145',
      image: '/static/products/track-zip.jpg',
      category: 'Essentials',
      description: 'Retro styling with contrast piping'
    }
  ],
  bottoms: [
    {
      id: 'motion-pants',
      name: 'Motion Pants',
      price: '£85',
      image: '/static/products/motion-pants.jpg',
      category: 'Bottoms',
      description: 'Off-white performance joggers'
    },
    {
      id: 'motion-shorts',
      name: 'Motion Shorts',
      price: '£65',
      image: '/static/products/motion-shorts.jpg',
      category: 'Bottoms',
      description: 'Light grey technical shorts'
    }
  ],
  accessories: [
    {
      id: 'off-duty-cap',
      name: 'Off Duty Cap',
      price: '£45',
      image: '/static/products/off-duty-cap.jpg',
      category: 'Accessories',
      description: 'White cap with olive embroidery'
    }
  ]
}

app.get('/', (c) => {
  return c.render(
    <>
      {/* Navigation */}
      <nav class="nav" style="background: transparent; position: fixed; width: 100%; z-index: 1000;">
        <div class="nav-container">
          <div class="nav-logo">
            <img src="/static/2.png" alt="WOVE" class="logo-img" />
          </div>
          
          <ul class="nav-menu">
            <li><a href="#collection">Collection</a></li>
            <li><a href="#outerwear">Outerwear</a></li>
            <li><a href="#essentials">Essentials</a></li>
            <li><a href="#about">About</a></li>
          </ul>

          <div class="nav-actions">
            <a href="#search" class="nav-icon">Search</a>
            <a href="#account" class="nav-icon">Account</a>
            <a href="#cart" class="nav-icon">Cart</a>
          </div>

          <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section class="hero-full" style="min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center;">
        <div class="hero-image-container">
          <img src="/static/products/city-parka.jpg" alt="WOVE SS26" class="hero-image" />
          <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-content-center" style="position: relative; z-index: 10; text-align: center; color: white;">
          <h1 class="hero-title-large">Spring / Summer 2026</h1>
          <p class="hero-subtitle">Where craft meets contemporary design</p>
          <a href="#collection" class="hero-cta-minimal">Explore Collection</a>
        </div>
      </section>

      {/* Editorial Section 1 */}
      <section class="editorial-section">
        <div class="editorial-grid">
          <div class="editorial-image">
            <img src="/static/products/air-shell-jacket.jpg" alt="Air Shell Jacket" />
          </div>
          <div class="editorial-content">
            <span class="editorial-label">Technical Outerwear</span>
            <h2 class="editorial-title">Air Shell Jacket</h2>
            <p class="editorial-text">Ultralight shell construction meets reflective WOVE branding. Designed for movement, crafted for the elements.</p>
            <a href="#outerwear" class="editorial-link">Discover More</a>
          </div>
        </div>
      </section>

      {/* Collection Grid - Outerwear */}
      <section class="collection-section" id="outerwear">
        <div class="section-header">
          <h2 class="section-title">Outerwear</h2>
          <p class="section-subtitle">Technical precision meets refined design</p>
        </div>

        <div class="product-grid-loewe">
          {products.outerwear.map(product => (
            <div class="product-card-loewe">
              <a href={`#${product.id}`} class="product-link">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <span class="product-overlay-text">View Details</span>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-description">{product.description}</p>
                  <span class="product-price">{product.price}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Section 2 */}
      <section class="editorial-section editorial-reverse">
        <div class="editorial-grid">
          <div class="editorial-content">
            <span class="editorial-label">Performance</span>
            <h2 class="editorial-title">Second Skin Technology</h2>
            <p class="editorial-text">Our performance pieces combine technical innovation with understated luxury. Designed for those who demand both style and function.</p>
            <a href="#performance" class="editorial-link">Shop Performance</a>
          </div>
          <div class="editorial-image">
            <img src="/static/products/second-skin-top.jpg" alt="Second Skin Top" />
          </div>
        </div>
      </section>

      {/* Collection Grid - Essentials */}
      <section class="collection-section" id="essentials">
        <div class="section-header">
          <h2 class="section-title">Essentials</h2>
          <p class="section-subtitle">Elevated basics for the modern wardrobe</p>
        </div>

        <div class="product-grid-loewe">
          {products.essentials.map(product => (
            <div class="product-card-loewe">
              <a href={`#${product.id}`} class="product-link">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <span class="product-overlay-text">View Details</span>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-description">{product.description}</p>
                  <span class="product-price">{product.price}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Full Width Feature */}
      <section class="feature-full">
        <img src="/static/products/track-zip.jpg" alt="Track Collection" class="feature-image" />
        <div class="feature-content-overlay">
          <h2 class="feature-title">Track Collection</h2>
          <p class="feature-text">Athletic heritage reimagined</p>
        </div>
      </section>

      {/* Collection Grid - Performance & Bottoms */}
      <section class="collection-section" id="collection">
        <div class="section-header">
          <h2 class="section-title">Performance & Activewear</h2>
          <p class="section-subtitle">Movement without compromise</p>
        </div>

        <div class="product-grid-loewe">
          {[...products.performance, ...products.bottoms].map(product => (
            <div class="product-card-loewe">
              <a href={`#${product.id}`} class="product-link">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <span class="product-overlay-text">View Details</span>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-description">{product.description}</p>
                  <span class="product-price">{product.price}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Highlight */}
      <section class="collection-section">
        <div class="section-header">
          <h2 class="section-title">Accessories</h2>
          <p class="section-subtitle">Complete your look</p>
        </div>

        <div class="product-grid-loewe">
          {products.accessories.map(product => (
            <div class="product-card-loewe">
              <a href={`#${product.id}`} class="product-link">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <span class="product-overlay-text">View Details</span>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-description">{product.description}</p>
                  <span class="product-price">{product.price}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section class="about-loewe" id="about">
        <div class="about-content-center">
          <h2 class="about-title">Where Craft Meets Contemporary</h2>
          <p class="about-text">
            WOVE represents a new generation of menswear. We believe in the power of 
            exceptional materials, precise construction, and timeless design. Each piece 
            in our collection is created to last, designed to move with you, and crafted 
            to elevate your everyday.
          </p>
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Premium Materials</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">48h</span>
              <span class="stat-label">Global Delivery</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5★</span>
              <span class="stat-label">Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section class="newsletter-loewe">
        <div class="newsletter-content">
          <h3 class="newsletter-title">Stay Connected</h3>
          <p class="newsletter-text">Be the first to know about new collections and exclusive offers</p>
          <form class="newsletter-form" id="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="newsletter-input"
              required
            />
            <button type="submit" class="newsletter-button">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer-loewe">
        <div class="footer-container">
          <div class="footer-section">
            <img src="/static/2.png" alt="WOVE" class="footer-logo" />
            <p class="footer-tagline">Premium menswear for the modern gentleman</p>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Shop</h4>
            <ul class="footer-links">
              <li><a href="#outerwear">Outerwear</a></li>
              <li><a href="#essentials">Essentials</a></li>
              <li><a href="#collection">Performance</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Company</h4>
            <ul class="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#stores">Stores</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Follow</h4>
            <ul class="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 WOVE. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
})

export default app
