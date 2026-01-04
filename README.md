# WOVE - SS26 Collection Website

## 🎯 Project Overview
**WOVE** is a premium menswear brand showcasing the complete Spring/Summer 2026 collection. Features 13 products across 4 categories with bold typography, larger branding, and sophisticated design.

## ✨ Complete SS26 Collection (13 Products)

### **Performance** (2 products)
1. **Second Skin Top** - £75
   - Taupe/sand technical long sleeve
   - WOVE branding detail at collar

2. **Worn Run Tee** - £55
   - Distressed organic cotton with laser-cut ventilation
   - Aged weathered aesthetic

### **Outerwear** (3 products)
3. **Air Shell Jacket** - £125
   - Ultralight white/transparent shell
   - Reflective WOVE branding

4. **Cropped Anorak** - £165
   - Olive/khaki cropped silhouette
   - Technical chest yoke and drawstrings

5. **City Parka** - £285
   - Sage green refined smart jacket
   - Dual 2-way zipper system

### **Essentials** (5 products)
6. **Essentials Hoodie** - £95
   - Charcoal grey marl full zip hoodie
   - Part of set, sold separately

7. **Essentials Jogger** - £85
   - Charcoal grey marl joggers
   - Part of set, sold separately

8. **Cloud Quarter Zip** - £125
   - Black fleece with quarter zip
   - Side zippered pockets

9. **Cloud Hoodie** - £135
   - Black fleece with full zip and hood
   - Drawcord hem details

10. **Track Zip** - £145
    - Black with white contrast piping
    - Retro track jacket styling

### **Bottoms & Accessories** (3 products)
11. **Motion Pants** - £85
    - Off-white/cream joggers
    - Embossed WOVE branding

12. **Motion Shorts** - £65
    - Light grey marl shorts
    - Relaxed fit with pockets

13. **Off Duty Cap** - £45
    - White baseball cap
    - Olive green WOVE embroidery

## 🌐 URLs
- **Development**: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai
- **Local**: http://localhost:3000

## 🎨 Updated Design Features

### **Branding Enhancements**
- ✅ **Larger WOVE logo** - Increased from 32px to 48px in nav
- ✅ **Consistent typography** - All text uses Inter bold sans-serif (matching logo style)
- ✅ **Bold headers** - 800 weight for impact and clarity
- ✅ **Uppercase styling** - Section titles and product names for premium feel

### **Typography System**
- **Primary Font**: Inter (400, 500, 600, 700, 800, 900)
- **Logo Style**: Bold geometric sans-serif
- **Headers**: 800 weight, uppercase, letter-spacing
- **Body**: 500 weight for clarity
- **Buttons**: 600 weight, uppercase

### **Layout & Organization**
- **4 Category Sections**: Performance, Outerwear, Essentials, Bottoms & Accessories
- **13 Individual Product Cards**: Each with unique image and details
- **Alternating Backgrounds**: White and light grey sections
- **Responsive Grid**: 3-column desktop, 2-column tablet, 1-column mobile

## 📦 Project Structure
```
webapp/
├── src/
│   ├── index.tsx          # 13 products organized by category
│   └── renderer.tsx       # Inter font only
├── public/static/
│   ├── 1.png, 2.png, 3.png # WOVE logos (48px in nav)
│   ├── style.css          # Bold typography system
│   ├── app.js             # Interactions
│   └── products/          # 12 product images (13 products, essentials set shared)
│       ├── second-skin-top.jpg
│       ├── worn-run-tee.jpg
│       ├── air-shell-jacket.jpg
│       ├── cropped-anorak.jpg
│       ├── city-parka.jpg
│       ├── essentials-set.jpg (shared by hoodie & jogger)
│       ├── cloud-quarter-zip.jpg
│       ├── cloud-hoodie.jpg
│       ├── track-zip.jpg
│       ├── motion-pants.jpg
│       ├── motion-shorts.jpg
│       └── off-duty-cap.jpg
├── dist/                  # Build output
└── package.json           # Dependencies
```

## 🛠️ Development Commands

```bash
# Build
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Restart after changes
fuser -k 3000/tcp 2>/dev/null || true
npm run build
pm2 restart wove-webapp

# Check logs
pm2 logs wove-webapp --nostream
```

## 🎯 Category Organization

### **Performance**
Technical sportswear for active pursuits
- Second Skin Top
- Worn Run Tee

### **Outerwear**
Weather-resistant layers for all conditions
- Air Shell Jacket
- Cropped Anorak
- City Parka

### **Essentials**
Premium everyday comfort pieces
- Essentials Hoodie (sold separately)
- Essentials Jogger (sold separately)
- Cloud Quarter Zip
- Cloud Hoodie
- Track Zip

### **Bottoms & Accessories**
Complete the look
- Motion Pants
- Motion Shorts
- Off Duty Cap

## 📊 Collection Statistics
- **Total Products**: 13
- **Total SKUs**: 14 (Essentials Hoodie & Jogger sold separately)
- **Categories**: 4
- **Price Range**: £45 - £285
- **Average Price**: £107
- **Color Palette**: Neutral tones (taupe, olive, sage, charcoal, black, white, grey)

## 🎨 Design System

### **Colors**
- Primary: Black (#000000)
- Secondary: White (#FFFFFF)
- Grays: #F5F5F5, #E5E5E5, #D4D4D4, #A3A3A3, #525252, #262626

### **Typography**
- **Font**: Inter (sans-serif)
- **Weights**: 400, 500, 600, 700, 800, 900
- **Headers**: 800 weight, uppercase
- **Body**: 500 weight
- **Nav Links**: 500 weight, 0.05em letter-spacing, uppercase

### **Logo**
- **Nav**: 48px height (increased from 32px)
- **Footer**: 40px height (increased from 32px)
- **Style**: Bold geometric sans-serif with circular O

## ✨ Key Features

### **Product Cards**
- High-quality product photography
- Hover overlay with "View Details" button
- Product name (uppercase, bold)
- Price display
- Special notes (e.g., "Part of set, sold separately")

### **Interactive Elements**
- Smooth scroll navigation
- Product hover effects with scale
- Animated section entrances
- Mobile hamburger menu
- Newsletter form
- Quick view buttons

### **Responsive Design**
- Desktop: 3-column product grid
- Tablet: 2-column grid
- Mobile: Single column
- Optimized images for all screens

## 🎬 Next Steps

### **Phase 2 Enhancements**
- [ ] Add multiple color options per product
- [ ] Product detail pages with full specifications
- [ ] Size selector and availability
- [ ] Shopping cart functionality
- [ ] Image galleries with multiple angles
- [ ] Customer reviews

### **E-commerce Integration**
- [ ] Cloudflare D1 for product inventory
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Customer accounts
- [ ] Wishlist functionality

## 💎 Brand Identity
- **Look**: Technical performance meets premium design
- **Aesthetic**: Bold, modern, athletic-luxe
- **Target**: Modern athlete and urban explorer
- **Collection**: Spring/Summer 2026
- **Positioning**: Mid-premium (£45-£285)

## 📝 Status
- ✅ Complete SS26 collection integrated (13 products)
- ✅ 4 category sections organized
- ✅ Larger WOVE logo (48px nav, 40px footer)
- ✅ Consistent bold typography (Inter)
- ✅ Individual product cards for all items
- ✅ Essentials Hoodie & Jogger sold separately
- ✅ Responsive design complete
- ⏳ Multiple color variants (Phase 2)
- ⏳ E-commerce features (Phase 2)

---

**WOVE SS26** | Performance Meets Premium | Last Updated: January 4, 2026
