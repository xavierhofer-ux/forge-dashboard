# Vercel Deployment Guide - Forge Dashboard

This guide provides step-by-step instructions for deploying the Forge Dashboard to Vercel for mobile access.

## Prerequisites

✅ **Already Done:**
- Dashboard app is ready (Vite + React)
- App builds successfully locally
- vercel.json configuration created
- GitHub Actions workflow configured (.github/workflows/dashboard-ci.yml)

❌ **You Need:**
- GitHub account with a repository (can be private or public)
- Vercel account (free tier available at vercel.com)
- Git CLI and npm installed locally

## Quick Deployment (Manual)

The fastest way to deploy is directly from your local machine:

### Step 1: Connect to GitHub

```bash
# From the workspace root
git remote add origin https://github.com/YOUR_USERNAME/forge-dashboard.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy to Vercel via GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Log in (use GitHub login for easiest setup)
3. Click "Add New Project"
4. Select "Import Git Repository"
5. Search for and select your `forge-dashboard` repository
6. Click "Import"
7. Vercel will auto-detect Vite configuration
8. Click "Deploy"
9. Wait for deployment to complete (usually 2-3 minutes)

### Step 3: Get Your Live URL

After successful deployment, you'll see:
```
https://forge-dashboard.vercel.app
```

This is your live dashboard URL!

## Automated Deployment (Recommended)

Once the GitHub repository is set up, you can use GitHub Actions for automatic deployments:

### Step 1: Add Vercel Secrets to GitHub

1. Go to your GitHub repository
2. Click Settings → Secrets and Variables → Actions
3. Add three new secrets:

**Secret 1: VERCEL_TOKEN**
- Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
- Create new token
- Copy the token value
- Add to GitHub as `VERCEL_TOKEN`

**Secret 2: VERCEL_ORG_ID**
- Go to [vercel.com/account/settings](https://vercel.com/account/settings)
- Copy your Team ID or Personal Team ID
- Add to GitHub as `VERCEL_ORG_ID`

**Secret 3: VERCEL_DASHBOARD_PROJECT_ID**
- Go to your Vercel project's Settings
- Find "Project ID" 
- Copy and add to GitHub as `VERCEL_DASHBOARD_PROJECT_ID`

### Step 2: Trigger Automated Deployment

Once secrets are configured, every push to `main` branch will:
1. Build the app
2. Run tests
3. Deploy to Vercel automatically
4. Update your live URL

Test it:
```bash
git add .
git commit -m "test: trigger automated deployment"
git push origin main
```

Check GitHub Actions tab to see the workflow run.

## Deployment Checklist

### Before First Deployment
- [ ] Created GitHub repository for the project
- [ ] Cloned repo locally
- [ ] Pushed dashboard-app code to GitHub
- [ ] Created Vercel account
- [ ] Connected GitHub to Vercel

### Initial Vercel Setup
- [ ] Imported GitHub repository in Vercel
- [ ] Verified Vite configuration detected
- [ ] First deployment successful
- [ ] Live URL working (https://forge-dashboard.vercel.app)

### After First Deployment
- [ ] Tested on desktop (Chrome, Firefox, Safari)
- [ ] Tested on mobile (iPhone, Android)
- [ ] Responsive design working perfectly
- [ ] All dashboard cards loading
- [ ] Auto-refresh working (every 30s)
- [ ] Dark mode displaying correctly

### GitHub Actions Setup (Optional but Recommended)
- [ ] Added VERCEL_TOKEN to GitHub Secrets
- [ ] Added VERCEL_ORG_ID to GitHub Secrets
- [ ] Added VERCEL_DASHBOARD_PROJECT_ID to GitHub Secrets
- [ ] Verified workflow triggers on push to main
- [ ] Tested automatic deployment by pushing a change

## Testing on Mobile

### Desktop Testing
1. Open https://forge-dashboard.vercel.app
2. Open DevTools (F12)
3. Click mobile device toggle (Ctrl+Shift+M)
4. Test responsive breakpoints:
   - Mobile: < 768px
   - Tablet: 768px - 1200px
   - Desktop: > 1200px

### Real Mobile Testing
1. Open URL on iPhone/Android
2. Check:
   - [ ] Page loads quickly (< 3 seconds)
   - [ ] Text is readable without zooming
   - [ ] All cards are visible in one column
   - [ ] Touch interactions work smoothly
   - [ ] Auto-refresh updates correctly
   - [ ] Dark mode is comfortable to read

### Network Testing
1. Use browser DevTools → Network tab
2. Throttle to "Slow 4G"
3. Verify:
   - [ ] Page still loads (just slower)
   - [ ] No broken images or missing elements
   - [ ] Graceful handling of slow connections

## Troubleshooting

### Deployment Fails

**Error: "Framework not detected"**
```
Solution: vercel.json has buildCommand set to "npm run build"
This should auto-configure Vite detection.
If still failing, add "framework": "vite" to vercel.json
```

**Error: "Build failed with exit code 1"**
```
Solution: 
1. Check build works locally: npm run build
2. Review Vercel build logs for specific error
3. Ensure all dependencies in package.json
4. Check for hardcoded paths that won't work on Vercel
```

**Error: "Cannot find module"**
```
Solution:
1. Verify package-lock.json is committed to git
2. Ensure npm ci (not npm install) used in workflow
3. Check no circular dependencies in imports
```

### Deployment Works but Features Don't

**Dashboard cards not showing data**
```
Solution: Check if API endpoint is correct
Data fetching is configured in src/App.jsx
For now, dashboard uses mock/demo data
```

**Auto-refresh not working**
```
Solution: Check browser console (F12) for errors
Verify fetch requests to data files are successful
Check CORS if fetching from external API
```

**Dark mode not applying**
```
Solution: Clear browser cache (Ctrl+Shift+Delete)
Verify CSS loaded (check Network tab)
Ensure prefers-color-scheme CSS applies
```

### Mobile-Specific Issues

**Page zoom/pinch not working**
```
Solution: Check viewport meta tag in index.html
Should be: <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Touch not responsive**
```
Solution: Check cursor: pointer CSS on interactive elements
Verify no pointer-events: none blocking touches
Test in different browsers
```

