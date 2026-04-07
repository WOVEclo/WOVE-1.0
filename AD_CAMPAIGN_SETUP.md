# 🎯 Ad Campaign Setup Guide - WOVE

## ✅ Implemented Features

Your WOVE website is now fully optimized for paid advertising campaigns on Facebook, Instagram, Google, and TikTok.

---

## 📊 Tracking & Analytics Implementation

### **1. Google Analytics / GA4**
✅ **Status**: Implemented (requires your tracking ID)

**What's Tracking:**
- Page views on all pages
- Product views (`view_item` event)
- Add to cart (`add_to_cart` event)
- Begin checkout (`begin_checkout` event)
- UTM campaign parameters

**Setup Steps:**
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a GA4 property
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Replace `G-XXXXXXXXXX` in `/home/user/webapp/src/renderer.tsx` line 39
5. Rebuild and deploy

**Events Tracked:**
```javascript
// Product View
gtag('event', 'view_item', {
  currency: 'GBP',
  value: 125,
  items: [{item_id: 'air-shell-jacket', item_name: 'Air Shell Jacket', price: 125}]
})

// Add to Cart
gtag('event', 'add_to_cart', {
  currency: 'GBP',
  value: 125,
  items: [{item_id: 'air-shell-jacket', quantity: 1, item_variant: 'M'}]
})

// Initiate Checkout
gtag('event', 'begin_checkout', {
  currency: 'GBP',
  value: 260,
  items: [...]
})
```

---

### **2. Meta Pixel (Facebook/Instagram)**
✅ **Status**: Implemented (requires your Pixel ID)

**What's Tracking:**
- PageView on all pages
- ViewContent (product views)
- AddToCart (cart additions)
- InitiateCheckout (checkout button clicks)

**Setup Steps:**
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Create a Pixel
3. Copy your Pixel ID (16-digit number)
4. Replace `YOUR_PIXEL_ID_HERE` in `/home/user/webapp/src/renderer.tsx` line 50 and 58
5. Rebuild and deploy

**Events Tracked:**
```javascript
// Product View
fbq('track', 'ViewContent', {
  content_name: 'Air Shell Jacket',
  content_ids: ['air-shell-jacket'],
  content_type: 'product',
  value: 125,
  currency: 'GBP'
})

// Add to Cart
fbq('track', 'AddToCart', {
  content_name: 'Air Shell Jacket',
  content_ids: ['air-shell-jacket'],
  value: 125,
  currency: 'GBP'
})

// Initiate Checkout
fbq('track', 'InitiateCheckout', {
  content_ids: ['air-shell-jacket', 'cloud-hoodie'],
  value: 260,
  currency: 'GBP',
  num_items: 2
})
```

---

### **3. UTM Parameter Tracking**
✅ **Status**: Fully implemented

**Automatic Tracking:**
- All UTM parameters are captured automatically
- Stored in sessionStorage for attribution
- Tracked in Google Analytics

**Supported Parameters:**
- `utm_source` (e.g., facebook, google, tiktok)
- `utm_medium` (e.g., cpc, paid-social, display)
- `utm_campaign` (e.g., spring-2026-launch)
- `utm_term` (e.g., premium-menswear)
- `utm_content` (e.g., ad-variant-a)

**Example URL:**
```
https://webapp.pages.dev/collection?utm_source=facebook&utm_medium=cpc&utm_campaign=spring-2026&utm_content=carousel-ad
```

---

## 🛍️ Product Feed for Dynamic Ads

### **Product Catalog API**
✅ **Status**: Live at `/api/product-feed.json`

**Test URL**: https://3000-il5fubnexdtiryy1p9nm1-b237eb32.sandbox.novita.ai/api/product-feed.json

**What It Includes:**
- All 13 products
- Product ID, title, description
- Direct product links
- Image URLs
- Prices in GBP
- Availability, condition, brand
- Google product category

**Sample Output:**
```json
{
  "id": "air-shell-jacket",
  "title": "Air Shell Jacket",
  "description": "Lightweight shell jacket with weather-resistant finish...",
  "link": "https://webapp.pages.dev/product/air-shell-jacket",
  "image_link": "https://webapp.pages.dev/static/products/air-shell-jacket.jpg",
  "price": "125 GBP",
  "availability": "in stock",
  "condition": "new",
  "brand": "WOVE",
  "product_type": "Outerwear",
  "google_product_category": "Apparel & Accessories > Clothing > Men's Clothing"
}
```

**How to Use:**

**For Facebook/Instagram:**
1. Go to Meta Commerce Manager
2. Create a catalog
3. Add product feed source
4. Enter: `https://webapp.pages.dev/api/product-feed.json`
5. Schedule automatic sync (daily recommended)

