function Blackjack() {
  this.cards = [{
      face: 2,
      type: hearts,
      value: 2
    },
    {
      face: 2,
      type: clubs,
      value: 2
    },
    {
      face: 2,
      type: diamonds,
      value: 2
    },
    {
      face: 2,
      type: spades,
      value: 2
    },
    {
      face: 3,
      type: hearts,
      value: 3
    },
    {
      face: 3,
      type: clubs,
      value: 3
    },
    {
      face: 3,
      type: diamonds,
      value: 3
    },
    {
      face: 3,
      type: spades,
      value: 3
    },
    {
      face: 4,
      type: hearts,
      value: 4
    },
    {
      face: 4,
      type: clubs,
      value: 4
    },
    {
      face: 4,
      type: diamonds,
      value: 4
    },
    {
      face: 4,
      type: spades,
      value: 4
    },
    {
      face: 5,
      type: hearts,
      value: 5
    },
    {
      face: 5,
      type: clubs,
      value: 5
    },
    {
      face: 5,
      type: diamonds,
      value: 5
    },
    {
      face: 5,
      type: spades,
      value: 5
    },
    {
      face: 6,
      type: hearts,
      value: 6
    },
    {
      face: 6,
      type: clubs,
      value: 6
    },
    {
      face: 6,
      type: diamonds,
      value: 6
    },
    {
      face: 6,
      type: spades,
      value: 6
    },
    {
      face: 7,
      type: hearts,
      value: 7
    },
    {
      face: 7,
      type: clubs,
      value: 7
    },
    {
      face: 7,
      type: diamonds,
      value: 7
    },
    {
      face: 7,
      type: spades,
      value: 7
    },
    {
      face: 8,
      type: hearts,
      value: 8
    },
    {
      face: 8,
      type: clubs,
      value: 8
    },
    {
      face: 8,
      type: diamonds,
      value: 8
    },
    {
      face: 8,
      type: spades,
      value: 8
    },
    {
      face: 9,
      type: hearts,
      value: 9
    },
    {
      face: 9,
      type: clubs,
      value: 9
    },
    {
      face: 9,
      type: diamonds,
      value: 9
    },
    {
      face: 9,
      type: spades,
      value: 9
    },
    {
      face: 10,
      type: hearts,
      value: 10
    },
    {
      face: 10,
      type: clubs,
      value: 10
    },
    {
      face: 10,
      type: diamonds,
      value: 10
    },
    {
      face: 10,
      type: spades,
      value: 10
    },

    {
      face: jack,
      type: hearts,
      value: 10
    },
    {
      face: jack,
      type: clubs,
      value: 10
    },
    {
      face: jack,
      type: diamonds,
      value: 10
    },
    {
      face: jack,
      type: spades,
      value: 10
    },

    {
      face: queen,
      type: hearts,
      value: 10
    },
    {
      face: queen,
      type: clubs,
      value: 10
    },
    {
      face: queen,
      type: diamonds,
      value: 10
    },
    {
      face: queen,
      type: spades,
      value: 10
    },

    {
      face: queen,
      type: hearts,
      value: 10
    },
    {
      face: queen,
      type: clubs,
      value: 10
    },
    {
      face: queen,
      type: diamonds,
      value: 10
    },
    {
      face: queen,
      type: spades,
      value: 10
    }
  ];
  this.dealerHand = [];
  this.dealerHandTotal = this.dealerHand[0] + this.dealerHand[1];
  this.playerHand = [];
  this.dealerHandTotal = this.playerHand[0] + this.playerHand[1];
  this.bet = 0;
  this.playerChips = 5000;
  this.playerProfit = this.playerChips - 5000;
}

Blackjack.prototype.randomizer = function() {
  Math.floor(Math.random() * this.cards.length);
};
// SHUFFLE, DEAL AND BET
Blackjack.prototype._shuffleCards = function() {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = this.cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
};

Blackjack.prototype.bet = function() {
  return this.bet + 5;
};


Blackjack.prototype.deal = function() {
  this.dealerHand.push(this.cards.value[randomizer()]);
  this.dealerHand.push(this.cards.value[randomizer()]);
  this.playerHand.push(this.cards.value[randomizer()]);
  this.playerHand.push(this.cards.value[randomizer()]);
};


Blackjack.prototype.playerHit = function() {
  this.playerHand.push(this.cards.value[randomizer()]);
};

Blackjack.prototype.double = function() {
  return this.bet * 2;
};

Blackjack.prototype.playerStand = function() {
  dealerPlay();
};

Blackjack.prototype.dealerHit = function() {
  this.dealerHand.push(this.cards.value[randomizer()]);
};


Blackjack.prototype.dealerStand = function() {
  checkWinner();
};


Blackjack.prototype.dealerPlay = function() {
  if (this.dealerHandTotal <= 16) {
    dealerHit();
  } else {
    dealerStand();
  }
};

Blackjack.prototype.checkWinner = function() {
  if (this.dealerHandTotal > this.playerHandTotal || this.playerHandTotal > 21) {
    this.playerChips -= this.bet;
  } else if (this.dealerHandTotal < this.playerHandTotal || this.dealerHandTotal > 21) {
    this.playerChips += this.bet;
  } else if (this.playerHand[0] + this.playerHand[1] === 21) {
    this.playerChips += this.bet * 1.5;
  } //write condition on a tie
};