**Text too small**
```
Solution: Viewport might be issue
Or responsive breakpoints need adjustment
Try zooming in or adjusting browser zoom
```

## Performance Optimization

### Bundle Size
Current: ~195KB gzipped

To optimize further:
1. Code split with React.lazy()
2. Tree shake unused CSS
3. Lazy load non-critical components
4. Minify SVGs if using any

### Page Speed
Expected: < 3 seconds initial load on 4G

Check with:
- Vercel Analytics dashboard
- Google PageSpeed Insights
- WebPageTest

## Next Steps

After successful deployment:

1. **Share the URL**
   - Mobile: Send to team/stakeholders
   - QR Code: Generate at qr-server.com
   - Embed: Use in docs/readme

2. **Monitor Performance**
   - Check Vercel Analytics
   - Monitor build times
   - Check error rates

3. **Set Up Auto-Updates** (Optional)
   - Enable automatic rebuilds when data changes
   - Or webhook integration for manual triggers

4. **Add Custom Domain** (Optional)
   - Go to Vercel Project Settings → Domains
   - Add your custom domain
   - Update DNS records

## Environment Variables (If Needed Later)

If dashboard needs to fetch from API:

1. Go to Vercel Project Settings → Environment Variables
2. Add variables like:
   ```
   VITE_API_URL=https://api.example.com
   VITE_ENVIRONMENT=production
   ```
3. Redeploy: Click "Deployments" → Latest → Redeploy

## Useful Links

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/
- **React Docs**: https://react.dev
- **Vercel Dashboard**: https://vercel.com/projects
- **GitHub**: https://github.com

## Support

For Vercel-specific issues:
- Check Vercel docs: vercel.com/docs
- Review build logs in Vercel dashboard
- Check deployment history

For app-specific issues:
- Test locally: npm start
- Check browser console: F12
- Review src/ code for issues

## Success Indicators

✅ **Deployment is successful when:**
- Dashboard loads at https://forge-dashboard.vercel.app
- All 5 cards visible (Budget, Videos, SaaS, Timeline, Links)
- Mobile view is responsive and readable
- Auto-refresh updates data every 30 seconds
- No errors in browser console
- Performance is fast (< 3s load time)

**Your Forge Dashboard is now live to the world! 🚀**
