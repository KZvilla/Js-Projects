function getIndexToIns(arr, num) {
    let minMax = (a, b) => a - b;
    arr.sort(minMax);
    for (let element of arr) {
      if (element >= num)
        return arr.indexOf(element);
    }
    return arr.length;
  }

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
    function getIndexToIns3(arr, num) {
    return arr.filter(val => num > val).length;
  }

  function getIndexToIns4(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
  }
  
  getIndexToIns([40, 60], 500);
