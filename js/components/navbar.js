export function initNavbar() {
  const counterEl = document.querySelector('nav span');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;

    const scrollRatio = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
    const step = Math.floor(scrollRatio * 25) + 1;
    const formattedStep = step.toString().padStart(3, '0');

    if (counterEl) {
      counterEl.textContent = `SCROLL TO EXPLORE — ${formattedStep} / 026`;
    }
  }, { passive: true });
}
