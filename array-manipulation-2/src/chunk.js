/* exported chunk */

// create an empty array to store sub-arrays
// if equally divisible without a remainder, the elements from the array will divide themselves equally into arrays
// if there are remainders, the remaining elements are gathered into a final sub-array

function chunk(array, size) {
  var separatedArray = [];
  for (var i = 0; i < array.length; i++) {
    var remainder = separatedArray[separatedArray.length - 1];
    if (typeof remainder === 'undefined' || remainder.length === size) {
      separatedArray.push([array[i]]);
    } else {
      remainder.push(array[i]);
    }
  }
  return separatedArray;
}
