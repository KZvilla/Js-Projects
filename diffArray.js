function diffArray(arr1, arr2) {
    let sortNewArr = arr1.concat(arr2).sort();
    console.log(sortNewArr);
    return sortNewArr.filter(num => !arr1.includes(num) || !arr2.includes(num));
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));