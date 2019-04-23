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

// compares given highest hands, returns num representing outcome for further processing
const evalWinner = (p1, p2) => {
  const pointMap = {
    'high card': 1,
    'pair': 2,
    'two pair': 3,
    'three of a kind': 4,
    'straight': 5,
    'flush': 6,
    'full house': 7,
    'four of a kind': 8,
    'straight flush': 9,
    'royal flush': 10
  }
  const p1Score = pointMap[p1], p2Score = pointMap[p2]
  // returned num indicates tie (will be evaled closer) or winner
  return  p1Score === p2Score ? 0 : p1Score > p2Score ? 1 : 2
}

// uses above funcs to determine highest hand and returns str for mapping to pts by evalWinner()
const findHighestHand = (hand) => {
  let highest;
  if (hasRoyalFlush(hand)) {
    highest = 'royal flush'
  } else if (hasStraightFlush(hand)) {
    highest = 'straight flush'
  } else if (hasFlush(hand)) {
    highest = 'flush'
  } else if (hasStraight(hand)) {
    highest = 'straight'
  } else if (largestDuplicateSet(hand)) {
    // already returns str (or false if no dups)
    highest = largestDuplicateSet(hand)
  } else {
    highest = 'high card'
  }
  return highest
}

const splitTie = (p1, p2, type) => {
  let winner;
  const p1Sorted = sortDuplicateNums(p1), p2Sorted = sortDuplicateNums(p2)
  switch (type) {
    case 1:
      winner = getHighCard(p1) > getHighCard(p2) ? 1 : 2
      break
    case 2: 
      let p1PairNum, p2PairNum
      for (num in p1Sorted) {
        if (p1Sorted[num] === 2) {
          p1PairNum = num
        }
      }
      for (num in p2Sorted) {
        if (p2Sorted[num] === 2) {
          p2PairNum = num
        }
      }
      // if still tied, compare high card
      winner = p1PairNum === p2PairNum ? splitTie(p1, p2, 1) : p1PairNum > p2PairNum ? 1 : 2
      break
    case 3:
      let p1FirstPair, p1SecondPair, p2FirstPair, p2SecondPair
      for (num in p1Sorted) {
        if (p1Sorted[num] === 2) {
          p1FirstPair = num
        }
      }
      for (num in p2Sorted) {
        if (p2Sorted[num] === 2) {
          p2FirstPair = num
        }
      }
      if (p1FirstPair !== p2FirstPair) {
        // if still tied, compare second pair
        winner = p1FirstPair > p2FirstPair ? 1 : 2
      } else {
        for (num in p1Sorted) {
          if (p1Sorted[num] === 2) {
            p1SecondPair = num
            break
          }
        }
        for (num in p2Sorted) {
            if (p2Sorted[num] === 2) {
              p2SecondPair = num
              break
            }
          }
        // if still tied, compare high card
        winner = p1SecondPair === p2SecondPair ? splitTie(p1, p2, 1) : p1SecondPair > p2SecondPair ? 1 : 2
        break
      }
    case 4: 
      let p1TripNum, p2TripNum
      for (num in p1Sorted) {
        if (p1Sorted[num] === 3) {
          p1TripNum = num
        }
      }
      for (num in p2Sorted) {
        if (p2Sorted[num] === 3) {
          p2TripNum = num
        }
      }
      winner = p1TripNum === p2TripNum ? splitTie(p1, p2, 1) : p1TripNum > p2TripNum ? 1 : 2
      break
    case 5:
      // cannot have equal straights, only need to compare high card (type = 1)
      winner = splitTie(p1, p2, 1)
      break
    case 6: 
      // same logic as case 5
      winner = splitTie(p1, p2, 1)
      break
    case 7:
      let p1FullTrip, p2FullTrip
      for (num in p1Sorted) {
        if (p1Sorted[num] === 3) {
          p1FullTrip = num
        }
      }
      for (num in p2Sorted) {
        if (p2Sorted[num] === 3) {
          p2FullTrip = num
        }
      }
      // if tie on full house trip, delegate winner determination to case 2 (pair tie, type = 2)
      winner = p1FullTrip === p2FullTrip ? splitTie(p1, p2, 2) : p1FullTrip > p2FullTrip ? 1 : 2
      break
      case 8:
        let p1FourNum, p2FourNum
        for (num in p1Sorted) {
          if (p1Sorted[num] === 4) {
            p1FourNum = num
          }
        }
        for (num in p2Sorted) {
          if (p2Sorted[num] === 4) {
            p2FourNum = num
          }
        }
        winner = p1FourNum === p2FourNum ? splitTie(p1, p2, 1) : p1FourNum > p2FourNum ? 1 : 2
        break
      case 9:
        // same logic as case 5, 6
        winner = splitTie(p1, p2, 1)
        break
      // no case 10 (royal flush): cannot happen 
  }
  // int 1 or 2 returned denoting p1, p2, respectively
  return winner
}


// console.log(evalWinner(findHighestHand(data[3].slice(0, 5)), findHighestHand(data[3].slice(5))), data[3])
// console.log(evalWinner('full house', 'full house'))
// console.log(hasRoyalFlush(['TH', 'JH', 'QH', 'KH', 'AH']))
// console.log(data[870].slice(0, 5))
// console.log(largestDuplicateSet(['6D', '6D', '5C', '5H', '5S']))