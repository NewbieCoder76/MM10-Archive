import { initHeroAnimation, initCareerScroll } from './hero.js';

export function initParallaxLoop() {
  const updateHero = initHeroAnimation();
  const updateCareer = initCareerScroll();

  function render() {
    if (updateHero) updateHero();
    if (updateCareer) updateCareer();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
