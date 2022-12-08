/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const newList = list.next;
    list.next = newList.next;
  }
}
