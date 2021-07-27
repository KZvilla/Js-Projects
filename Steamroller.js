function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(elem));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(elem);
      }
    }
    return flattenedArray;
  }

  function steamrollArray2(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }

  function steamrollArray(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray(item, flatArr);
      else flatArr.push(item);
    });
    return flatArr;
  }