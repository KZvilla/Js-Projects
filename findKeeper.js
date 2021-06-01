function findElement(arr, func) {
    let arrLength= arr.length;
    for ( let i = 1; i<arrLength;i++)
      if (func(arr[i])) {
        return arr[i];
      }
    return undefined;
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0)

function findElent2(arr, func) {
    let keepers = arr.filter(num2 => num2 % 2 === 0)
    return keepers.shift();
}
console.log(findElement2([1, 2, 3, 4], num2 => num2 % 2 === 0));