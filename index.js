const card = document.querySelector('.card');
const modal = $('.modal')

card.addEventListener('click', (event) => {
    console.log('card clicked');
    modal.modal('toggle');
});