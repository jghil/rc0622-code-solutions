/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    queue.enqueue(first);
    const second = queue.dequeue();
    return second;
  }
}
