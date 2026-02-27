# 🌐 Hostinger Domain Setup Guide

## Your Domains:
1. **swami-ji.live** (Primary - Hostinger)
2. **swami-ji.online** (Secondary - Hostinger)
3. **swami-ji.club** (GoDaddy - Need to connect)

---

## 📋 Setup Overview

Since you have a React + Node.js application, you have 2 options:

### Option 1: Use Hostinger for Frontend + Render for Backend (Recommended)
- Frontend (React) → Hostinger
- Backend (Node.js) → Render (already deployed)
- Database → MongoDB Atlas (already setup)

### Option 2: Use Hostinger for Both (Advanced)
- Requires VPS hosting (not shared hosting)
- More expensive but full control

**We'll go with Option 1 (Recommended & Cost-effective)**

---

## 🚀 Step 1: Complete Domain Registration

### 1.1 Finish Domain Setup
1. Go to Hostinger Dashboard
2. Click "Set up" on both domains
3. Complete domain registration process
4. Verify email if required

### 1.2 Choose Primary Domain
- Use **swami-ji.live** as primary
- **swami-ji.online** can redirect to .live

---

## 🔧 Step 2: Setup Hosting for Frontend

### 2.1 Create Website in Hostinger

1. **Go to Websites Section**
   - Hostinger Dashboard → Websites
   - Click "Add Website"

2. **Select Domain**
   - Choose: `swami-ji.live`
   - Skip WordPress/Builder options
   - Select "Empty Website" or "Upload Files"

3. **Access File Manager**
   - Websites → swami-ji.live → File Manager
   - Or use FTP (recommended)

---

## 📦 Step 3: Build & Upload Frontend

### 3.1 Build Frontend Locally

Open terminal in your project folder:

```bash
cd frontend
npm install
npm run build
```

This creates a `dist` folder with production files.

### 3.2 Upload to Hostinger

**Method A: File Manager (Easy)**
1. Hostinger → File Manager
2. Go to `public_html` folder
3. Delete default files (index.html, etc.)
4. Upload all files from `frontend/dist` folder
5. Make sure `index.html` is in root of `public_html`

**Method B: FTP (Recommended)**
1. Get FTP credentials:
   - Hostinger → Websites → swami-ji.live → FTP Accounts
   - Create FTP account or use existing
2. Use FileZilla or WinSCP
3. Connect to FTP
4. Upload `frontend/dist` contents to `public_html`

---

## 🔗 Step 4: Configure Backend Connection

### 4.1 Update API URL in Frontend

Since backend is on Render, update frontend to use Render backend URL.

**File: `frontend/src/main.jsx` or create `frontend/src/config.js`**

```javascript
// config.js
export const API_URL = 'https://betting-site-4p1c.onrender.com'
```

**Update axios calls to use this URL:**

```javascript
import { API_URL } from './config'

// Example in AuthContext.jsx
const res = await axios.post(`${API_URL}/api/auth/register`, userData)
```

### 4.2 Rebuild Frontend

```bash
cd frontend
npm run build
```

Upload new `dist` folder to Hostinger again.

---

## ⚙️ Step 5: Configure .htaccess for React Router

Create `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 🔒 Step 6: Setup SSL Certificate (HTTPS)

### 6.1 Enable SSL in Hostinger

1. Hostinger Dashboard → Websites
2. Select swami-ji.live
3. Go to "SSL" section
4. Click "Install SSL Certificate"
5. Choose "Free SSL" (Let's Encrypt)
6. Wait 5-10 minutes for activation

### 6.2 Force HTTPS

Add to `.htaccess` (at the top):

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 🌍 Step 7: Setup Second Domain (swami-ji.online)

### 7.1 Redirect to Primary Domain

1. Hostinger → Domains
2. Select swami-ji.online
3. Click "Manage"
4. Go to "Redirects"
5. Add redirect:
   - From: `swami-ji.online`
   - To: `https://swami-ji.live`
   - Type: 301 (Permanent)

---

## 🔗 Step 7.5: Connect GoDaddy Domain (swami-ji.club)

You have **2 methods** to connect your GoDaddy domain to Hostinger hosting:

### Method 1: Change Nameservers (Recommended - Full Control)

