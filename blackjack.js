'use strict';

function Blackjack() {
  // @todo ace with a single value
  this.cards = [{
      face: 'ace',
      type: 'clubs',
      value: 11,
      image: "imgs/clubs-ace.svg"
    },
    {
      face: '2',
      type: 'clubs',
      value: 2,
      image: "imgs/clubs-2.svg"
    },
    {
      face: '3',
      type: 'clubs',
      value: 3,
      image: "imgs/clubs-3.svg"
    },
    {
      face: '4',
      type: 'clubs',
      value: 4,
      image: "imgs/clubs-4.svg"
    },
    {
      face: '5',
      type: 'clubs',
      value: 5,
      image: "imgs/clubs-5.svg"
    },
    {
      face: '6',
      type: 'clubs',
      value: 6,
      image: "imgs/clubs-6.svg"
    },
    {
      face: '7',
      type: 'clubs',
      value: 7,
      image: "imgs/clubs-7.svg"
    },
    {
      face: '8',
      type: 'clubs',
      value: 8,
      image: "imgs/clubs-8.svg"
    },
    {
      face: '9',
      type: 'clubs',
      value: 9,
      image: "imgs/clubs-9.svg"
    },
    {
      face: '10',
      type: 'clubs',
      value: 10,
      image: "imgs/clubs-10.svg"
    },
    {
      face: 'jack',
      type: 'clubs',
      value: 10,
      image: "imgs/clubs-jack.svg"
    },
    {
      face: 'queen',
      type: 'clubs',
      value: 10,
      image: "imgs/clubs-queen.svg"
    },
    {
      face: 'king',
      type: 'clubs',
      value: 10,
      image: "imgs/clubs-king.svg"
    },
    {
      face: 'ace',
      type: 'diamonds',
      value: 11,
      image: "imgs/diamonds-ace.svg"
    },
    {
      face: '2',
      type: 'diamonds',
      value: 2,
      image: "imgs/diamonds-2.svg"
    },
    {
      face: '3',
      type: 'diamonds',
      value: 3,
      image: "imgs/diamonds-3.svg"
    },
    {
      face: '4',
      type: 'diamonds',
      value: 4,
      image: "imgs/diamonds-4.svg"
    },
    {
      face: '5',
      type: 'diamonds',
      value: 5,
      image: "imgs/diamonds-5.svg"
    },
    {
      face: '6',
      type: 'diamonds',
      value: 6,
      image: "imgs/diamonds-6.svg"
    },
    {
      face: '7',
      type: 'diamonds',
      value: 7,
      image: "imgs/diamonds-7.svg"
    },
    {
      face: '8',
      type: 'diamonds',
      value: 8,
      image: "imgs/diamonds-8.svg"
    },
    {
      face: '9',
      type: 'diamonds',
      value: 9,
      image: "imgs/diamonds-9.svg"
    },
    {
      face: '10',
      type: 'diamonds',
      value: 10,
      image: "imgs/diamonds-10.svg"
    },
    {
      face: 'jack',
      type: 'diamonds',
      value: 10,
      image: "imgs/diamonds-jack.svg"
    },

    {
      face: 'queen',
      type: 'diamonds',
      value: 10,
      image: "imgs/diamonds-queen.svg"
    },
    {
      face: 'king',
      type: 'diamonds',
      value: 10,
      image: "imgs/diamonds-king.svg"
    },
    {
      face: 'ace',
      type: 'hearts',
      value: 11,
      image: "imgs/hearts-ace.svg"
    },
    {
      face: '2',
      type: 'hearts',
      value: 2,
      image: "imgs/hearts-2.svg"
    },
    {
      face: '3',
      type: 'hearts',
      value: 3,
      image: "imgs/hearts-3.svg"
    },
    {
      face: '4',
      type: 'hearts',
      value: 4,
      image: "imgs/hearts-4.svg"
    },
    {
      face: '5',
      type: 'hearts',
      value: 5,
      image: "imgs/hearts-5.svg"
    },
    {
      face: '6',
      type: 'hearts',
      value: 6,
      image: "imgs/hearts-6.svg"
    },
    {
      face: '7',
      type: 'hearts',
      value: 7,
      image: "imgs/hearts-7.svg"
    },
    {
      face: '8',
      type: 'hearts',
      value: 8,
      image: "imgs/hearts-8.svg"
    },
    {
      face: '9',
      type: 'hearts',
      value: 9,
      image: "imgs/hearts-9.svg"
    },
    {
      face: '10',
      type: 'hearts',
      value: 10,
      image: "imgs/hearts-10.svg"

    },
    {
      face: 'jack',
      type: 'hearts',
      value: 10,
      image: "imgs/hearts-jack.svg"
    },
    {
      face: 'queen',
      type: 'hearts',
      value: 10,
      image: "imgs/hearts-queen.svg"
    },
    {
      face: 'king',
      type: 'hearts',
      value: 10,
      image: "imgs/hearts-king.svg"
    },
    {
      face: 'ace',
      type: 'spades',
      value: 11,
      image: "imgs/spades-ace.svg"

    },
    {
      face: '2',
      type: 'spades',
      value: 2,
      image: "imgs/spades-2.svg"
    },
    {
      face: '3',
      type: 'spades',
      value: 3,
      image: "imgs/spades-3.svg"
    },
    {
      face: '4',
      type: 'spades',
      value: 4,
      image: "imgs/spades-4.svg"
    },
    {
      face: '5',
      type: 'spades',
      value: 5,
      image: "imgs/spades-5.svg"
    },
    {
      face: '6',
      type: 'spades',
      value: 6,
      image: "imgs/spades-6.svg"
    },
    {
      face: '7',
      type: 'spades',
      value: 7,
      image: "imgs/spades-7.svg"
    },
    {
      face: '8',
      type: 'spades',
      value: 8,
      image: "imgs/spades-8.svg"
    },
    {
      face: '9',
      type: 'spades',
      value: 9,
      image: "imgs/spades-9.svg"
    },
    {
      face: '10',
      type: 'spades',
      value: 10,
      image: "imgs/spades-10.svg"
    },
    {
      face: 'jack',
      type: 'spades',
      value: 10,
      image: "imgs/spades-jack.svg"
    },
    {
      face: 'queen',
      type: 'spades',
      value: 10,
      image: "imgs/spades-queen.svg"
    },
    {
      face: 'king',
      type: 'spades',
      value: 10,
      image: "imgs/spades-king.svg"
    }
  ];
  this.dealerCards = [];
  this.dealerHand = [];
  this.playerCards = [];
  this.playerHand = [];
  this.playerBet = 0;
  this.playerChips = 5000;
  this.totalDealerCount = 0;
  this.totalPlayerCount = 0;
  this.playerProfit = this.playerChips - 5000;
}

