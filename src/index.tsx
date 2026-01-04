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
      category: 'Essentials'
    },
    {
      id: 'essentials-jogger',
      name: 'Essentials Jogger',
      price: '£85',
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials'
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
  return c.render(
    <>
      {/* Clean Navigation - Loewe Style */}
      <nav class="nav-clean">
        <div class="nav-wrapper">
          <div class="nav-logo">
            <a href="/">
              <img src="/static/2.png" alt="WOVE" />
            </a>
          </div>
          
          <ul class="nav-links">
            <li><a href="#men">Men</a></li>
            <li><a href="#gifts">Gifts</a></li>
            <li><a href="#art">Art & Craft</a></li>
            <li><a href="#stories">Stories</a></li>
          </ul>

          <div class="nav-right">
            <input type="search" placeholder="Search" class="nav-search" />
            <a href="#account" class="nav-icon">Account</a>
            <a href="#cart" class="nav-icon">Cart</a>
          </div>
        </div>
      </nav>

      {/* Hero - Clean & Centered */}
      <section class="hero-clean">
        <div class="hero-image-wrapper">
          <img src="/static/products/city-parka.jpg" alt="WOVE Spring Summer 2026" />
        </div>
      </section>

      {/* Collection Intro */}
      <section class="collection-intro">
        <h1>Spring / Summer 2026</h1>
        <p>Where craft meets contemporary design</p>
      </section>

      {/* Product Grid - Clean 4 Column */}
      <section class="products-section">
        <div class="products-grid">
          {[...products.outerwear, ...products.essentials, ...products.performance, ...products.bottoms, ...products.accessories].map(product => (
            <div class="product-item">
              <a href={`#${product.id}`}>
                <div class="product-image-box">
                  <img src={product.image} alt={product.name} />
                </div>
                <div class="product-details">
                  <h3>{product.name}</h3>
                  <p class="product-price">{product.price}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About - Simple */}
      <section class="about-simple">
        <div class="about-content">
          <h2>WOVE</h2>
          <p>Premium menswear crafted for the modern gentleman. Each piece combines technical innovation with timeless design.</p>
          <div class="about-values">
            <div class="value-item">
              <strong>100%</strong>
              <span>Premium Materials</span>
            </div>
            <div class="value-item">
              <strong>48h</strong>
              <span>Global Delivery</span>
            </div>
            <div class="value-item">
              <strong>5★</strong>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimal */}
      <section class="newsletter-minimal">
        <h3>Stay Updated</h3>
        <p>Subscribe to receive updates about new collections</p>
        <form id="newsletter-form">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer - Clean */}
      <footer class="footer-clean">
        <div class="footer-grid">
          <div class="footer-col">
            <img src="/static/2.png" alt="WOVE" class="footer-logo" />
          </div>
          
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#outerwear">Outerwear</a></li>
              <li><a href="#essentials">Essentials</a></li>
              <li><a href="#performance">Performance</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#stores">Stores</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
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
