'use strict';

function App(container) {
  var self = this;
  self.blackjack = new Blackjack();
  self.container = container;
}









// BUILD INTRO


App.prototype.buildIntro = function() {
  var self = this;

  self.intro = document.createElement('div');
  self.intro.id = 'intro';

  var startButton = document.createElement('button');
  startButton.id = "start-button";
  startButton.innerText = "Beat the House";

  self.intro.appendChild(startButton);

  // <div id="intro">
  //   <!-- <img id="title-image" src="project-Blackjack/blackjack-title.png"> -->
  //   <ul>
  //     <h2>House Rules:</h2>
  //     <li>Blackjack pays 3 to 2</li>
  //     <li>Dealer stands at 17</li>
  //     <li>Dealer must draw to 16</li>
  //   </ul>
  //   <button id="start-button" type="button">Beat the House!</button>
  // </div>

  self.container.appendChild(self.intro);

  startButton.addEventListener('click', function() {
    self.intro.remove();
    self.buildBet();
  });
};









// BUILD BET
App.prototype.buildBet = function() {
  var self = this;


  self.bet = document.createElement('div');
  self.bet.id = 'bet';

  var betButton = document.createElement('button');
  betButton.id = "bet-button";
  betButton.innerText = "click here to bet!";
  betButton.addEventListener('click', function() {
    console.log("bet button clicked");
    self.blackjack.bet();
    self.currentBet.innerText = "current bet: " + self.blackjack.playerBet;
  });

  self.bet.appendChild(betButton);

  var dealButton = document.createElement('button');
  dealButton.id = "deal-button";
  dealButton.innerText = "click here to deal!";
  self.bet.appendChild(dealButton);

  var statsDiv = document.createElement('div');
  statsDiv.classList.add("stats");
  self.bet.appendChild(statsDiv);

  self.cash = document.createElement('h6');
  self.cash.innerText = "cash: " + self.blackjack.playerChips;
  statsDiv.appendChild(self.cash);

  self.profit = document.createElement('h6');
  self.profit.innerText = "profit: " + self.blackjack.playerProfit;
  statsDiv.appendChild(self.profit);

  self.currentBet = document.createElement('h6');
  self.currentBet.innerText = "current bet: " + self.blackjack.playerBet;
  statsDiv.appendChild(self.currentBet);


  self.container.appendChild(self.bet);

  dealButton.addEventListener('click', function() {
    self.bet.remove();
    self.buildGame();
  });
};









//// FUNCTIONS FOR BUILDING THE GAME

App.prototype.addDealerCardsToDOM = function() {
  var self = this;
  self.removePreviousDealerCards();
  self.blackjack.dealerCards.forEach(function(card) {
    var imgDom = document.createElement('img');
    imgDom.setAttribute('src', card);
    imgDom.setAttribute('class', 'dealer-cards');
    self.dealerCards.appendChild(imgDom);

  });
};

App.prototype.addPlayerCardsToDOM = function() {
  var self = this;
  //remove the previous cards
  self.removePreviousPlayerCards();
  self.blackjack.playerCards.forEach(function(card) {
    var imgDom = document.createElement('img');
    imgDom.setAttribute('src', card);
    imgDom.setAttribute('class', 'player-cards');
    self.playerCards.appendChild(imgDom);

  });
};

App.prototype.removePreviousPlayerCards = function() {
  var self = this;
  while (self.playerCards.children.length > 0) {
    self.playerCards.removeChild(self.playerCards.children[0]);
  }
};

App.prototype.removePreviousDealerCards = function() {
  var self = this;
  while (self.dealerCards.children.length > 0) {
    self.dealerCards.removeChild(self.dealerCards.children[0]);
  }
};



App.prototype.dealerBust = function() {
  var self = this;
  if (self.totalDealerCount > 21) {
    this.playerChips += this.playerBet;



  }
  self.profit.innerText = "profit: " + self.blackjack.playerProfit;
  self.cash.innerText = "cash: " + self.blackjack.playerChips;
  self.dealAndPlay.remove();
  self.dealerBustScreen();
};

App.prototype.playerBust = function() {
  var self = this;
  if (self.totalDealerCount > 21) {
    this.playerChips -= this.playerBet;
  }
  self.profit.innerText = "profit: " + self.blackjack.playerProfit;
  self.cash.innerText = "cash: " + self.blackjack.playerChips;
  self.dealAndPlay.remove();
  self.playerBustScreen();
};

