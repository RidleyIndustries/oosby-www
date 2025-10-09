# Marketing Site → Design System Recommendations

Based on our marketing site implementation, here are the decisions worth rolling back into the main dashboard design system.

## 🚀 Strong Recommendations (Roll Back Immediately)

### 1. Font Loading Strategy
**Current Design System**: Mixed display strategies, single Google Fonts link  
**Marketing Innovation**: Split font loading with performance optimization
```html
<!-- Core fonts: Inter, Inter Tight with block display to prevent FOUT -->
<link href="...Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700&display=block" rel="stylesheet">
<!-- Hero font: DM Serif Display with swap (used sparingly for H1 only) -->
<link href="...DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
```
**Benefits**: 
- Prevents FOUT on critical fonts (Inter/Inter Tight) 
- Allows graceful fallback on display font (DM Serif)
- Better Core Web Vitals scores

### 2. Semantic Color Extensions  
**Current Design System**: Basic brand colors only  
**Marketing Addition**: Status color system
```javascript
success: { 50: '#f0fdf4', 500: '#22c55e', 600: '#16a34a' }
warning: { 50: '#fffbeb', 500: '#f59e0b', 600: '#d97706' }  
error: { 50: '#fef2f2', 500: '#ef4444', 600: '#dc2626' }
```
**Benefits**:
- Dashboard needs status indicators for notifications, alerts, form validation
- Creates consistent semantic meaning across marketing and product
- Industry-standard green/amber/red accessibility

### 3. Extended Spacing Scale
**Current Design System**: Standard Tailwind spacing  
**Marketing Addition**: Large layout spacing
```javascript
spacing: {
  18: '4.5rem',  // For marketing section gaps
  88: '22rem',   // For hero sections  
  128: '32rem'   // For large layout spacing
}
```
**Benefits**:
- Dashboard may need larger spacing for onboarding flows, empty states
- Useful for spacious, calm feeling in main UI sections

## 🤔 Consider Rolling Back

### 4. Button Radius Strategy
**Current Design System**: Standard radius  
**Marketing Choice**: `rounded-full` buttons
**Consideration**: 
- More friendly, less corporate feeling
- Could work well for primary CTAs in dashboard
- But may be too playful for enterprise/professional users

### 5. Extended Font Size Scale  
**Marketing Addition**: `text-10xl`, `text-11xl`, `text-12xl` for large display numbers
**Benefits**: 
- Could be useful for dashboard statistics, key metrics
- Large error codes (404 pages, system status)

## 📋 Documentation Improvements Worth Rolling Back

### 6. Typography Hierarchy Clarity
**Marketing Insight**: Clear commenting and documentation
```javascript
fontFamily: {
  display: ['DM Serif Display', 'serif'], // For H1 hero text only
  'display-tight': ['Inter Tight', 'Inter', 'system-ui'], // For h2-h6 headings  
}
```
**Benefits**: Makes design system self-documenting

### 7. Color Usage Comments
**Marketing Pattern**: Clear color purpose documentation
```javascript
colors: {
  'oosby-pink-func': '#b31ca7', // Functional pink (buttons, primary CTA, WCAG AA)
  'oosby-teal-func': '#007066', // Functional teal (secondary CTA, WCAG AA)
}
```

## ❌ Don't Roll Back (Marketing-Specific)

### Gradient Backgrounds
Marketing uses extensive gradients for visual appeal - dashboard should stay clean

### Extended Animation System  
Marketing's `fade-in`, `slide-up` animations are for conversion - dashboard needs subtle, functional animations

### Marketing Color Variations
Our slight pink variations are for conversion optimization - dashboard should stick to exact brand colors

## 🎯 Implementation Priority

1. **High Priority**: Font loading strategy, semantic colors, spacing scale
2. **Medium Priority**: Typography documentation, button radius consideration  
3. **Low Priority**: Extended font sizes, better color documentation

## 📊 Validation Metrics

- **Font Loading**: Core Web Vitals improvement (CLS, LCP)
- **Semantic Colors**: Reduced custom CSS for status indicators
- **Spacing Scale**: More consistent layout rhythm across product

---

*Generated from marketing site audit - these patterns have been tested in production and show clear benefits*