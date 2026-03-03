# NTgGamer1 – Personal Portfolio 🚀

Welcome to my personal portfolio repository! Which is completely made with AI Tools And a little bit of my hardwork. This project showcases my identity as **NTgGamer1** — blending gaming creativity with real-world software development.

🔗 **Live Site:** https://ntg-portfolio.vercel.app  
📂 **Repo:** https://github.com/NTgGamer1/Portfolio

---

## ✨ Key Features

### 🎨 **Dark/Light Mode Toggle**
Switch between dark and light themes seamlessly. Your preference is saved in browser storage and persists across sessions.
- **Tech:** CSS custom properties, localStorage API
- **How it works:** Click the sun/moon icon in the navigation bar

### 📧 **Functional Contact Form**
Send messages directly from the portfolio via integrated email service.
- **Tech:** EmailJS API for client-side email sending
- **How it works:** Fill out name, email, and message on the contact page. Form validates input and sends emails instantly
- **Setup Guide:** See `EMAILJS_SETUP.md` (local only) for configuration

### 🎯 **Project Portfolio**
Showcase 6 real-world projects with descriptions, technologies, and live links.
- **Tech:** HTML5 semantic structure, CSS Grid/Flexbox, JavaScript filtering
- **Features:** Filter by category (Web, Automation, Experiments, Games), view tech stacks, access GitHub/demo links
- **Easy to extend:** Add new projects in `projects.html` with category tags

### ✨ **Smooth Scroll Animations**
Elements animate into view as you scroll the page for enhanced visual appeal.
- **Tech:** Intersection Observer API, CSS animations (@keyframes)
- **Animations:** slideInUp, slideInLeft, slideInRight, scaleIn with staggered timing
- **Performance:** Zero janky scroll listeners—uses modern browser APIs

### 📱 **Fully Responsive Design**
Perfect display on all devices—from 320px phones to 4K monitors.
- **Breakpoints:**
  - 1441px+ – Extra large desktops
  - 1025–1440px – Large desktops
  - 769–1024px – Tablets
  - 481–768px – Mobile (landscape & large phones)
  - ≤480px – Small phones
- **Features:** Hamburger navigation menu on mobile, hidden footer links on tablets/phones, adaptive font sizes
- **Mobile-first approach:** Navigation menu button (≡) appears at 768px and below

### ⚡ **Performance Optimized**
Fast load times with minified and optimized assets.
- **Reductions:** CSS -30%, JavaScript -36%, total -32% (31.5KB → 21.5KB)
- **Files:** `styles.min.css` and `script.min.js` used in production
- **Lighthouse scores:** Performance 90+, Accessibility 95+
---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repository
```bash
git clone https://github.com/NTgGamer1/Portfolio.git
cd Portfolio
```

### 2. Open in Browser
**Option A: Direct (simplest)**
- Open `index.html` directly in your browser

**Option B: Local Server (recommended)**
```bash
# Using Node.js http-server
npx http-server

# Or using Python
python3 -m http.server 8000

# Or using VS Code Live Server extension
```

### 3. Customize the Portfolio
- **Update projects:** Edit `projects.html` to add/remove projects
- **Change colors:** Edit CSS variables in `Styles/styles.css` (lines 1-30)
- **Personal info:** Update contact details in HTML files
- **Social links:** Edit `socials.html` with your actual social profiles

---

## 📦 Production (Minified Assets)

The repository includes minified versions for production:
- `Styles/styles.min.css` (16.7 KB)
- `JavaScript/script.min.js` (4.8 KB)

**To regenerate minified files:**
```bash
node minify.js
```

**For deployment:** The HTML files are already configured to use `.min.css` and `.min.js` files. Change the links in HTML if needed.

---

## 🌐 Deployment Options

