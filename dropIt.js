function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  function dropElements2(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
  }
//   dropElements=(arr, func, s = false) => arr.filter(a => {if (func(a)) s = true; return s;});