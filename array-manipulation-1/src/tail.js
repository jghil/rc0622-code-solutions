/* exported tail */

// check all of the indexes
// take out the value of the first index
// create a new array containing all elements of array after the first
// return new array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// in a for loop, make the index start at 1
// save the value of the array starting at first index into a variable
// return variable
