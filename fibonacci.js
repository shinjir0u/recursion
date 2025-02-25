function fibs(n) {
  let firstNumber = 0;
  let secondNumber = 1;

  if (n === 0 || n === 1) return [firstNumber];
  let fibonacciArray = [firstNumber, secondNumber];

  for (let i = 2; i < n; i++) {
    let thirdNumber = firstNumber + secondNumber;
    fibonacciArray = [...fibonacciArray, thirdNumber];
    [firstNumber, secondNumber] = [secondNumber, thirdNumber];
  }
  return fibonacciArray;
}

function fibsRec(n) {
  if (n === 0 || n === 1) return [0];
  if (n === 2) return [0, 1];
  const previousFibonacciArray = fibsRec(n - 1);
  return [
    ...previousFibonacciArray,
    previousFibonacciArray[previousFibonacciArray.length - 1] +
      previousFibonacciArray[previousFibonacciArray.length - 2],
  ];
}

const result = fibs(20);
console.log(result);
