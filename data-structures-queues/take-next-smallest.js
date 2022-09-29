/* exported takeNextSmallest */
function takeNextSmallest(queue) {
  if (queue.peek() !== undefined) {
    let nextSmallest = queue.dequeue();
    while (nextSmallest > queue.peek()) {
      queue.enqueue(nextSmallest);
      nextSmallest = queue.dequeue();
    }
    return nextSmallest;

  }
}
