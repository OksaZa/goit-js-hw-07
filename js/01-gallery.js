import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`).join("");

galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.onclick = (evt) => {
 if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault();
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`, {
        onShow: () => {
            document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModal);
        },
    });
    instance.show();
    
        function closeModal(evt) {
       if (evt.code !== 'Escape') {
           return;
       } 
            instance.close();
    }

}
