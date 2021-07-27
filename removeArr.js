function destroyer(arr,...remove) {
    console.log(remove);
    return arr.filter(a => !remove.includes(a));;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));