import { generatePhotos } from './data.js';

const photos = generatePhotos();

export { photos };


import { pictures } from './mock-data.js';
import { renderThumbnails } from './thumbnails.js';
import './big-picture.js';

renderThumbnails(pictures);

import { initForm } from './modules/form.js';
import { initValidation } from './modules/validation.js';
import { initScaleEffect, destroyScaleEffect } from './modules/scale-effect.js';

import '../vendor/nouislider/nouislider.js';

document.addEventListener('DOMContentLoaded', () => {
  initForm({ initValidation }, { initScaleEffect, destroyScaleEffect });
});
