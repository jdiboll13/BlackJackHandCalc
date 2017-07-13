/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let handTotal = 0

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === '1') {
      handTotal += 1
    }
    if (hand[i] === '2') {
      handTotal += 2
    }
    if (hand[i] === '3') {
      handTotal += 3
    }
    if (hand[i] === '4') {
      handTotal += 4
    }
    if (hand[i] === '5') {
      handTotal += 5
    }
    if (hand[i] === '6') {
      handTotal += 6
    }
    if (hand[i] === '7') {
      handTotal += 7
    }
    if (hand[i] === '8') {
      handTotal += 8
    }
    if (hand[i] === '9') {
      handTotal += 9
    }
    if (hand[i] === '10') {
      handTotal += 10
    }
    if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K') {
      handTotal += 10
    }
  }
  for (var j = 0; j < hand.length; j++) {
    if (hand[j] === 'A' && handTotal + 11 > 21) {
      handTotal += 1
    } else if (hand[j] === 'A' && handTotal + 11 <= 21) {
      handTotal += 11
    }
  }
  return handTotal
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
