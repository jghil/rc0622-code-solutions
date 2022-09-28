/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  } else {
    const x = stack.pop();
    stack.push(value);
    stack.push(x);
    return stack;
  }
}
