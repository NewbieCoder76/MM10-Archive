/* ========================================
   MM10 ARCHIVE — SCROLL ENGINE
======================================== */

const hero = document.querySelector(".hero");

if (hero) {

    const updateHeroScroll = () => {

        const rect = hero.getBoundingClientRect();
        const heroHeight = hero.offsetHeight;
        const viewportHeight = window.innerHeight;

        /*
         * How far we've travelled through the hero.
         *
         * 0 = beginning
         * 1 = end
         */

        const scrollDistance = heroHeight - viewportHeight;

        let progress = -rect.top / scrollDistance;

        progress = Math.max(0, Math.min(1, progress));

        /*
         * Send progress to the hero animation system.
         */

        window.dispatchEvent(
            new CustomEvent("heroScroll", {
                detail: {
                    progress
                }
            })
        );
    };


    window.addEventListener(
        "scroll",
        updateHeroScroll,
        { passive: true }
    );


    window.addEventListener(
        "resize",
        updateHeroScroll
    );


    updateHeroScroll();
}