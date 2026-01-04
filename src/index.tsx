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
      category: 'Performance'
    },
    {
      id: 'worn-run-tee',
      name: 'Worn Run Tee',
      price: '£55',
      image: '/static/products/worn-run-tee.jpg',
      category: 'Performance'
    }
  ],
  outerwear: [
    {
      id: 'air-shell-jacket',
      name: 'Air Shell Jacket',
      price: '£125',
      image: '/static/products/air-shell-jacket.jpg',
      category: 'Outerwear'
    },
    {
      id: 'cropped-anorak',
      name: 'Cropped Anorak',
      price: '£165',
      image: '/static/products/cropped-anorak.jpg',
      category: 'Outerwear'
    },
    {
      id: 'city-parka',
      name: 'City Parka',
      price: '£285',
      image: '/static/products/city-parka.jpg',
      category: 'Outerwear'
    }
  ],
  essentials: [
    {
      id: 'essentials-hoodie',
      name: 'Essentials Hoodie',
      price: '£95',
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      note: 'Part of set, sold separately'
    },
    {
      id: 'essentials-jogger',
      name: 'Essentials Jogger',
      price: '£85',
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      note: 'Part of set, sold separately'
    },
    {
      id: 'cloud-quarter-zip',
      name: 'Cloud Quarter Zip',
      price: '£125',
      image: '/static/products/cloud-quarter-zip.jpg',
      category: 'Essentials'
    },
    {
      id: 'cloud-hoodie',
      name: 'Cloud Hoodie',
      price: '£135',
      image: '/static/products/cloud-hoodie.jpg',
      category: 'Essentials'
    },
    {
      id: 'track-zip',
      name: 'Track Zip',
      price: '£145',
      image: '/static/products/track-zip.jpg',
      category: 'Essentials'
    }
  ],
  bottoms: [
    {
      id: 'motion-pants',
      name: 'Motion Pants',
      price: '£85',
      image: '/static/products/motion-pants.jpg',
      category: 'Bottoms'
    },
    {
      id: 'motion-shorts',
      name: 'Motion Shorts',
      price: '£65',
      image: '/static/products/motion-shorts.jpg',
      category: 'Bottoms'
    }
  ],
  accessories: [
    {
      id: 'off-duty-cap',
      name: 'Off Duty Cap',
      price: '£45',
      image: '/static/products/off-duty-cap.jpg',
      category: 'Accessories'
    }
  ]
}

app.get('/', (c) => {
  const allProducts = [
    ...products.performance,
    ...products.outerwear,
    ...products.essentials,
    ...products.bottoms,
    ...products.accessories
  ]

  return c.render(
    <div>
      {/* Navigation */}
      <nav class="nav">
        <div class="nav-container">
          <a href="/" class="logo-link">
            <img src="/static/2.png" alt="WOVE" class="logo" />
          </a>
          <div class="nav-menu">
            <a href="#performance" class="nav-link">Performance</a>
            <a href="#outerwear" class="nav-link">Outerwear</a>
            <a href="#essentials" class="nav-link">Essentials</a>
            <a href="#about" class="nav-link">About</a>
          </div>
          <button class="menu-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="hero-line">SPRING</span>
            <span class="hero-line">SUMMER</span>
            <span class="hero-line">2026</span>
          </h1>
          <p class="hero-subtitle">Technical Performance Meets Premium Design</p>
          <a href="#performance" class="cta-button">
            <span>Explore Collection</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="hero-scroll">
          <span>Scroll</span>
          <div class="scroll-line"></div>
        </div>
      </section>

      {/* Performance Section */}
      <section class="collection-section" id="performance">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Technical Sportswear</span>
            <h2 class="section-title">Performance</h2>
          </div>
          <div class="products-grid">
            {products.performance.map((product) => (
              <div class="product-card">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <button class="quick-view-btn">View Details</button>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outerwear Section */}
      <section class="collection-section" id="outerwear">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Weather Protection</span>
            <h2 class="section-title">Outerwear</h2>
          </div>
          <div class="products-grid">
            {products.outerwear.map((product) => (
              <div class="product-card">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <button class="quick-view-btn">View Details</button>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials Section */}
      <section class="collection-section" id="essentials">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Everyday Comfort</span>
            <h2 class="section-title">Essentials</h2>
          </div>
          <div class="products-grid">
            {products.essentials.map((product) => (
              <div class="product-card">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <button class="quick-view-btn">View Details</button>
                  </div>
                  {product.note && <span class="product-note">{product.note}</span>}
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottoms & Accessories Section */}
      <section class="collection-section" id="bottoms">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Complete The Look</span>
            <h2 class="section-title">Bottoms & Accessories</h2>
          </div>
          <div class="products-grid">
            {[...products.bottoms, ...products.accessories].map((product) => (
              <div class="product-card">
                <div class="product-image-wrapper">
                  <img src={product.image} alt={product.name} class="product-image" />
                  <div class="product-overlay">
                    <button class="quick-view-btn">View Details</button>
                  </div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">{product.name}</h3>
                  <p class="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section class="about" id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-content">
              <span class="section-label">SS26</span>
              <h2 class="section-title">Engineered For Performance</h2>
              <p class="about-text">
                WOVE represents a new generation of menswear that refuses to compromise. Our Spring/Summer 2026 collection combines technical performance fabrics with refined aesthetic sensibilities.
              </p>
              <p class="about-text">
                From seamless performance wear to weather-resistant outerwear, each piece is meticulously engineered for the modern athlete and urban explorer.
              </p>
            </div>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">13</div>
                <div class="stat-label">SS26 Products</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">4</div>
                <div class="stat-label">Collections</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section class="newsletter">
        <div class="container">
          <div class="newsletter-content">
            <h2 class="newsletter-title">Join The WOVE Community</h2>
            <p class="newsletter-text">Be first to access new releases and exclusive offers.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="newsletter-input" required />
              <button type="submit" class="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer" id="contact">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <img src="/static/2.png" alt="WOVE" class="footer-logo" />
              <p class="footer-text">Performance meets premium design.</p>
            </div>
            <div class="footer-col">
              <h4 class="footer-title">Shop</h4>
              <ul class="footer-links">
                <li><a href="#performance">Performance</a></li>
                <li><a href="#outerwear">Outerwear</a></li>
                <li><a href="#essentials">Essentials</a></li>
                <li><a href="#bottoms">Bottoms</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="footer-title">Company</h4>
              <ul class="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Stores</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="footer-title">Follow</h4>
              <ul class="footer-links">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 WOVE. All rights reserved.</p>
            <div class="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
