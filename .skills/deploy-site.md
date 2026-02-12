# Skill: Deploy Site

One-click deployment to GitHub Pages or Netlify.

## Option 1: GitHub Pages (Free)

### Prerequisites
- GitHub account
- Git installed
- Repository created

### Steps

1. **Initialize Git** (if not already):
```bash
git init
git add .
git commit -m "Initial commit: CineRitual site"
```

2. **Create GitHub Repository**:
- Go to https://github.com/new
- Name: `my-cinematic-site`
- Don't initialize with README

3. **Push to GitHub**:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-cinematic-site.git
git push -u origin main
```

4. **Enable GitHub Pages**:
- Go to repository Settings → Pages
- Source: Deploy from branch `main`
- Folder: `/ (root)`
- Save

5. **Access Site**:
- URL: `https://YOUR_USERNAME.github.io/my-cinematic-site`
- Wait 1-2 minutes for deployment

## Option 2: Netlify (Easiest)

### Steps

1. **Go to Netlify**: https://app.netlify.com
2. **Drag & Drop**: Drag your project folder
3. **Done**: Site deploys instantly
4. **Custom Domain** (optional): Add in Site Settings

### Netlify CLI (Advanced)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Option 3: Vercel

### Steps

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow prompts**: Link to project, deploy

## Custom Domain

### GitHub Pages
1. Add `CNAME` file with your domain
2. Configure DNS: `CNAME` record → `USERNAME.github.io`

### Netlify/Vercel
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS instructions

## Performance Optimization

Before deploying:

1. **Compress images**:
```bash
# Use TinyPNG or similar
```

2. **Minify CSS/JS** (optional):
```bash
npm install -g clean-css-cli uglify-js
cleancss -o style.min.css style.css
uglifyjs script.js -o script.min.js
```

3. **Test locally**:
- Open in multiple browsers
- Test on mobile
- Check console for errors

## Troubleshooting

**404 on GitHub Pages?**
- Check branch name is `main`
- Verify `index.html` is in root
- Wait 2-3 minutes for propagation

**Images not loading?**
- Use relative paths: `./images/frame-001.jpg`
- Not absolute paths: `/images/frame-001.jpg`

**Slow loading?**
- Reduce frame count
- Compress images
- Use WebP format

## Related Skills

- `create-cinematic-site.md`
- `process-video.md`
