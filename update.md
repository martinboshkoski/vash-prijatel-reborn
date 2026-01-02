
  🚀 Quick Content Update Workflow

  For Adding a New Blog Post

  1. Edit the Main Project
  # Open the blog posts file in your editor
  code /Users/martinboshkoski/vp\ reborn/vash-prijatel-reborn/src/data/blogPosts.ts

  2. Add Your New Blog Post

  Add a new object to the blogPosts array (I'll show you the template below)

  3. Test Locally (Optional but Recommended)
  cd /Users/martinboshkoski/vp\ reborn/vash-prijatel-reborn
  npm run dev
  # Open http://localhost:8080 and check /blog

  4. Deploy Automatically
  cd /Users/martinboshkoski/vp\ reborn/vash-prijatel-reborn
  ./deploy.sh

  This will:
  - ✅ Build the production files
  - ✅ Copy to vp-deploy
  - ✅ Commit changes

  5. Push to GitHub
  cd /Users/martinboshkoski/vp\ reborn/vp-deploy
  git push

  When prompted for password, use your token: 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

  6. Update Live Site
  - Go to cPanel → Git™ Version Control
  - Click "Pull or Deploy"
  - Done! 🎉

  ---
  📝 Blog Post Template

  Here's a template for adding new blog posts. Just copy this and modify:

⏺ Write(~/vp reborn/vash-prijatel-reborn/BLOG_POST_TEMPLATE.md)
  ⎿  Wrote 98 lines to ../vash-prijatel-reborn/BLOG_POST_TEMPLATE.md          
     # Blog Post Template
     Copy this template when adding a new blog post to `src/data/blogPosts.ts`
     ## Template
     ```typescript
     {
       id: 7, // ← Increment this number (next available ID)
       title: "Вашиот Наслов Овде",
     … +88 lines (ctrl+o to expand)

⏺ Now let me create an even faster workflow script:

⏺ Write(~/vp reborn/vash-prijatel-reborn/quick-deploy.sh)
  ⎿  Wrote 39 lines to ../vash-prijatel-reborn/quick-deploy.sh
     #!/bin/bash
     set -e
     DEPLOY_DIR="../vp-deploy"
     TOKEN="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"
     echo "🏗️  Building production..."
     npm run build
     echo "📦 Copying to deployment repo..."
     … +29 lines (ctrl+o to expand)

⏺ Bash(cd /Users/martinboshkoski/vp\ reborn/vash-prijatel-reborn && chmod +x quick-deploy.sh && ls -la *.sh)
  ⎿  Running…

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Bash command