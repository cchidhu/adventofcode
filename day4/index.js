// Puzzle input is 136760-595730

let counter = 136760
let numberOfPossiblePwd = 0;

do {
  // convert integer to string and split into array
  const strArray = counter.toString().split('');
  if (strArray[0] <= strArray[1] && strArray[1] <= strArray[2] && strArray[2] <= strArray[3] && strArray[3] <= strArray[4] && strArray[4] <= strArray[5]) {
    if (strArray[0] === strArray[1] || strArray[1] === strArray[2] || strArray[2] === strArray[3] || strArray[3] === strArray[4] || strArray[4] === strArray[5]) {
      console.log(counter)
      //create map from array
      let charMap = new Map();
      strArray.forEach(char => {
        charMap.set(char, (charMap.get(char) || 0) + 1)
      })
      for (const value of charMap.values()) {
        if (value === 2) {
          console.log(charMap)
          numberOfPossiblePwd++;
          break;
        }
      }
    }
  }
  counter++;

} while (counter < 595730)

console.log(`Number of possible password - ${numberOfPossiblePwd}`);