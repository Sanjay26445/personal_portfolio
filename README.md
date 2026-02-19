# Sanjay M B - Portfolio

A modern, responsive single-page portfolio website built with React and Vite, featuring dark/light mode toggle.

## Features

- ✨ Modern, clean design with smooth animations
- 🌓 Dark/Light mode toggle with localStorage persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Vite for fast development and optimized builds
- 🎨 Beautiful gradient accents and hover effects
- 📊 Showcase of projects with GitHub links
- 📰 IEEE publication display
- 📧 Contact information and social links

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deploy to GitHub Pages

### Setup

1. Create a new repository on GitHub named `portfolio`
2. Update the `homepage` in `package.json` with your GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   ```

3. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

### Deploy

```bash
npm run deploy
```

Your portfolio will be live at `https://YOUR_USERNAME.github.io/portfolio`

## Project Structure

```
portfolio-sanjay/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Publications.jsx & Publications.css
│   │   └── Contact.jsx & Contact.css
│   ├── App.jsx & App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Your Information

Edit the component files to add your own content:
- `src/components/Hero.jsx` - Hero section and contact info
- `src/components/About.jsx` - About and education
- `src/components/Skills.jsx` - Technical skills
- `src/components/Projects.jsx` - Project showcase
- `src/components/Publications.jsx` - Publications
- `src/components/Contact.jsx` - Contact methods

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #3b82f6;
  --primary-dark: #1e40af;
  /* ... other variables */
}
```

## Technologies Used

- React 18
- Vite
- CSS3 with CSS Variables
- Lucide React Icons

## License

This project is open source and available under the MIT License.

## Author

Sanjay M B
- Email: sanjaymb26@gmail.com
- GitHub: https://github.com/Sanjay26445
- LinkedIn: https://www.linkedin.com/in/sanjay-mb
