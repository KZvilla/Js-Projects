// function whatIsInAName(collection, source) {
//     // Only change code below this line
//     let property = Object.keys(source);
//     console.log(property);
//     return collection.filter(function(obj) {
//       return property
//         .map(function(key) {
//           return obj.hasOwnProperty(key) && obj[key] === source[key];
//         })
//         .reduce(function(a, b) {
//           return a && b;
//         });
//     });
//     // Only change code above this line
//   }
  
  function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source);
    return collection.filter(function(obj) {
      return srcKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }