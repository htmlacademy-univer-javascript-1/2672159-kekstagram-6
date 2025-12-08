import { getData } from './api.js';

const picturesList = document.querySelector('.pictures__list');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const filtersContainer = document.querySelector('.img-filters');

const createPicture = (data) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureComments = picture.querySelector('.picture__comments');
  const pictureLikes = picture.querySelector('.picture__likes');

  picture.href = `#${data.id}`;
  picture.dataset.id = data.id;
  pictureImg.src = data.url;
  pictureImg.alt = data.description;
  pictureComments.textContent = data.comments.length;
  pictureLikes.textContent = data.likes;

  return picture;
};

const renderPictures = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.appendChild(createPicture(photo));
  });
  picturesList.appendChild(fragment);
};

const clearPictures = () => {
  const pictures = picturesList.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const showFilters = () => {
  filtersContainer.classList.remove('img-filters--inactive');
};

const initPhotos = async () => {
  try {
    const photos = await getData();
    renderPictures(photos);
    showFilters();
  } catch (error) {
    const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
    const dataError = dataErrorTemplate.cloneNode(true);
    document.body.appendChild(dataError);

    const errorButton = dataError.querySelector('.data-error__button');
    errorButton.addEventListener('click', () => {
      window.location.reload();
    });
  }
};

export { initPhotos, clearPictures, renderPictures };
