# 🚀 Backend Setup Guide

## Current Status
✅ Backend server is running on port 5000  
❌ MongoDB connection failed - database not running

## Quick Setup Options

### Option 1: Use MongoDB Atlas (Recommended - Free Cloud Database)

1. **Create Free Account**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up with Google or email

2. **Create a Cluster**
   - Select "Create a Free Cluster" (M0 Sandbox - Free Forever)
   - Choose a cloud provider (AWS/Google/Azure) and region closest to you
   - Click "Create Cluster" (takes 3-5 minutes)

3. **Setup Database Access**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Create username and password (remember these!)
   - Set privileges to "Atlas Admin"

4. **Setup Network Access**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (or add your IP)

5. **Get Connection String**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://...`)

6. **Update Backend .env File**
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/nexoragroups?retryWrites=true&w=majority
   ```
   Replace:
   - `YOUR_USERNAME` with your database username
   - `YOUR_PASSWORD` with your database password
   - `cluster0.xxxxx` with your actual cluster URL

7. **Restart Backend Server**
   - Stop the current server (Ctrl+C in terminal)
   - Run: `cd backend && node server.js`
   - You should see: "✅ MongoDB Connected Successfully"

---

### Option 2: Install MongoDB Locally (Advanced)

1. **Download MongoDB**
   - Windows: https://www.mongodb.com/try/download/community
   - Download "MongoDB Community Server"
   - Choose Windows x64 MSI

2. **Install MongoDB**
   - Run the installer
   - Choose "Complete" installation
   - Install as a Windows Service
   - Install MongoDB Compass (GUI tool)

3. **Start MongoDB Service**
   ```powershell
   # Check if MongoDB is running
   Get-Service MongoDB
   
   # If not running, start it
   Start-Service MongoDB
   ```

4. **Verify Connection**
   - Open MongoDB Compass
   - Connect to: `mongodb://localhost:27017`
   - Should connect successfully

5. **Restart Backend**
   - The backend .env already has: `MONGODB_URI=mongodb://localhost:27017/nexoragroups`
   - Just restart the server: `node server.js`

---

## Testing the Backend

Once MongoDB is connected, test the API:

### 1. Health Check
Open browser or use curl:
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "NexoraGroups API is running",
  "timestamp": "2026-01-19T..."
}
```

### 2. Submit Test Enquiry
```bash
curl -X POST http://localhost:5000/api/enquiries \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"9876543210\",\"businessName\":\"Students Paradise\",\"courseName\":\"NEET Preparation\"}"
```

### 3. View All Enquiries
```bash
curl http://localhost:5000/api/enquiries
```

---

## Frontend Integration Status

✅ EnquiryModal component updated to POST to backend  
✅ Form submits to: `http://localhost:5000/api/enquiries`  
✅ Button changed from "Buy Now" to "Enroll Now"

### When User Submits Form:
1. Form data sent to backend API
2. Data saved in MongoDB database
3. Success message shown to user
4. Modal closes after 3 seconds

---

## View Submitted Data

### Option A: Using MongoDB Atlas
1. Go to your Atlas cluster
2. Click "Browse Collections"
3. Select "nexoragroups" database → "enquiries" collection
4. View all submitted forms

### Option B: Using MongoDB Compass (Local)
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Select "nexoragroups" database → "enquiries" collection
4. View all submitted forms

### Option C: Using API
```bash
curl http://localhost:5000/api/enquiries
```

---

## Troubleshooting

### "MongoDB Connection Error"
- **Atlas**: Check username/password in connection string
- **Local**: Ensure MongoDB service is running
- Check firewall settings
- Verify `.env` file is in `backend/` folder

### "Port 5000 already in use"
- Change PORT in `.env` to different number (e.g., 5001)
- Update frontend API URL in `components/EnquiryModal.tsx`

### "CORS Error" in browser
- Already configured in backend
- If persists, check browser console for details

### Can't submit form from frontend
1. Ensure backend server is running
2. Check MongoDB is connected (green checkmark in terminal)
3. Open browser DevTools → Network tab
4. Submit form and check for API call to `localhost:5000`

---

## Next Steps

1. ✅ Choose MongoDB option (Atlas recommended)
2. ✅ Setup database connection
3. ✅ Restart backend server
4. ✅ Test with frontend form submission
5. ✅ View submitted data in database

---

## Production Deployment

When ready to deploy:

### Backend:
- Deploy to: Railway.app, Render.com, or Heroku
- Add environment variables in deployment platform
- Get production API URL (e.g., `https://your-api.railway.app`)

### Frontend:
- Update API URL in `EnquiryModal.tsx`:
  ```typescript
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const response = await fetch(`${API_URL}/api/enquiries`, {...});
  ```
- Add `NEXT_PUBLIC_API_URL` to Vercel/Netlify environment variables

---

## Support

If you need help:
1. Check MongoDB Atlas documentation
2. Verify all steps above
3. Check terminal for specific error messages
4. Ensure .env file has correct values
