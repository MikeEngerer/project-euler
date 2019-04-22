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

// returns obj containing frequency of nums in hand
const sortDuplicateNums = (hand) => {
  const numNums = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0, 
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0, 
    14: 0
  }
  hand.map(e => getCardNum(e)).forEach(num => numNums[num]++)
  return numNums
}

// returns obj containing frequency of suits in hand
const sortSuits = (hand) => {
  const numSuit = {
    'C': 0,
    'H': 0,
    'S': 0,
    'D': 0
  }
  hand.map(e => getCardSuit(e)).forEach(suit => numSuit[suit]++)
  return numSuit
}

// returns arr of sorted card nums
const sortHandByNums = (hand) => {
  return hand.map(e => getCardNum(e)).sort((a, b) => a - b)
}

// returns highest card num in players hand
const getHighCard = (hand) => sortHandByNums(hand).last()

// checks for suit freq === 5, returns bool
const hasFlush = (hand) => {
  const suitFrequency = sortSuits(hand)
  let flush = false
  for (suit in suitFrequency) {
    if (suitFrequency[suit] === 5) {
      flush = true
    }
  }
  return flush
}

// checks sorted hand for 5 nums in sequence, returns bool
const hasStraight = (hand) => {
  const sortedHand = sortHandByNums(hand)
  let straight = true
  for (let i = sortedHand.length - 1; i >= 0; i--) {
    if (i === 0) {
      break
    }
    if (sortedHand[i] !== sortedHand[i - 1] + 1) {
      straight = false
      break
    }
  }
  return straight
}

// checks num frequency for pair, twoPair, trip, four of a kind, full house, returns value to be handled by ranking func
const largestDuplicateSet = (hand) => {
  const numFrequency = sortDuplicateNums(hand)
  let pair = false
  let twoPair = false
  let trip = false
  let quad = false
  for (num in numFrequency) {
    if (numFrequency[num] === 2) {
      // if already pair, has two pair
      pair === true ? twoPair = true : pair = true
    } else if (numFrequency[num] === 3) {
      trip = true
    } else if (numFrequency[num] === 4) {
      quad = true
    }
  }
  // return best
  return (
    pair && trip ? 'full house' :  
    quad ? 'four of a kind' : 
    trip ? 'three of a kind' : 
    twoPair ? 'two pair' : 
    pair ? 'pair' : false 
  )
}

// checks for straight flush, returns bool
const hasStraightFlush = (hand) => hasFlush(hand) && hasStraight(hand) ? true : false

// checks for royal flush, returns bool
const hasRoyalFlush = (hand) => hasStraightFlush(hand) && getHighCard(hand) === 14 ? true : false 

// data.forEach((e, i) => {
//   console.log(e.slice(0, 5), i)
// })

// console.log(hasRoyalFlush(['TH', 'JH', 'QH', 'KH', 'AH']))
// console.log(data[870].slice(0, 5))
// console.log(largestDuplicateSet(['6D', '6D', '5C', '5H', '5S']))