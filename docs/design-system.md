# Oosby Design System

## 🎨 Color System

Oosby's color palette embodies our principle: bright enough to feel alive, soft enough to feel calm, and carefully balanced to maintain clarity, warmth, and accessibility.

### Brand Colors

#### The Heart — Pink and Plum

- **`oosby-pink`** (`#f966f2`) - Primary brand pink
  Our emotional centre. Expressive, modern, unmistakably human. Use for logo, primary accents, and brand moments.

- **`oosby-pink-func`** (`#b31ca7`) - Functional pink
  Tuned for WCAG AA accessibility (5.77:1 contrast with white). Use for primary CTA buttons and interactive elements.

- **`oosby-plum`** (`#4e006b`) - Digital plum
  Anchors the palette with confidence and trust. Use for headings, strong labels, and alternate CTAs.

#### The Mind — Teal and Gray

- **`oosby-teal`** (`#00e1c6`) - Accent teal
  Freshness and focus. Use sparingly for icons, hover highlights, and moments of intelligence.

- **`oosby-teal-func`** (`#007066`) - Functional teal
  WCAG AA accessible version (5.98:1 contrast with white) for secondary CTAs and important actions.

- **`oosby-gray`** (`#f8f2f6`) - Warm gray
  Deliberately gentle, slightly pink-tinted. Use for cards, panels, and surfaces.

- **`oosby-bg`** (`#fffafc`) - Off-white background
  Our canvas. Avoids sterility of pure white, keeps the interface calm and comfortable.

- **`oosby-text`** (`#222222`) - Default text
  Neutral, readable, accessible.

### Usage Guidelines

**Button Variants (Built-in)**

The Button component includes Oosby-branded variants:

```svelte
<!-- Primary CTA - Pink with white text -->
<Button variant="oosby-primary">Save Changes</Button>

<!-- Secondary CTA - Teal with white text -->
<Button variant="oosby-secondary">Learn More</Button>

<!-- Subtle/Ghost - Gray with plum text -->
<Button variant="oosby-subtle">Cancel</Button>
```

**Manual Styling**

For custom components, use brand color utilities:

```tsx
// Card with branded surface
<div className="bg-oosby-gray border-oosby-teal/20">
  <h2 className="text-oosby-plum">Card Title</h2>
  <p className="text-oosby-text">Content goes here...</p>
</div>

// Accent link
<a href="#" className="text-oosby-pink-func hover:text-oosby-plum">
  Read more
</a>
```

### Tailwind Shortcuts

The design system includes semantic defaults:

- **`text-DEFAULT`** → `#222222` (oosby-text)
- **`text-muted`** → `#4e006b` (oosby-plum)
- **`text-accent`** → `#b31ca7` (oosby-pink-func)
- **`bg-DEFAULT`** → `#fffafc` (oosby-bg)
- **`bg-subtle`** → `#f8f2f6` (oosby-gray)
- **`bg-accent`** → `#b31ca7` (oosby-pink-func)
- **`bg-plum`** → `#4e006b`
- **`bg-teal`** → `#007066` (oosby-teal-func)

### Accessibility

All functional colors (pink-func, teal-func) meet WCAG AA contrast requirements (4.5:1 minimum) for normal text on white backgrounds:

