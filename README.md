## Mondilla Connect - Landing Page

## Project Overview 
Mondilla Connect is a fictional SaaS tool designed to help teams collaborate, organize, and succeed.
This project is a fully responsive landing page built with **HTML**, **Tailwind CSS**, and **JavaScript**, featuring animations, dark mode, and smooth scrolling.

---

## Features Implemented
- **Header & Navigation**
  - Logo placeholder
  - Navigation links (Home, Features, Pricing, Contact)
  - Mobile-friendly hamburger menu toggle

- **Hero Section**
  - Headline & subtext
  - Call-to-action buttons
  - Responsive illustration

- **Features Section**
  - Three feature cards with icons, headings, descriptions
  - Smooth hover and shadow effects

- **Pricing Section**
  - Three pricing plans (Basic, Standard, Premium)
  - Highlighted "Most Popular" plan 
  - "Get Started" buttons for each plan

- **Contact Form**
  - Name, Email, Message fields
  - Basic client-side validation

- **Footer**
  - Social media icons
  - Copyright text

- **Bonus Enhancements**
  - Dark mode toggle (persists via localStorage)
  - Smooth scrolling for navigation
  - Basic animations using GSAP
  - Mobile-first and fully responsive design

---

## Prerequisites
- Node.js (latest stable version) installed
- npm (latest stable version) installed

## Project Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Ifeoluwayemisi/Mondilla-connect-landing
``` 

2. **Navigate into the project folder**
```bash
cd mondilla-connect
```

3. **Install Dependencies**
```bash
npm install
```

4. **Build the Tailwind CSS**
```bash
npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/style.css --minify
```

5. Open index.html in your browser to view the landing page.
  **Tip:** For the best experience (smooth scrolling, animations, and proper asset loading), we recommend using a **Live Server** extension in VS Code or running a local HTTP server.

---

## Extra Note
* Fully mobile-first, responsive design
* Smooth hover and transition effects across all sections
* Dark mode toggle persists across sessions using localStorage
* GSAP animations enhance user experience (fade-ins, staggered cards)
* All data is static — no backend integration required

---

## Lighthouse & Optimization Notes
- **Performance:** Optimized images, minified Tailwind CSS, and smooth animations.  
  Current Lighthouse scores: **Mobile: 50/100**, **Desktop: 70/100**.  
  *Note:* These scores are **before further optimizations** such as image lazy-loading, caching, and code splitting, which could improve load times and performance.
- **Accessibility:** High accessibility standards applied; semantic HTML, color contrast, keyboard navigation. Score: **89/100**.  
- **Best Practices:** Follows modern web development practices, secure links, and responsive design. Score: **96/100**.  
- **SEO:** Proper meta tags, descriptive alt texts for images, structured headings. Score: **100/100**.  
- **Bonus:** Tailwind CSS compilation and minification for faster loading, GSAP animations optimized for minimal layout shifts.


## Author: *Racheal — Mondilla Designs*