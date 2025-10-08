# Static Assets

This directory contains static assets that are served directly by SvelteKit.

## Directory Structure

```
static/
├── favicons/          # Favicon files (various sizes)
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── android-chrome-192x192.png
├── logo.svg           # Main app logo
├── logo-dark.svg      # Dark mode logo (optional)
└── robots.txt         # SEO robots file
```

## Usage

Files in this directory are served from the root `/` path:

```svelte
<!-- Logo -->
<img src="/logo.svg" alt="Oosby" />

<!-- Favicon (add to app.html) -->
<link rel="icon" href="/favicons/favicon.ico" />
```

## Favicon Generation

To generate favicons from a single logo:

1. Use [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your logo (ideally 512x512px SVG or PNG)
3. Download the favicon package
4. Extract files to `/static/favicons/`

## Image Guidelines

- **Logo**: SVG format preferred (scalable, small size)
- **Favicons**: PNG format for best compatibility
- **Optimize**: Use tools like ImageOptim or Squoosh before committing
