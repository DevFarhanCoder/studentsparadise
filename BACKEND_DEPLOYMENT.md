# Backend Deployment to Render.com

## Overview

The backend API will be deployed separately to Render.com while the frontend stays on Vercel.

## Prerequisites

- Render.com account
- GitHub account
- MongoDB Atlas account (for production database)

## Step 1: Create Separate Backend Repository

### Option A: New Repository

```bash
# Navigate to backend folder
cd backend

# Initialize new Git repo
git init

# Create .gitignore for backend
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore

# Add and commit
git add .
git commit -m "Initial backend commit"

# Create new repo on GitHub: studentsparadise-backend
# Then push
git remote add origin https://github.com/DevFarhanCoder/studentsparadise-backend.git
git branch -M main
git push -u origin main
```

### Option B: Exclude from Main Repo

Update main `.gitignore`:

```
/backend/
```

## Step 2: Setup MongoDB Atlas (Production Database)

1. Go to https://mongodb.com/cloud/atlas
2. Create a new cluster (Free tier available)
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (allow from anywhere)
5. Get connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/studentsparadise?retryWrites=true&w=majority
   ```

## Step 3: Deploy Backend to Render

1. **Go to Render Dashboard**
   - Visit https://render.com
   - Sign up/Login with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `studentsparadise-backend`
   - Or use main repo and set Root Directory to `backend`

3. **Configure Service**

   ```
   Name: studentsparadise-api
   Region: Singapore (or closest to your users)
   Branch: main
   Root Directory: backend (if using main repo) or leave blank (if separate repo)
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Add Environment Variables**

   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studentsparadise
   ```

5. **Click "Create Web Service"**

## Step 4: Get Backend URL

After deployment completes, Render will provide a URL like:

```
https://studentsparadise-api.onrender.com
```

## Step 5: Update Frontend Environment Variables

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_API_URL=https://studentsparadise-api.onrender.com
     ```

2. **Update EnquiryModal.tsx:**

   ```typescript
   const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

   const response = await fetch(`${API_URL}/api/enquiries`, {
     method: "POST",
     // ... rest of the code
   });
   ```

3. **Redeploy Frontend** on Vercel to pick up new environment variable

## Step 6: Test Backend

```bash
# Test health endpoint
curl https://studentsparadise-api.onrender.com/api/health

# Test enquiry submission
curl -X POST https://studentsparadise-api.onrender.com/api/enquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 1234567890",
    "businessName": "Students Paradise",
    "courseName": "JEE Preparation"
  }'
```

## Backend Repository Structure

```
studentsparadise-backend/
├── package.json
├── package-lock.json
├── server.js
├── .gitignore
├── .env.example
├── README.md
├── controllers/
│   └── enquiryController.js
├── models/
│   └── Enquiry.js
└── routes/
    └── enquiries.js
```

## Environment Variables for Backend (.env)

Create `.env.example` in backend:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studentsparadise
CORS_ORIGIN=https://studentsparadise.vercel.app
```

## Update Backend server.js for CORS

```javascript
const cors = require("cors");

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
```

## Important Notes

1. **Free Tier Limitations:**
   - Render free tier spins down after 15 minutes of inactivity
   - First request after inactivity may take 30-60 seconds
   - Consider upgrading to paid tier for production

2. **Database:**
   - Use MongoDB Atlas for production
   - Never use localhost MongoDB in production

3. **Security:**
   - Never commit `.env` file
   - Use environment variables for all sensitive data
   - Keep CORS origins specific to your domain

## Monitoring

- **Render Dashboard:** View logs and metrics
- **MongoDB Atlas:** Monitor database performance
- **Test Endpoint:** Keep an eye on response times

## Troubleshooting

### Backend not responding

- Check Render logs in dashboard
- Verify MongoDB connection string
- Ensure environment variables are set

### CORS errors

- Update CORS_ORIGIN in Render environment variables
- Redeploy backend

### Database connection failed

- Verify MongoDB Atlas IP whitelist
- Check database user credentials
- Test connection string

## Cost Estimate

- **Render Free Tier:** $0/month (with limitations)
- **Render Starter:** $7/month (always on, better performance)
- **MongoDB Atlas Free:** $0/month (512MB storage)
- **Total Cost:** $0-7/month

---

**Backend deployment complete! Your API is now live on Render.** 🚀
