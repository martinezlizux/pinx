# GitHub Pages Deployment Instructions

## Automatic Setup

This repository is now configured with a GitHub Actions workflow that will automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

## Manual Setup (Required First Time)

To enable GitHub Pages for this repository, a repository administrator needs to:

1. **Go to Repository Settings**
   - Navigate to your GitHub repository: https://github.com/martinezlizux/pinx
   - Click on the "Settings" tab

2. **Enable GitHub Pages**
   - Scroll down to the "Pages" section in the left sidebar
   - Under "Source", select "GitHub Actions" 
   - This will allow the workflow in `.github/workflows/pages.yml` to deploy the site

3. **First Deployment**
   - Push this branch to `main` or merge this PR to trigger the first deployment
   - The workflow will automatically build the SCSS and deploy the site

## Site URL

Once deployed, your site will be available at:
**https://martinezlizux.github.io/pinx/**

## What This Setup Includes

- ✅ GitHub Actions workflow for automatic deployment
- ✅ SCSS build process during deployment
- ✅ Updated meta tags and URLs for GitHub Pages domain
- ✅ Fixed asset references (logo file)
- ✅ Updated sitemap.xml with correct URLs
- ✅ Proper `.gitignore` to exclude `node_modules`

## Files Modified

- `.github/workflows/pages.yml` - GitHub Pages deployment workflow
- `index.html` - Updated URLs and asset references 
- `sitemap.xml` - Updated URLs for GitHub Pages domain
- `.gitignore` - Added proper exclusions

## Manual Deployment Alternative

If you prefer to deploy manually, you can also:

1. Run `npm run build` 
2. Upload the entire repository to any static hosting service
3. Point the domain to the root directory containing `index.html`

The site is fully static and doesn't require any server-side processing.