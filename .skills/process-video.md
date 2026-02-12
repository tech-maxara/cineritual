# Skill: Process Video

Convert video file to optimized frame sequence for cinematic scroll animation.

## Prerequisites

- ffmpeg installed
- Video file (MP4 format)
- 3-10 seconds duration recommended

## Usage

```bash
node utils/frame-converter.js <video-path> <output-dir> [frame-count]
```

## Parameters

- `video-path`: Path to your MP4 video file
- `output-dir`: Directory to save frames (usually `images/`)
- `frame-count`: Number of frames to extract (default: 60)

## Example

```bash
node utils/frame-converter.js source/video.mp4 images/ 60
```

## What Happens

1. **Analyzes video**: Gets duration and calculates optimal FPS
2. **Extracts frames**: Uses ffmpeg to extract exactly N frames
3. **Optimizes**: Scales to 1920px width, high-quality JPEG
4. **Names**: Saves as `frame-001.jpg`, `frame-002.jpg`, etc.

## Output

```
✦ Ritual Initializing: Slicing video.mp4 into 60 frames...
✦ Executing Alchemical Command: ffmpeg -i ...
✦ SUCCESS: Your Ritual is ready. 60 frames extracted to images/.
```

## Frame Count Guidelines

- **30 frames**: Fast scroll, lower file size
- **60 frames**: Smooth scroll, balanced (recommended)
- **90 frames**: Ultra-smooth, larger file size

## Troubleshooting

**ffmpeg not found?**
- Install ffmpeg: https://ffmpeg.org/download.html
- Add to PATH

**Video too long?**
- Trim to 3-10 seconds first
- Use: `ffmpeg -i input.mp4 -ss 00:00:00 -t 00:00:05 output.mp4`

**Quality issues?**
- Increase source video resolution
- Use `-q:v 2` flag for max quality

## Related Skills

- `create-cinematic-site.md`
- `customize-theme.md`
