import { renderThumbnails } from './gallery.js';
import { debounce } from './utils.js';

const RANDOM_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;

const imgFilters = document.querySelector('.img-filters');
const defaultFilterButton = imgFilters.querySelector('#filter-default');
const randomFilterButton = imgFilters.querySelector('#filter-random');
const discussedFilterButton = imgFilters.querySelector('#filter-discussed');

let photos = [];

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const setActiveFilterButton = (activeButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  activeButton.classList.add('img-filters__button--active');
};

const compareComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const getRandomPhotos = () => [...photos].sort(() => 0.5 - Math.random()).slice(0, RANDOM_PHOTOS_COUNT);

const getDiscussedPhotos = () => [...photos].sort(compareComments);

const applyFilter = debounce((filterFn) => {
  const filteredPhotos = filterFn ? filterFn() : photos;
  renderThumbnails(filteredPhotos);
}, RERENDER_DELAY);

const onFilterClick = (evt) => {
  if (evt.target === defaultFilterButton) {
    setActiveFilterButton(defaultFilterButton);
    applyFilter();
  } else if (evt.target === randomFilterButton) {
    setActiveFilterButton(randomFilterButton);
    applyFilter(getRandomPhotos);
  } else if (evt.target === discussedFilterButton) {
    setActiveFilterButton(discussedFilterButton);
    applyFilter(getDiscussedPhotos);
  }
};

const initFilters = (loadedPhotos) => {
  photos = loadedPhotos;
  showFilters();
  imgFilters.addEventListener('click', onFilterClick);
};

export { initFilters };
