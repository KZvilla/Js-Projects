function bouncer(arr) {
    let finalArr = [];
    for (let element of arr) {
      if (!element === false) {finalArr.push(element);}
    }
    return finalArr;
  }
  
bouncer([7, "ate", "", false, 9]);
// Otro ejemplo
function bouncer2 (arr) {return arr.filter(Boolean);}
  