console.log('--- Day 5: Sunny with a Chance of Asteroids---');

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

const getOperandByMode = (inputArray, opCodePosition, operandSize, returnValueOfOperand) => {
  const splitOpCode = inputArray[opCodePosition].toString().split('');
  let returnValue;
  console.log(splitOpCode)
  console.log(splitOpCode.length);
  console.log(splitOpCode[splitOpCode.length - 2 - returnValueOfOperand])
  if ((splitOpCode[splitOpCode.length - 2 - returnValueOfOperand] || '0') === '1') {
    returnValue = inputArray[opCodePosition + returnValueOfOperand]
  } else {
    returnValue = inputArray[inputArray[opCodePosition + returnValueOfOperand]]
  }
  console.log(`Value to return - ${returnValue}`)
}

const realIntCodeComputer = (intInputArray) => {
  //To do this, before running the program, replace position 1 with the value 12 and replace position 2 with the value 2.
  console.log(`Size of the input - ${intInputArray.length}`)
  let isHalted = false;
  let operandSize = 0;
  for (let i = 0; i < intInputArray.length; i = i + operandSize + 1) {
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
        operandSize = 3;
        break;
      case 2: // multiple operation
        //console.log(`Multi Operation - first Operand ${intInputArray[intInputArray[i + 1]]} & Second Operand ${intInputArray[intInputArray[i + 2]]} and results goes to position ${intInputArray[i + 3]}`)
        intInputArray[intInputArray[i + 3]] = intInputArray[intInputArray[i + 1]] * intInputArray[intInputArray[i + 2]];
        operandSize = 3;
        break;
    }
  }

  console.log(`Final output - ${intInputArray.join(',')}`);
  return intInputArray.join(',');
}
//split the input into array
const inputs = "1002,4,3,4,33";
let inputArray = splitInputsToArrayAndConvertToInt(inputs);
//const refreshedMemory = [...inputArray];
//realIntCodeComputer(refreshedMemory)

getOperandByMode(inputArray, 0, 3, 1);