App.prototype.dealerWins = function() {
  var self = this;
  if (self.totalDealerCount > self.totalPlayerCount) {
    this.playerChips -= this.playerBet;
  }
  self.profit.innerText = "profit: " + self.blackjack.playerProfit;
  self.cash.innerText = "cash: " + self.blackjack.playerChips;
  self.dealAndPlay.remove();
  self.dealerWinsScreen();
};

App.prototype.playerWins = function() {
  var self = this;
  if (self.totalDealerCount < self.totalPlayerCount) {
    this.playerChips += this.playerBet;

  }
  self.profit.innerText = "profit: " + self.blackjack.playerProfit;
  self.cash.innerText = "cash: " + self.blackjack.playerChips;
  self.dealAndPlay.remove();
  self.playerWinsScreen();
};




////BUILD GAME




App.prototype.buildGame = function() {
  var self = this;

  self.blackjack.deal();


  self.dealAndPlay = document.createElement('div');
  self.dealAndPlay.id = 'deal-and-play';

  //DEALER CARDS

  self.dealerCards = document.createElement('div');
  self.dealerCards.classList.add("dealer-cards");
  self.addDealerCardsToDOM();
  self.dealAndPlay.appendChild(self.dealerCards);

  // COUNT

  var dealerCountDiv = document.createElement('div');
  dealerCountDiv.classList.add("dealer-count");
  self.dealAndPlay.appendChild(dealerCountDiv);

  self.dealerCount = document.createElement('h6');
  self.dealerCount.innerText = "count:" + self.blackjack.totalDealerCount;
  dealerCountDiv.appendChild(self.dealerCount);

  var playerCountDiv = document.createElement('div');
  playerCountDiv.classList.add("player-count");
  self.dealAndPlay.appendChild(playerCountDiv);

  self.playerCount = document.createElement('h6');
  self.playerCount.innerText = "count:" + self.blackjack.totalPlayerCount;
  playerCountDiv.appendChild(self.playerCount);

  //   PLAYER CARDS

  self.playerCards = document.createElement('div');
  self.playerCards.classList.add("player-cards");
  self.addPlayerCardsToDOM();
  self.dealAndPlay.appendChild(self.playerCards);


  // BUTTONS

  var playerActionsDiv = document.createElement('div');
  playerActionsDiv.classList.add("player-actions");
  self.dealAndPlay.appendChild(playerActionsDiv);

  self.btnDouble = document.createElement('button');
  self.btnDouble.innerText = 'Double';
  self.btnDouble.addEventListener('click', function() {
    console.log("double button clicked");
    self.addPlayerCardsToDOM();
    self.blackjack.double();
    self.playerCount.innerText = "count:" + self.blackjack.totalPlayerCount;

  });

  self.btnHit = document.createElement('button');
  self.btnHit.innerText = 'Hit';
  self.btnHit.addEventListener('click', function() {
    console.log('hit button clicked');
    self.blackjack.playerHit();
    self.addPlayerCardsToDOM();
    self.playerCount.innerText = "count:" + self.blackjack.totalPlayerCount;
  });

  self.btnStand = document.createElement('button');
  self.btnStand.innerText = 'Stand';
  self.btnStand.addEventListener('click', function() {
    console.log('stand button clicked');
    self.blackjack.playerStand();
    self.addDealerCardsToDOM();
    self.dealerCount.innerText = "count:" + self.blackjack.totalDealerCount;

  });

  playerActionsDiv.appendChild(self.btnDouble);
  playerActionsDiv.appendChild(self.btnHit);
  playerActionsDiv.appendChild(self.btnStand);


  // STATS

  var statsDiv = document.createElement('div');
  statsDiv.classList.add("stats");
  self.dealAndPlay.appendChild(statsDiv);

  self.cash = document.createElement('h6');
  self.cash.innerText = "cash: " + self.blackjack.playerChips;
  statsDiv.appendChild(self.cash);

  self.profit = document.createElement('h6');
  self.profit.innerText = "profit: " + self.blackjack.playerProfit;
  statsDiv.appendChild(self.profit);

  self.currentBet = document.createElement('h6');
  self.currentBet.innerText = "current bet: " + self.blackjack.playerBet;
  statsDiv.appendChild(self.currentBet);




  // WINNER

  self.container.appendChild(self.dealAndPlay);
};









