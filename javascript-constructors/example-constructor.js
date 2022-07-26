function ExampleConstructor() {

}

console.log('ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
var answer = new ExampleConstructor();
console.log('return value of ExampleConstructor:', answer);
var instanceofResult = answer instanceof ExampleConstructor;
console.log('value of instanceofResult:', instanceofResult);
