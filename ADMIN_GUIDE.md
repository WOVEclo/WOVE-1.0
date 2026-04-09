# WOVE Admin Guide - Database Access

## 🔐 How to Access Customer Signups

### **Admin Dashboard URL:**
**https://woveclo.com/admin/signups**

### **Login Credentials:**
- **Username:** `admin`
- **Password:** `wove2026`

---

## 📊 What You'll See:

### **Statistics Overview:**
- Total Restock Notifications
- Total Collection Drops Signups
- Combined Total Signups

### **Restock Notifications Table:**
Shows customers who clicked "Notify Me" on sold-out products:
- Date & Time of signup
- Customer Name
- Email Address
- Phone Number
- Product they're interested in
- Newsletter subscription status (Yes/No)

### **Collection Drops Waitlist Table:**
Shows customers who signed up on the home page for new drops:
- Date & Time of signup
- Customer Name
- Email Address
- Phone Number

---

## 📥 Alternative: Direct Database Access (Cloudflare Dashboard)

If you prefer to access the raw database:

1. **Go to Cloudflare Dashboard:**
   - https://dash.cloudflare.com/f62b9848e9d5ebe00272bff03db85520/workers/d1

2. **Click on:** `wove-customer-data`

3. **Click "Console" tab**

4. **Run SQL Queries:**

**View all restock notifications:**
```sql
SELECT * FROM restock_notifications ORDER BY created_at DESC;
```

**View all collection drops signups:**
```sql
SELECT * FROM collection_drops_waitlist ORDER BY created_at DESC;
```

**Count total signups:**
```sql
SELECT COUNT(*) as total FROM restock_notifications;
SELECT COUNT(*) as total FROM collection_drops_waitlist;
```

**Export all emails (for email marketing):**
```sql
SELECT DISTINCT email, name FROM restock_notifications WHERE newsletter_subscribed = 1
UNION
SELECT email, name FROM collection_drops_waitlist;
```

**See most popular products:**
```sql
SELECT product_name, COUNT(*) as requests 
FROM restock_notifications 
GROUP BY product_name 
ORDER BY requests DESC;
```

---

## 🧪 How to Test Database is Working:

### **Test 1: Restock Notification**
1. Go to: https://woveclo.com/collection
2. Click "Notify Me" on any sold-out product
3. Fill in test details:
   - Name: Test Customer
   - Email: test@woveclo.com
   - Phone: +44 7123 456789
   - Check Newsletter box
4. Submit
5. Go to admin dashboard: https://woveclo.com/admin/signups
6. You should see your test entry!

### **Test 2: Collection Drops Waitlist**
1. Go to: https://woveclo.com/home
2. Scroll to "JOIN THE WAITLIST" section
3. Fill in test details:
   - Name: Test Customer 2
   - Email: test2@woveclo.com
   - Phone: +44 7987 654321
4. Submit
5. Check admin dashboard again
6. You should see this entry too!

---

## 📧 Email Marketing Integration (Future)

Your database is ready to integrate with:
- **Klaviyo** - Email & SMS marketing
- **Mailchimp** - Email campaigns
- **SendGrid** - Transactional emails
- **Brevo (Sendinblue)** - All-in-one marketing

Export emails using the SQL query above and import to your chosen platform.

---

## 🔒 Security Notes:

**Current Setup:**
- Basic HTTP authentication (username/password)
- Suitable for internal use only
- Change the password by editing `src/index.tsx` line with `wove2026`

**For Production (Recommended):**
- Add IP whitelist (your office/home IP only)
- Use Cloudflare Access for better security
- Set up 2FA for Cloudflare dashboard

---

## 📊 Database Schema:

### **restock_notifications**
```
- id (auto-increment)
- name (text)
- email (text)
- phone (text)
- product_id (text)
- product_name (text)
- newsletter_subscribed (0 or 1)
- notified (0 or 1)
- created_at (timestamp)
```

### **collection_drops_waitlist**
```
- id (auto-increment)
- name (text)
- email (text)
- phone (text)
- created_at (timestamp)
```

---

## 🎯 Next Steps:

1. **Test both signup forms** on woveclo.com
2. **Check admin dashboard** to see entries
3. **Export email list** when ready for marketing
4. **Set up email service** for automated confirmations
5. **Create admin email alerts** for new signups

---

## 🆘 Troubleshooting:

**"Unauthorized" error when accessing admin page?**
- Make sure you're entering: `admin` / `wove2026`
- Try incognito/private window

**No data showing up?**
- Check you've submitted test forms
- Verify database binding in Cloudflare dashboard
- Check deployment is latest version

**Database error?**
- Verify database tables exist in Cloudflare D1 console
- Run the SQL creation queries again if needed

---

## 📞 Support:

For any issues, check:
1. GitHub repo: https://github.com/WOVEclo/WOVE-1.0
2. Cloudflare dashboard: https://dash.cloudflare.com
3. Live site: https://woveclo.com
