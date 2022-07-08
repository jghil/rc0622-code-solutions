/* exported reverse */

// for loop should have a decremental update
// save the values of the reversed indexes in a variable
// return variable

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// the loop should start at the last index and should have a decremental update
// save the values of the reversed indexes in a variable
// return the variable
