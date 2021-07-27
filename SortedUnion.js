function uniteUnique() {
    let arr = [];
    let i = 0;
    // We create an array of all arguments items's.
    while (arguments[i]) {
      arr = arr.concat(arguments[i]);
      i++;
    }
    console.log(arr);
    // Now we filter all duplicate items in the array, by checking the position.
    return arr.filter((a, b)  => {
      return arr.indexOf(a) === b;
    
    });
  }