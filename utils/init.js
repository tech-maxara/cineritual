const fs = require('fs');
const path = require('path');

/**
 * CineRitual Project Initializer
 * Usage: node init.js <project-name>
 */

const projectName = process.argv[2];

if (!projectName) {
    console.error('✦ FAILED: Please provide a project name.');
    console.log('Usage: node init.js my-new-ritual');
    process.exit(1);
}

const targetDir = path.join(process.cwd(), projectName);

try {
    // 1. Create structure
    fs.mkdirSync(path.join(targetDir, 'images'), { recursive: true });
    fs.mkdirSync(path.join(targetDir, 'source'), { recursive: true });

    // 2. Copy Template
    const templatePath = path.join(__dirname, '../templates/bootstrap.html');
    fs.copyFileSync(templatePath, path.join(targetDir, 'index.html'));

    // 3. Create local .gitignore for the new project
    const gitignoreContent = "source/\nimages/\n*.mp4\n*.mov\nnode_modules/";
    fs.writeFileSync(path.join(targetDir, '.gitignore'), gitignoreContent);

    console.log(`\n✦ RITUAL AWAKENED: Project '${projectName}' initialized.`);
    console.log(`\nNext Steps:`);
    console.log(`1. Place your video in ${projectName}/source/`);
    console.log(`2. Run: node utils/frame-converter.js ${projectName}/source/your-video.mp4 ${projectName}/images/`);
    console.log(`3. Open ${projectName}/index.html in your browser.`);
} catch (error) {
    console.error('✦ FAILED: Could not initialize project.');
    console.error(error.message);
}
