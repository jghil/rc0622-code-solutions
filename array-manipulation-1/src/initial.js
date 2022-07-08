/* exported initial */

// make the for loop condition stop at last index
// save the values of the indexes without the last index into a variable
// return the variable

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// for loop condition statement stops before last index
// save the values of the indexes into a variable
// return the variable
