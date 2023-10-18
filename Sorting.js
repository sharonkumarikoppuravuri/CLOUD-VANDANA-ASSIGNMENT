function sortDescending(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }
  
  // Example usage
  let numbers = [5, 2, 8, 1, 9];
  let sortedNumbers = sortDescending(numbers);
  console.log(sortedNumbers);
  