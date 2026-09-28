const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export function initHeroAnimation() {
  const hero = document.querySelector('.hero');
  const title = document.querySelector('#title');
  const photo = document.querySelector('#photo');

  if (!hero || !title || !photo) return;

  return function updateHero() {
    const heroProgress = clamp(-hero.getBoundingClientRect().top / (hero.offsetHeight - window.innerHeight), 0, 1);
    
    title.style.transform = `translate(${-heroProgress * 7}vw, ${-heroProgress * 18}vh) scale(${1 - heroProgress * 0.22})`;
    photo.style.transform = `translate(${-heroProgress * 18}vw, ${heroProgress * 4}vh) scale(${1 + heroProgress * 0.16})`;
  };
}

export function initCareerScroll() {
  const career = document.querySelector('.career');
  const line = document.querySelector('#line');

  if (!career || !line) return;

  return function updateCareer() {
    const careerProgress = clamp(-career.getBoundingClientRect().top / (career.offsetHeight - window.innerHeight), 0, 1);
    const scrollDistance = Math.max(0, line.scrollWidth - window.innerWidth + 100);

    line.style.transform = `translateX(${-careerProgress * scrollDistance}px)`;
  };
}
