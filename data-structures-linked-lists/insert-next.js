/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newHead = new LinkedList(value);
  newHead.next = list.next;
  list.next = newHead;
}
