
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(event) {
    // Code to show modal  - Use event parameter 'e'
    console.log(event.target.src);
    let imageSrc = event.target.src;

    //Select img tag inside dialog, give it src
    modalImage.src = imageSrc.replace('sm', 'full');
    modal.showModal();
    // console.log(typeof(imageSrc));
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          