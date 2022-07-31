import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
    const addGalleryItems = `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
    galleryRef.innerHTML += addGalleryItems;
});

galleryRef.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.className !== "gallery__image") {
        return;
    }
    else {
        const originalImages = event.target.dataset.source;
        const instance = createBigImages(originalImages);
        instance.show();
    }
});

function createBigImages(src) {
    const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">`,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", escapeClick);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", escapeClick);
            },
        });
    function escapeClick(event) {
        if (event.code === "Escape") {
            instance.close();
        }
        else {
            return;
        }
    }
    return instance;
};

