// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');

const makeGalleryItemsMarkUp = ({ original, preview, description }) => {
  return `<a class="gallery__item" href=${original}>
  <img style="display:block"
  class="gallery__image"
  src=${preview}
  alt="${description}"/>
</a>`
};

const makeGalleryMarkUp = galleryItems.map(makeGalleryItemsMarkUp).join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryMarkUp);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});