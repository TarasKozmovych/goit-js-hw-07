import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const ulGalleryRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
    const addGalleryItems = `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    ulGalleryRef.innerHTML += addGalleryItems;
});
const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: "250",
});

console.log(galleryItems);