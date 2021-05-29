function reverseString(str) {
  let arr = [];
  for (let i=0; i <str.length; i++) {
    arr.push(str.charAt(i));
  }
  arr.reverse();
  return arr.join(``);
}

reverseString("hello");