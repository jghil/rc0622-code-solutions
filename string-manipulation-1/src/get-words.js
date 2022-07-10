/* exported getWords */

function getWords(strings) {
  var newArray = [];
  if (strings === '') {
    return newArray;
  } else {
    return strings.split(' ');
  }
}
