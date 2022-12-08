/* exported drop */
// count the indexes
// for loop which initialization starts at the count value
// push the new values into a new array and return it

function drop(array, count) {
  if (array === 0) {
    return array;
  }
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// if the array is empty, return the empty array
// create a for loop where the initialization starts at the count value
// push the new values into a new variable and return the variable
