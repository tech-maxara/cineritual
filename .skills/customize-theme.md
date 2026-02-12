# Skill: Customize Theme

Apply brand colors and aesthetic themes to your cinematic site.

## Available Themes

### Dark Chocolate (Warm & Elegant)
- **Accent**: Gold (#c69c6d)
- **Background**: Deep brown (#0d0604)
- **Text**: Warm off-white (#f5f0e1)
- **Use for**: Luxury brands, watches, fashion, jewelry

### Night Neon (Futuristic & Bold)
- **Accent**: Cyan (#00f2ff)
- **Background**: Deep black (#050510)
- **Text**: Pure white (#ffffff)
- **Use for**: Tech products, SaaS, gaming, crypto

### Minimal Platinum (Clean & Sophisticated)
- **Accent**: Dark gray (#111111)
- **Background**: Off-white (#f9f9f9)
- **Text**: Charcoal (#222222)
- **Use for**: Architecture, real estate, minimalist brands

## How to Apply

### Method 1: Edit cineritual.json

```json
{
  "theme": "dark_chocolate",
  "customColors": {
    "accent": "#c69c6d",
    "background": "#0d0604",
    "text": "#f5f0e1"
  }
}
```

### Method 2: Edit CSS Variables

In `index.html` or separate CSS file:

```css
:root {
  --accent: #c69c6d;
  --bg-main: #0d0604;
  --text-main: #f5f0e1;
  --text-dim: rgba(245, 240, 225, 0.7);
}
```

## Custom Brand Colors

To use your own brand colors:

1. **Extract from logo**: Use a color picker tool
2. **Set accent**: Your primary brand color
3. **Choose background**: Dark or light to match brand
4. **Set text**: High contrast with background

## Typography

### Headline Font (Serif)
- Playfair Display (default)
- Cormorant Garamond
- Crimson Pro

### Body Font (Sans-serif)
- Inter (default)
- Outfit
- Space Grotesk

### How to Change

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

h1, h2, h3 {
  font-family: 'Your Font', serif;
}

body {
  font-family: 'Your Font', sans-serif;
}
```

## Advanced Customization

### Glassmorphism Intensity

```css
.ritual-glass {
  background: rgba(255, 255, 255, 0.03); /* Adjust opacity */
  backdrop-filter: blur(20px); /* Adjust blur */
}
```

### Scroll Speed

```javascript
const ritual = new CineRitual({
  scrollTriggerEnd: '+=150%' // Adjust: 100% = fast, 200% = slow
});
```

## Related Skills

- `create-cinematic-site.md`
- `generate-prompts.md`
