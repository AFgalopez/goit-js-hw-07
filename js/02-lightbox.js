import { galleryItems } from "./gallery-items.js";

// Change code below this line

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
             <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
             </a>
           </li>`
    )
    .join("");
}

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
