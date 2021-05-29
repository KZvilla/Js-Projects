  function repeatStringNumTimes(str, num) {
    if (num<=0) {
        return "";
    }
    let firstText = "";
    for (let i = 0; i < num; i++) {
        firstText += str;
    }
    return firstText;
  }
  
  console.log(repeatStringNumTimes("abc", 3));