### **Vercel (Recommended - Free Tier)**
1. Push your code to GitHub
2. Connect repo to [Vercel.com](https://vercel.com)
3. Deploy automatically on every push
4. Live at `your-username.vercel.app`

### **Netlify**
1. Push to GitHub
2. Connect repo to [Netlify.com](https://www.netlify.com)
3. Auto-deploys on git push
4. Free TLS/SSL and custom domain support

### **GitHub Pages**
```bash
git push origin main
```
- Go to Settings → Pages → Select `main` branch
- Live at `github.com/username/portfolio`

---

## 🎨 Customization Guide

### Colors & Typography
All colors and fonts defined in CSS variables (easily customizable):
```css
/* Edit these in styles.css */
:root {
  --primary: #1a1a1a;      /* Dark background */
  --text: #ffffff;          /* Light text */
  --accent: #ff6b6b;        /* Highlight color */
  --font-family: 'Inter', sans-serif;
}
```

### Add New Projects
In `projects.html`, add a new project card:
```html
<article class="project-card" data-category="web">
  <h3>Your Project Title</h3>
  <p>Short description</p>
  <div class="tech-stack">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>
  <div class="project-links">
    <a href="https://github.com/..." class="btn">GitHub</a>
    <a href="https://..." class="btn">Live Demo</a>
  </div>
</article>
```

### Responsive Breakpoints
Adjust these media queries in `styles.css` to modify responsive behavior:
- **≤480px** – Extra-small phones
- **481–768px** – Mobile phones &amp; tablets
- **769–1024px** – Tablet landscape
- **1025–1440px** – Desktop
- **1441px+** – Extra-large monitors

---

## 📊 Performance Metrics

| Metric | Before | After | Reduction |
|--------|--------|-------|-----------|
| CSS Size | 23.9 KB | 16.7 KB | 30% |
| JavaScript | 7.6 KB | 4.8 KB | 36% |
| **Total** | **31.5 KB** | **21.5 KB** | **32%** |
| Lighthouse Performance | 87 | 92+ | +5 |
| Lighthouse Accessibility | 93 | 95+ | +2 |

---

## 🔧 Development

### File Dependencies
- All HTML files link to `Styles/styles.min.css` and `JavaScript/script.min.js`
- `script.js` runs on all pages (hamburger menu, theme toggle, animations)
- `contact.html` additionally loads EmailJS CDN for email capability
- CSS uses @import for modular organization (variables, animations, components)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6+ JavaScript support
- CSS Grid/Flexbox support required
- localStorage support required for theme persistence

### Building Locally
To run the minify script and regenerate minified assets:
```bash
npm install minify  # If not already installed
node minify.js      # Generates .min.css and .min.js
```

---

## 🤝 Contributing

Have suggestions or found a bug? Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact & Social

- **GitHub:** [@NTgGamer1](https://github.com/NTgGamer1)
- **Portfolio:** [ntg-portfolio.vercel.app](https://ntg-portfolio.vercel.app)
- **Message:** Use the contact form on the portfolio site

---

## 🎓 Learning Resources

Built with pure HTML, CSS, and JavaScript—no frameworks!

**Technologies Used:**
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Fetch API & EmailJS](https://www.emailjs.com/docs/)
- [CSS Grid & Flexbox](https://css-tricks.com)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

**See Also:**
- `EMAILJS_SETUP.md` – Complete EmailJS configuration steps
- `PERFORMANCE.md` – Detailed optimization techniques
- `DEPLOYMENT.md` – Advanced deployment options

---

**Last Updated:** 2024  
**Status:** ✅ Production Ready
2. Go to https://vercel.com  
3. Import the GitHub repo  
4. Set **Framework Preset: Other**  
5. Set **Root Directory** to project root  
6. Deploy 🎯

---

## 🧩 Roadmap / Future Enhancements

- [ ] Blog/Notes section for learning logs
- [ ] Resume download button

---

## 👤 About Me

**Nikhil (NTgGamer1)**  
Developer | Tech Explorer | Gamer turned Builder  

> I use the NTgGamer1 identity across platforms as a long-term personal brand.

---

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome.  
Feel free to open an issue or PR.

---

## 📜 License

This project is licensed under the **MIT License**.  
You’re free to use the structure/design with attribution.

---

⭐ If you like this portfolio concept, consider starring the repo!
