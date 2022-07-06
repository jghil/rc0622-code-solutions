var a = 3;
var b = 5;
var c = -2;

var maximumValue = Math.max(a, b, c);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Invincible', 'Batman', 'Spiderman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'The Dry',
    author: 'Jane Harper'
  },
  {
    title: '1q84',
    author: 'Haruki Murakami'
  },
  {
    title: 'Circle',
    author: 'Madeline Miller'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Jay Ghil';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
