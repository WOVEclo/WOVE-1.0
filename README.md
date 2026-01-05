# WOVE - Luxury Minimal E-Commerce

**Live URL**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai

---

## 🎨 Design Philosophy

Inspired by **Loewe.com** - this is a luxury fashion website with:
- **Editorial aesthetic** (magazine-quality, not catalog)
- **Minimal everything** (text, buttons, colors, navigation)
- **Generous white space** (products breathe)
- **Elegant typography** (consistent serif font throughout)
- **Sophisticated interactions** (subtle, refined)

---

## 📄 Site Structure

### **1. Splash Page** (`/`)
- **Just "WOVE"** centered on white background
- **Cormorant Garamond** font (72px, 300 weight, 8px letter-spacing)
- **Fade-in animation** (1.5s)
- **Click anywhere** to enter → redirects to `/home`
- **Auto-enters** after 3 seconds

### **2. Main Homepage** (`/home`)
- **Minimal Navigation**
  - Logo left (28px height)
  - Menu center: Collection, Stories (Gifts removed)
  - Right: Search, Cart
  - 70px height, subtle border

- **Large Hero Image**
  - City Parka full-width
  - 85vh height
  - "Spring / Summer 2026" text overlay
  - Subtle dark overlay for text readability

- **Editorial Intro**
  - Centered paragraph (max 1000px)
  - 20px font size, 1.8 line height
  - Lots of padding (120px top/bottom)

- **Featured Products**
  - 3-column grid
  - First 3 products from collection
  - Image hover zoom (1.05x)
  - Product name + price below image
  - Links to product detail pages

### **3. Collection Page** (`/collection`)
- **Same minimal navigation**

- **Collection Header**
  - "Spring / Summer 2026" title
  - Centered, 48px font
  - 80px top padding

- **Product Grid**
  - 3 columns (desktop)
  - 2 columns (tablet)
  - 1 column (mobile)
  - 12 products total
  - 60px row gap, 40px column gap

- **Product Items**
  - 3:4 aspect ratio images
  - Product name + price always visible (centered)
  - **Hover shows "Add to Cart" button**
  - Button appears at bottom of image
  - Image zooms 1.05x on hover
  - Smooth 0.6s transitions

### **4. Product Detail Pages** (`/product/:id`)
- **Minimal navigation** (same as above)

- **Two-column layout**
  - Left: Large product image (1.5fr)
  - Right: Product info (1fr)
  - 80px gap between columns

- **Product Info**
  - Product name (42px)
  - Price (24px, gray)
  - Full-width "Add to Cart" button
  - Product description below
  - Clean, minimal styling

---

## 🎨 Design Specifications

### **Typography**
```
Font: Cormorant Garamond (serif) - used throughout
Weights: 300 (light) only
Letter spacing: 0.5px - 8px depending on element

Sizes:
- Splash logo: 72px
- Hero title: 64px
- Collection title: 48px
- Product detail h1: 42px
- Intro text: 20px
- Product names: 18px
- Prices: 16px
- Nav links: 13px
- Footer: 12px
```

### **Colors**
```
Pure White: #FFFFFF (background)
Pure Black: #000000 (text, buttons)
Gray: #999999 (secondary text, prices)
Border: #EFEFEF (subtle dividers)

No other colors - pure minimalism
```

### **Spacing**
```
Navigation: 80px height, 60px horizontal padding
Hero: 85vh height
Sections: 120px vertical padding
Product grid gaps: 60px rows, 40px columns
Max content width: 1600px
```

### **Interactions**
```
Hover transitions: 0.6s ease
Fade animations: 0.8s ease
Image scale: 1.05x on hover
Button hover: background #333 (slightly lighter black)
Nav links hover: opacity 0.5
```

---

## 🛍️ Product Collection (12 Items)

All products from your uploaded images:

1. **Air Shell Jacket** - £125
2. **Cropped Anorak** - £165
3. **City Parka** - £285
4. **Second Skin Top** - £75
5. **Worn Run Tee** - £55
6. **Essentials Hoodie** - £95
7. **Cloud Quarter Zip** - £125
8. **Cloud Hoodie** - £135
9. **Track Zip** - £145
10. **Motion Pants** - £85
11. **Motion Shorts** - £65
12. **Off Duty Cap** - £45

