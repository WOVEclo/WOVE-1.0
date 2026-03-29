# Stripe Payment Links - Testing Guide

## 🎉 Integration Complete!

Your WOVE site now has **Stripe Payment Links** integrated in **Test Mode**. Here's everything you need to know.

---

## ✅ What's Working Now

### **1. Air Shell Jacket - LIVE** ✅
- **Product**: Air Shell Jacket (£125)
- **Payment Link**: https://buy.stripe.com/test_aFa8wObhHgC1blEeh1cZa00
- **Status**: Fully functional in test mode

### **2. Other Products - Coming Soon** 🔜
- All 12 remaining products show "Coming Soon" buttons
- They're ready - just need Stripe payment links added

---

## 🧪 How to Test the Integration

### **Step 1: Visit the Collection Page**
Go to: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/collection

### **Step 2: Click "Add to Cart" on Air Shell Jacket**
You'll be redirected to Stripe Checkout (test mode)

### **Step 3: Fill in Test Payment Details**
Use these **test card numbers** (Stripe won't charge real money):

#### ✅ Successful Payment
- **Card**: `4242 4242 4242 4242`
- **Expiry**: Any future date (e.g., `12/34`)
- **CVC**: Any 3 digits (e.g., `123`)
- **ZIP**: Any postal code (e.g., `12345`)

#### ❌ Declined Payment (to test error handling)
- **Card**: `4000 0000 0000 0002`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

#### 🔐 Requires 3D Secure Authentication
- **Card**: `4000 0025 0000 3155`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

Full test card list: https://stripe.com/docs/testing#cards

### **Step 4: Complete Purchase**
1. Fill in shipping address (can be fake for testing)
2. Enter email address (you'll get test receipts here)
3. Click "Pay £125"
4. You'll be redirected to: `/order-confirmation`

---

## 📄 Order Confirmation Page

After successful payment, customers see:
- **URL**: `/order-confirmation`
- **Content**: "Order Confirmed" message
- **CTA**: "Continue Shopping" button → Returns to collection

---

## 🔗 URLs for Testing

| Page | URL |
|------|-----|
| **Homepage** | https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/home |
| **Collection** | https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/collection |
| **Air Shell Jacket Detail** | https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/product/air-shell-jacket |
| **Order Confirmation** | https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/order-confirmation |

---

## 📊 What You'll See in Stripe Dashboard

After test purchases, check: https://dashboard.stripe.com/test/payments

You'll see:
- ✅ **Payments tab**: All test transactions
- 📧 **Customers tab**: Customer emails & shipping addresses  
- 📦 **Products tab**: Sales data per product
- 🔔 **Test mode banner**: Reminder that no real money is being processed

---

## 🛠️ Add More Payment Links

Want to enable other products? Here's how:

### **1. Create Payment Link in Stripe**
1. Go to: https://dashboard.stripe.com/test/payment-links
2. Click **"+ New"** button
3. Fill in:
   - **Product name**: (e.g., "Cropped Anorak")
   - **Price**: (e.g., £165.00)
   - **Currency**: GBP
   - **Collect shipping**: ✅ Yes
4. Click **"Create link"**
5. Copy the link (e.g., `https://buy.stripe.com/test_xxxxxxxxxxxxx`)

### **2. Add Link to Code**
Edit: `/home/user/webapp/src/index.tsx`

Find the product in the catalog and add `stripeLink`:

```typescript
{
  id: 'cropped-anorak',
  name: 'Cropped Anorak',
  price: 165,
  image: '/static/products/cropped-anorak.jpg',
  category: 'Outerwear',
  description: 'Contemporary cropped silhouette...',
  stripeLink: 'https://buy.stripe.com/test_YOUR_NEW_LINK_HERE' // ← Add this
},
```

### **3. Rebuild & Restart**
```bash
cd /home/user/webapp
npm run build
pm2 restart wove-webapp
```

### **4. Test the New Button**
Visit collection page - the button should now say "Add to Cart" (not "Coming Soon")

---

## 🚀 Going Live (When Ready)

### **Step 1: Switch to Live Mode in Stripe**
1. Go to Stripe Dashboard
2. Toggle from "Test mode" to "Live mode" (top-left)
3. Recreate all payment links in **Live mode**

### **Step 2: Update Payment Links in Code**
Replace all `test_` links with `live_` links:

```typescript
// Test mode:
stripeLink: 'https://buy.stripe.com/test_xxxxxxxxxxxxx'

// Live mode:
stripeLink: 'https://buy.stripe.com/xxxxxxxxxxxxx'
```

### **Step 3: Configure Stripe Success/Cancel URLs**
When creating **live** payment links, set:
- **Success URL**: `https://your-live-domain.com/order-confirmation`
- **Cancel URL**: `https://your-live-domain.com/collection`

### **Step 4: Deploy to Production**
```bash
npm run build
npx wrangler pages deploy dist --project-name webapp
```

---

## 💡 Button Design

### **Collection Page Buttons**
- ✅ **Active**: Black border, "ADD TO CART", hover fills black
- 🔜 **Coming Soon**: Gray border, "Coming Soon", disabled
- 📱 **Mobile**: Smaller font (10px), adjusted padding

### **Product Detail Page Button**
- ✅ **Active**: Full-width black button, white text
- 🔜 **Coming Soon**: Gray button, disabled

---

## 🎨 Design Features

### **Minimal Loewe-Inspired Aesthetic**
- Clean black borders on buttons
- Hover transitions (0.3s ease)
- Uppercase text with letter-spacing
- No icons or clutter
- 3:4 portrait product images
- Generous white space

### **User Experience**
- Clear "Add to Cart" vs "Coming Soon" states
- Smooth hover feedback
- Accessible disabled states
- Professional order confirmation
- Seamless redirect flow

---

## 📝 Quick Reference - Remaining Products

Here are the payment links you need to create:

| Product | Price | Category | Link Status |
|---------|-------|----------|-------------|
| Air Shell Jacket | £125 | Outerwear | ✅ **DONE** |
| Cropped Anorak | £165 | Outerwear | 🔜 To create |
| City Parka | £285 | Outerwear | 🔜 To create |
| Second Skin Top | £75 | Performance | 🔜 To create |
| Worn Run Tee | £55 | Performance | 🔜 To create |
| Second Skin Tee | £65 | Performance | 🔜 To create |
| Essentials Hoodie | £95 | Essentials | 🔜 To create |
| Cloud Quarter Zip | £125 | Essentials | 🔜 To create |
| Cloud Hoodie | £135 | Essentials | 🔜 To create |
| Track Zip | £145 | Essentials | 🔜 To create |
| Motion Pants | £85 | Bottoms | 🔜 To create |
| Motion Shorts | £65 | Bottoms | 🔜 To create |
| Off Duty Cap | £45 | Accessories | 🔜 To create |

**Estimated time**: 2-3 minutes per product = 25-35 minutes total

---

## 🎯 Next Steps

### **Option A: Test with Air Shell Jacket**
1. Click the link above to visit collection page
2. Try purchasing Air Shell Jacket with test card
3. Confirm you see the order confirmation page

### **Option B: Add 2-3 More Products**
1. Create payment links for your favorite products
2. Share them with me - I'll add them to the code
3. Test the full checkout flow

### **Option C: Add All 12 Products at Once**
1. Spend 30 minutes creating all payment links
2. Share the complete list with me
3. I'll update all products in one go

---

## 🆘 Troubleshooting

### **Button says "Coming Soon" but I added a link**
- Check: Did you rebuild? (`npm run build`)
- Check: Did you restart? (`pm2 restart wove-webapp`)
- Check: Is the `stripeLink` value correct in `index.tsx`?

### **Redirect goes to wrong page after payment**
- Edit payment link in Stripe Dashboard
- Set "After payment" → "Redirect to URL"
- Enter: `https://your-domain.com/order-confirmation`

### **Test card not working**
- Make sure Stripe is in **Test mode** (toggle in top-left)
- Try card: `4242 4242 4242 4242`
- Use any future expiry date

---

## 📞 Support

- **Stripe Docs**: https://stripe.com/docs/payments/payment-links
- **Test Cards**: https://stripe.com/docs/testing#cards
- **Dashboard**: https://dashboard.stripe.com

---

**Ready to test?** Visit: https://3000-il5fubnexdtiryy1p9nm1-c07dda5e.sandbox.novita.ai/collection

🎉 **Air Shell Jacket is live and ready for test purchases!**
