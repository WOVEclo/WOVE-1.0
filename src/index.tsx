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
      image: '/static/products/air-shell-jacket.jpg',
      category: 'Outerwear'
    },
    {
      id: 'cropped-anorak',
      name: 'Cropped Anorak',
      price: 165,
      image: '/static/products/cropped-anorak.jpg',
      category: 'Outerwear'
    },
    {
      id: 'city-parka',
      name: 'City Parka',
      price: 285,
      image: '/static/products/city-parka.jpg',
      category: 'Outerwear'
    }
  ],
  essentials: [
    {
      id: 'essentials-hoodie',
      name: 'Essentials Hoodie',
      price: 95,
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials'
    },
    {
      id: 'cloud-quarter-zip',
      name: 'Cloud Quarter Zip',
      price: 125,
      image: '/static/products/cloud-quarter-zip.jpg',
      category: 'Essentials'
    },
    {
      id: 'cloud-hoodie',
      name: 'Cloud Hoodie',
      price: 135,
      image: '/static/products/cloud-hoodie.jpg',
      category: 'Essentials'
    },
    {
      id: 'track-zip',
      name: 'Track Zip',
      price: 145,
      image: '/static/products/track-zip.jpg',
      category: 'Essentials'
    }
  ],
  performance: [
    {
      id: 'second-skin-top',
      name: 'Second Skin Top',
      price: 75,
      image: '/static/products/second-skin-top.jpg',
      category: 'Performance'
    },
    {
      id: 'second-skin-tee',
      name: 'Second Skin Tee',
      price: 65,
      image: '/static/products/second-skin-tee.jpg',
      category: 'Performance'
    },
    {
      id: 'worn-run-tee',
      name: 'Worn Run Tee',
      price: 55,
      image: '/static/products/worn-run-tee.jpg',
      category: 'Performance'
    }
  ],
  bottoms: [
    {
      id: 'motion-pants',
      name: 'Motion Pants',
      price: 85,
      image: '/static/products/motion-pants.jpg',
      category: 'Bottoms'
    },
    {
      id: 'motion-shorts',
      name: 'Motion Shorts',
      price: 65,
      image: '/static/products/motion-shorts.jpg',
      category: 'Bottoms'
    }
  ],
  accessories: [
    {
      id: 'off-duty-cap',
      name: 'Off Duty Cap',
      price: 45,
      image: '/static/products/off-duty-cap.jpg',
      category: 'Accessories'
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
            <a href="/cart">Cart</a>
          </div>
        </div>
      </nav>

      <section class="hero-editorial hero-with-logo">
        <div class="hero-logo-text">
          <h1>WOVE</h1>
        </div>
        <div class="hero-image-large">
          <img src="/static/hero-bag.jpg" alt="WOVE Collection" />
          <div class="hero-text-overlay">
            <p>Spring / Summer 2026</p>
          </div>
        </div>
      </section>

      <section class="editorial-intro">
        <div class="editorial-content">
          <p>Where craft meets contemporary design. Each piece in our collection represents the intersection of technical innovation and timeless elegance.</p>
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
            <a href="/cart">Cart</a>
          </div>
        </div>
      </nav>

      <section class="stories-hero-minimal">
        <h1>Stories</h1>
      </section>

      {/* Campaign Grid - SS26 */}
      <section class="campaign-section">
        <div class="campaign-header">
          <p class="campaign-label">Campaigns</p>
          <h2>SS26 Collection</h2>
        </div>
        <div class="campaign-grid">
          <div class="campaign-item campaign-large">
            <img src="/static/products/city-parka.jpg" alt="SS26 Campaign" />
            <div class="campaign-overlay">
              <h3>City Parka</h3>
            </div>
          </div>
          <div class="campaign-item">
            <img src="/static/products/second-skin-tee.jpg" alt="Second Skin Tee" />
            <div class="campaign-overlay">
              <h3>Second Skin Tee</h3>
            </div>
          </div>
          <div class="campaign-item">
            <img src="/static/products/air-shell-jacket.jpg" alt="Air Shell" />
            <div class="campaign-overlay">
              <h3>Air Shell</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Runway Section */}
      <section class="campaign-section">
        <div class="campaign-header">
          <p class="campaign-label">Runway</p>
          <h2>Spring / Summer 2026</h2>
        </div>
        <div class="campaign-grid campaign-grid-4">
          <div class="campaign-item">
            <img src="/static/products/worn-run-tee.jpg" alt="Worn Run Tee" />
          </div>
          <div class="campaign-item">
            <img src="/static/products/cloud-hoodie.jpg" alt="Cloud Hoodie" />
          </div>
          <div class="campaign-item">
            <img src="/static/products/track-zip.jpg" alt="Track Zip" />
          </div>
          <div class="campaign-item">
            <img src="/static/products/motion-pants.jpg" alt="Motion Pants" />
          </div>
        </div>
      </section>

      {/* Editorial Text Section */}
      <section class="story-editorial">
        <div class="story-editorial-content">
          <h2>Where Craft Meets Contemporary Design</h2>
          <p>WOVE was founded on a simple belief: that premium menswear should embody both technical innovation and timeless elegance. We create pieces that move with you, designed to elevate your everyday.</p>
        </div>
      </section>

      {/* Product Focus Grid */}
      <section class="campaign-section">
        <div class="campaign-header">
          <p class="campaign-label">Projects</p>
          <h2>WOVE Performance</h2>
        </div>
        <div class="campaign-grid campaign-grid-3">
          <div class="campaign-item">
            <img src="/static/products/second-skin-top.jpg" alt="Second Skin Top" />
            <div class="campaign-caption">
              <p>Second Skin Top</p>
            </div>
          </div>
          <div class="campaign-item">
            <img src="/static/products/cropped-anorak.jpg" alt="Cropped Anorak" />
            <div class="campaign-caption">
              <p>Cropped Anorak</p>
            </div>
          </div>
          <div class="campaign-item">
            <img src="/static/products/cloud-quarter-zip.jpg" alt="Cloud Quarter Zip" />
            <div class="campaign-caption">
              <p>Cloud Quarter Zip</p>
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

// Collection Page - Categorized
app.get('/collection', (c) => {
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
            <a href="/cart">Cart</a>
          </div>
        </div>
      </nav>

      <section class="collection-hero">
        <h1>Spring / Summer 2026</h1>
      </section>

      {/* Performance Category - MOVED TO TOP */}
      <section class="category-section">
        <div class="category-header">
          <h2>Performance</h2>
        </div>
        <div class="product-grid-luxury">
          {products.performance.map(product => (
            <div class="product-item-luxury">
              <a href={`/product/${product.id}`} class="product-link-luxury">
                <div class="product-image-luxury">
                  <img src={product.image} alt={product.name} />
                  <div class="quick-add">
                    <button class="btn-quick-add">Add to Cart</button>
                  </div>
                </div>
              </a>
              <div class="product-details-luxury">
                <h3>{product.name}</h3>
                <span class="price-luxury">£{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outerwear Category */}
      <section class="category-section">
        <div class="category-header">
          <h2>Outerwear</h2>
        </div>
        <div class="product-grid-luxury">
          {products.outerwear.map(product => (
            <div class="product-item-luxury">
              <a href={`/product/${product.id}`} class="product-link-luxury">
                <div class="product-image-luxury">
                  <img src={product.image} alt={product.name} />
                  <div class="quick-add">
                    <button class="btn-quick-add">Add to Cart</button>
                  </div>
                </div>
              </a>
              <div class="product-details-luxury">
                <h3>{product.name}</h3>
                <span class="price-luxury">£{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essentials Category */}
      <section class="category-section">
        <div class="category-header">
          <h2>Essentials</h2>
        </div>
        <div class="product-grid-luxury">
          {products.essentials.map(product => (
            <div class="product-item-luxury">
              <a href={`/product/${product.id}`} class="product-link-luxury">
                <div class="product-image-luxury">
                  <img src={product.image} alt={product.name} />
                  <div class="quick-add">
                    <button class="btn-quick-add">Add to Cart</button>
                  </div>
                </div>
              </a>
              <div class="product-details-luxury">
                <h3>{product.name}</h3>
                <span class="price-luxury">£{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottoms Category */}
      <section class="category-section">
        <div class="category-header">
          <h2>Bottoms</h2>
        </div>
        <div class="product-grid-luxury">
          {products.bottoms.map(product => (
            <div class="product-item-luxury">
              <a href={`/product/${product.id}`} class="product-link-luxury">
                <div class="product-image-luxury">
                  <img src={product.image} alt={product.name} />
                  <div class="quick-add">
                    <button class="btn-quick-add">Add to Cart</button>
                  </div>
                </div>
              </a>
              <div class="product-details-luxury">
                <h3>{product.name}</h3>
                <span class="price-luxury">£{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Category */}
      <section class="category-section">
        <div class="category-header">
          <h2>Accessories</h2>
        </div>
        <div class="product-grid-luxury">
          {products.accessories.map(product => (
            <div class="product-item-luxury">
              <a href={`/product/${product.id}`} class="product-link-luxury">
                <div class="product-image-luxury">
                  <img src={product.image} alt={product.name} />
                  <div class="quick-add">
                    <button class="btn-quick-add">Add to Cart</button>
                  </div>
                </div>
              </a>
              <div class="product-details-luxury">
                <h3>{product.name}</h3>
                <span class="price-luxury">£{product.price}</span>
              </div>
            </div>
          ))}
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
            <a href="/cart">Cart</a>
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
            <p class="product-price-detail">£{product.price}</p>
            <button class="btn-add-to-cart-detail">Add to Cart</button>
            <div class="product-description">
              <p>Premium menswear crafted with precision. This piece combines technical innovation with timeless design.</p>
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

// Placeholder pages
app.get('/search', (c) => c.redirect('/home'))
app.get('/cart', (c) => c.redirect('/home'))

export default app
