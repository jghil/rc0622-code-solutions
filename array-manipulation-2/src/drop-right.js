/* exported dropRight */

// identify the number of elements to drop from the end of the array
// drop the number of elements according to the count
// store the elements of the array which are not dropped into a new array
// return new array

function dropRight(array, count) {
  return array.slice(0, -count);
}
