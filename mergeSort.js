const inputArray = [2, 8, 6, 87, 54, 62, 7, 5, 6, 7, 56, 71, 5, 2, 1, 7];

function mergeSort(array) {
  if (array.length === 1) return [array.pop()];

  const mid = Math.floor(array.length / 2);
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);

  const sortedLeftSide = mergeSort(leftSide);
  const sortedRightSide = mergeSort(rightSide);

  let sortedArray = [];
  // leftLoop: for (let i = 0; i < sortedLeftSide.length; i++) {
  //   const leftValue = sortedLeftSide[i];
  //   while (sortedRightSide.length >= 1) {
  //     const rightValue = sortedRightSide.shift();
  //     if (leftValue < rightValue) {
  //       sortedArray.push(leftValue);
  //       sortedRightSide.unshift(rightValue);
  //       continue leftLoop;
  //     }
  //     sortedArray.push(rightValue);
  //   }
  //   sortedArray = [...sortedArray, sortedLeftSide[i]];
  // }
  // if (sortedRightSide.length > 0)
  //   sortedArray = [...sortedArray, ...sortedRightSide];
  while (sortedLeftSide.length > 0 && sortedRightSide.length > 0) {
    const leftValue = sortedLeftSide.shift();
    const rightValue = sortedRightSide.shift();

    if (leftValue < rightValue) {
      sortedArray.push(leftValue);
      sortedRightSide.unshift(rightValue);
    } else {
      sortedArray.push(rightValue);
      sortedLeftSide.unshift(leftValue);
    }
  }
  if (sortedLeftSide.length > 0)
    sortedArray = [...sortedArray, ...sortedLeftSide];
  else sortedArray = [...sortedArray, ...sortedRightSide];
  return sortedArray;
}

const result = mergeSort(inputArray);
console.log(result);
