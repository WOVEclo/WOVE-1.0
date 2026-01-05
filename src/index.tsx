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
      <nav class="nav-minimal">
        <div class="nav-content">
          <a href="/home" class="logo">
            <img src="/static/2.png" alt="WOVE" />
          </a>
          
          <ul class="nav-menu-center">
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart">Cart</a>
          </div>
        </div>
      </nav>

      <section class="hero-editorial">
        <div class="hero-image-large">
          <img src="/static/products/city-parka.jpg" alt="Spring Summer 2026" />
          <div class="hero-text-overlay">
            <h1>Spring / Summer 2026</h1>
          </div>
        </div>
      </section>

      <section class="editorial-intro">
        <div class="editorial-content">
          <p>Where craft meets contemporary design. Each piece in our collection represents the intersection of technical innovation and timeless elegance.</p>
        </div>
      </section>

      <section class="featured-products">
        <div class="product-grid-editorial">
          {allProducts.slice(0, 3).map(product => (
            <a href={`/product/${product.id}`} class="product-editorial">
              <div class="product-image-editorial">
                <img src={product.image} alt={product.name} />
              </div>
              <div class="product-info-minimal">
                <h3>{product.name}</h3>
                <span class="price">£{product.price}</span>
              </div>
            </a>
          ))}
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
            <li><a href="/collection">Collection</a></li>
            <li><a href="/stories" class="active">Stories</a></li>
          </ul>
          
          <div class="nav-right">
            <a href="/search">Search</a>
            <a href="/cart">Cart</a>
          </div>
        </div>
      </nav>

      <section class="stories-hero">
        <h1>Our Story</h1>
      </section>

      {/* Brand Philosophy */}
      <section class="story-section">
        <div class="story-content-wide">
          <div class="story-text-center">
            <h2>Where Craft Meets Contemporary Design</h2>
            <p>WOVE was founded on a simple belief: that premium menswear should embody both technical innovation and timeless elegance. We create pieces that move with you, designed to elevate your everyday.</p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section class="story-section">
        <div class="story-content-wide">
          <div class="story-text-center">
            <h3>The Beginning</h3>
            <p>WOVE began with a vision to redefine premium menswear. Our founder, inspired by the intersection of craftsmanship and modern design, set out to create clothing that transcends trends.</p>
            <p>Every stitch, every fabric choice, every detail is considered with purpose. We believe in quality over quantity, in pieces that last, in design that respects both tradition and innovation.</p>
          </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section class="story-section">
        <div class="story-content-wide">
          <div class="story-text-center">
            <h3>Our Philosophy</h3>
            <p>We believe in the power of exceptional materials and precise construction. Each piece in our collection is crafted to move with you, designed to elevate your everyday, and built to last.</p>
            <p>Premium materials. Technical innovation. Timeless design. These aren't just words—they're our commitment to you.</p>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section class="story-section">
        <div class="story-content-wide">
          <div class="story-text-center">
            <h2>Craftsmanship</h2>
            <p>Every WOVE piece begins with a commitment to quality. We source only the finest materials—premium fabrics that feel exceptional and perform flawlessly. Our construction methods honor traditional craftsmanship while embracing modern technology.</p>
          </div>
        </div>
      </section>

      {/* Inspiration */}
      <section class="story-section">
        <div class="story-content-wide">
          <div class="story-text-center">
            <h2>Inspiration</h2>
            <p>Our designs draw from three pillars: Athletic Heritage, Modern Comfort, and Technical Innovation. Each piece reflects our commitment to creating menswear that performs as beautifully as it looks.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section class="story-section story-values">
        <div class="story-content-wide">
          <h2 class="story-section-title">Our Values</h2>
          <div class="values-grid">
            <div class="value-item">
              <h4>Quality</h4>
              <p>100% premium materials in every piece</p>
            </div>
            <div class="value-item">
              <h4>Innovation</h4>
              <p>Technical fabrics meet timeless design</p>
            </div>
            <div class="value-item">
              <h4>Sustainability</h4>
              <p>Thoughtful production, lasting products</p>
            </div>
            <div class="value-item">
              <h4>Excellence</h4>
              <p>Attention to detail in every stitch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section class="story-section story-closing">
        <div class="story-content-narrow">
          <p class="story-quote">"We don't create fashion. We create pieces that become part of your story."</p>
          <p class="story-signature">— WOVE</p>
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

      {/* Performance Category */}
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
