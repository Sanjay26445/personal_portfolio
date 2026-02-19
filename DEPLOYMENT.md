# Deployment Guide

## Push to GitHub

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `portfolio`
3. Do NOT initialize with README, .gitignore, or license

### 3. Add Remote and Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Deploy to GitHub Pages

### 1. Update package.json

The `homepage` field is already set to:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Build and Deploy

```bash
npm run deploy
```

This command will:
- Build the project for production
- Deploy to the `gh-pages` branch
- Your site will be live at `https://YOUR_USERNAME.github.io/portfolio`

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Verify that "Source" is set to "Deploy from a branch"
4. Select `gh-pages` branch and `/root` folder
5. Save

Your portfolio will be live in a few minutes!

## Verify Deployment

Visit `https://YOUR_USERNAME.github.io/portfolio` to see your live portfolio.

## Update Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## Troubleshooting

- **404 errors**: Make sure `base` in `vite.config.js` is set to `/portfolio/`
- **Styles not loading**: Clear browser cache and hard refresh (Ctrl+Shift+R)
- **Images not showing**: Check that image paths are relative to the base URL

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings
