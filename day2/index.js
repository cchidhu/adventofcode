console.log('Advent of Code - Day 2');
console.log('1202 Program Alarm');


/*
Opcode 1 adds together numbers read from two positions and stores the
result in a third position.
Opcode 2 works exactly like opcode 1, except it multiplies the two
inputs instead of adding them.
99 means that the program is finished and should immediately halt
*/


const splitInputsToArrayAndConvertToInt = (inputString) => {
  return inputString.split(',').map(element => {
    return parseInt(element)
  });
};

const realIntCodeComputer = (intInputArray, noun, verb) => {
  //To do this, before running the program, replace position 1 with the value 12 and replace position 2 with the value 2.
  intInputArray[1] = noun; intInputArray[2] = verb;
  console.log(`Size of the input - ${intInputArray.length}`)
  let isHalted = false;
  for (let i = 0; i < intInputArray.length; i = i + 4) {
    if (isHalted) break;
    //console.log(`Operation Code - ${intInputArray[i]}`)

    switch (intInputArray[i]) {
      case 99: //halt the program
        console.log('Program halted!')
        isHalted = true;
        break;
      case 1: // add operation
        //console.log(`Add Operation - first Operand ${intInputArray[intInputArray[i + 1]]} & Second Operand ${intInputArray[intInputArray[i + 2]]} and results goes to position ${intInputArray[i + 3]}`)
        intInputArray[intInputArray[i + 3]] = intInputArray[intInputArray[i + 1]] + intInputArray[intInputArray[i + 2]];
        break;
      case 2: // multiple operation
        //console.log(`Multi Operation - first Operand ${intInputArray[intInputArray[i + 1]]} & Second Operand ${intInputArray[intInputArray[i + 2]]} and results goes to position ${intInputArray[i + 3]}`)
        intInputArray[intInputArray[i + 3]] = intInputArray[intInputArray[i + 1]] * intInputArray[intInputArray[i + 2]];
        break;
    }
  }

  console.log(`Final output - ${intInputArray.join(',')}`);
  return intInputArray[0];
}
//split the input into array
const inputs = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,9,23,1,23,5,27,2,6,27,31,1,31,5,35,1,35,5,39,2,39,6,43,2,43,10,47,1,47,6,51,1,51,6,55,2,55,6,59,1,10,59,63,1,5,63,67,2,10,67,71,1,6,71,75,1,5,75,79,1,10,79,83,2,83,10,87,1,87,9,91,1,91,10,95,2,6,95,99,1,5,99,103,1,103,13,107,1,107,10,111,2,9,111,115,1,115,6,119,2,13,119,123,1,123,6,127,1,5,127,131,2,6,131,135,2,6,135,139,1,139,5,143,1,143,10,147,1,147,2,151,1,151,13,0,99,2,0,14,0";
let inputArray = splitInputsToArrayAndConvertToInt(inputs);
let foundTheValues = false;
foundTheValues: for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const refreshedMemory = [...inputArray];
    if (realIntCodeComputer(refreshedMemory, noun, verb) === 19690720) {
      console.log(`noun - ${noun} && verb - ${verb} & result to submit = ${100 * noun + verb}`);
      break foundTheValues;
    }
  }
}