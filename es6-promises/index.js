const takeAChance = require('./take-a-chance');

const promise = takeAChance('Jay');
promise.then(resolve => { console.log(resolve); })
  .catch(error => { console.error(error.message); });
