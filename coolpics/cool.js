const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(event) {
    console.log(event.target.src);
    let imageSrc = event.target.src;
    modalImage.src = imageSrc.replace('sm', 'full');
    
    let imageAlt = event.target.alt;
    modalImage.alt = `Full Size ${event.target.alt}`;
    
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

let menuButton = document.getElementsByClassName("menu-btn")[0];

menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
}
