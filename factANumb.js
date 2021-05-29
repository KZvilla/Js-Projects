function factorialize(num) {
    let fact = 1;
    for (let i = num; i >=1 ; i--) {
      fact = fact * i;
    }
    console.log(fact)
      return fact;
    }
    factorialize(5);