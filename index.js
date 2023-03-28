const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description:
    'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description:
    'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description:
    'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

///

const firstProductCard = document.querySelector('#product1');
firstProductCard.classList.add('border-primary');

const secondProductCard = document.querySelector('#product2');
const secondProductCardButton = secondProductCard.querySelector('button');
secondProductCardButton.classList.remove('btn-primary'); // zde chyba

const thirdProductCard = document.querySelector('#product3');
const thirdCardTitle = thirdProductCard.querySelector('.card-title');
thirdCardTitle.classList.toggle('text-center'); // zde chyba

firstProductCard.innerHTML = `
  <img class="card-img-top" src=${product1.image} alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
  `; // toto jediné celé fungovalo

secondProductCard.innerHTML = `
  <img class="card-img-top" src=${product2.image} alt="Slepičkabelka>
  <div class="card-body">
    <h2 class="card-title">${product2.name}</h2>
    <p class="card-text">${product2.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
  `;

thirdProductCard.innerHTML = `
  <img class="card-img-top" src=${product3.image} alt="Anatoplavky">
  <div class="card-body">
    <h2 class="card-title">${product3.name}</h2>
    <p class="card-text">${product3.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
  `;
