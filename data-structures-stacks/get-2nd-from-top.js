/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    var y = stack.pop();
    var x = stack.peek();
    stack.push(y);
  } return x;
}
