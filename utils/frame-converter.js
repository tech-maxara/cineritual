const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * CineRitual Frame Converter
 * Usage: node frame-converter.js <video-path> [output-dir] [frame-count]
 */

const videoPath = process.argv[2];
const outputDir = process.argv[3] || './images';
const frameCount = parseInt(process.argv[4]) || 60;

if (!videoPath) {
    console.error('Error: Please provide a video path.');
    console.log('Usage: node frame-converter.js <video-path> [output-dir] [frame-count]');
    process.exit(1);
}

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`✦ Ritual Initializing: Slicing ${videoPath} into ${frameCount} frames...`);

try {
    // 1. Get video duration
    const duration = parseFloat(execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${videoPath}"`).toString().trim());

    // 2. Calculate FPS to get exactly [frameCount] frames
    const fps = frameCount / duration;

    // 3. Run FFMPEG extraction
    // -vf fps=[fps]: Extract frames at calculated rate
    // -q:v 2: High quality JPEGs
    const ffmpegCmd = `ffmpeg -i "${videoPath}" -vf "fps=${fps},scale=1920:-1" -q:v 2 -frames:v ${frameCount} "${path.join(outputDir, 'frame-%03d.jpg')}"`;

    console.log(`✦ Executing Alchemical Command: ${ffmpegCmd}`);
    execSync(ffmpegCmd);

    console.log(`\n✦ SUCCESS: Your Ritual is ready. ${frameCount} frames extracted to ${outputDir}.`);
} catch (error) {
    console.error('✦ FAILED: Ensure you have ffmpeg installed on your system.');
    console.error(error.message);
}
