# 🚀 Render Deployment Guide - GameZone

## Prerequisites
- GitHub account
- Render account (free tier available)
- MongoDB Atlas account (free tier)

---

## Step 1: MongoDB Atlas Setup (Database)

### 1.1 Create MongoDB Atlas Account
1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free account
3. Create a new cluster (Free M0 tier)

### 1.2 Configure Database
1. Click "Connect" on your cluster
2. Add IP Address: `0.0.0.0/0` (Allow from anywhere)
3. Create Database User:
   - Username: `gamezone_user`
   - Password: (Generate strong password)
   - Save credentials securely!

### 1.3 Get Connection String
1. Click "Connect" → "Connect your application"
2. Copy connection string:
   ```
   mongodb+srv://gamezone_user:<password>@cluster0.xxxxx.mongodb.net/gamezone?retryWrites=true&w=majority
   ```
3. Replace `<password>` with your actual password
4. Save this connection string for later

---

## Step 2: Push Code to GitHub

### 2.1 Commit All Changes
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2.2 Verify Repository
- Go to: https://github.com/GitPawanGupta/betting-site
- Ensure all files are pushed

---

## Step 3: Deploy Backend on Render

### 3.1 Create Render Account
1. Visit: https://render.com
2. Sign up with GitHub account
3. Authorize Render to access your repositories

### 3.2 Create Backend Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `betting-site`
3. Configure:
   - **Name**: `gamezone-backend`
   - **Region**: Singapore (or closest to you)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

### 3.3 Add Environment Variables
Click "Advanced" → Add Environment Variables:

```
NODE_ENV = production
PORT = 5001
MONGODB_URI = mongodb+srv://gamezone_user:<password>@cluster0.xxxxx.mongodb.net/gamezone?retryWrites=true&w=majority
JWT_SECRET = your_super_secret_jwt_key_here_min_32_chars
```

**Important**: Replace with your actual MongoDB connection string!

### 3.4 Deploy Backend
1. Click "Create Web Service"
2. Wait 5-10 minutes for deployment
3. Note your backend URL: `https://gamezone-backend.onrender.com`

---

## Step 4: Deploy Frontend on Render

### 4.1 Update Frontend API URL
Before deploying frontend, update the API URL:

**File**: `frontend/vite.config.js`
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://gamezone-backend.onrender.com', // Your backend URL
        changeOrigin: true
      }
    }
  }
})
```

**Commit and push:**
```bash
git add .
git commit -m "Update API URL for production"
git push origin main
```

### 4.2 Create Frontend Static Site
1. Click "New +" → "Static Site"
2. Connect same repository: `betting-site`
3. Configure:
   - **Name**: `gamezone-frontend`
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

### 4.3 Add Environment Variables (if needed)
```
VITE_API_URL = https://gamezone-backend.onrender.com
```

### 4.4 Deploy Frontend
1. Click "Create Static Site"
2. Wait 5-10 minutes for deployment
3. Your site will be live at: `https://gamezone-frontend.onrender.com`

---

## Step 5: Configure Custom Domain (Optional)

### 5.1 Add Custom Domain
1. Go to your frontend service settings
2. Click "Custom Domains"
3. Add your domain: `gamezone.com`
4. Follow DNS configuration instructions

### 5.2 Update DNS Records
Add these records to your domain provider:
```
Type: CNAME
Name: www
Value: gamezone-frontend.onrender.com
```

---

## Step 6: Testing & Verification

### 6.1 Test Backend
```bash
curl https://gamezone-backend.onrender.com/api/health
```
Should return: `{"status":"OK","message":"Server is running"}`

### 6.2 Test Frontend
1. Visit: `https://gamezone-frontend.onrender.com`
2. Check if homepage loads
3. Test registration/login
4. Verify WhatsApp buttons work

### 6.3 Test Database Connection
1. Register a new user
2. Check MongoDB Atlas → Collections
3. Verify user data is saved

---

## Step 7: Post-Deployment Setup

### 7.1 Enable Auto-Deploy
- Both services auto-deploy on git push to main branch
- Check "Auto-Deploy" is enabled in settings

### 7.2 Monitor Services
- Dashboard: https://dashboard.render.com
- View logs for debugging
- Check service health

### 7.3 Set Up Alerts (Optional)
- Configure email alerts for service failures
- Set up uptime monitoring

---

## Important Notes

### Free Tier Limitations:
- ⚠️ Services sleep after 15 minutes of inactivity
- ⚠️ First request after sleep takes 30-60 seconds
- ⚠️ 750 hours/month free (enough for 1 service 24/7)
- ⚠️ Limited bandwidth

### Solutions:
1. **Keep Services Awake**: Use UptimeRobot (free) to ping every 14 minutes
2. **Upgrade to Paid**: $7/month for always-on service
3. **Use Multiple Free Accounts**: Deploy backend and frontend separately

---

## Troubleshooting

### Backend Not Starting:
1. Check logs in Render dashboard
2. Verify MongoDB connection string
3. Ensure all environment variables are set
4. Check Node version compatibility

### Frontend Not Loading:
1. Check build logs
2. Verify API URL is correct
3. Check CORS settings in backend
4. Clear browser cache

### Database Connection Failed:
1. Verify MongoDB Atlas IP whitelist (0.0.0.0/0)
2. Check connection string format
3. Ensure database user has correct permissions
4. Test connection string locally first

### 502 Bad Gateway:
- Service is starting (wait 1-2 minutes)
- Check if service crashed (view logs)
- Restart service manually

---

## Useful Commands

### View Logs:
```bash
# In Render Dashboard
Services → Your Service → Logs
```

### Restart Service:
```bash
# In Render Dashboard
Services → Your Service → Manual Deploy → Deploy latest commit
```

### Update Environment Variables:
```bash
# In Render Dashboard
Services → Your Service → Environment → Edit
```

---

## Cost Breakdown

### Free Tier (Current):
- Backend: Free (with sleep)
- Frontend: Free
- MongoDB: Free (512MB)
- **Total: $0/month**

### Paid Tier (Recommended for Production):
- Backend: $7/month (always-on)
- Frontend: Free
- MongoDB: Free (512MB)
- **Total: $7/month**

---

## Next Steps After Deployment

1. ✅ Test all features thoroughly
2. ✅ Set up Google Analytics
3. ✅ Submit sitemap to Google Search Console
4. ✅ Configure custom domain
5. ✅ Set up SSL certificate (automatic on Render)
6. ✅ Monitor performance and errors
7. ✅ Regular backups of MongoDB data

---

## Support & Resources

- Render Docs: https://render.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- Community Forum: https://community.render.com

---

## Quick Reference URLs

After deployment, save these URLs:

```
Frontend: https://gamezone-frontend.onrender.com
Backend: https://gamezone-backend.onrender.com
MongoDB: https://cloud.mongodb.com
GitHub: https://github.com/GitPawanGupta/betting-site
Render Dashboard: https://dashboard.render.com
```

---

**Deployment Complete! 🎉**

Your GameZone platform is now live and accessible worldwide!
