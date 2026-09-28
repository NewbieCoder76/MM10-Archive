export function initLoader() {
  const loaderEl = document.querySelector('.loader-overlay');
  const counterEl = document.querySelector('.loader-counter');
  const barEl = document.querySelector('.loader-bar');

  if (!loaderEl || !counterEl) return;

  let progress = 0;
  const startTime = performance.now();
  const duration = 1200; // 1.2s loading animation

  function updateLoader(now) {
    const elapsed = now - startTime;
    progress = Math.min((elapsed / duration) * 100, 100);

    counterEl.textContent = Math.floor(progress).toString().padStart(3, '0');
    if (barEl) barEl.style.width = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(() => {
        loaderEl.classList.add('hidden');
      }, 200);
    }
  }

  requestAnimationFrame(updateLoader);
}
