/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const newData = list.next.data;
    list.next.data = list.data;
    list.data = newData;
    return list;
  } else {
    return list;
  }
}
