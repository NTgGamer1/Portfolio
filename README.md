# NTgGamer1 Portfolio

A modern, responsive portfolio website showcasing the journey from gaming roots to software development. Built with vanilla technologies to stay lightweight and fast.

**Live Site:** [ntg-portfolio.vercel.app](https://ntg-portfolio.vercel.app)

## About

This portfolio represents my evolution from NTgGamer to NTgGamer1 — a builder who blends gaming creativity with engineering precision. It features a clean, minimal design that highlights projects, skills, and the continuous pursuit of growth in technology.

## Features

- **Responsive Design**: Optimized for all devices with smooth animations
- **Dark/Light Theme Toggle**: Seamless theme switching with local storage persistence
- **Project Showcase**: Interactive filtering system for web apps, automation tools, experiments, and games
- **Contact Integration**: Working contact form powered by Web3Forms
- **Performance Focused**: Lightweight vanilla implementation, no heavy frameworks

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Deployment**: Vercel
- **Contact**: Web3Forms API
- **Version Control**: Git

## Project Structure

```
Portfolio/
├── index.html          # Homepage with hero and highlights
├── about.html          # Personal journey and skills
├── projects.html       # Project showcase with filtering
├── contact.html        # Contact form and social links
├── README.md           # This file
├── Assets/             # Images and icons
├── Styles/
│   ├── styles.css      # Main stylesheet
│   └── styles.min.css  # Minified version
└── JavaScript/
    ├── script.js       # Main functionality
    └── script.min.js   # Minified version
```

## Getting Started

### Prerequisites
- Modern web browser
- Git (for cloning)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/NTgGamer1/Portfolio.git
   cd Portfolio
   ```

2. **Run locally**
   - Open `index.html` in your browser
   - For better experience, use a local server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve .
     ```

## Projects Featured

- **Portfolio Website**: This site - responsive design with theme toggle
- **Task Manager App**: Productivity tool with local storage
- **Web Scraper Tool**: Python automation for data collection
- **AI Chatbot Experiment**: Conversational AI exploration
- **2048 Game Clone**: Classic puzzle game with touch controls
- **Weather Dashboard**: Real-time weather with API integration
- **CLI Password Manager**: Secure credential management tool

## Philosophy

Built to demonstrate real skills and genuine projects, not just templates. Every line of code serves a purpose, every feature solves a problem. This portfolio is a living proof-of-work that evolves with my journey as a developer.

## Connect

- **GitHub**: [@NTgGamer1](https://github.com/NTgGamer1)
- **Instagram**: [@ntg.builds](https://www.instagram.com/ntg.builds)
- **Live Site**: [ntg-portfolio.vercel.app](https://ntg-portfolio.vercel.app)

---

**Built by Nikhil Maurya** | From gaming to building real-world tech

Example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Editing the Site

- Update page content in the root HTML files
- Update styles in `Styles/styles.css`
- Update interactions in `JavaScript/script.js`
- Production pages currently load `styles.min.css` and `script.min.js`

## Contact Form Setup

The contact form uses Web3Forms.

1. Create a Web3Forms access key
2. Open `contact.html`
3. Replace the placeholder below with your real key:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

Other form settings such as `subject`, `from_name`, and `replyto` are already configured in `contact.html`.

## Deployment

This project is intended for Vercel deployment.

Basic flow:

1. Push the repository to GitHub
2. Import the repository into Vercel
3. Deploy
4. Test the contact form on the live site

## Notes

- No framework or build system is required
- The site is easy to customize for content, colors, and projects
- If you change source CSS or JS, make sure the minified files stay in sync with production