- **`oosby-pink-func`** (#b31ca7): 5.77:1 contrast ratio with white
- **`oosby-teal-func`** (#007066): 5.98:1 contrast ratio with white

The design team has specifically tuned these for legibility and accessibility compliance.

---

## Typography

### Font Families

Oosby uses a three-font hierarchy to balance expressiveness, confidence, and clarity:

- **`font-display`** (DM Serif Display, weights: 400, 400italic) - Expressive display voice
  - Use for: H1 headings only (sparingly), hero moments, large display text
  - Character: Serif, elegant, distinctive
  - **Important**: Use sparingly - only for primary H1 headings, not other heading levels

- **`font-display-tight`** (Inter Tight, weights: 600, 700) - Confident structural headings
  - Use for: h2-h6, section headings, card titles, UI labels
  - Character: Tight, modern, structured
  - **Default for most headings** - provides consistent hierarchy

- **`font-sans`** (Inter, weights: 400, 500) - Calm body text
  - Use for: Body copy, descriptions, UI text
  - Character: Clean, legible, professional

```svelte
<!-- Primary H1 heading - DM Serif Display (use sparingly) -->
<h1 class="font-display text-4xl text-oosby-pink tracking--01">Life admin, sorted</h1>

<!-- Section heading - Inter Tight (default for h2-h6) -->
<h2 class="font-display-tight font-semibold text-2xl text-oosby-plum tracking--015">
	Your quietly clever companion
</h2>

<!-- Body text - Inter -->
<p class="font-sans text-base text-oosby-text leading-7">
	Keep everything from car tax to school calendars in one calm place.
</p>
```

### Font Sizes

Standard Tailwind sizes plus extended display sizes:

- `text-xs` through `text-9xl` (standard)
- `text-10xl` (10rem)
- `text-11xl` (11rem)
- `text-12xl` (12rem) - For large display numbers like error codes

### Letter Spacing

Negative tracking for headings (tighter, more confident):

- `tracking--01` (-0.01em) - Use with large display text (Nunito)
- `tracking--015` (-0.015em) - Use with structural headings (Inter Tight)

**Note:** Only use negative tracking on headings, never body text.

---

## Design Philosophy

### The Feel We Aim For

- **Warmly modern** — human, not high-tech
- **Clear and trustworthy** — looks like it's got things handled
- **Lightly joyful** — everyday magic without overstatement

### Balance Points

- **Bright vs. Deep** — energy meets stability
- **Warm vs. Cool** — personality meets clarity
- **Human vs. Digital** — emotional connection meets precision

---

## Technical Implementation

### Tailwind v4 Configuration

Oosby uses **Tailwind CSS v4** with the modern `@theme` syntax. Configuration exists in two places:

1. **`src/app.css`** - Primary source using `@theme` syntax for custom fonts and sizes
2. **`tailwind.config.js`** - Legacy config for plugin compatibility (partially superseded by `@theme`)

**Important gotcha:** Custom properties defined in both places can conflict. When in doubt, use inline styles for critical styling needs.

### Font Loading

Fonts are loaded via Google Fonts CDN with optimized display strategies:

```html
<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Core fonts: Inter, Inter Tight with block display to prevent FOUT -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700&display=block" rel="stylesheet">

<!-- Hero font: DM Serif Display with swap (used sparingly for H1 only) -->
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
```

**Font Loading Strategy:**
- **Core fonts** (Inter, Inter Tight): `display=block` prevents FOUT on critical UI text
- **Display font** (DM Serif): `display=swap` allows graceful fallback (used sparingly for H1 only)
- **Performance**: Split loading improves Core Web Vitals (CLS, LCP scores)
- **Weights optimized**: Inter (400-700), Inter Tight (600-700 only for headings)

### Error Pages

SvelteKit error pages (`+error.svelte`) render outside the normal layout system:

- Don't inherit app styles by default
- CSS utility classes may have timing/specificity issues
- **Best practice:** Use inline styles for critical elements (fonts, sizes)

```svelte
<!-- Error page example - uses inline styles for reliability -->
<div style="font-family: 'Inter Tight', Inter, system-ui, sans-serif; font-size: 12rem;">
	{status}
</div>
```

### Custom Font Utilities

Available utility classes:

- `font-sans` - Inter (default body text, UI text)
- `font-display` - DM Serif Display (H1 headings only, use sparingly)
- `font-display-tight` - Inter Tight (h2-h6 headings, card titles, labels)
- `font-mono` - JetBrains Mono (code)

**Typography Hierarchy (Strictly Enforced):**
```css
/* Automatic hierarchy via base styles */
h1 { font-family: var(--font-family-display); }     /* DM Serif Display */
h2, h3, h4, h5, h6 { font-family: var(--font-family-display-tight); } /* Inter Tight */
body { font-family: var(--font-family-sans); }       /* Inter */
```

**Usage Guidelines:**
- **H1**: DM Serif Display for hero moments only - creates emotional impact
- **H2-H6**: Inter Tight with boldness (600-700 weights) for structural hierarchy  
- **Body**: Inter for readability and consistency

---

## Marketing Site Learnings

The Oosby marketing site (oosby.com) has validated several design system improvements:

### Proven Optimizations

**Font Loading Performance**
- Split font loading strategy reduces CLS (Cumulative Layout Shift)
- Core fonts with `display=block` prevents FOUT on critical UI elements
- Display font with `display=swap` provides graceful fallback for hero text

**Semantic Color Extensions**
Marketing site successfully uses extended status colors:
```javascript
success: { 50: '#f0fdf4', 500: '#22c55e', 600: '#16a34a' }
warning: { 50: '#fffbeb', 500: '#f59e0b', 600: '#d97706' }  
error: { 50: '#fef2f2', 500: '#ef4444', 600: '#dc2626' }
```
*Consider adopting for dashboard notifications, form validation, alerts*

**Extended Spacing Scale**
Large layout spacing proves useful for onboarding flows, empty states:
```javascript
spacing: { 18: '4.5rem', 88: '22rem', 128: '32rem' }
```

### Documentation Improvements
- Self-documenting font family definitions with usage comments
- Clear color purpose annotations (WCAG compliance, usage context)
- Performance rationale for loading strategies

*See `/docs/marketing-to-design-system-recommendations.md` for detailed rollback analysis*

---

## Reference

Full color system specification: [Confluence - Style & Design Guide](https://ridleyindustries.atlassian.net/wiki/spaces/O/pages/20840449)
