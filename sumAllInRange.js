function sumAll(arr) {
    let count = [];
    let start = Math.min(...arr);
    let end = Math.max(...arr);
    for (let i = start;i<end+1; i++) {
      count.push(i)
    }
    return count.reduce((sum,num) => sum + num,0)
  }
  
  console.log(sumAll([1, 4]));