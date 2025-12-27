import { getRandomInt } from './utils.js';
import { generateComments } from './comments.js';

let photoCache = null;

export const generatePhotoData = (count = 25) => {
  if (photoCache) {
    return photoCache;
  }

  const photos = [];

  for (let i = 1; i <= count; i++) {
    const commentsCount = getRandomInt(0, 20);

    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фотография №${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComments(commentsCount)
    });
  }

  photoCache = photos;
  return photos;
};

export const photoData = generatePhotoData();
