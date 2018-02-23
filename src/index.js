class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = function (a, b) {
      if (a > b) return 1;
      if ( a < b) return -1;
      if ( a == b) return 0;
    };
  }

  add(element) {
    return this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var idndexArray = indices.sort(function (a, b) {
      return a - b;
  });

    if (idndexArray.length <= 1) return this.arr;

    var n = idndexArray[idndexArray.length - 1];
    
    for (var i = idndexArray[0]; i < n; i++) {
        var min = i;

        for (var j = i + 1; j <= n; j++) {
          if ( this.compareFunction(this.arr[j], this.arr[min] ) < 0) 
          // if ( this.arr[j] < this.arr[min] ) 
               min = j;
        }

    var temp = this.arr[min]; 
    this.arr[min] = this.arr[i];
    this.arr[i] = temp;
    }

   // return this.arr;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;