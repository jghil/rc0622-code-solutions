const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const multiplyTwo = number => {
  return number * 2;
};
const doubled = numbers.map(multiplyTwo);
console.log('doubled:', doubled);

const price = price => {
  return `$${price}.00`;
};
const prices = numbers.map(price);
console.log('prices:', prices);

const lowercase = lowercase => {
  return lowercase.toUpperCase();
};
const upperCased = languages.map(lowercase);
console.log(upperCased);

const letters = letters => {
  return letters[0];
};
const firstLetters = languages.map(letters);
console.log(firstLetters);
