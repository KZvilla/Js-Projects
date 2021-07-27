function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
  }