**For Google Shopping:**
1. Go to Google Merchant Center
2. Add feed
3. Use the JSON feed URL
4. Configure automatic fetch

---

## 🎨 Landing Page Optimization

### **Homepage Improvements**
✅ **Clear Value Propositions**
- Free UK Shipping (orders over £150)
- 30 Day Returns (hassle-free)
- Premium Quality (Made in Portugal)
- Secure Checkout (Powered by Stripe)

✅ **Strong Call-to-Action**
- "Shop Collection" button above the fold
- Direct link to product catalog
- Minimal friction to browse

✅ **Social Proof Elements**
- Brand messaging
- Quality indicators
- Trust signals

**Homepage URL**: https://3000-il5fubnexdtiryy1p9nm1-b237eb32.sandbox.novita.ai/home

---

## 🔍 SEO & Metadata

### **Open Graph Tags** (Facebook/LinkedIn)
```html
<meta property="og:title" content="WOVE - Premium Technical Menswear" />
<meta property="og:description" content="Where technical performance meets timeless design..." />
<meta property="og:image" content="/static/hero-bag.jpg" />
```

### **Twitter Card Tags**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="WOVE - Premium Technical Menswear" />
<meta name="twitter:image" content="/static/hero-bag.jpg" />
```

### **Structured Data (Schema.org)**
```json
{
  "@type": "Organization",
  "name": "WOVE",
  "url": "https://webapp.pages.dev",
  "logo": "https://webapp.pages.dev/static/2.png",
  "description": "Premium technical menswear..."
}
```

---

## 📱 Ad Campaign Setup Guides

### **Facebook/Instagram Ads**

**1. Create Campaign**
- Objective: Conversions
- Conversion event: Purchase (or AddToCart for testing)
- Budget: Start with £20-50/day

**2. Ad Set**
- Audience: UK, Ages 25-45, Male
- Interests: Fashion, Activewear, Premium brands
- Placements: Facebook Feed, Instagram Feed, Stories

**3. Ad Creative**
- Format: Carousel or Single Image
- Copy: "Premium technical menswear. Free UK shipping over £150."
- CTA: Shop Now
- Destination: https://webapp.pages.dev/collection

**4. Tracking**
- Pixel: YOUR_PIXEL_ID_HERE (set in renderer.tsx)
- Events: ViewContent, AddToCart, InitiateCheckout
- Attribution: 7-day click, 1-day view

---

### **Google Shopping Ads**

**1. Merchant Center Setup**
- Upload product feed: `/api/product-feed.json`
- Verify website ownership
- Enable automatic item updates

**2. Google Ads Campaign**
- Campaign type: Shopping
- Bidding: Maximize conversion value
- Budget: £30-60/day
- Target ROAS: 300% (adjust after data)

**3. Product Groups**
- Segment by category (Outerwear, Essentials, etc.)
- Higher bids for high-margin products (City Parka £285)
- Lower bids for entry products (Off Duty Cap £45)

---

### **TikTok Ads**

**1. Campaign Setup**
- Objective: Product Sales
- Pixel: Install TikTok Pixel (similar to Meta setup)
- Budget: £20-40/day

**2. Targeting**
- Location: UK
- Age: 18-44
- Interests: Fashion, Streetwear, Lifestyle

**3. Creative**
- Format: In-Feed Video (9:16)
- Length: 9-15 seconds
- Style: Authentic, lifestyle-focused
- CTA: Shop Now → https://webapp.pages.dev/collection

---

## 🔧 Next Steps Before Launch

### **Required Actions:**

**1. Add Tracking IDs** (10 minutes)
```bash
# Edit /home/user/webapp/src/renderer.tsx
# Line 39: Replace G-XXXXXXXXXX with your GA4 ID
# Line 50: Replace YOUR_PIXEL_ID_HERE with your Meta Pixel ID
# Line 58: Replace YOUR_PIXEL_ID_HERE with your Meta Pixel ID

