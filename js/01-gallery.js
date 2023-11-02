import { galleryItems } from "./gallery-items.js";

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<a class="gallery__item" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
         </a>`
    )
    .join("");
}

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener("click", onGalleryItemClick);

document.addEventListener("keydown", handleKeyPress);

let instance = null;

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImageURL = event.target.parentElement.href;

  instance = basicLightbox.create(
    `<img src="${largeImageURL}" width="800" height="600">`
  );

  instance.show();

  instance.element().addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}

function handleKeyPress(event) {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
}