---

## 💡 Key Features

### **✅ What's Included**

**Splash Page**:
- ✅ Centered "WOVE" text in logo font
- ✅ Fade-in animation (1.5s)
- ✅ Click anywhere to enter
- ✅ Auto-redirect after 3 seconds

**Main Homepage**:
- ✅ Minimal navigation (logo, 3 menu items, search/cart)
- ✅ Large hero image (85vh)
- ✅ "Spring / Summer 2026" overlay text
- ✅ Editorial intro paragraph
- ✅ 3 featured products with hover zoom
- ✅ Links to product detail pages

**Collection Page**:
- ✅ Same minimal navigation
- ✅ "Spring / Summer 2026" header
- ✅ 3-column editorial grid
- ✅ 12 products with images
- ✅ Product name + price always visible
- ✅ **Hover reveals "Add to Cart" button**
- ✅ Image zoom on hover
- ✅ Fade-in on scroll animations
- ✅ Links to individual product pages

**Product Detail Pages**:
- ✅ Large product image
- ✅ Product name, price, description
- ✅ Full-width "Add to Cart" button
- ✅ Minimal, clean layout

**Interactions**:
- ✅ Smooth page transitions
- ✅ Hover image zoom (1.05x)
- ✅ Quick "Add to Cart" appears on hover
- ✅ Button feedback (changes to "Added")
- ✅ Scroll fade-in animations
- ✅ Responsive design (3 → 2 → 1 columns)

---

## 🎯 Loewe-Inspired Elements

| Loewe Feature | WOVE Implementation |
|---------------|---------------------|
| Minimal splash/entrance | ✅ "WOVE" centered splash page |
| Editorial photography | ✅ Large hero images, 3:4 ratios |
| Lots of white space | ✅ 120px padding, generous gaps |
| Subtle navigation | ✅ Minimal nav, centered menu |
| Product grid | ✅ 3-column editorial grid |
| Hover interactions | ✅ Image zoom + "Add to Cart" appears |
| Elegant typography | ✅ Cormorant Garamond serif throughout |
| Clean product pages | ✅ Minimal detail pages |
| No "e-commerce" feel | ✅ Magazine aesthetic, not catalog |
| Links to detail pages | ✅ Click product → detail page |

---

## 📁 Technical Details

### **Routes**
```
/          → Splash page (WOVE centered)
/home      → Main homepage (hero + featured)
/collection → Product grid (12 items, categorized)
/product/:id → Individual product pages
/stories   → Founder story, brand philosophy, inspiration, values
/search    → Placeholder (redirects to home)
/cart      → Placeholder (redirects to home)
```

### **File Structure**
```
webapp/
├── src/index.tsx         # Routes + pages
├── public/static/
│   ├── style.css         # 9KB luxury minimal CSS
│   ├── app.js            # 2.8KB interactions
│   ├── 2.png             # WOVE logo (28px in nav)
│   └── products/         # 12 product images
└── README.md
```

### **Bundle Size**
```
Total: 49.20 kB
CSS: 9.7 KB
JS: 2.9 KB
Build time: ~5 seconds
```

---

## 🎨 CSS Features

