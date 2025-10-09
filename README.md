# Oosby Website

The marketing website for Oosby — life admin, sorted.

**Oosby** keeps track of the boring-but-important stuff — from dentist appointments to insurance renewals — automatically and just in time.

## About This Site

This is the main marketing website for Oosby (www.oosby.com), built with Astro and deployed on Cloudflare Pages. The site focuses on:

- **Calm, confident design** that reflects Oosby's core values
- **Privacy-first messaging** and transparent communication 
- **Clean UX** that doesn't overwhelm visitors
- **Performance** with fast loading and accessible content

## 🚀 Project Structure

```text
/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Website pages (auto-routed)
│   │   ├── index.astro  # Homepage
│   │   ├── about.astro  # About page
│   │   ├── trust.astro  # Trust & privacy page
│   │   ├── terms.astro  # Terms & conditions
│   │   └── ...          # Additional pages
│   └── styles/          # CSS and styling
└── package.json
```

## 🧞 Development Commands

All commands are run from the root of the project:

| Command                 | Action                                        |
| :---------------------- | :-------------------------------------------- |
| `npm install`           | Install dependencies                          |
| `npm run dev`           | Start local dev server at `localhost:4321`   |
| `npm run build`         | Build production site to `./dist/`           |
| `npm run preview`       | Preview build locally before deploying       |
| `npm run build:cf`      | Build for Cloudflare Pages deployment        |
| `npm run preview:cf`    | Preview with Cloudflare Pages locally        |
| `npm run deploy`        | Deploy to Cloudflare Pages                   |
| `npm run check`         | Run Astro's built-in checks                  |
| `npm run type-check`    | Type check without emitting files            |

## 🎨 Design System

The site uses a custom design system built around Oosby's brand:

- **Typography**: DM Serif Display for headings, Inter Tight for UI
- **Colors**: Oosby Pink, Plum, and muted grays for calm aesthetics
- **Layout**: Clean spacing, generous white space, thoughtful hierarchy
- **Components**: Reusable Button, Card, and layout components

## 📝 Content Philosophy

- **Plain English**: No jargon, clear communication
- **User-focused**: Address real problems and benefits
- **Trustworthy**: Transparent about data, privacy, and business model
- **Calm confidence**: Professional but approachable tone

## 🚀 Deployment

The site is deployed on Cloudflare Pages with automatic deployments from the main branch. Static assets are optimized and served via Cloudflare's global CDN.

## 🔗 Related

- **App**: [app.oosby.com](https://app.oosby.com) - The main Oosby application
- **Support**: Available through the website's support page
- **Company**: Built by Ridley Industries Ltd (UK)