App.prototype.dealerBustScreen = function() {
  var self = this;
  self.dBust = document.createElement('div');
  self.dBust.id = 'dealer-bust';


  self.winner = document.createElement('div');
  self.winner.classList.add("winner");
  self.dBust.appendChild(self.winner);

  var winnerText = document.createElement('h6');
  self.winnerText.innerText = "D-BUST!!!";
  self.winner.appendChild(winnerText);

  self.restart = document.createElement('div');
  self.restart.classList.add("restart-button");
  self.dBust.appendChild(self.restart);

  var restartButton = document.createElement('button');
  restartButton.id = "restart-button";
  restartButton.innerText = "play again!";
  self.dBust.appendChild(restartButton);

  restartButton.addEventListener('click', function() {
    self.dBust.remove();
    self.buildGame();
  });

};

App.prototype.playerBustScreen = function() {
  var self = this;
  self.pBust = document.createElement('div');
  self.pBust.id = 'player-bust';


  self.winner = document.createElement('div');
  self.winner.classList.add("winner");
  self.pBust.appendChild(self.winner);

  var winnerText = document.createElement('h6');
  self.winnerText.innerText = "PLAYER BUST!!!";
  self.winner.appendChild(winnerText);

  self.restart = document.createElement('div');
  self.restart.classList.add("restart-button");
  self.pBust.appendChild(self.restart);

  var restartButton = document.createElement('button');
  restartButton.id = "restart-button";
  restartButton.innerText = "play again!";
  self.restart.appendChild(restartButton);

  restartButton.addEventListener('click', function() {
    self.pBust.remove();
    self.buildGame();
  });
};



App.prototype.playerWinsScreen = function() {
  var self = this;
  self.playerWins = document.createElement('div');
  self.playerWins.id = 'player-wins';


  self.winner = document.createElement('div');
  self.winner.classList.add("winner");
  self.playerWins.appendChild(self.winner);

  var winnerText = document.createElement('h6');
  self.winnerText.innerText = "PLAYER WINS!!!";
  self.winner.appendChild(winnerText);

  self.restart = document.createElement('div');
  self.restart.classList.add("restart-button");
  self.playerWins.appendChild(self.restart);

  var restartButton = document.createElement('button');
  restartButton.id = "restart-button";
  restartButton.innerText = "play again!";
  self.restart.appendChild(restartButton);

  restartButton.addEventListener('click', function() {
    self.playerWins.remove();
    self.buildGame();
  });
};


App.prototype.dealerWinsScreen = function() {
  var self = this;
  self.dealerWins = document.createElement('div');
  self.dealerWins.id = 'dealer-wins';


  self.winner = document.createElement('div');
  self.winner.classList.add("winner");
  self.dealerWins.appendChild(self.winner);

  var winnerText = document.createElement('h6');
  self.winnerText.innerText = "DEALER WINS!!!";
  self.winner.appendChild(winnerText);

  self.restart = document.createElement('div');
  self.restart.classList.add("restart-button");
  self.dealerWins.appendChild(self.restart);

  var restartButton = document.createElement('button');
  restartButton.id = "restart-button";
  restartButton.innerText = "play again!";
  self.restart.appendChild(restartButton);

  restartButton.addEventListener('click', function() {
    self.dealerWins.remove();
    self.buildGame();
  });
};
//
//           // D-BUST screen
//
//           // <div id="winner">
//           //   <h1>D-BUST!!!</h1>
//           // </div>
//           // <div id="restart-button">
//           //   <button type="button">play again</button>
//           // </div>
//         };
//
//
//
//
//         App.prototype.buildGameOver = function() {
//           var self = this;
//
//
//
//           var black = new Blackjack();
//
//         };
//
//
//         // DEAL N PLAY screen
//
//
//
//
//         // D-BUST screen
//
//         // <div id="winner">
//         //   <h1>D-BUST!!!</h1>
//         // </div>
//         // <div id="restart-button">
//         //   <button type="button">play again</button>
//         // </div>
//
//         // PLAYER WINS screen
//
//         // <div id="winner">
//         //   <h1>PLAYER WINS!!!</h1>
//         // </div>
//         // <div id="restart-button">
//         //   <button type="button">play again</button>
//         // </div>
//
//         // PLAYER BUST screen
//
//         // <div id="winner">
//         //   <h1>PLAYER BUST!!!</h1>
//         // </div>
//         // <div id="restart-button">
//         //   <button type="button">play again</button>
//         // </div>
//
//         // DEALER WINS screen
//
//         // <div id="winner">
//         //   <h1>DEALER WINS!!!</h1>
//         // </div>
//         // <div id="restart-button">
//         //   <button type="button">play again</button>
//         // </div>
