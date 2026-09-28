export function initLightbox() {
  const items = document.querySelectorAll('.archive div');
  if (!items.length) return;

  // Build lightbox DOM overlay dynamically
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(17,17,17,0.95); z-index: 1000; display: none;
    align-items: center; justify-content: center; cursor: pointer;
  `;

  const img = document.createElement('img');
  img.style.cssText = `max-width: 90vw; max-height: 85vh; border: 2px solid #eeeae0; object-fit: contain;`;

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  items.forEach(item => {
    item.addEventListener('click', () => {
      const targetImg = item.querySelector('img');
      if (targetImg) {
        img.src = targetImg.src;
        overlay.style.display = 'flex';
      }
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}
