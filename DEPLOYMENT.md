# Production Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account

## Step 1: Prepare Project for Production

### Clean Build

```bash
npm run build
```

### Test Production Build

```bash
npm run start
```

## Step 2: Push to GitHub

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Production ready: Students Paradise website"

# Set main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/DevFarhanCoder/studentsparadise.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option 1: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Via Vercel Dashboard

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import from GitHub: `DevFarhanCoder/studentsparadise`
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain: `studentsparadise.edu`
4. Follow DNS configuration instructions

## Environment Variables

If you have environment variables, add them in Vercel:

1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-api-url.com
   ```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Verify forms and APIs work
- [ ] Test page transitions and loader
- [ ] Confirm code protection is active
- [ ] Check SSL certificate
- [ ] Test on different browsers

## Monitoring

Monitor your deployment at:

- Vercel Dashboard: https://vercel.com/dashboard
- Analytics: Available in Vercel dashboard
- Error logs: Check deployment logs

## Troubleshooting

### Build Fails

- Check Node.js version matches package.json
- Clear cache: `rm -rf .next node_modules && npm install`
- Review build logs in Vercel

### 404 Errors

- Verify `vercel.json` is configured correctly
- Check dynamic routes are properly named

### Slow Performance

- Optimize images
- Enable caching
- Use Vercel Edge Network

## Support

For deployment issues, contact:

- Email: support@studentsparadise.edu
- GitHub Issues: https://github.com/DevFarhanCoder/studentsparadise/issues
