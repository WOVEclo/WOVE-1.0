# WOVE - Interactive E-Commerce Website

## 🌐 Live URLs

- **Landing Page**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai
- **Collection Page**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/collection

---

## 🎯 Overview

WOVE is a premium menswear e-commerce website featuring:
- **Modern landing page** with hero section and features
- **Separate collection page** with interactive product cards
- **Category filtering** for easy browsing
- **Product cards** with ratings, prices, and add-to-cart
- **Fully responsive** design for all devices

---

## 📄 Pages

### 1. **Landing Page** (`/`)
The home page features:
- **Hero Section**: Large banner with "Innovating the Way You Care for Clothes"
- **Features Grid**: 4 feature cards (Premium Quality, Fast Shipping, Sustainable, 5-Star Rated)
- **CTA Section**: Call-to-action to explore the collection
- **Navigation**: Links to Home, Collection, About, Contact

### 2. **Collection Page** (`/collection`)
The shopping page features:
- **Collection Header**: Spring/Summer 2026 banner
- **Category Sidebar**: Filter by All, Outerwear, Essentials, Performance, Bottoms, Accessories
- **Product Grid**: 3-column layout with 13 product cards
- **Interactive Filtering**: Click categories to filter products

---

## 🛍️ Product Cards

Each product card includes:

### **Visual Elements**
- ✅ **Product Image** - High-quality photos with hover zoom
- ✅ **Category Badge** - Top-right corner label
- ✅ **5-Star Rating** - Visual stars with numeric rating
- ✅ **Product Name** - Bold, clear title
- ✅ **Description** - Brief product details
- ✅ **Price** - Large, prominent display (£)
- ✅ **Stock Status** - "In Stock" badge

### **Interactive Features**
- ✅ **Add to Cart Button** - Full-width with cart icon
  - Changes to green "Added to Cart" on click
  - Returns to normal after 2 seconds
- ✅ **Wishlist Button** - Heart icon
  - Fills with color on click
  - Toggles on/off
- ✅ **Quick View Button** - Eye icon for preview
- ✅ **Hover Effects** - Card lifts up, image zooms in

---

## 🎨 Design Features

### **Color Scheme**
```
Primary: Purple Gradient (#667eea → #764ba2)
Background: White (#FFFFFF)
Text: Gray (#1F2937, #4B5563)
Accent: Green (#10B981) for success states
Shadows: Multi-level depth (sm, md, lg, xl)
```

### **Typography**
```
Font Family: System fonts (-apple-system, Segoe UI, etc.)
Headings: 700 weight (bold)
Body: 400-600 weight (regular to semibold)
Sizes: 
  - Hero H1: 48px
  - Section H2: 40px
  - Product Title: 20px
  - Body Text: 14-18px
```

### **Layout**
```
Max Width: 1200px
Padding: 24px
Grid:
  - Hero: 2 columns (text + image)
  - Features: 4 columns
  - Products: 3 columns
  - Footer: 4 columns
Gaps: 32px (features), 40px (sidebar)
```

### **Interactions**
- ✅ **Smooth transitions** - 0.2-0.4s ease
- ✅ **Hover transforms** - translateY(-8px) on cards
- ✅ **Scale effects** - 1.1x on images
- ✅ **Fade-in animations** - Intersection Observer
- ✅ **Category filtering** - Smooth show/hide

---

## 📦 Complete Product Collection (13 Items)

### **Outerwear** (3 products)
1. **Air Shell Jacket** - £125 (4.5★, 28 reviews)
2. **Cropped Anorak** - £165 (4.8★, 15 reviews)
3. **City Parka** - £285 (5.0★, 42 reviews)

### **Performance** (2 products)
4. **Second Skin Top** - £75 (4.7★, 34 reviews)
5. **Worn Run Tee** - £55 (4.3★, 22 reviews)

### **Essentials** (5 products)
6. **Essentials Hoodie** - £95 (4.6★, 67 reviews)
7. **Essentials Jogger** - £85 (4.6★, 67 reviews)
8. **Cloud Quarter Zip** - £125 (4.9★, 31 reviews)
9. **Cloud Hoodie** - £135 (4.8★, 29 reviews)
10. **Track Zip** - £145 (4.7★, 18 reviews)

### **Bottoms** (2 products)
11. **Motion Pants** - £85 (4.5★, 24 reviews)
12. **Motion Shorts** - £65 (4.4★, 19 reviews)

### **Accessories** (1 product)
13. **Off Duty Cap** - £45 (4.8★, 56 reviews)

---

## 🎯 Key Features

### **Navigation**
- ✅ Fixed header with logo
- ✅ Menu links: Home, Collection, About, Contact
- ✅ "Get Pro" button (CTA)
- ✅ Smooth scroll to sections
- ✅ Active page indicator

### **Category Filtering**
- ✅ Sidebar with 6 categories
- ✅ "All Products" default view
- ✅ Smooth fade in/out animations
- ✅ Active category highlighting
- ✅ Instant filtering (no page reload)

### **Product Interactions**
- ✅ **Add to Cart**: Button changes to green with checkmark
- ✅ **Wishlist**: Heart icon fills/empties on toggle
- ✅ **Quick View**: Eye icon for product preview
- ✅ **Hover Effects**: Card elevation + image zoom
- ✅ **Scroll Animations**: Cards fade in on scroll

