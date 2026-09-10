/* ========================================
   MM10 ARCHIVE — HERO ANIMATION
======================================== */

const heroTitle = document.querySelector(".hero-title");
const heroImage = document.querySelector(".hero-image");
const heroMeta = document.querySelector(".hero-meta");
const heroScroll = document.querySelector(".hero-scroll");

window.addEventListener("heroScroll", (event) => {

    const { progress } = event.detail;


    /* ====================================
       TITLE
    ==================================== */

    if (heroTitle) {

        /*
         * Slowly scale the name down.
         */

        const scale = 1 - (progress * 0.28);

        /*
         * Move the title slightly left.
         */

        const translateX = progress * -12;

        heroTitle.style.transform = `
            translateX(${translateX}vw)
            scale(${scale})
        `;
    }


    /* ====================================
       IMAGE
    ==================================== */

    if (heroImage) {

        /*
         * Image begins slightly lower
         * and rises as we scroll.
         */

        const translateY = -50 - (progress * 12);

        /*
         * Image grows slightly.
         */

        const scale = 1 + (progress * 0.12);

        heroImage.style.transform = `
            translateY(${translateY}%)
            scale(${scale})
        `;
    }


    /* ====================================
       META DATA
    ==================================== */

    if (heroMeta) {

        /*
         * Metadata starts fading once
         * the scroll sequence begins.
         */

        const opacity = 1 - (progress * 1.4);

        const translateY = progress * 30;

        heroMeta.style.opacity = Math.max(0, opacity);

        heroMeta.style.transform = `
            translateY(${translateY}px)
        `;
    }


    /* ====================================
       SCROLL INDICATOR
    ==================================== */

    if (heroScroll) {

        /*
         * The "scroll to explore" prompt
         * disappears quickly.
         */

        const opacity = 1 - (progress * 4);

        heroScroll.style.opacity = Math.max(0, opacity);
    }

});