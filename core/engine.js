/**
 * CineRitual Core Engine
 * A universal frame-synchronization class powered by GSAP.
 */

class CineRitual {
    constructor(options = {}) {
        this.canvas = document.querySelector(options.canvasSelector || '#ritual-canvas');
        this.context = this.canvas.getContext('2d');
        this.frameCount = options.frameCount || 40;
        this.imagePath = options.imagePath || './images/frame-';
        this.imageExtension = options.imageExtension || '.jpg';
        this.scrollTriggerEnd = options.scrollTriggerEnd || '+=100%';
        this.scrubValue = options.scrubValue || 0.1;

        this.images = [];
        this.ritualState = { frame: 0 };

        this.init();
    }

    init() {
        this.preloadImages();
        this.setupResize();
        this.initAnimations();
    }

    preloadImages() {
        for (let i = 1; i <= this.frameCount; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `${this.imagePath}${paddedIndex}${this.imageExtension}`;
            this.images.push(img);
        }
    }

    render() {
        const img = this.images[Math.floor(this.ritualState.frame)];
        if (img && img.complete) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            const canvasRatio = this.canvas.width / this.canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, x, y;

            if (canvasRatio > imgRatio) {
                drawWidth = this.canvas.width;
                drawHeight = this.canvas.width / imgRatio;
                x = 0;
                y = (this.canvas.height - drawHeight) / 2;
            } else {
                drawHeight = this.canvas.height;
                drawWidth = this.canvas.height * imgRatio;
                y = 0;
                x = (this.canvas.width - drawWidth) / 2;
            }

            this.context.drawImage(img, x, y, drawWidth, drawHeight);
        }
    }

    setupResize() {
        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.render();
        };
        window.addEventListener('resize', resize);
        resize();
    }

    initAnimations() {
        gsap.to(this.ritualState, {
            frame: this.frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: ".ritual-hero",
                start: "top top",
                end: this.scrollTriggerEnd,
                scrub: this.scrubValue,
                pin: true,
                onUpdate: () => this.render()
            }
        });
    }
}

// Export for use in project-specific scripts
window.CineRitual = CineRitual;
