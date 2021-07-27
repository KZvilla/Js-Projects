function truthCheck(collection, pre) {
    return collection.every(a => a[pre]);
  }