<div align="center">

<img src="assets/maxara-logo.jpeg" alt="Maxara" width="140"/>

# ✦ CineRitual

**The World's Easiest AI-Powered 3D & Cinematic Website Builder**  
*Create a masterpiece in 5 minutes*

[![License: MIT](https://img.shields.io/badge/License-MIT-c69c6d?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/tech-maxara/cineritual?style=for-the-badge&color=c69c6d&logo=github)](https://github.com/tech-maxara/cineritual/stargazers)
[![NPM Version](https://img.shields.io/npm/v/cine-ritual?style=for-the-badge&color=c69c6d&logo=npm)](https://www.npmjs.com/package/cine-ritual)
[![Built by Maxara](https://img.shields.io/badge/Built_by-Maxara-c69c6d?style=for-the-badge)](https://github.com/tech-maxara)

![CineRitual Demo](assets/hero_compressed.gif)

</div>

---

<details>
<summary><strong>📖 Table of Contents</strong></summary>

- [About](#about)
- [Features](#features)
- [Comparison](#comparison)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Contributing](#contributing)

</details>

---

## About

**CineRitual** is a high-performance framework designed to transform cold, static websites into mesmerizing, 3D-feeling cinematic rituals. No Three.js complexity. No Spline learning curve. Just stunning results in minutes.

---

## Features

<table>
<tr>
<td width="50px" align="center">
<img src="https://cdn.simpleicons.org/filmdot/c69c6d" width="32"/>
</td>
<td>
<strong>Cinematic Frame-Sync Engine</strong><br/>
Synchronize high-resolution video frames with scroll progress for buttery-smooth 3D-feeling animations. No WebGL complexity, no Three.js learning curve.
</td>
</tr>

<tr>
<td width="50px" align="center">
<img src="https://cdn.simpleicons.org/lightning/c69c6d" width="32"/>
</td>
<td>
<strong>5-Minute Setup</strong><br/>
Go from raw video to a live, production-ready cinematic website in under 5 minutes. One command to initialize, one command to process media.
</td>
</tr>

<tr>
<td width="50px" align="center">
<img src="https://cdn.simpleicons.org/openai/c69c6d" width="32"/>
</td>
<td>
<strong>AI-Native Workflow</strong><br/>
Built-in prompt templates for Gemini, Midjourney, and Flux. Generate your brand colors, copy, and visual assets with AI—then drop them into your site.
</td>
</tr>

<tr>
<td width="50px" align="center">
<img src="https://cdn.simpleicons.org/palette/c69c6d" width="32"/>
</td>
<td>
<strong>Premium Design System</strong><br/>
Glassmorphism, storytelling typography, and curated color palettes out of the box. Every site looks like it cost $10k to build.
</td>
</tr>

<tr>
<td width="50px" align="center">
<img src="https://cdn.simpleicons.org/npm/c69c6d" width="32"/>
</td>
<td>
<strong>Zero Dependencies</strong><br/>
Vanilla JavaScript core. No React, no Vue, no build step required. Just HTML, CSS, and the magic of GSAP.
</td>
</tr>
</table>

### Perfect for
- **Luxury Brands**: Watches, fashion, automotive
- **Creative Agencies**: Portfolio sites, case studies
- **Product Launches**: SaaS, apps, physical products
- **Personal Brands**: Designers, photographers, artists

---

## Comparison

| Feature | CineRitual | Three.js | Spline | Webflow |
|---------|:----------:|:--------:|:------:|:-------:|
| **Setup Time** | 5 minutes | Hours | Hours | Days |
| **3D Complexity** | None (frame-sync) | High | Medium | N/A |
| **AI Integration** | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual |
| **Code Required** | Minimal | Expert | None | None |
| **Performance** | ⚡ Excellent | ⚠️ Variable | ✅ Good | ✅ Good |
| **Cost** | 🆓 Free | 🆓 Free | 💰 $$ | 💰💰 $$$ |
| **Customization** | ✅ Full control | ✅ Full control | ⚠️ Limited | ⚠️ Limited |

---

## Quick Start

### 1️⃣ Initialize Your Project

Run this command to create a new CineRitual project:

```bash
npx cine-ritual init my-luxury-site
```

**What happens**: Creates `my-luxury-site/` with the complete folder structure, config file, and template.

---

### 2️⃣ Add Your Video

Place your `.mp4` video file in the `/source` folder:

```bash
# Example: Copy your video
cp your-video.mp4 my-luxury-site/source/
```

---

### 3️⃣ Process Media

Convert your video into optimized frames:

```bash
npm run process-media
```

**What happens**: Uses `ffmpeg` to extract 60 high-quality frames and saves them to `/images`.

---

### 4️⃣ Customize Your Aesthetic

Edit `cineritual.json` to define your brand:

```json
{
  "projectName": "My Luxury Brand",
  "theme": "dark_chocolate",
  "engine": {
    "frameCount": 60,
    "scrollTriggerEnd": "+=150%"
  }
}
```

**What happens**: The engine automatically applies your colors, typography, and scroll behavior.

---

### 5️⃣ Launch

Open `index.html` in your browser and scroll to experience the magic! 🎬

---

## Architecture

```text
cineritual/
├── core/             # The Frame-Sync Engine (GSAP-powered)
│   ├── engine.js     # Universal scroll-scrub class
│   └── ui.css        # Premium design system
├── skills/           # AI Context & Prompt Books
│   └── skills.json   # Master prompts for Gemini/Midjourney
├── templates/        # Universal Structural Boilerplate
│   └── bootstrap.html
└── utils/            # Media Processing & Automation
    ├── frame-converter.js  # Video → Frames (ffmpeg)
    └── init.js             # Project initializer
```

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Ways to contribute**:
- 🐛 Report bugs
- 💡 Suggest features
- 🎨 Share your CineRitual sites in [Discussions](https://github.com/tech-maxara/cineritual/discussions)
- 🔧 Submit pull requests

---

<div align="center">

**Built with passion by [Maxara](https://github.com/tech-maxara)**  
*For the extraordinary.*

[![Star this repo](https://img.shields.io/github/stars/tech-maxara/cineritual?style=social)](https://github.com/tech-maxara/cineritual)

</div>
