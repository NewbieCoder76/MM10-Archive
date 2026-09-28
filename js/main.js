import { playerData } from './data/player.js';
import { initLoader } from './components/loader.js';
import { initCounters } from './components/counters.js';
import { initNavbar } from './components/navbar.js';
import { initLightbox } from './components/lightbox.js';
import { initParallaxLoop } from './animations/parallax.js';
import { initTransitions } from './animations/transitions.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize loader
  initLoader();

  // Initialize navigation & counters
  initNavbar();
  initCounters();

  // Initialize lightbox interactive media
  initLightbox();

  // Initialize smooth parallax/scroll engine
  initParallaxLoop();

  // Initialize transitions
  initTransitions();
});
