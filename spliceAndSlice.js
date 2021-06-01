function frankenSplice(arr1, arr2, n) {
    let slicearr2 = arr2.slice();
    for (let element of arr1) {
      slicearr2.splice(n, 0, element);
      n++;
    }
    return slicearr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

  /* function frankenSplice(arr1, arr2, n) {
    let slicearr2 = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      slicearr2.splice(n, 0, arr1[i]);
      n++;
    }
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1); */