Blackjack.prototype.randomizer = function() {
  return Math.floor(Math.random() * this.cards.length);
};

Blackjack.prototype.bet = function() {
  this.playerBet += 5;
};

Blackjack.prototype.deal = function() {
  this.dealerHit();
  this.playerHit();
  this.playerHit();

};

Blackjack.prototype.calcDealerTotal = function() {

  this.totalDealerCount = this.dealerHand.reduce(function(sum, value) {
    return sum + value;
  }, 0);
};

Blackjack.prototype.calcPlayerTotal = function() {

  this.totalPlayerCount = this.playerHand.reduce(function(sum, value) {
    return sum + value;
  }, 0);
};

Blackjack.prototype.playerHit = function() {
  var random = this.randomizer();
  this.playerHand.push(this.cards[random].value);
  this.playerCards.push(this.cards[random].image);
  this.calcPlayerTotal();
};

Blackjack.prototype.double = function() {
  this.playerBet = this.playerBet * 2;
  this.playerHit();

};

Blackjack.prototype.playerStand = function() {
  this.dealerPlay();
};

Blackjack.prototype.dealerHit = function() {
  var random = this.randomizer();
  this.dealerHand.push(this.cards[random].value);
  this.dealerCards.push(this.cards[random].image);

  this.calcDealerTotal();
};

Blackjack.prototype.dealerStand = function() {
  this.checkWinner();
};

Blackjack.prototype.dealerPlay = function() {
  while (this.totalDealerCount <= 16) {
    if (this.totalDealerCount <= 16) {
      this.dealerHit();
    } else {
      this.dealerStand();
    }
  }
};

Blackjack.prototype.checkWinner = function() {
  if (this.totalDealerCount > this.totalPlayerCount || this.totalPlayerCount > 21) {
    this.playerChips -= this.playerBet;
  } else if (this.totalDealerCount < this.playerHand || this.totalDealerCount > 21) {
    this.playerChips += this.playerBet;
  } else if (this.playerHand[0] + this.playerHand[1] === 21) {
    this.playerChips += this.playerBet * 1.5;
  } //write condition on a tie
};
