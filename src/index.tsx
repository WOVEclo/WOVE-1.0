import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Product catalog organized by category
const products = {
  outerwear: [
    {
      id: 'air-shell-jacket',
      name: 'Air Shell Jacket',
      price: 125,
      rating: 4.5,
      reviews: 28,
      image: '/static/products/air-shell-jacket.jpg',
      category: 'Outerwear',
      inStock: true,
      description: 'Ultralight shell with reflective branding'
    },
    {
      id: 'cropped-anorak',
      name: 'Cropped Anorak',
      price: 165,
      rating: 4.8,
      reviews: 15,
      image: '/static/products/cropped-anorak.jpg',
      category: 'Outerwear',
      inStock: true,
      description: 'Technical chest yoke and drawstrings'
    },
    {
      id: 'city-parka',
      name: 'City Parka',
      price: 285,
      rating: 5.0,
      reviews: 42,
      image: '/static/products/city-parka.jpg',
      category: 'Outerwear',
      inStock: true,
      description: 'Refined parka with dual zipper system'
    }
  ],
  performance: [
    {
      id: 'second-skin-top',
      name: 'Second Skin Top',
      price: 75,
      rating: 4.7,
      reviews: 34,
      image: '/static/products/second-skin-top.jpg',
      category: 'Performance',
      inStock: true,
      description: 'Technical long sleeve in taupe'
    },
    {
      id: 'worn-run-tee',
      name: 'Worn Run Tee',
      price: 55,
      rating: 4.3,
      reviews: 22,
      image: '/static/products/worn-run-tee.jpg',
      category: 'Performance',
      inStock: true,
      description: 'Distressed organic cotton'
    }
  ],
  essentials: [
    {
      id: 'essentials-hoodie',
      name: 'Essentials Hoodie',
      price: 95,
      rating: 4.6,
      reviews: 67,
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      inStock: true,
      description: 'Charcoal grey marl, sold separately'
    },
    {
      id: 'essentials-jogger',
      name: 'Essentials Jogger',
      price: 85,
      rating: 4.6,
      reviews: 67,
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      inStock: true,
      description: 'Charcoal grey marl, sold separately'
    },
    {
      id: 'cloud-quarter-zip',
      name: 'Cloud Quarter Zip',
      price: 125,
      rating: 4.9,
      reviews: 31,
      image: '/static/products/cloud-quarter-zip.jpg',
      category: 'Essentials',
      inStock: true,
      description: 'Black fleece with side pockets'
    },
    {
      id: 'cloud-hoodie',
      name: 'Cloud Hoodie',
      price: 135,
      rating: 4.8,
      reviews: 29,
      image: '/static/products/cloud-hoodie.jpg',
      category: 'Essentials',
      inStock: true,
      description: 'Full zip with drawcord details'
    },
    {
      id: 'track-zip',
      name: 'Track Zip',
      price: 145,
      rating: 4.7,
      reviews: 18,
      image: '/static/products/track-zip.jpg',
      category: 'Essentials',
      inStock: true,
      description: 'Retro styling with contrast piping'
    }
  ],
  bottoms: [
    {
      id: 'motion-pants',
      name: 'Motion Pants',
      price: 85,
      rating: 4.5,
      reviews: 24,
      image: '/static/products/motion-pants.jpg',
      category: 'Bottoms',
      inStock: true,
      description: 'Off-white performance joggers'
    },
    {
      id: 'motion-shorts',
      name: 'Motion Shorts',
      price: 65,
      rating: 4.4,
      reviews: 19,
      image: '/static/products/motion-shorts.jpg',
      category: 'Bottoms',
      inStock: true,
      description: 'Light grey technical shorts'
    }
  ],
  accessories: [
    {
      id: 'off-duty-cap',
      name: 'Off Duty Cap',
      price: 45,
      rating: 4.8,
      reviews: 56,
      image: '/static/products/off-duty-cap.jpg',
      category: 'Accessories',
      inStock: true,
      description: 'White cap with olive embroidery'
    }
  ]
}

