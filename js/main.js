import { initImageUploadForm } from './form.js';
import { renderThumbnails } from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';
import { initFilters } from './filters.js';

const initializeApp = () => {
  if (!window.kekstagramApp || !window.kekstagramApp.librariesLoaded || typeof window.Pristine !== 'function') {
    setTimeout(initializeApp, 100);
    return;
  }

  getData(
    (photos) => {
      renderThumbnails(photos);
      initFilters(photos);
    },
    () => {
      showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
    }
  );

  initImageUploadForm();
};

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});
