#!/bin/bash
# Test script to verify dashboard builds correctly

echo "🧪 Testing Forge Dashboard Build"
echo "=================================="
echo ""

# Check Node.js version
echo "📌 Node.js version:"
node -v
echo ""

# Check npm version
echo "📌 npm version:"
npm -v
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --prefer-offline --no-audit
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✅ Dependencies installed"
echo ""

# Build the app
echo "🔨 Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"
echo ""

# Check build output
echo "📊 Build output:"
ls -lh dist/
echo ""

echo "📈 Build sizes:"
echo "- HTML: $(du -h dist/index.html | cut -f1)"
echo "- CSS: $(du -h dist/assets/*.css 2>/dev/null | cut -f1 | head -1)"
echo "- JS: $(du -h dist/assets/*.js 2>/dev/null | cut -f1 | head -1)"
echo ""

# Preview
echo "🔍 Verifying production build can be previewed..."
# Don't actually run preview in automated test, just verify files exist
if [ -f "dist/index.html" ] && [ -d "dist/assets" ]; then
    echo "✅ Production build verified"
else
    echo "❌ Build files missing"
    exit 1
fi
echo ""

echo "✅ All tests passed!"
echo ""
echo "Next steps:"
echo "1. Commit changes to git: git add . && git commit -m 'chore: dashboard ready for deployment'"
echo "2. Push to GitHub: git push origin main"
echo "3. Deploy to Vercel: ./deploy.sh"
echo ""
