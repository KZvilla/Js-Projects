// solucion recursiva
function chunkArrayInGroups(arr, size) {
    var mArr = [];
    function nextChunks (arr, size, mArr){
      if (arr.length > 0 ){
        mArr.push(arr.splice(0, size));
        nextChunks(arr, size, mArr);
      }
  
    }
    nextChunks(arr, size, mArr);
    return mArr;
  }
//   Solucion rara
  function chunkArrayInGroups2(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
//  Solucion Optimizada
  function chunkArrayInGroups3(arr, size) {
    let arrCM = [];
    for (let i = 0; i < arr.length; i += size) {
        arrCM.push(arr.slice(i, i + size));
    }
    return arrCM;
  }