# Rebuild
cd /home/user/webapp && npm run build
```

**2. Update Domain References** (5 minutes)
```bash
# Search and replace webapp.pages.dev with your actual domain
# Files to update:
# - /home/user/webapp/src/index.tsx (product feed URLs)
# - /home/user/webapp/src/renderer.tsx (Open Graph URLs)
```

**3. Test Tracking** (15 minutes)
- Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
- Visit your site and test:
  - Page view fires
  - Product view fires
  - Add to cart fires
  - Initiate checkout fires

**4. Set Up Conversion Tracking** (30 minutes)
- Configure purchase event (when Stripe integration is complete)
- Set conversion values
- Test with Stripe test mode

---

## 📈 Campaign Best Practices

### **Budget Allocation**
- Start small: £50-100/day total
- Test multiple ad creatives
- Run for 7 days minimum before optimization
- Scale winning campaigns by 20% every 3 days

### **Audience Testing**
**Week 1**: Broad targeting
- UK, Male, 25-45
- Interests: Fashion, Premium brands

**Week 2**: Narrow based on data
- Lookalike audiences (1%)
- Retargeting: Site visitors, cart abandoners

**Week 3**: Scale winners
- Increase budget on best-performing segments
- Create exclusion lists (purchasers)

### **Creative Testing**
Test 3-5 variations:
- Product-focused (single item)
- Lifestyle/editorial (model shots)
- Carousel (multiple products)
- Video (product details, fabric close-ups)

### **Copy Angles**
- Technical innovation: "Performance fabrics meet timeless design"
- Quality: "Premium menswear, made in Portugal"
- Offer: "Free UK shipping over £150"
- Scarcity: "Spring/Summer 2026 - Limited collection"

---

## 🎯 Conversion Funnel Tracking

**Current Tracking:**
```
Page View → Product View → Add to Cart → Initiate Checkout → [Purchase]
   ✅           ✅              ✅                ✅              🔜
```

**Purchase Event** (to be added when Stripe is connected):
```javascript
// After successful payment
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 260.00,
  currency: 'GBP',
  items: [...]
});

fbq('track', 'Purchase', {
  value: 260.00,
  currency: 'GBP',
  content_ids: ['air-shell-jacket', 'cloud-hoodie']
});
```

---

## 📊 Expected Metrics (Industry Benchmarks)

**Facebook/Instagram:**
- CTR: 1.5-2.5%
- CPC: £0.50-1.50
- Conversion Rate: 1.5-3%
- ROAS: 2.5-4.0x

**Google Shopping:**
- CTR: 0.8-1.5%
- CPC: £0.40-1.20
- Conversion Rate: 2-4%
- ROAS: 3.5-5.0x

**TikTok:**
- CTR: 2-4% (higher for good creative)
- CPC: £0.30-0.90
- Conversion Rate: 1-2%
- ROAS: 2.0-3.5x

---

## 🚨 Important Notes

### **Privacy & Compliance**
⚠️ **Cookie Consent**: You should add a cookie consent banner before launch (GDPR requirement for UK)
- Recommended tool: [Cookiebot](https://www.cookiebot.com) or [OneTrust](https://www.onetrust.com)
- Free alternative: [Cookie Consent by Osano](https://www.osano.com/cookieconsent)

⚠️ **Privacy Policy**: Create a privacy policy page
- Explain data collection (cookies, pixels)
- Mention Google Analytics, Meta Pixel
- Include right to opt-out

### **Testing**
🧪 **Always test in TEST mode first**:
- Use Facebook Pixel Test Events
- Use Google Analytics DebugView
- Make test purchases with Stripe test cards
- Verify all events fire correctly

### **Budget Protection**
💰 **Set daily and lifetime budgets**:
- Start conservatively
- Monitor first 48 hours closely
- Pause underperforming ads quickly
- Scale winners gradually

---

## 📞 Support Resources

**Google Analytics**:
- Dashboard: https://analytics.google.com
- Help: https://support.google.com/analytics

**Meta Business Suite**:
- Events Manager: https://business.facebook.com/events_manager2
- Pixel Helper: Chrome extension
- Help: https://www.facebook.com/business/help

**Google Merchant Center**:
- Dashboard: https://merchants.google.com
- Feed troubleshooting: https://support.google.com/merchants

---

## ✅ Launch Checklist

Before running ads:
- [ ] Add Google Analytics ID
- [ ] Add Meta Pixel ID  
- [ ] Update domain from webapp.pages.dev to actual domain
- [ ] Test all tracking events
- [ ] Upload product feed to Meta Commerce Manager
- [ ] Upload product feed to Google Merchant Center
- [ ] Add cookie consent banner
- [ ] Create privacy policy page
- [ ] Set up conversion tracking
- [ ] Test with small budget (£10-20)
- [ ] Monitor for 24 hours
- [ ] Scale successful campaigns

---

**Live Site**: https://3000-il5fubnexdtiryy1p9nm1-b237eb32.sandbox.novita.ai

**Product Feed**: https://3000-il5fubnexdtiryy1p9nm1-b237eb32.sandbox.novita.ai/api/product-feed.json

Your WOVE site is now ready for paid advertising! 🚀
