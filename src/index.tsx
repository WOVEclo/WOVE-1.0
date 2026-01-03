import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div>
      {/* Navigation */}
      <nav class="nav">
        <div class="nav-container">
          <a href="/" class="logo-link">
            <img src="/static/2.png" alt="WOVE" class="logo" />
          </a>
          <div class="nav-menu">
            <a href="#collection" class="nav-link">Collection</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
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
            <span class="hero-line">PREMIUM</span>
            <span class="hero-line">MENSWEAR</span>
            <span class="hero-line">REDEFINED</span>
          </h1>
          <p class="hero-subtitle">Where craftsmanship meets contemporary design</p>
          <a href="#collection" class="cta-button">
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

      {/* Featured Section */}
      <section class="featured" id="collection">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Spring/Summer 2026</span>
            <h2 class="section-title">New Collection</h2>
          </div>
          <div class="featured-grid">
            <div class="featured-item">
              <div class="featured-image-wrapper">
                <div class="featured-image placeholder-image">
                  <span class="placeholder-text">Tailored Suiting</span>
                </div>
                <div class="featured-overlay">
                  <button class="quick-view">Quick View</button>
                </div>
              </div>
              <div class="featured-info">
                <h3 class="featured-name">Heritage Blazer</h3>
                <p class="featured-price">£895</p>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-image-wrapper">
                <div class="featured-image placeholder-image">
                  <span class="placeholder-text">Premium Knitwear</span>
                </div>
                <div class="featured-overlay">
                  <button class="quick-view">Quick View</button>
                </div>
              </div>
              <div class="featured-info">
                <h3 class="featured-name">Merino Crew Neck</h3>
                <p class="featured-price">£325</p>
              </div>
            </div>
            <div class="featured-item">
              <div class="featured-image-wrapper">
                <div class="featured-image placeholder-image">
                  <span class="placeholder-text">Contemporary Outerwear</span>
                </div>
                <div class="featured-overlay">
                  <button class="quick-view">Quick View</button>
                </div>
              </div>
              <div class="featured-info">
                <h3 class="featured-name">Technical Overcoat</h3>
                <p class="featured-price">£1,250</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section class="about" id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-content">
              <span class="section-label">Since 2026</span>
              <h2 class="section-title">Crafted for the Modern Gentleman</h2>
              <p class="about-text">
                WOVE represents the pinnacle of contemporary menswear. Each piece is meticulously designed and crafted using the finest materials, combining traditional tailoring techniques with modern innovation.
              </p>
              <p class="about-text">
                Our collections embody timeless elegance, attention to detail, and an unwavering commitment to quality that defines the modern gentleman's wardrobe.
              </p>
              <a href="#contact" class="text-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Premium Materials</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">48h</div>
                <div class="stat-label">Global Delivery</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5★</div>
                <div class="stat-label">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section class="newsletter">
        <div class="container">
          <div class="newsletter-content">
            <h2 class="newsletter-title">Stay Updated</h2>
            <p class="newsletter-text">Join our exclusive community for early access to new collections and special offers.</p>
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
              <p class="footer-text">Premium menswear for the modern gentleman.</p>
            </div>
            <div class="footer-col">
              <h4 class="footer-title">Shop</h4>
              <ul class="footer-links">
                <li><a href="#collection">New Arrivals</a></li>
                <li><a href="#collection">Suiting</a></li>
                <li><a href="#collection">Knitwear</a></li>
                <li><a href="#collection">Outerwear</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="footer-title">Company</h4>
              <ul class="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Stores</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="footer-title">Follow Us</h4>
              <ul class="footer-links">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 WOVE. All rights reserved.</p>
            <div class="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
