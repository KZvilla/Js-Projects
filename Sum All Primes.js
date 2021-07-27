const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(isPrime(2));
  
  function sumPrimes(num) {
    let primSum = 0;
    for (let i = 1; i <= num; i++) {
      if(isPrime(i) === true) {
        primSum+=i;
      }
    }return primSum
  }
  console.log(sumPrimes(10));