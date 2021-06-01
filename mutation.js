function mutation(arr) {
    let firstPartArr = arr[0].toLowerCase().split("");
    let secondPartArr = arr[1].toLowerCase().split("");
    for (let i = 0; i<secondPartArr.length; i++) {
      console.log(firstPartArr.indexOf(secondPartArr[i]));
      if ( firstPartArr.indexOf(secondPartArr[i]) < 0) {
        return false;
      }
    }
    return true
  }

  function mutation2(arr) {
    let firstPartArr = arr[0].toLowerCase().split("");
    let secondPartArr = arr[1].toLowerCase().split("");
    for (let element of secondPartArr) {
      console.log(firstPartArr.indexOf(element));
      if ( firstPartArr.indexOf(element) < 0) {
        return false;
      }
    }
    return true
  }