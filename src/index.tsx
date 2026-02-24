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
      category: 'Outerwear',
      description: 'Lightweight shell jacket with weather-resistant finish and minimalist design.'
    },
    {
      id: 'cropped-anorak',
      name: 'Cropped Anorak',
      price: 165,
      image: '/static/products/cropped-anorak.jpg',
      category: 'Outerwear',
      description: 'Contemporary cropped silhouette with functional details and technical fabric.'
    },
    {
      id: 'city-parka',
      name: 'City Parka',
      price: 285,
      image: '/static/products/city-parka.jpg',
      category: 'Outerwear',
      description: 'Premium urban parka combining warmth, style and weather protection.'
    }
  ],
  essentials: [
    {
      id: 'essentials-hoodie',
      name: 'Essentials Hoodie',
      price: 95,
      image: '/static/products/essentials-set.jpg',
      category: 'Essentials',
      description: 'Classic heavyweight hoodie in premium cotton with refined fit.'
    },
    {
      id: 'cloud-quarter-zip',
      name: 'Cloud Quarter Zip',
      price: 125,
      image: '/static/products/cloud-quarter-zip.jpg',
      category: 'Essentials',
      description: 'Soft brushed fleece quarter-zip with relaxed fit and comfort stretch.'
    },
    {
      id: 'cloud-hoodie',
      name: 'Cloud Hoodie',
      price: 135,
      image: '/static/products/cloud-hoodie.jpg',
      category: 'Essentials',
      description: 'Ultra-soft cloud fleece hoodie with oversized hood and kangaroo pocket.'
    },
    {
      id: 'track-zip',
      name: 'Track Zip',
      price: 145,
      image: '/static/products/track-zip.jpg',
      category: 'Essentials',
      description: 'Athletic-inspired track jacket with modern slim fit and zip pockets.'
    }
  ],
  performance: [
    {
      id: 'second-skin-top',
      name: 'Second Skin Top',
      price: 75,
      image: '/static/products/second-skin-top.jpg',
      category: 'Performance',
      description: 'Seamless performance top with four-way stretch and moisture-wicking technology.'
    },
    {
      id: 'second-skin-tee',
      name: 'Second Skin Tee',
      price: 65,
      image: '/static/products/second-skin-tee.jpg',
      category: 'Performance',
      description: 'Fitted performance tee with technical fabric and athletic cut.'
    },
    {
      id: 'worn-run-tee',
      name: 'Worn Run Tee',
      price: 55,
      image: '/static/products/worn-run-tee.jpg',
      category: 'Performance',
      description: 'Lightweight running tee with breathable mesh panels and reflective details.'
    }
  ],
  bottoms: [
    {
      id: 'motion-pants',
      name: 'Motion Pants',
      price: 85,
      image: '/static/products/motion-pants.jpg',
      category: 'Bottoms',
      description: 'Versatile pants with four-way stretch and tapered athletic fit.'
    },
    {
      id: 'motion-shorts',
      name: 'Motion Shorts',
      price: 65,
      image: '/static/products/motion-shorts.jpg',
      category: 'Bottoms',
      description: 'Performance shorts with moisture-wicking fabric and zip pockets.'
    }
  ],
  accessories: [
    {
      id: 'off-duty-cap',
      name: 'Off Duty Cap',
      price: 45,
      image: '/static/products/off-duty-cap.jpg',
      category: 'Accessories',
      description: 'Classic six-panel cap with adjustable back and curved brim.'
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
        </div>
      </section>

      <section class="editorial-intro">
        <div class="editorial-content">
          <p>Where craft meets contemporary design.</p>
          <p>Each piece in our collection represents the intersection of performance and timeless elegance.</p>
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
            <a href="/cart">Cart</a>
          </div>
        </div>
      </nav>

      <section class="collection-hero">
        <h1>Spring / Summer 2026</h1>
      </section>

      <section class="collection-editorial">
        <div class="product-grid-editorial-seamless">
          {allProducts.map(product => (
            <a href={`/product/${product.id}`} class="product-card-minimal">
              <div class="product-image-minimal">
                <img src={product.image} alt={product.name} />
              </div>
              <div class="product-info-minimal">
                <h3>{product.name}</h3>
                <span>£{product.price}</span>
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
