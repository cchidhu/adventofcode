const calcAngleDegrees = (x, y) => {
  return Math.atan2(y, x) * 180 / Math.PI;
}

const formatInput = (inputString) => {
  let twoDimensionalArray = [];
  inputString.split(',').forEach((row, index) => {
    let column = [];
    row.split('').forEach(element => {
      column.push(element)
    })
    twoDimensionalArray.push(column)
  })
  return twoDimensionalArray;
}
const input =
  ".#..#,.....,#####,....#,...##"

console.log(formatInput(input));

