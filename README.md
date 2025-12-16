# CodeBendr IDE - Official Website & Releases

![CodeBendr IDE](assets/logo.png)

This repository hosts the **official website** for CodeBendr IDE and manages **installer releases** in a secure and organized manner.

---

## 🌐 About This Repository

This repository serves two primary purposes:

1. **Website Hosting**: Contains the source code for the CodeBendr IDE official website
2. **Release Management**: Distributes installer files through GitHub Releases for secure, reliable downloads

---

## 📦 Releases & Downloads

### Why GitHub Releases?

We use **GitHub Releases** to distribute CodeBendr IDE and its prerequisites (Python, Java SDK) because:

- ✅ **Safe & Secure**: Files are hosted on GitHub's trusted infrastructure
- ✅ **Version Control**: Track different versions and updates systematically
- ✅ **Direct Downloads**: One-click downloads without redirects or ads
- ✅ **Bandwidth**: Unlimited bandwidth for public repositories
- ✅ **Reliable**: Enterprise-grade CDN ensures fast, global availability

### Installation Order

To use CodeBendr IDE, install the prerequisites in this order:

1. **Python 3.10.0** - Required for Python programming lessons
2. **OpenJDK 25** - Required for Java programming lessons  
3. **CodeBendr IDE** - The main application

Download all installers from the [Releases](https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases) page.

---

## 🚀 Website Structure

### Pages

- **`index.html`** - Homepage with download buttons and installation guide
- **`about.html`** - Detailed information about CodeBendr IDE features
- **`contributors.html`** - Credits and contribution information

### File Structure

```
codebendr-website/
├── index.html          # Homepage
├── about.html          # About page
├── contributors.html   # Contributors page
├── style.css           # Styling (clean white design with blue accents)
├── script.js           # Download functionality
├── .gitignore          # Excludes installers from version control
├── README.md           # This file
└── assets/             # Images and logos
    ├── logo.png
    ├── hero-image.png
    ├── python-logo.png
    └── java-logo.png
```

---

## 🔒 Security & Best Practices

### Why Installers Are NOT in the Main Repository

Large installer files (.exe, .msi) are **deliberately excluded** from the main repository using `.gitignore`:

- **Repository Size**: Keeps the repository lightweight and fast to clone
- **Version Control**: Git is optimized for code, not large binaries
- **GitHub Releases**: Purpose-built for distributing software binaries
- **Clean History**: Prevents repository bloat from binary files

### Release Process

1. **Code Updates**: Push website code changes to the `main` branch
2. **Create Release**: Use GitHub Releases to publish new versions
3. **Upload Binaries**: Attach installer files to the release
4. **Tag Versions**: Use semantic versioning (e.g., v1.0.0, v1.1.0)
5. **Update Website**: Website automatically links to the latest release

---

## 💻 Local Development

### Prerequisites

- Python 3.x (for running local server)
- Git (for version control)

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-.git
   cd CodeBendr-WEBSITE-RELEASES-
   ```

2. Start a local server:
   ```bash
   python -m http.server 8000
   ```

3. Open in browser:
   ```
   http://localhost:8000
   ```

---

## 🌍 Deployment

### Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Import this repository
4. Deploy automatically!

### Deploy to GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select **Source**: Deploy from `main` branch
3. Save and wait for deployment

---

## 🛠️ Customization

### Update Download Links

Edit `script.js` and update the release URLs:

```javascript
const downloadLinks = {
    python: 'https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases/download/v1.0.0/python-3.10.0-amd64.exe',
    java: 'https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases/download/v1.0.0/OpenJDK25U-jdk_x64_windows_hotspot_25.0.1_8.msi',
    codebendr: 'https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases/download/v1.0.0/CodeBendrIDE_Setup.exe'
};
```

---

## 🤝 Contributing

We welcome contributions! If you'd like to:

- Report bugs or issues
- Suggest new features
- Improve documentation
- Contribute code

Please visit [adityavermaworks.in](https://www.adityavermaworks.in/) or open an issue in this repository.

---

## 📄 License

**CodeBendr IDE** incorporates:
- Visual Studio Code (MIT License)
- Custom extensions and learning content (Proprietary)

Website code: © 2024 CodeBendr IDE. Developed by Aditya Verma.

---

## 📞 Contact

- **Website**: [adityavermaworks.in](https://www.adityavermaworks.in/)
- **Repository**: [github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-](https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-)

---

**Built with ❤️ for learners everywhere**
