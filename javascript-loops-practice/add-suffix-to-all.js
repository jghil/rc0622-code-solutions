/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  var i = 0;
  while (i < words.length) {
    newArray.push(words[i] + suffix);
    i++;
  }
  return newArray;
}
