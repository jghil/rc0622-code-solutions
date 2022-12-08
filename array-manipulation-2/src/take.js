/* exported take */

// count out the indexes of the array
// take the number of indexes according to the count index
// save the new array into a variable and return it

function take(array, count) {
  if (array.length === 0) {
    return array;
  }
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// if the array is empty, then return the empty array
// if not, take the number of values according to the count
// push the values into a new array and return it