This gives Hostinger complete control over DNS. Best for long-term use.

#### Step 1: Get Hostinger Nameservers

Hostinger nameservers are:
```
ns1.dns-parking.com
ns2.dns-parking.com
```

Or check in Hostinger:
1. Hostinger Dashboard → Domains
2. Click on any domain → DNS/Nameservers
3. Copy the nameserver addresses

#### Step 2: Update Nameservers in GoDaddy

1. **Login to GoDaddy**
   - Go to: https://account.godaddy.com/
   - Login with your credentials

2. **Access Domain Settings**
   - Click "My Products"
   - Find "swami-ji.club" domain
   - Click "DNS" or "Manage DNS"

3. **Change Nameservers**
   - Scroll to "Nameservers" section
   - Click "Change" or "Manage"
   - Select "Custom" or "I'll use my own nameservers"
   - Remove existing nameservers
   - Add Hostinger nameservers:
     ```
     ns1.dns-parking.com
     ns2.dns-parking.com
     ```
   - Click "Save"

4. **Wait for Propagation**
   - DNS propagation takes 24-48 hours (usually 2-6 hours)
   - Check status: https://www.whatsmydns.net/

#### Step 3: Add Domain to Hostinger

1. **Add Domain in Hostinger**
   - Hostinger Dashboard → Domains
   - Click "Add Domain"
   - Enter: `swami-ji.club`
   - Select "Point to existing website"
   - Choose your hosting plan

2. **Point to Website**
   - Select: Point to `swami-ji.live` hosting
   - Or setup as separate website
   - Click "Add Domain"

3. **Wait for DNS Update**
   - Hostinger will automatically configure DNS
   - Check after 2-6 hours

---

### Method 2: Update DNS Records (Quick - Partial Control)

This keeps GoDaddy as nameserver but points to Hostinger hosting. Faster but less control.

#### Step 1: Get Hostinger IP Address

1. **Find Your Hosting IP**
   - Hostinger Dashboard → Websites
   - Select swami-ji.live
   - Go to "Advanced" → "Server Information"
   - Copy the IP address (e.g., 123.45.67.89)

Or use command:
```bash
ping swami-ji.live
```

#### Step 2: Update DNS Records in GoDaddy

1. **Login to GoDaddy**
   - Go to: https://account.godaddy.com/
   - Click "My Products" → Find swami-ji.club
   - Click "DNS" or "Manage DNS"

2. **Update A Record**
   - Find "A" record with name "@" or "swami-ji.club"
   - Click "Edit" (pencil icon)
   - Update "Points to" with Hostinger IP
   - TTL: 600 seconds (10 minutes)
   - Click "Save"

3. **Update WWW Record**
   - Find "CNAME" record with name "www"
   - If not exists, click "Add" → Select "CNAME"
   - Name: `www`
   - Points to: `swami-ji.club` (or Hostinger IP)
   - TTL: 600 seconds
   - Click "Save"

4. **Remove Conflicting Records (if any)**
   - Delete any other A records pointing elsewhere
   - Delete parking page CNAME records
   - Keep only the records you just created

#### Step 3: Add Domain to Hostinger

1. **Add Domain in Hostinger**
   - Hostinger Dashboard → Domains
   - Click "Add Domain"
   - Enter: `swami-ji.club`
   - Select "Use existing domain"
   - Click "Add"

2. **Configure Domain**
   - Point to swami-ji.live hosting
   - Or setup as alias/redirect
   - Save settings

3. **Wait for Propagation**
   - DNS updates take 1-4 hours
   - Check: https://www.whatsmydns.net/

---

### Which Method to Choose?

| Feature | Method 1 (Nameservers) | Method 2 (DNS Records) |
|---------|------------------------|------------------------|
| Setup Time | 24-48 hours | 1-4 hours |
| Control | Full control | Partial control |
| Email Setup | Easy | Complex |
| SSL Certificate | Automatic | Automatic |
| Subdomains | Easy to manage | Manual setup |
| Best For | Long-term use | Quick testing |

**Recommendation:** Use Method 1 (Nameservers) for production website.

---

### Step 4: Setup Domain Redirect (Optional)

