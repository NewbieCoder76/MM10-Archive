export function initCounters() {
  const darkSection = document.querySelector('.section.dark');
  if (!darkSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const numbers = entry.target.querySelectorAll('.number');
      numbers.forEach(el => {
        if (el.dataset.done) return;
        el.dataset.done = '1';

        const target = +el.dataset.target || 0;
        const startTime = performance.now();
        const duration = 1000;

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          // Ease-out cubic animation
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * easedProgress);

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
      });
    });
  }, { threshold: 0.35 });

  observer.observe(darkSection);
}
