function findLongestWordLength(str) {
  let choseOne = "";
  let arr = str.split(" ");
  for ( let i = 0; i <arr.length; i++) {
    let singleWord = arr[i];
    if ( singleWord.length > choseOne.length) {
      choseOne = singleWord;
    }
  }
  return choseOne.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");