After domain is connected, you can:

**Option A: Use as Primary Domain**
- Keep swami-ji.club as main website
- Redirect swami-ji.live to swami-ji.club

**Option B: Redirect to Primary**
- Keep swami-ji.live as main
- Redirect swami-ji.club to swami-ji.live

**Setup Redirect in Hostinger:**
1. Hostinger → Domains
2. Select swami-ji.club
3. Click "Redirects"
4. Add redirect:
   - From: `swami-ji.club`
   - To: `https://swami-ji.live`
   - Type: 301 (Permanent)
   - Include www: Yes

---

### Step 5: Enable SSL for GoDaddy Domain

1. **After Domain is Connected**
   - Wait for DNS propagation to complete
   - Verify domain loads in browser

2. **Install SSL in Hostinger**
   - Hostinger → Websites
   - Select swami-ji.club (if separate) or swami-ji.live
   - Go to "SSL" section
   - Click "Install SSL Certificate"
   - Choose "Free SSL" (Let's Encrypt)
   - Wait 5-10 minutes

3. **Force HTTPS**
   - SSL will auto-redirect HTTP to HTTPS
   - Or add to .htaccess (already done in Step 6)

---

### Step 6: Update Backend CORS

Add GoDaddy domain to allowed origins:

**File: `backend/server.js`**

```javascript
app.use(cors({
  origin: [
    'https://swami-ji.live',
    'https://www.swami-ji.live',
    'https://swami-ji.online',
    'https://www.swami-ji.online',
    'https://swami-ji.club',
    'https://www.swami-ji.club',
    'http://localhost:3000'
  ],
  credentials: true
}))
```

---

### Verification Checklist

After setup, verify:

- [ ] Domain loads in browser
- [ ] www.swami-ji.club also works
- [ ] HTTPS is enabled (green padlock)
- [ ] All pages load correctly
- [ ] API calls work
- [ ] WhatsApp buttons work
- [ ] Mobile responsive
- [ ] No mixed content warnings

---

### Troubleshooting GoDaddy Connection

**Domain Not Loading:**
- Check DNS propagation: https://www.whatsmydns.net/
- Wait full 24-48 hours for nameserver changes
- Clear browser cache (Ctrl + Shift + Delete)
- Try incognito mode

**SSL Not Working:**
- Ensure DNS is fully propagated first
- Wait 10-15 minutes after enabling SSL
- Check SSL status in Hostinger
- Try force-refresh (Ctrl + F5)

**Still Showing GoDaddy Parking Page:**
- DNS not propagated yet - wait longer
- Clear DNS cache on your computer:
  ```bash
  ipconfig /flushdns
  ```
- Check nameservers are correct in GoDaddy

**Mixed Content Errors:**
- Ensure all resources use HTTPS
- Check .htaccess force HTTPS rule
- Update any hardcoded HTTP URLs

---

## 📞 GoDaddy Support

If you face issues:
- GoDaddy Support: https://www.godaddy.com/contact-us
- Phone: Available in your GoDaddy account
- Live Chat: Login to GoDaddy → Help → Chat

---

## 🔧 Step 8: Configure CORS in Backend

Update backend to allow all your domains:

**File: `backend/server.js`**

```javascript
const cors = require('cors')

app.use(cors({
  origin: [
    'https://swami-ji.live',
    'https://www.swami-ji.live',
    'https://swami-ji.online',
    'https://www.swami-ji.online',
    'https://swami-ji.club',
    'https://www.swami-ji.club',
    'http://localhost:3000' // for development
  ],
  credentials: true
}))
```

Commit and push to GitHub - Render will auto-deploy.

---

## 📧 Step 9: Setup Email (Optional)

### 9.1 Create Professional Email

1. Hostinger → Emails
2. Create email: `support@swami-ji.live`
3. Use for customer support

### 9.2 Update Contact Info

Update footer and contact pages with new email.

---

## ✅ Step 10: Testing & Verification

### 10.1 Test Website

1. Visit: `https://swami-ji.live`
2. Check if homepage loads
3. Test navigation
4. Test registration/login
5. Verify WhatsApp buttons work
6. Check mobile responsiveness

### 10.2 Test Backend Connection

1. Try to register a new user
2. Check if data saves to MongoDB
3. Test login functionality
4. Verify API calls work

### 10.3 Test SSL

1. Check if HTTPS works
2. Verify green padlock in browser
3. Test redirect from HTTP to HTTPS

---

## 🎯 Quick Setup Checklist

### Hostinger Domains (swami-ji.live, swami-ji.online)
- [ ] Complete domain registration
- [ ] Build frontend (`npm run build`)
- [ ] Upload dist folder to public_html
- [ ] Create .htaccess file
- [ ] Enable SSL certificate
- [ ] Update API URL in frontend
- [ ] Configure CORS in backend
- [ ] Test website functionality
- [ ] Setup domain redirect

### GoDaddy Domain (swami-ji.club)
- [ ] Choose connection method (Nameservers or DNS)
- [ ] Update nameservers in GoDaddy (Method 1)
- [ ] OR Update A/CNAME records (Method 2)
- [ ] Add domain to Hostinger
- [ ] Wait for DNS propagation (2-48 hours)
- [ ] Enable SSL certificate
- [ ] Test domain loading
- [ ] Setup redirect (if needed)
- [ ] Update CORS in backend

### Final Steps
- [ ] Update SEO with new domains
- [ ] Test all domains work
- [ ] Verify HTTPS on all domains
- [ ] Update sitemap with all domains

---

## 📁 File Structure on Hostinger

```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── logo.webp
├── robots.txt
├── sitemap.xml
├── manifest.json
└── .htaccess
```

---

## 🔍 Troubleshooting

### Website Not Loading
- Check if files are in `public_html` (not in subfolder)
- Verify index.html exists
- Check .htaccess syntax
- Clear browser cache

### API Calls Failing
- Verify backend URL is correct
- Check CORS configuration
- Ensure backend is running on Render
- Check browser console for errors

### SSL Not Working
- Wait 10-15 minutes after enabling
- Clear browser cache
- Check SSL status in Hostinger
- Contact Hostinger support if needed

### 404 Errors on Refresh
- Verify .htaccess file exists
- Check mod_rewrite is enabled
- Ensure RewriteBase is correct

---

## 💰 Cost Breakdown

### Current Setup:
- Hostinger Domains: Already paid
- Hostinger Hosting: Included with domain
- Render Backend: Free (with sleep)
- MongoDB Atlas: Free (512MB)
- SSL Certificate: Free (Let's Encrypt)

**Total Monthly Cost: $0** (after initial domain purchase)

---

## 🚀 Next Steps After Setup

1. ✅ Update Google Search Console with new domain
2. ✅ Submit new sitemap
3. ✅ Update social media links
4. ✅ Setup Google Analytics
5. ✅ Configure email forwarding
6. ✅ Setup automated backups
7. ✅ Monitor website performance

---

## 📞 Support Resources

- Hostinger Support: https://www.hostinger.com/contact
- Hostinger Tutorials: https://www.hostinger.com/tutorials
- Live Chat: Available 24/7 in Hostinger dashboard

---

## 🎉 Final URLs

After setup complete:

```
Primary Website: https://swami-ji.live
Secondary (Redirect): https://swami-ji.online
GoDaddy Domain: https://swami-ji.club (redirect or separate)
Backend API: https://betting-site-4p1c.onrender.com
Database: MongoDB Atlas
Email: support@swami-ji.live
```

---

## 🚀 Quick Start Guide for GoDaddy Domain

**Fastest way to connect swami-ji.club:**

1. **Login to GoDaddy** → My Products → swami-ji.club → DNS

2. **Change Nameservers:**
   - Click "Nameservers" → Change
   - Select "Custom"
   - Add:
     ```
     ns1.dns-parking.com
     ns2.dns-parking.com
     ```
   - Save

3. **Add to Hostinger:**
   - Hostinger → Domains → Add Domain
   - Enter: swami-ji.club
   - Point to swami-ji.live hosting

4. **Wait 2-6 hours** for DNS propagation

5. **Enable SSL** in Hostinger

6. **Done!** Test at https://swami-ji.club

---

**Ready to start? Follow the steps above and let me know if you need help!** 🚀
