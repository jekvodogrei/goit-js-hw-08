import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const galleryHtml = galleryItems
  .map(
    galItem =>
      `<a class="gallery__item" href="${galItem.original}">
  <img class="gallery__image" src="${galItem.preview}" alt="${galItem.description}" />
</a>`,
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryHtml);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
//

console.log(galleryItems);
