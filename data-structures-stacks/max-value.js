/* exported maxValue */

function maxValue(stack) {
  let x = -Infinity;
  while (stack.peek() !== undefined) {
    const currentPop = stack.pop();
    if (currentPop >= x) {
      x = currentPop;
    }
  } return x;
}
