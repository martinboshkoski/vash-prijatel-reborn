#!/bin/bash
set -e

DEPLOY_DIR="../vp-deploy"
TOKEN="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"

echo "🏗️  Building production..."
npm run build

echo "📦 Copying to deployment repo..."
cd "$DEPLOY_DIR"

# Remove old files but keep .git, .htaccess, README.md
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' ! -name '.htaccess' ! -name 'README.md' -exec rm -rf {} +

# Copy new build
cp -r ../vash-prijatel-reborn/dist/* .

echo "📝 Committing changes..."
git add .

# Check if there are changes
if git diff --staged --quiet; then
  echo "⚠️  No changes to deploy"
  exit 0
fi

git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 Pushing to GitHub..."
git push https://martinboshkoski:${TOKEN}@github.com/martinboshkoski/vp.reborn.static.git main

echo ""
echo "✅ DEPLOYED SUCCESSFULLY!"
echo ""
echo "🌐 Now pull in cPanel Git™ Version Control"
echo "   Your live site will update automatically!"
echo ""