### **Design Patterns**
- Pure CSS (no frameworks)
- CSS variables for colors/fonts
- Grid layouts (no floats)
- Flexbox for alignment
- Minimal borders (only #EFEFEF subtle dividers)
- No shadows or gradients
- No rounded corners (sharp edges)
- Pure monochrome palette

### **Animations**
```css
/* Splash fade-in */
animation: fadeIn 1s ease-in-out;

/* Text fade-up */
animation: fadeInUp 1.5s ease-out;

/* Image zoom on hover */
transform: scale(1.05);
transition: transform 0.6s ease;

/* Scroll fade-in */
opacity: 0 → 1;
transform: translateY(30px) → translateY(0);
transition: 0.8s ease;
```

---

## 💻 Interactive Features

### **1. Splash Page**
- Fades in on load (1s)
- "WOVE" text fades up (1.5s)
- Click anywhere → fade out → redirect to /home
- Auto-enters after 3 seconds

### **2. Quick Add to Cart**
- Hidden by default
- Appears on product hover (collection page)
- Positioned at bottom of image
- Click → changes to "Added" for 1.5s
- Prevents navigation to detail page when clicked

### **3. Product Detail Add to Cart**
- Full-width button
- Click → "Added to Cart" for 2s
- Background lightens (#333)
- Returns to normal state

### **4. Scroll Animations**
- Products fade in when entering viewport
- Uses Intersection Observer API
- 0.8s smooth transition
- Starts at opacity: 0, translateY(30px)

### **5. Navigation Hover**
- Links fade to 50% opacity
- Active page has 50% opacity
- Smooth 0.3s transitions

---

## 📱 Responsive Design

### **Desktop (1024px+)**
- 3-column product grids
- Full navigation visible
- Hero 85vh height
- 60px horizontal padding

### **Tablet (768-1023px)**
- 2-column product grids
- Navigation compressed slightly
- Hero 85vh height
- 40px horizontal padding

### **Mobile (< 768px)**
- 1-column product grids
- Compact navigation (11px font)
- Hero 60vh height
- 24px horizontal padding
- Stacked product detail layout

---

## 🚀 Development

### **Start/Restart**
```bash
cd /home/user/webapp
npm run build              # Build project
pm2 restart wove-webapp    # Restart service
```

### **View Pages**
```bash
# Splash page
curl http://localhost:3000

# Homepage
curl http://localhost:3000/home

# Collection
curl http://localhost:3000/collection
```

### **Check Status**
```bash
pm2 list
pm2 logs wove-webapp --nostream
```

---

## 🎯 What Makes This Different

### **vs. Previous Versions**

| Feature | Old (E-commerce) | New (Luxury) |
|---------|------------------|--------------|
| **Entry** | Direct to homepage | Splash page |
| **Navigation** | Bold, prominent | Subtle, minimal |
| **Product display** | Catalog grid + buttons | Editorial grid, hover button |
| **Typography** | Mixed fonts | One serif font only |
| **Colors** | Purple gradients | Pure black & white |
| **Buttons** | Always visible | Hidden until hover |
| **Spacing** | Moderate | Generous (120px sections) |
| **Images** | Catalog-style | Editorial-style |
| **Feel** | E-commerce shop | Luxury magazine |

---

## ✨ Design Highlights

1. **Splash Page** - Just "WOVE" centered, pure minimalism
2. **One Font** - Cormorant Garamond everywhere (logo aesthetic)
3. **Pure Monochrome** - Only black, white, gray
4. **Large Images** - Editorial 3:4 ratio, not square
5. **Hidden Buttons** - "Add to Cart" only on hover
6. **Generous Space** - 120px section padding
7. **Smooth Animations** - 0.6-0.8s transitions
8. **No Clutter** - Removed all unnecessary elements
9. **Detail Pages** - Click products for full info
10. **Magazine Feel** - Editorial layouts, not catalog

---

## 🎭 Comparison to Loewe

**What's Similar**:
- ✅ Minimal splash/entrance concept
- ✅ Large editorial hero images
- ✅ Lots of white space
- ✅ Subtle navigation (centered menu)
- ✅ Product grid with hover interactions
- ✅ Clean typography (one font family)
- ✅ Monochrome color palette
- ✅ No "Buy Now" buttons everywhere
- ✅ Products link to detail pages
- ✅ Magazine aesthetic

**What's Different**:
- Loewe has more content sections
- Loewe has video/animation elements
- Loewe has more elaborate product detail pages
- Loewe has category pages (we have one collection)

---

## 🔗 Quick Links

- **Splash**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai
- **Homepage**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/home
- **Collection**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/collection
- **Example Product**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/product/city-parka

---

## 📊 Performance

- **Build Time**: 5 seconds
- **Bundle Size**: 49.20 KB
- **CSS**: 9.7 KB (minimal, no framework)
- **JS**: 2.9 KB (vanilla, no libraries)
- **Pages**: 4 (splash, home, collection, product detail)
- **Products**: 12 items

---

**Last Updated**: January 2026  
**Version**: 4.0.0 (Luxury Minimal)

---

*WOVE - Where craft meets contemporary design*
