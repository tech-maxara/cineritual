# Skill: Generate AI Prompts

Generate optimized prompts for video creation based on site type and brand.

## Input Parameters

- `siteType`: Luxury Product / Tech SaaS / Creative Portfolio / Real Estate / Restaurant / Custom
- `brandName`: User's brand name
- `theme`: dark_chocolate / night_neon / minimal_platinum

## Prompt Templates

### Luxury Product

**First Frame (Midjourney/Flux)**:
```
A {brandName} product with gold accents on a dark chocolate leather background, 
cinematic lighting, product photography, 8k, ultra-detailed, centered composition, 
negative space for text overlay --ar 16:9 --style raw
```

**Last Frame**:
```
Same {brandName} product, camera slowly zoomed in to show intricate details, 
warm golden hour lighting, dark chocolate background, cinematic depth of field 
--ar 16:9 --style raw
```

**Video (Runway/Pika)**:
```
Smooth camera push-in from first frame to last frame, 3-5 seconds, cinematic motion, 
no cuts, elegant transition, maintain lighting consistency
```

### Tech/SaaS

**First Frame**:
```
{brandName} app interface floating in space, cyan neon glowing elements, 
dark void background, futuristic, holographic, 8k --ar 16:9
```

**Last Frame**:
```
Same interface, camera rotated 15 degrees, UI elements animated, 
neon particles, depth of field --ar 16:9
```

**Video**:
```
Smooth rotation and zoom, UI elements subtly animating, particle effects, 
3-5 seconds, seamless loop
```

### Creative Portfolio

**First Frame**:
```
Abstract artistic composition representing {brandName}, gold and dark tones, 
minimalist, high contrast, cinematic --ar 16:9
```

**Last Frame**:
```
Same composition, elements rearranged, dynamic movement implied, 
artistic blur, depth --ar 16:9
```

**Video**:
```
Morphing transition between frames, artistic flow, 3-5 seconds, smooth motion
```

### Real Estate

**First Frame**:
```
Luxury {brandName} property exterior, golden hour lighting, architectural photography, 
ultra-wide angle, 8k, cinematic --ar 16:9
```

**Last Frame**:
```
Same property, camera moved closer to entrance, warm interior glow visible, 
depth of field --ar 16:9
```

**Video**:
```
Smooth dolly-in movement, golden hour to twilight transition, 
3-5 seconds, cinematic
```

### Restaurant/Food

**First Frame**:
```
{brandName} signature dish on dark surface, dramatic side lighting, 
food photography, steam visible, 8k, ultra-detailed --ar 16:9
```

**Last Frame**:
```
Same dish, camera angle shifted, focus on textures, warm ambient glow, 
shallow depth of field --ar 16:9
```

**Video**:
```
Slow camera orbit around dish, subtle steam animation, 
3-5 seconds, appetizing motion
```

## Output Format

Save to `prompts/{brandName-slug}.txt`:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 FIRST FRAME PROMPT (Midjourney/Flux):

{generated prompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 LAST FRAME PROMPT:

{generated prompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎬 VIDEO GENERATION PROMPT (Runway/Pika):

{generated prompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Prompts saved! Use these to generate your video, then save as source/video.mp4
```

## Theme Configurations

```json
{
  "dark_chocolate": {
    "accent": "gold",
    "background": "dark chocolate leather",
    "lighting": "warm golden hour"
  },
  "night_neon": {
    "accent": "cyan neon",
    "background": "deep black void",
    "lighting": "neon glow"
  },
  "minimal_platinum": {
    "accent": "platinum silver",
    "background": "pure white",
    "lighting": "soft diffused"
  }
}
```

## Usage Example

```javascript
generatePrompts({
  siteType: 'Luxury Product',
  brandName: 'Luxe Timepieces',
  theme: 'dark_chocolate'
});
```

Output: `prompts/luxe-timepieces.txt` with all 3 prompts ready to use.
