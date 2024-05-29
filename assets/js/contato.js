document.addEventListener('DOMContentLoaded', function () {
  const cardList = document.getElementById('cardList');
  const userCardList = document.getElementById('userCardList');
  const buyButton = document.getElementById('buyButton btn animate-btn');
  const sellButton = document.getElementById('sellButton btn animate-btn');
  const tradeButton = document.getElementById('tradeButton btn animate-btn');

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
