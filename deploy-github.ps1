# Students Paradise - GitHub Deployment Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Students Paradise - GitHub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    git --version | Out-Null
    Write-Host "✓ Git is installed" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 1: Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host ""
Write-Host "Step 2: Adding all files to Git..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Step 3: Creating commit..." -ForegroundColor Yellow
$commitMessage = Read-Host "Enter commit message (default: 'Production ready - Students Paradise')"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Production ready - Students Paradise"
}
git commit -m "$commitMessage"

Write-Host ""
Write-Host "Step 4: Setting main branch..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Step 5: Adding remote origin..." -ForegroundColor Yellow
try {
    git remote add origin https://github.com/DevFarhanCoder/studentsparadise.git
    Write-Host "✓ Remote origin added" -ForegroundColor Green
} catch {
    Write-Host "! Remote origin already exists, updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/DevFarhanCoder/studentsparadise.git
}

Write-Host ""
Write-Host "Step 6: Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Visit https://vercel.com" -ForegroundColor White
Write-Host "2. Click Add New -> Project" -ForegroundColor White
Write-Host "3. Import: DevFarhanCoder/studentsparadise" -ForegroundColor White
Write-Host "4. Click Deploy" -ForegroundColor White
Write-Host ""
Write-Host "Repository: https://github.com/DevFarhanCoder/studentsparadise" -ForegroundColor Cyan
