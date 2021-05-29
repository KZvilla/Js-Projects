function confirmEnding(str, target) {
    let targetLength = target.length;
    let strLength = str.length;
    let finalEndingStr = str.slice(strLength-targetLength);
    return (finalEndingStr == target) ?  true: false;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  //debe retornar True