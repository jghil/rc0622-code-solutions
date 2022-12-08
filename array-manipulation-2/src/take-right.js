/* exported takeRight */

// identifies the positive integer in the count argument
// takes the array and takes the last count elements of the array
// pushes the count elements in a new array
// return new array

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    return array.slice(-count);
  }
}

// if the count is larger than the length of the array, return the array
// else, extract everything after the count argument from the right of the array
