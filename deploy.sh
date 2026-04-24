#!/bin/bash
# Forge Dashboard Deployment Script
# This script automates the deployment to Vercel
# Usage: ./deploy.sh

set -e  # Exit on error

echo "🚀 Forge Dashboard Deployment Script"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check prerequisites
echo "${BLUE}📋 Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
    echo "${RED}❌ Node.js not installed${NC}"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "${RED}❌ npm not installed${NC}"
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "${RED}❌ Git not installed${NC}"
    exit 1
fi

if ! command -v vercel &> /dev/null; then
    echo "${YELLOW}⚠️  Vercel CLI not installed, installing...${NC}"
    npm install -g vercel
fi

echo "${GREEN}✓ All prerequisites installed${NC}"
echo ""

# Install dependencies
echo "${BLUE}📦 Installing dependencies...${NC}"
npm install
echo "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Build project
echo "${BLUE}🔨 Building project...${NC}"
npm run build
echo "${GREEN}✓ Build successful${NC}"
echo ""

# Check if git remote is configured
if ! git remote get-url origin &> /dev/null; then
    echo "${YELLOW}⚠️  GitHub remote not configured${NC}"
    echo ""
    echo "To configure GitHub remote:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/forge-dashboard.git"
    echo "  git push -u origin main"
    echo ""
    read -p "Press Enter to continue with Vercel deployment without GitHub..."
fi

# Deploy to Vercel
echo "${BLUE}🚀 Deploying to Vercel...${NC}"
echo ""
echo "Note: If this is your first deployment:"
echo "1. You'll be prompted to authorize with Vercel"
echo "2. You'll be asked to link the project or create a new one"
echo "3. Follow the interactive prompts"
echo ""

vercel --prod

echo ""
echo "${GREEN}✓ Deployment complete!${NC}"
echo ""
echo "${BLUE}📍 Your dashboard is live at:${NC}"
vercel url

# Get the deployment URL
DASHBOARD_URL=$(vercel url 2>/dev/null)

echo ""
echo "${GREEN}✅ Success! Your Forge Dashboard is now live!${NC}"
echo ""
echo "Dashboard URL: ${DASHBOARD_URL}"
echo ""
echo "📱 Test on Mobile:"
echo "  • Open the URL on your phone"
echo "  • Test landscape and portrait modes"
echo "  • Verify all cards are visible and responsive"
echo ""
echo "🔗 Share Your Dashboard:"
echo "  • Send the URL to team members"
echo "  • Create a QR code at: https://qr-server.com/api/qrcode?url=${DASHBOARD_URL}"
echo ""
echo "📊 Monitor Your Deployment:"
echo "  • Vercel Dashboard: https://vercel.com/projects"
echo "  • GitHub Actions: https://github.com/YOUR_REPO/actions"
echo ""
