const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

if (operator === 'plus') {
  console.log('result:', add(num1, num2));
} if (operator === 'subtract') {
  console.log('result:', subtract(num1, num2));
} if (operator === 'multiply') {
  console.log('result:', multiply(num1, num2));
} if (operator === 'divide') {
  console.log('result:', divide(num1, num2));
}
