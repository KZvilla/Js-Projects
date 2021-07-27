function myReplace(str, before, after) {
    let searchPosition = str.search(before);
    let searchedWord = str.substring(searchPosition, str.length)
    if (searchedWord === searchedWord.toLowerCase() ) {
      let fixAfter = after.charAt(0).toLowerCase() + after.slice(1);
      return str.replace(before,fixAfter);
    }else {
      let fixAfter = after.charAt(0).toUpperCase() + after.slice(1);
      return str.replace(before,fixAfter);

     }
    }
    
    console.log(myReplace("His name is Tom", "Tom", "john"));

    function myReplace2(str, before, after) {
        if (/^[A-Z]/.test(before)) {
          after = after[0].toUpperCase() + after.substring(1)
        } else {
          after = after[0].toLowerCase() + after.substring(1)
        } 
        return str.replace(before, after);
      }