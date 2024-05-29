$('.slide-principal').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000
});

let ul = document.querySelector('nav .ul');

function openMenu() {
	ul.classList.add('open');
}

function closeMenu() {
	ul.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function () {
  const cardList = document.getElementById('cardList');
  const userCardList = document.getElementById('userCardList');
  const buyButton = document.getElementById('buyButton');
  const sellButton = document.getElementById('sellButton');
  const tradeButton = document.getElementById('tradeButton');

  // Exemplo de lista de jogos disponíveis
  const gamesForSale = [
      'Magic: The Gathering',
      'Yu-Gi-Oh!',
      'Pokémon TCG',
      'KeyForge',
      'Legend of the Five Rings'
  ];

  // Exibir jogos disponíveis na lista
  gamesForSale.forEach(game => {
      const li = document.createElement('li');
      li.innerText = game;
      cardList.appendChild(li);
  });

  // Ação de compra
  buyButton.addEventListener('click', function () {
      const selectedGame = cardList.querySelector('li.selected');
      if (selectedGame) {
          const gameName = selectedGame.innerText;
          alert(`You have bought ${gameName}.`);
          selectedGame.remove();
      }
  });

  // Ação de venda
  sellButton.addEventListener('click', function () {
      const userGame = prompt('Enter the name of the game you want to sell:');
      if (userGame) {
          const li = document.createElement('li');
          li.innerText = userGame;
          userCardList.appendChild(li);
      }
  });

  // Ação de troca
  tradeButton.addEventListener('click', function () {
      const selectedGame = cardList.querySelector('li.selected');
      if (selectedGame) {
          const gameName = selectedGame.innerText;
          const li = document.createElement('li');
          li.innerText = gameName;
          userCardList.appendChild(li);
          selectedGame.remove();
      }
  });

  // Marcar jogos da lista
  cardList.addEventListener('click', function (event) {
      const selectedGame = cardList.querySelector('li.selected');
      if (selectedGame) {
          selectedGame.classList.remove('selected');
      }
      if (event.target.tagName === 'LI') {
          event.target.classList.add('selected');
      }
  });
});

// Suponha que temos uma API que retorna uma lista de cartas
    const api_url = 'https://github.com/MagicTheGathering/mtg-sdk-javascript';

    async function getCards() {
      const response = await fetch(api_url);
      const data = await response.json();
      const cardList = document.getElementById('cardList');
      
      data.forEach(card => {
        let listItem = document.createElement('li');
        listItem.textContent = card.name;
        cardList.appendChild(listItem);
      });
    }

    getCards();
