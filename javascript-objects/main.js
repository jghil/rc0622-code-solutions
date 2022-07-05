var student = {
  firstName: 'Jay',
  lastName: 'Ghil',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Special Education Teacher';

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);
var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2013'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Bombi',
  type: 'Maltese'
};

delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
