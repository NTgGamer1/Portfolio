# NTgGamer1 Portfolio

Personal portfolio website for Nikhil Maurya, built with vanilla HTML, CSS, and JavaScript and deployed on Vercel.

Live site: `https://ntg-portfolio.vercel.app`

## Overview

This project is a multi-page portfolio site that highlights personal work, background, social links, and a contact page.  
It is designed to stay lightweight, fast, and easy to edit without any frontend framework.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Vercel for deployment
- Web3Forms for contact form submissions

## Main Features

- Responsive multi-page layout
- Dark and light theme toggle
- Animated page sections and reveal effects
- Project showcase with filtering
- Social links page
- Working contact form with loading, success, and error states

## Project Structure

```text
Portfolio/
├── index.html
├── about.html
├── projects.html
├── socials.html
├── contact.html
├── README.md
├── Assets/
├── Styles/
│   ├── styles.css
│   └── styles.min.css
└── JavaScript/
    ├── script.js
    └── script.min.js
```

## Running Locally

You can open the HTML files directly, but using a local server is better.

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
