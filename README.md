# WOVE - Premium Menswear Website

## 🎯 Project Overview
**WOVE** is a stunning, premium menswear brand website featuring clean lines, sophisticated animations, and an ultra-luxury aesthetic. Built with modern web technologies for optimal performance and visual excellence.

## ✨ Current Features

### Design & Aesthetics
- **Premium Typography**: Cormorant Garamond for headlines, Inter for body text
- **WOVE Branding**: Consistent logo usage throughout (navigation, footer)
- **Sophisticated Color Palette**: Black, white, and elegant gray tones
- **Clean Lines & White Space**: Generous spacing for high-end feel
- **Smooth Animations**: Fade-ins, slide-ins, parallax effects
- **Interactive Elements**: Hover effects, transitions, micro-interactions

### Current Sections
1. **Hero Section**: Full-screen with animated typography "PREMIUM MENSWEAR REDEFINED"
2. **Collection Placeholders**: 3 placeholder product cards ready for your images
3. **About Section**: Brand story with animated statistics
4. **Newsletter**: Email subscription with smooth form interactions
5. **Footer**: Comprehensive navigation and social links

### Interactive Features
- ✅ Smooth scroll navigation
- ✅ Responsive mobile menu with hamburger animation
- ✅ Parallax hero effect
- ✅ Intersection Observer animations
- ✅ Product hover effects with quick view
- ✅ Newsletter form with success feedback
- ✅ Sticky navigation with scroll effects
- ✅ Mobile-first responsive design

## 🌐 URLs
- **Development**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai
- **Local**: http://localhost:3000

## 🎨 Design System

### Typography
- **Display Font**: Cormorant Garamond (300, 400, 500, 600, 700)
- **Body Font**: Inter (300, 400, 500, 600, 700)

### Color Palette
- Primary: #000000 (Black)
- Background: #FFFFFF (White)  
- Grays: #F5F5F5, #E5E5E5, #D4D4D4, #A3A3A3, #525252, #262626

### Branding
- **Logo Files**: 
  - `/static/1.png` - Large WOVE logo
  - `/static/2.png` - Medium WOVE logo (used in nav/footer)
  - `/static/3.png` - Small WOVE logo
- **Logo Style**: Bold, modern sans-serif with circular O

## 🚀 Tech Stack
- **Framework**: Hono (Cloudflare Workers)
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages
- **Process Manager**: PM2
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

## 📱 Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px
- Small Mobile: < 480px

## 🛠️ Development Commands

```bash
# Start development server
npm run build
pm2 start ecosystem.config.cjs

# Check logs
pm2 logs wove-webapp --nostream

# Restart server (after changes)
fuser -k 3000/tcp 2>/dev/null || true
npm run build
pm2 restart wove-webapp

# Stop server
pm2 stop wove-webapp
pm2 delete wove-webapp
```

## 📦 Project Structure
```
webapp/
├── src/
│   ├── index.tsx          # Main Hono application
│   └── renderer.tsx       # HTML renderer with fonts
├── public/static/
│   ├── 1.png, 2.png, 3.png # WOVE logo variants
│   ├── style.css          # Premium CSS styles
│   └── app.js             # Interactive JavaScript
├── dist/                  # Build output
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc         # Cloudflare config
└── package.json           # Dependencies
```

## 🎬 Ready for Your Content

### Adding Product Images
The site has **3 placeholder product cards** ready for your images:

**To add your products:**
1. Place product images in `/public/static/products/` folder
2. Update `src/index.tsx` to reference your images
3. Modify product names, descriptions, and prices
4. Rebuild: `npm run build`
5. Restart: `pm2 restart wove-webapp`

**Example product card structure:**
```tsx
<div class="featured-item">
  <div class="featured-image-wrapper">
    <img src="/static/products/your-image.jpg" alt="Product" class="featured-image" />
    <div class="featured-overlay">
      <button class="quick-view">Quick View</button>
    </div>
  </div>
  <div class="featured-info">
    <h3 class="featured-name">Your Product Name</h3>
    <p class="featured-price">£XXX</p>
  </div>
</div>
```

### Adding More Products
Simply duplicate the product card structure in `src/index.tsx` and the CSS grid will automatically adjust.

## 🎨 Design Philosophy
- **Minimalist**: Let products and typography speak
- **Luxurious**: Premium feel through spacing and refinement
- **Intuitive**: Effortless navigation and interaction
- **Performant**: Fast loading with smooth animations
- **Responsive**: Beautiful on all devices

## 📝 Status
- ✅ Core website structure complete
- ✅ Premium design and animations implemented
- ✅ Responsive mobile design
- ✅ Interactive features working
- ✅ WOVE branding integrated
- ⏳ Awaiting your product images and details
- ⏳ E-commerce features (future phase)

## 💎 Brand Guidelines
- **Look & Feel**: Premium, high-end designer, clean lines
- **Target**: Modern gentleman seeking quality craftsmanship
- **Aesthetic**: Contemporary luxury with timeless elegance
- **Experience**: Smooth, intuitive, sophisticated

---

**Built with precision for WOVE** | Last Updated: January 3, 2026
