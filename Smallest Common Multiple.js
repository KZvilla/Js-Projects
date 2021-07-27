function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  }

  function smallestCommons2(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // GCD of two numbers
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // LCM of two numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => a * b / gcd(a, b);
    // LCM of multiple numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    return range.reduce((multiple, curr) => lcm(multiple, curr));
  }

  // Find the SCM of a range of numbers
function smallestCommons5(arr) {
    let primeFactors = {};
    const [min, max] = arr.sort((a, b) => a - b);
    for (let i = min; i <= max; i++) {
      // Factorize number in range
      let primes = getPrimeFactors(i);
      for (let j in primes) {
        // Add factor to set or update number of occurrences
        if (!primeFactors[j] || primes[j] > primeFactors[j]) {
          primeFactors[j] = primes[j]
        }
      }
    }
    // Build SCM from factorization
    let multiple = 1;
    for (let i in primeFactors) {
      multiple *= i ** primeFactors[i]
    }
    return multiple;
  }
  
  // Compute prime factors of a number
  function getPrimeFactors(num) {
    const factors = {};
    for (let prime = 2; prime <= num; prime++) {
      // Count occurances of factor
      // Note that composite values will not divide num
      while ((num % prime) === 0) {
        factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
        num /= prime;
      }
    }
    return factors;
  }

//   function smallestCommons4(arr) {
//     var min = Math.min.apply(null, arr);
//     var max = Math.max.apply(null, arr);
//     var listOfNum =[];
//     while (min<=max){
      
//         listOfNum.push(min);
//         min++;
//     }
    
//     var result = listOfNum[0];
    
//   for (var i = 1; i<listOfNum.length; i++)
//       result = findLCM(result, listOfNum[i]);
    
//     return result;
//   }
  
//   function gcd(a, b){
    
//     while (a !== b){
      
//       if(a > b)
//         a = a - b;
//       else
//         b = b - a;
      
//     }
  
//     return a; // GCD of two numbers
//   }
  
//   function findLCM(a, b){
    
//     return a * (b / gcd (a,b));
    
//   }
//   smallestCommons([1,5]);
function smallestCommons7(arr) {

    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var mltple = max;
  
    for(var i = max; i >= min; i--){
      if(mltple % i !== 0){
        mltple += max; 
        i = max;
      } 
    }
  
    return mltple;  
  }