# How to Add Your Products to WOVE Website

## Quick Steps

### 1. Prepare Your Product Images
- Save your product images (JPG or PNG format)
- Recommended size: 1200x1600px (3:4 ratio works best)
- Name them descriptively (e.g., `performance-tshirt.jpg`, `mid-length-parka.jpg`)

### 2. Upload Images to Server
Place your images in the products folder:
```bash
# From your local machine, upload to:
/home/user/webapp/public/static/products/

# Example:
/home/user/webapp/public/static/products/performance-tshirt.jpg
/home/user/webapp/public/static/products/fleece-hoodie.jpg
```

### 3. Edit the Product List
Open `/home/user/webapp/src/index.tsx` and find the featured section (around line 59).

Replace the placeholder products with your actual products:

```tsx
<div class="featured-item">
  <div class="featured-image-wrapper">
    <img src="/static/products/YOUR-IMAGE.jpg" alt="Product Name" class="featured-image" />
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

### 4. Rebuild and Restart
```bash
cd /home/user/webapp
npm run build
pm2 restart wove-webapp
```

### 5. View Your Updates
Visit: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai

---

## Example: Adding "Performance T-Shirt"

**Step 1:** Upload image
```
/home/user/webapp/public/static/products/performance-tshirt.jpg
```

**Step 2:** Edit `src/index.tsx`
```tsx
<div class="featured-item">
  <div class="featured-image-wrapper">
    <img src="/static/products/performance-tshirt.jpg" alt="Performance T-Shirt" class="featured-image" />
    <div class="featured-overlay">
      <button class="quick-view">Quick View</button>
    </div>
  </div>
  <div class="featured-info">
    <h3 class="featured-name">Performance T-Shirt</h3>
    <p class="featured-price">£65</p>
  </div>
</div>
```

**Step 3:** Rebuild
```bash
npm run build && pm2 restart wove-webapp
```

---

## Adding More Than 3 Products

Simply copy-paste additional product blocks inside the `featured-grid` div:

```tsx
<div class="featured-grid">
  <!-- Product 1 -->
  <div class="featured-item">...</div>
  
  <!-- Product 2 -->
  <div class="featured-item">...</div>
  
  <!-- Product 3 -->
  <div class="featured-item">...</div>
  
  <!-- Product 4 - Just add more! -->
  <div class="featured-item">...</div>
  
  <!-- Product 5 -->
  <div class="featured-item">...</div>
  
  <!-- The grid will auto-adjust -->
</div>
```

The CSS grid will automatically adjust to show 3 columns on desktop, 2 on tablet, and 1 on mobile.

---

## Need Help?

If you need me to add products for you, just upload the images and provide:
- Product name
- Price
- Brief description (optional)

I'll integrate them for you!
