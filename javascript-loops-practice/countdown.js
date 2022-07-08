/* exported countdown */
function countdown(number) {
  var countDown = [];
  for (var i = number; i >= 0; i--) {
    countDown.push(i);
  }
  return countDown;
}
