# CodeBendr IDE Website

Official website for CodeBendr IDE - An educational IDE for learning programming.

## Setup Instructions

### 1. Add Images

Create an `assets` folder and add the following images:

- `logo.png` - CodeBendr logo
- `hero-image.png` - Screenshot or hero image for the homepage
- `python-logo.png` - Python logo
- `java-logo.png` - Java logo

### 2. Configure Download Links

Edit `script.js` and update the `downloadLinks` object with your actual download URLs:

```javascript
const downloadLinks = {
    python: 'YOUR_PYTHON_DOWNLOAD_URL_HERE',
    java: 'YOUR_JAVA_SDK_DOWNLOAD_URL_HERE',
    codebendr: 'YOUR_CODEBENDR_IDE_DOWNLOAD_URL_HERE'
};
```

### 3. Deploy to GitHub

1. Create a new repository on GitHub
2. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

### 4. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Deploy!

## File Structure

```
codebendr-website/
├── index.html          # Homepage
├── about.html          # About page
├── contributors.html   # Contributors page
├── style.css           # Styles
├── script.js           # JavaScript for downloads
├── README.md           # This file
└── assets/             # Images (create this folder)
    ├── logo.png
    ├── hero-image.png
    ├── python-logo.png
    └── java-logo.png
```

## Features

- ✅ Clean, professional white design
- ✅ Blue hover effects on buttons
- ✅ Auto-download functionality
- ✅ Responsive design
- ✅ Three pages: Home, About, Contributors
- ✅ Ready for GitHub and Vercel deployment

## Customization

- All content can be edited in the HTML files
- Styling can be modified in `style.css`
- Download links are configured in `script.js`

## License

© 2024 CodeBendr IDE. Developed by Aditya Verma.
