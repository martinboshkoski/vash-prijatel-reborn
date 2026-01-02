#!/bin/bash
set -e

echo "🏗️  Building project..."
npm run build

echo "📦 Copying to deployment repo..."
cd ../vp-deploy

# Remove old files but keep .git and .htaccess
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' ! -name '.htaccess' -exec rm -rf {} +

# Copy new build
cp -r ../vash-prijatel-reborn/dist/* .

echo "📝 Committing changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
  echo "⚠️  No changes to deploy"
  exit 0
fi

git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 Deployment committed!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub:       cd ../vp-deploy && git push"
echo "2. Pull in cPanel Git™ Version Control"
echo ""
echo "Or push now? (y/n)"
