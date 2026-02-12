# Skill: Create Cinematic Site

Complete workflow to create a cinematic website from concept to deployment.

## Prerequisites

- Node.js installed
- ffmpeg installed  
- Video file (MP4, 3-10 seconds)

## Workflow

### Step 1: Gather Requirements

Ask the user:
1. **Site Type**: Luxury Product / Tech SaaS / Creative Portfolio / Real Estate / Restaurant / Custom
2. **Brand Name**: e.g., "Luxe Timepieces"
3. **Aesthetic**: dark_chocolate / night_neon / minimal_platinum

### Step 2: Generate AI Prompts

Execute the `generate-prompts` skill with gathered info to create:
- First frame prompt (Midjourney/Flux)
- Last frame prompt
- Video generation prompt (Runway/Pika)

Save prompts to `prompts/{brand-name}.txt`

### Step 3: Wait for Video

Instruct user to:
1. Generate video using the AI prompts
2. Save as `source/video.mp4` in project directory

### Step 4: Process Video

```bash
node utils/frame-converter.js source/video.mp4 images/ 60
```

This extracts 60 optimized frames.

### Step 5: Generate Site Files

Create `index.html` with:
- Canvas container for frames
- Hero overlay with brand content
- GSAP ScrollTrigger configuration
- Theme-specific styling

### Step 6: Customize Content

Update the HTML with:
- Brand name in headline
- Tagline/eyebrow text
- Description/subtext
- Call-to-action buttons

### Step 7: Apply Theme

Based on chosen aesthetic, set CSS variables:
- `--accent`: Brand color
- `--bg-main`: Background color
- `--text-main`: Text color

### Step 8: Test Locally

Open `index.html` in browser and verify:
- ✅ Canvas loads first frame
- ✅ Scrolling advances through frames smoothly
- ✅ Text is visible and styled correctly
- ✅ No console errors

### Step 9: Deploy (Optional)

Execute `deploy-site` skill for one-click deployment.

## Success Criteria

- Site loads without errors
- Scroll animation works smoothly  
- All 60 frames display correctly
- Theme colors match brand
- Mobile responsive

## Troubleshooting

**Frames not loading?**
- Check `frameCount` matches actual frames
- Verify frame naming: `frame-001.jpg`, `frame-002.jpg`, etc.

**Scroll not working?**
- Ensure GSAP CDN links are present
- Verify `.ritual-hero` class exists

**Performance issues?**
- Reduce frame count to 40
- Compress images with TinyPNG

## Related Skills

- `generate-prompts.md`
- `process-video.md`
- `customize-theme.md`
- `deploy-site.md`
