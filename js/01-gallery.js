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

galleryList.addEventListener("click", showOriginalImg);
function showOriginalImg(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    const currentImgUrl = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${currentImgUrl}" width="1280" height="auto"/>`)

    instance.show();
   
// Close img ESC
	document.onkeydown = function(evt) {
		evt = evt || document.event;
		var isEscape = false;
		if ( "key" in evt ) {
			isEscape = evt.key === "Escape";
		} 
		if ( isEscape ) {
			instance.close();
		}
	};  
}
