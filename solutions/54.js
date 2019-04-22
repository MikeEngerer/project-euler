const fs = require('fs')
const path = require('path')
const { runtime } = require('../runtime')
// import data from poker.txt
const rawData = fs.readFileSync(path.join(__dirname, '../project_euler/poker.txt'), 'utf8')
// split and format data into turns: [[turn1], [turn2], ...]
const data = rawData.split('\r\n').map(e => e.split(' '))

// tired of getting the last item in an arr manually
Array.prototype.last = function() {
  return this[this.length - 1]
}

// split players hands from [p1, p2] to [[p1], [p2]]
const splitHand = (fullHand) => {
  const p1 = fullHand.slice(0, 5)
  const p2 = fullHand.slice(4, 9)
  return [p1, p2]
}
// returns given or converted num from individual card str
const getCardNum = (card) => {
  const cardMap = {
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  const num = cardMap[card[0]]
  return num ? num : Number(card[0])
}
// returns card suit from individual card str
const getCardSuit = (card) => card[1]

// returns highest card num in players hand
const getHighCard = (hand) => hand.map(e => getCardNum(e)).sort((a, b) => a - b).last()

const hasPair = (hand) => {
  hand = hand.map(e => getCardNum(e))
}

