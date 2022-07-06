function convertMinutesToSeconds(minutes) {
  var convert = minutes * 60 + ' seconds';
  return convert;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('value of convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hello, ' + name + '!';
  return greeting;
}
var greetResult = greet('Jay');
console.log('value of greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getareaResult = getArea(17, 42);
console.log('value of getareaResult:', getareaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getfirstNameResult = getFirstName({ firstName: 'Jay', lastName: 'Ghil' });
console.log('value of getfirstNameResult:', getfirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var getlastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResult:', getlastElementResult);
