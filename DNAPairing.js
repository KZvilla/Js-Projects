function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];
  
    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case "A":
          paired.push(["A", "T"]);
          break;
        case "T":
          paired.push(["T", "A"]);
          break;
        case "C":
          paired.push(["C", "G"]);
          break;
        case "G":
          paired.push(["G", "C"]);
          break;
      }
    };
  
    // Loops through the input and pair.
    for (let value of str) {
      search(value);
    }
  
    return paired;
  }
  
  // test here
  pairElement("GCG");

  function pairElement2(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  
  //test here
  pairElement("GCG");

  function pairElement3(string) {
    function calculatePair(initial) {
      if (initial === "A") {
        return "T";
      }else if (initial === "T") {
        return "A";
      }else if (initial === "G") {
        return "C";
      }else if (initial === "C") {
        return "G";
      }
    }
    return string.split("").map(initial => {
      return [initial, calculatePair(initial)];
    
    })
  }

console.log(pairElement3("GCG"));

