# Students Paradise - Frontend Deployment (Vercel)
# Backend is deployed separately to Render.com

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Students Paradise - Frontend Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    git --version | Out-Null
    Write-Host "OK Git is installed" -ForegroundColor Green
} catch {
    Write-Host "ERROR Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Note: Backend folder is excluded from this deployment" -ForegroundColor Yellow
Write-Host "Backend will be deployed separately to Render.com" -ForegroundColor Yellow
Write-Host ""

Write-Host "Step 1: Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host ""
Write-Host "Step 2: Adding frontend files to Git..." -ForegroundColor Yellow
Write-Host "(Backend folder is excluded via .gitignore)" -ForegroundColor Gray
git add .

Write-Host ""
Write-Host "Step 3: Creating commit..." -ForegroundColor Yellow
$commitMessage = Read-Host "Enter commit message (default: 'Frontend deployment - Students Paradise')"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Frontend deployment - Students Paradise"
}
git commit -m "$commitMessage"

Write-Host ""
Write-Host "Step 4: Setting main branch..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Step 5: Adding remote origin..." -ForegroundColor Yellow
try {
    git remote add origin https://github.com/DevFarhanCoder/studentsparadise.git
    Write-Host "OK Remote origin added" -ForegroundColor Green
} catch {
    Write-Host "INFO Remote origin already exists, updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/DevFarhanCoder/studentsparadise.git
}

Write-Host ""
Write-Host "Step 6: Pushing frontend to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Successfully pushed frontend to GitHub!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "FRONTEND DEPLOYMENT:" -ForegroundColor Cyan
Write-Host "1. Visit https://vercel.com" -ForegroundColor White
Write-Host "2. Click Add New -> Project" -ForegroundColor White
Write-Host "3. Import: DevFarhanCoder/studentsparadise" -ForegroundColor White
Write-Host "4. Add Environment Variable:" -ForegroundColor White
Write-Host "   NEXT_PUBLIC_API_URL=https://studentsparadise-api.onrender.com" -ForegroundColor Gray
Write-Host "5. Click Deploy" -ForegroundColor White
Write-Host ""

Write-Host "BACKEND DEPLOYMENT:" -ForegroundColor Cyan
Write-Host "See BACKEND_DEPLOYMENT.md for detailed instructions" -ForegroundColor White
Write-Host ""

Write-Host "Frontend Repo: https://github.com/DevFarhanCoder/studentsparadise" -ForegroundColor Cyan