// Landing Page
app.get('/', (c) => {
  return c.render(
    <>
      <nav class="nav">
        <div class="nav-container">
          <a href="/" class="nav-logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <button class="nav-btn">Get Pro</button>
          </div>
        </div>
      </nav>

      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Innovating the Way You Care for Clothes</h1>
            <p>Premium menswear crafted with precision. Effortless style meets technical innovation.</p>
            <a href="/collection" class="btn-primary">Explore Collection</a>
          </div>
          <div class="hero-image">
            <img src="/static/products/city-parka.jpg" alt="WOVE Collection" />
          </div>
        </div>
      </section>

      <section class="features" id="about">
        <div class="container">
          <h2>Why Choose WOVE</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Every piece crafted from the finest materials with attention to detail</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🚀</div>
              <h3>Fast Shipping</h3>
              <p>Global delivery within 48 hours to your doorstep</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">♻️</div>
              <h3>Sustainable</h3>
              <p>Eco-friendly production and materials for a better tomorrow</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⭐</div>
              <h3>5-Star Rated</h3>
              <p>Trusted by thousands of satisfied customers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <h2>Ready to Elevate Your Wardrobe?</h2>
          <p>Discover our Spring/Summer 2026 collection</p>
          <a href="/collection" class="btn-primary">Shop Now</a>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-content">
          <div class="footer-col">
            <img src="/static/2.png" alt="WOVE" class="footer-logo" />
            <p>Premium menswear for the modern gentleman</p>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/collection">All Products</a></li>
              <li><a href="/collection">Outerwear</a></li>
              <li><a href="/collection">Essentials</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
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

// Collection Page
app.get('/collection', (c) => {
  const allProducts = [...products.outerwear, ...products.performance, ...products.essentials, ...products.bottoms, ...products.accessories]
  
  return c.render(
    <>
      <nav class="nav">
        <div class="nav-container">
          <a href="/" class="nav-logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/collection" class="active">Collection</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <button class="nav-btn">Get Pro</button>
          </div>
        </div>
      </nav>

      <section class="collection-header">
        <div class="container">
          <h1>Spring / Summer 2026 Collection</h1>
          <p>Explore our complete range of premium menswear</p>
        </div>
      </section>

      <section class="collection-page">
        <div class="container">
          <div class="collection-sidebar">
            <h3>Categories</h3>
            <ul class="category-list">
              <li><a href="#" data-category="all" class="active">All Products</a></li>
              <li><a href="#" data-category="outerwear">Outerwear</a></li>
              <li><a href="#" data-category="essentials">Essentials</a></li>
              <li><a href="#" data-category="performance">Performance</a></li>
              <li><a href="#" data-category="bottoms">Bottoms</a></li>
              <li><a href="#" data-category="accessories">Accessories</a></li>
            </ul>
          </div>

          <div class="collection-products">
            <div class="products-grid-cards">
              {allProducts.map(product => (
                <div class="product-card" data-category={product.category.toLowerCase()}>
                  <div class="product-card-image">
                    <img src={product.image} alt={product.name} />
                    <span class="product-badge">{product.category}</span>
                  </div>
                  <div class="product-card-content">
                    <h3 class="product-card-title">{product.name}</h3>
                    <div class="product-rating">
                      {[1,2,3,4,5].map(star => (
                        <span class={star <= Math.floor(product.rating) ? 'star filled' : 'star'}>{star <= Math.floor(product.rating) ? '★' : '☆'}</span>
                      ))}
                      <span class="rating-text">({product.rating})</span>
                    </div>
                    <p class="product-description">{product.description}</p>
                    <div class="product-footer">
                      <span class="product-price">£{product.price}</span>
                      <span class="product-stock">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <button class="btn-add-to-cart">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 2L6 6H18L15 2M6 6L3 20H21L18 6M9 11V17M15 11V17"></path>
                      </svg>
                      Add to Cart
                    </button>
                    <div class="product-actions">
                      <button class="btn-icon" title="Add to Wishlist">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                      <button class="btn-icon" title="Quick View">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-content">
          <div class="footer-col">
            <img src="/static/2.png" alt="WOVE" class="footer-logo" />
            <p>Premium menswear for the modern gentleman</p>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/collection">All Products</a></li>
              <li><a href="/collection">Outerwear</a></li>
              <li><a href="/collection">Essentials</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
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
