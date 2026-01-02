# Content Update Workflow

This guide explains how to update content on your live website quickly and easily.

## 🚀 The Fastest Way (3 Commands)

### For Blog Posts

```bash
# 1. Edit blog posts (opens in your editor)
./edit-blog.sh

# 2. Save your changes, then deploy
./quick-deploy.sh

# 3. Pull in cPanel Git™ Version Control
# (Login to cPanel → Git™ Version Control → Click "Pull or Deploy")
```

**Done!** Your changes are live. ✅

---

## 📝 Detailed Workflow

### Adding a New Blog Post

**Step 1: Edit the Blog File**

```bash
cd /Users/martinboshkoski/vp\ reborn/vash-prijatel-reborn
./edit-blog.sh
```

Or open manually:
```bash
code src/data/blogPosts.ts
# or
nano src/data/blogPosts.ts
```

**Step 2: Add Your Blog Post**

Copy the template from `BLOG_POST_TEMPLATE.md` and add it to the `blogPosts` array.

Example:
```typescript
{
  id: 7, // ← Use next available number
  title: "Вашиот Наслов",
  excerpt: "Краток опис...",
  category: "Категорија",
  date: "2 Јануари 2026",
  readTime: "7 мин",
  coverImage: "https://images.unsplash.com/photo-XXX?w=1200&h=600&fit=crop",
  ctaTitle: "CTA Наслов",
  ctaDescription: "CTA Опис",
  ctaButtonText: "Побарајте понуда",
  content: `
    <p class="lead">Вовед...</p>
    <h2>Наслов</h2>
    <p>Содржина...</p>
  `
},
```

**Step 3: Test Locally (Optional)**

```bash
npm run dev
```

Open http://localhost:8080/blog and check your new post.

**Step 4: Deploy to Live Site**

```bash
./quick-deploy.sh
```

This will:
1. ✅ Build production files
2. ✅ Copy to deployment repo
3. ✅ Commit changes
4. ✅ Push to GitHub automatically

**Step 5: Update cPanel**

1. Login to cPanel
2. Go to **Git™ Version Control**
3. Find your `vp-deploy` repository
4. Click **"Pull or Deploy"**

**Done!** Your blog post is live on your website.

---

## 🔄 Updating Existing Content

### Editing an Existing Blog Post

1. Open `src/data/blogPosts.ts`
2. Find the post by `id` or `title`
3. Make your changes
4. Run `./quick-deploy.sh`
5. Pull in cPanel

### Changing Other Pages

**Homepage** (`src/pages/Index.tsx`):
- Hero section text
- Features section

**About Page** (`src/pages/About.tsx`)

**Services Page** (`src/pages/Services.tsx`)

**Contact Page** (`src/pages/Contact.tsx`)

After editing any page:
```bash
./quick-deploy.sh
```
Then pull in cPanel.

---

## 📂 Project Structure

```
vash-prijatel-reborn/          ← Main project (EDIT HERE)
├── src/
│   ├── pages/                 ← Page components
│   │   ├── Index.tsx         ← Homepage
│   │   ├── About.tsx         ← About page
│   │   ├── Services.tsx      ← Services page
│   │   ├── Blog.tsx          ← Blog listing
│   │   ├── BlogPost.tsx      ← Blog post detail
│   │   └── Contact.tsx       ← Contact page
│   ├── data/
│   │   └── blogPosts.ts      ← BLOG CONTENT (Edit this!)
│   ├── components/           ← Reusable components
│   └── assets/               ← Images, fonts
├── deploy.sh                 ← Manual deploy (prompts for push)
├── quick-deploy.sh           ← Auto deploy (automatic push)
├── edit-blog.sh              ← Quick open blog file
├── BLOG_POST_TEMPLATE.md     ← Template for new posts
└── CONTENT_WORKFLOW.md       ← This file

vp-deploy/                     ← Deployment repo (AUTO-GENERATED)
├── index.html                ← Don't edit directly
├── assets/                   ← Auto-generated
└── .htaccess                 ← Keep this file
```

**⚠️ Important**: Only edit files in `vash-prijatel-reborn/`. Never edit files in `vp-deploy/` directly.

---

## 🛠️ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Edit Blog | `./edit-blog.sh` | Opens blog posts file in editor |
| Quick Deploy | `./quick-deploy.sh` | Build + Deploy + Push automatically |
| Manual Deploy | `./deploy.sh` | Build + Deploy (you push manually) |
| Dev Server | `npm run dev` | Test locally at http://localhost:8080 |
| Build | `npm run build` | Build production files only |

---

## ⚡ Quick Reference

### I want to add a blog post
```bash
./edit-blog.sh          # Edit
./quick-deploy.sh       # Deploy
# Pull in cPanel
```

### I want to change homepage text
```bash
code src/pages/Index.tsx
./quick-deploy.sh
# Pull in cPanel
```

### I want to test before deploying
```bash
npm run dev             # Test at localhost:8080
# When ready:
./quick-deploy.sh
# Pull in cPanel
```

### I made a mistake and want to undo
```bash
cd /Users/martinboshkoski/vp\ reborn/vash-prijatel-reborn
git status              # See what changed
git diff                # See exact changes
git checkout -- <file>  # Undo changes to a file
```

---

## 📸 Finding Images

For blog post cover images, use [Unsplash](https://unsplash.com):

1. Search for topic (e.g., "insurance", "family", "car")
2. Click image → Copy link
3. Add `?w=1200&h=600&fit=crop` to the end

Example:
```
https://images.unsplash.com/photo-1234567890?w=1200&h=600&fit=crop
```

---

## 🆘 Troubleshooting

**Q: My changes don't show up on the live site**
- Make sure you ran `./quick-deploy.sh`
- Make sure you pulled in cPanel Git™ Version Control
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Q: I get an error when deploying**
- Check that you're in the correct directory
- Run `npm install` if dependencies are missing
- Check that `vp-deploy` folder exists

**Q: Blog post doesn't appear**
- Check the `id` is unique (not used by another post)
- Check all required fields are filled
- Check for syntax errors (missing commas, quotes)

**Q: How do I delete a blog post?**
- Open `src/data/blogPosts.ts`
- Remove the entire blog post object
- Run `./quick-deploy.sh`
- Pull in cPanel

---

## 💡 Pro Tips

1. **Always test locally first** with `npm run dev`
2. **Use the template** from `BLOG_POST_TEMPLATE.md`
3. **Keep backups** - your main project has git history
4. **Find good images** on Unsplash for visual appeal
5. **Write in Macedonian** to match existing content
6. **Use descriptive categories** that match existing ones

---

Need help? Check the main project README or CLAUDE.md for technical details.
