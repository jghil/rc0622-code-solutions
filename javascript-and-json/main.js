var books = [
  {
    isbn: '9780786838653',
    title: 'Percy Jackson and the Lightning Thief',
    author: 'Rick Riordan'
  },
  {
    isbn: '9780316556323',
    title: 'Circe',
    author: 'Madeline Miller'
  },
  {
    isbn: '9784757578272',
    title: 'The Case Study of Vanitas',
    author: 'Jun Mochizuki'
  }
];
console.log('array of books:', books, 'type of books:', typeof books);
var jsonBooks = JSON.stringify(books);
console.log('value of jsonBooks:', jsonBooks, 'type of jsonBooks:', typeof jsonBooks);

var students = '{"506008": "hello"}';
console.log('value of students:', students, 'type of students:', typeof students);

var studentsObject = JSON.parse(students);
console.log('value of studentsObject:', studentsObject, 'type of studentsObject:', typeof studentsObject);
