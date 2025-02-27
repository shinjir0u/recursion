const inputArray = [2, 8, 6, 87, 54, 62, 7, 5, 6, 7, 56, 71, 5, 2, 1, 7];

function mergeSort(array) {
  if (array.length === 1) return [array.pop()];

  const mid = Math.floor(array.length / 2);
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);

  const sortedLeftSide = mergeSort(leftSide);
  const sortedRightSide = mergeSort(rightSide);

  let sortedArray = [];
  while (sortedLeftSide.length > 0 && sortedRightSide.length > 0) {
    const leftValue = sortedLeftSide[0];
    const rightValue = sortedRightSide[0];

    if (leftValue < rightValue) sortedArray.push(sortedLeftSide.shift());
    else sortedArry.push(sortedRightSide.shift());
  }
  return [...sortedArray, ...sortedLeftSide, ...sortedRightSide];
}

const result = mergeSort(inputArray);
console.log(result);
