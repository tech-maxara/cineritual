<div align="center">

<img src="assets/maxara-logo.jpeg" alt="Maxara" width="140"/>

# CineRitual

**The World's Easiest AI-Powered 3D & Cinematic Website Builder**  
Create a masterpiece in 5 minutes

[![License: MIT](https://img.shields.io/badge/License-MIT-c69c6d?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/tech-maxara/cineritual?style=for-the-badge&color=c69c6d&logo=github)](https://github.com/tech-maxara/cineritual/stargazers)
[![Built by Maxara](https://img.shields.io/badge/Built_by-Maxara-c69c6d?style=for-the-badge)](https://github.com/tech-maxara)

![CineRitual Demo](assets/hero_compressed.gif)

</div>

---

## What is CineRitual?

CineRitual is a framework that transforms static websites into cinematic, scroll-driven experiences. Instead of complex 3D libraries like Three.js, it uses a simple video-to-frames approach that creates stunning visual effects with minimal code.

**AI-Native Design**: CineRitual includes a `.skills` folder that allows AI coding assistants (Claude, Cursor, GitHub Copilot) to understand and execute complete workflows. Tell your AI "Create a luxury watch site" and it handles everything from video prompt generation to deployment.

---

## How It Works

1. **Provide a video** (3-10 seconds, MP4 format)
2. **CineRitual extracts frames** from your video
3. **Frames sync with scroll** creating a 3D-feeling animation
4. **Add your content** over the cinematic background

---

## Quick Start Guide

### Prerequisites

- Node.js (v16 or higher)
- ffmpeg ([Download here](https://ffmpeg.org/download.html))
- A video file (MP4, 3-10 seconds)

### Step 1: Clone the Repository

```bash
git clone https://github.com/tech-maxara/cineritual.git
cd cineritual
```

### Step 2: Initialize a New Project

```bash
node utils/init.js my-project
```

This creates a new project folder with the complete structure:
```
my-project/
├── source/       # Place your video here
├── images/       # Frames will be saved here
├── index.html    # Your website
└── .gitignore    # Git configuration
```

### Step 3: Add Your Video

Copy your video file into the `source/` folder:

```bash
# Windows
copy your-video.mp4 my-project\source\video.mp4

# Mac/Linux
cp your-video.mp4 my-project/source/video.mp4
```

### Step 4: Process Video into Frames

```bash
cd my-project
node ../utils/frame-converter.js source/video.mp4 images/ 60
```

This command:
- Extracts 60 frames from your video
- Saves them as `frame-001.jpg`, `frame-002.jpg`, etc.
- Optimizes them for web display

### Step 5: Customize Your Site

Open `index.html` and update the content:

```html
<div class="ritual-content">
    <span class="eyebrow">Your Brand</span>
    <h1 class="headline">Your <em>Headline</em></h1>
    <p class="subtext">Your description goes here.</p>
</div>
```

### Step 6: Test Locally

Open `index.html` in your browser. Scroll to see the cinematic effect in action.

### Step 7: Deploy

**GitHub Pages** (Free):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

**Netlify** (Easiest):
1. Go to https://app.netlify.com
2. Drag and drop your project folder
3. Done

---

## Features

### Cinematic Frame-Sync Engine
Synchronize high-resolution video frames with scroll progress for smooth 3D-feeling animations. No WebGL complexity required.

### 5-Minute Setup
From raw video to deployed site in under 5 minutes. Simple commands, no complex configuration.

### AI-Native Workflow
Built-in prompt templates for Gemini, Midjourney, and Flux. AI agents can execute complete workflows through natural language.

### Premium Design System
Glassmorphism effects, storytelling typography, and curated color palettes included. Professional results out of the box.

### Zero Dependencies
Vanilla JavaScript core. No React, no Vue, no build step. Just HTML, CSS, and GSAP for animations.

### Perfect For
- Luxury product showcases (watches, fashion, jewelry)
- Tech product launches (SaaS, apps)
- Creative portfolios (designers, photographers)
- Real estate presentations
- Restaurant and food brands

---

## Customization

### Themes

CineRitual includes 3 pre-designed themes:

**Dark Chocolate** (Warm & Elegant)
- Background: `#120906`
- Accent: `#c69c6d`
- Best for: Luxury brands, watches, fashion

**Night Neon** (Futuristic & Bold)
- Background: `#050510`
- Accent: `#00f2ff`
- Best for: Tech products, gaming, crypto

**Minimal Platinum** (Clean & Sophisticated)
- Background: `#f9f9f9`
- Accent: `#111111`
- Best for: Architecture, real estate, minimalist brands

### Scroll Speed

Adjust the scroll speed in your `index.html`:

```javascript
const ritual = new CineRitual({
    frameCount: 60,
    scrollTriggerEnd: '+=150%'  // Change this value
});
```

- `+=100%` = Fast (1 viewport scroll)
- `+=150%` = Medium (recommended)
- `+=200%` = Slow (2 viewport scrolls)

### Custom Colors

Edit CSS variables in `index.html`:

```css
:root {
    --accent: #c69c6d;     /* Your brand color */
    --bg-main: #0d0604;    /* Background color */
    --text-main: #f5f0e1;  /* Text color */
}
```

---

## AI Skills

CineRitual includes AI-executable workflows in the `.skills/` folder:

- **create-cinematic-site** - Complete workflow from concept to deployment
- **generate-prompts** - AI prompts for video creation
- **process-video** - Video-to-frames conversion
- **customize-theme** - Theme customization
- **deploy-site** - One-click deployment

AI coding assistants can read these skills and execute them through natural language commands.

---

## Project Structure

```
cineritual/
├── .skills/              # AI-executable workflows
├── .agent/               # AI context and configuration
├── core/
│   ├── engine.js         # Frame-sync animation engine
│   └── ui.css            # Design system
├── templates/
│   └── bootstrap.html    # Project template
├── utils/
│   ├── frame-converter.js  # Video processing
│   └── init.js             # Project initializer
├── assets/
│   ├── hero_compressed.gif
│   └── maxara-logo.jpeg
└── README.md
```

---

## Troubleshooting

**Frames not loading?**
- Verify `frameCount` in your script matches the actual number of frames
- Check frame naming: `frame-001.jpg`, `frame-002.jpg`, etc.
- Look for 404 errors in browser console

**Scroll animation not working?**
- Ensure GSAP and ScrollTrigger CDN links are present in HTML
- Verify the canvas element has the correct class
- Check browser console for JavaScript errors

**Performance issues?**
- Reduce frame count to 40 or 30
- Compress images using TinyPNG or similar tools
- Consider using WebP format instead of JPEG

**ffmpeg not found?**
- Download from https://ffmpeg.org/download.html
- Add ffmpeg to your system PATH
- Restart your terminal after installation

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Ways to contribute:
- Report bugs via [Issues](https://github.com/tech-maxara/cineritual/issues)
- Suggest features
- Share your CineRitual sites in [Discussions](https://github.com/tech-maxara/cineritual/discussions)
- Submit pull requests

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with passion by [Maxara](https://github.com/tech-maxara)**  
For the extraordinary.

[![Star this repo](https://img.shields.io/github/stars/tech-maxara/cineritual?style=social)](https://github.com/tech-maxara/cineritual)

</div>
