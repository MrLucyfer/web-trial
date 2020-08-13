const modal = $('.modal')
const endPage = document.querySelector('.endPage');
let index = 0;

let card;

document.addEventListener('DOMContentLoaded', (event) => {
    for(let i = 1; i <= 12; i++) {
        createCard(i);
        index++;
    }

    card = $('.card');
});

document.addEventListener('scroll', (e) => {
    const rect = endPage.getBoundingClientRect();
    if (Math.round(rect.top) <= window.innerHeight) {
      for(let i = 0; i < 6; i++) {
          createCard(index);
          index++;
      }
    }
})

if(card) {
    card.click(() => console.log('hello'))
}


function createCard(id) {
    const row = document.querySelector('.row');

    const card = document.createElement('div');
    card.className = 'card';
    card.id = `${id}`;
    card.style = 'width: 18rem';

    const card_img = document.createElement('img');
    card_img.className = 'card-img-top';
    card_img.src = 'http://www.cmdperezfrias.com/blog/wp-content/uploads/2018/08/CMDPF-1200x630.jpg';

    const card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_body.id = `${id}`;

    const h2 = document.createElement('h2');
    h2.innerText = `Entreno ${id}`;

    card_body.appendChild(h2);

    card.appendChild(card_img);
    card.appendChild(card_body);

    row.appendChild(card);
}