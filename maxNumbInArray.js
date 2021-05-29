function largestOfFour(arr) {
  let maxArr = [];
  for (let i = 0; i<arr.length; i++){
  // let singularArr = arr[i];
    let numberHigh = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (numberHigh < arr[i][j] ) {
        numberHigh = arr[i][j];
      }
      
    }
    maxArr.push(numberHigh);
  }
  return maxArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);