import { initImageUploadForm } from './form.js';
import { renderThumbnails } from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';
import { initFilters } from './filters.js';

const initializeApp = () => {
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
