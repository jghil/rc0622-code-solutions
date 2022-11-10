/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    const second = queue.dequeue();
    if (first < second) {
      queue.enqueue(second);
      return first;
    } else if (first === second) {
      queue.enqueue(first);
      return second;
    } else if (first > second) {
      queue.enqueue(first);
      return second;
    } return first;
  }
}