### **Responsive Design**
- ✅ **Desktop (1024px+)**: 3-column product grid
- ✅ **Tablet (768-1023px)**: 2-column product grid
- ✅ **Mobile (< 768px)**: 1-column product grid
- ✅ **Adaptive Navigation**: Hides menu on mobile
- ✅ **Flexible Hero**: Stacks on small screens

---

## 🛠️ Technical Stack

| Technology | Purpose |
|------------|---------|
| **Hono** | Web framework for Cloudflare Workers |
| **TypeScript** | Type-safe development |
| **Vite** | Build tooling |
| **Cloudflare Pages** | Edge deployment |
| **Custom CSS** | Modern styling with gradients & shadows |
| **Vanilla JS** | Interactive features (no framework bloat) |
| **PM2** | Process management |

---

## 📁 Project Structure

```
webapp/
├── src/
│   ├── index.tsx          # Main app with 2 routes (/, /collection)
│   └── renderer.tsx       # HTML structure
├── public/static/
│   ├── products/          # 12 product images
│   ├── 1.png, 2.png, 3.png  # Logo files
│   ├── style.css          # 11KB modern CSS
│   └── app.js             # 4KB interactive JS
├── dist/                  # Production build
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc         # Cloudflare config
└── README.md
```

---

## 🚀 Development

### **Local Development**
```bash
cd /home/user/webapp
npm run build              # Build first
pm2 start ecosystem.config.cjs  # Start with PM2
```

### **View Pages**
```bash
# Landing page
curl http://localhost:3000

# Collection page
curl http://localhost:3000/collection
```

### **Check Status**
```bash
pm2 list                   # List services
pm2 logs wove-webapp --nostream  # View logs
pm2 restart wove-webapp    # Restart
```

---

## 🎨 CSS Features

### **Modern Design Patterns**
- ✅ CSS Variables for theming
- ✅ Grid layouts (no floats)
- ✅ Flexbox for alignment
- ✅ Custom shadows (5 levels)
- ✅ Border radius system (sm, md, lg)
- ✅ Gradient backgrounds
- ✅ Smooth transitions
- ✅ Transform animations

### **Animation Effects**
```css
/* Hover Card Lift */
transform: translateY(-8px);
box-shadow: var(--shadow-xl);

/* Image Zoom */
transform: scale(1.1);

/* Fade In on Scroll */
opacity: 0 → 1;
transform: translateY(30px) → translateY(0);
```

---

## 💡 Interactive Features

### **1. Category Filtering**
Click any category in the sidebar to filter products:
- **All Products** - Shows all 13 items
- **Outerwear** - Shows 3 items
- **Essentials** - Shows 5 items
- **Performance** - Shows 2 items
- **Bottoms** - Shows 2 items
- **Accessories** - Shows 1 item

### **2. Add to Cart**
Click "Add to Cart" button:
1. Button turns green
2. Text changes to "Added to Cart" with checkmark
3. Returns to normal after 2 seconds

### **3. Wishlist Toggle**
Click heart icon:
1. First click: Heart fills with color
2. Second click: Heart empties
3. Background changes to light red when active

### **4. Scroll Animations**
All cards fade in when scrolling:
- Cards start invisible (opacity: 0)
- Fade in when entering viewport
- Uses Intersection Observer API

---

## 📱 Responsive Breakpoints

| Screen Size | Layout Changes |
|-------------|----------------|
| **1024px+** | 3-column products, 4-column features, full nav |
| **768-1023px** | 2-column products, 2-column features |
| **< 768px** | 1-column products, 1-column features, hide sidebar |

---

## 🎯 Next Steps

### **E-Commerce Features**
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] User accounts and login
- [ ] Order history
- [ ] Payment integration (Stripe)

### **Product Pages**
- [ ] Individual product detail pages
- [ ] Image galleries (multiple views)
- [ ] Size/color selectors
- [ ] Related products
- [ ] Customer reviews

### **Enhanced Features**
- [ ] Search functionality
- [ ] Price range filter
- [ ] Sort by (price, popularity, new)
- [ ] Product comparison
- [ ] Wishlist page

### **Content**
- [ ] About page
- [ ] Contact form
- [ ] Size guide
- [ ] Shipping information
- [ ] Return policy

---

## 🏆 What's Included

✅ **2 Complete Pages** - Landing + Collection  
✅ **13 Product Cards** - With images, ratings, prices  
✅ **Interactive Filtering** - Category sidebar  
✅ **Add to Cart Animation** - Button state changes  
✅ **Wishlist Toggle** - Heart icon interaction  
✅ **Scroll Animations** - Fade-in effects  
✅ **Hover Effects** - Card lift + image zoom  
✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Modern UI** - Gradients, shadows, rounded corners  
✅ **Clean Navigation** - Fixed header with links  
✅ **Footer** - 4-column layout with links  

---

## 🎭 Design Inspiration

This website is inspired by modern e-commerce platforms like:
- Clean product cards with ratings and stock status
- Category filtering for easy browsing
- Interactive hover states and animations
- Gradient hero sections
- Shadow-based depth hierarchy

---

## 📊 Performance

- **Build Time**: ~6 seconds
- **Bundle Size**: 53.77 kB
- **CSS Size**: 11 KB
- **JS Size**: 4 KB
- **Total Pages**: 2 (Landing + Collection)
- **Total Products**: 13 items

---

## 🔗 Quick Links

- **Homepage**: [/](https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai)
- **Collection**: [/collection](https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/collection)

---

**Last Updated**: January 2026  
**Version**: 3.0.0 (Interactive Multi-Page Website)

---

*WOVE - Premium Menswear for the Modern Gentleman*
