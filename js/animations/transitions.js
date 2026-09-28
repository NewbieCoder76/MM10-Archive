export function initTransitions() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
