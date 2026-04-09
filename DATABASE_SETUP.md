# WOVE Database Setup Guide

## 🗄️ Cloudflare D1 Database Configuration

This guide will help you set up the Cloudflare D1 database for storing customer signups.

---

## 📋 Database Tables

### 1. **restock_notifications**
Stores customer signups for product restock notifications.

**Columns:**
- `id` - Auto-incrementing primary key
- `name` - Customer full name
- `email` - Customer email address
- `phone` - Customer phone number
- `product_id` - ID of the product (e.g., "cloud-hoodie")
- `product_name` - Display name of product (e.g., "Cloud Hoodie")
- `newsletter_subscribed` - Boolean (1 = subscribed, 0 = not)
- `notified` - Boolean (1 = customer notified, 0 = pending)
- `created_at` - Timestamp of signup

### 2. **collection_drops_waitlist**
Stores general waitlist signups from the home page.

**Columns:**
- `id` - Auto-incrementing primary key
- `name` - Customer full name
- `email` - Customer email address
- `phone` - Customer phone number
- `created_at` - Timestamp of signup

---

## 🚀 Deployment Steps

### Step 1: Add Cloudflare API Key
1. Go to Deploy tab in sidebar
2. Add your Cloudflare API token
3. Save configuration

### Step 2: Create Database (AFTER you add API key)
```bash
# The assistant will run these commands for you:
wrangler d1 create wove-customer-data
wrangler d1 migrations apply wove-customer-data --remote
```

### Step 3: Deploy to Cloudflare Pages
The site will automatically deploy with database connected.

---

## 📊 Accessing Your Data

### View Data in Cloudflare Dashboard
1. Go to: https://dash.cloudflare.com
2. Navigate to Workers & Pages → D1
3. Select "wove-customer-data"
4. Run queries in the console

### Example Queries

**View all restock signups:**
```sql
SELECT * FROM restock_notifications ORDER BY created_at DESC;
```

**View all collection drops signups:**
```sql
SELECT * FROM collection_drops_waitlist ORDER BY created_at DESC;
```

**Count signups by product:**
```sql
SELECT product_name, COUNT(*) as signup_count 
FROM restock_notifications 
GROUP BY product_name 
ORDER BY signup_count DESC;
```

**Export emails for newsletter:**
```sql
SELECT DISTINCT email, name 
FROM restock_notifications 
WHERE newsletter_subscribed = 1
UNION
SELECT email, name 
FROM collection_drops_waitlist;
```

---

## 🎯 What Happens When Users Sign Up?

### Restock Notification Flow:
1. User clicks "Notify Me" on sold-out product
2. Fills modal: Name, Email, Phone, Newsletter checkbox
3. Data validated and saved to `restock_notifications` table
4. Success message shown
5. Button changes to "NOTIFIED"

### Collection Drops Flow:
1. User fills form on home page
2. Enters: Name, Email, Phone
3. Data validated and saved to `collection_drops_waitlist` table
4. Success message with green checkmark
5. Automatic newsletter subscription

---

## 🔐 Security Features

✅ **SQL Injection Protection** - All queries use prepared statements with parameter binding
✅ **Input Validation** - Email, phone, and name validated before saving
✅ **Error Handling** - Database errors logged but don't block user experience
✅ **Rate Limiting** - Cloudflare automatically protects against spam

---

## 💡 Next Steps (After Deployment)

1. **Email Notifications** - Integrate SendGrid/Mailgun to send confirmation emails
2. **Admin Dashboard** - Build UI to view/manage signups
3. **CSV Export** - Create endpoint to download customer data
4. **Email Marketing** - Sync with Klaviyo/Mailchimp automatically
5. **SMS Notifications** - Use Twilio to send restock alerts

---

## 🆘 Troubleshooting

**Database not saving data?**
- Check Cloudflare dashboard for database creation
- Verify migrations ran successfully
- Check browser console for API errors

**Getting "DB is not defined" error?**
- Database binding may not be configured
- Check wrangler.jsonc has correct database_id
- Redeploy after updating configuration

---

**Database is ready to deploy! Add your Cloudflare API key to the Deploy tab and I'll complete the setup.** 🚀
