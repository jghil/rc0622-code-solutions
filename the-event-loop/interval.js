let count = 3;

const counter = setInterval(() => {
  if (count > 0) {
    console.log(count--);
  } else if (count === 0) {
    console.log('Blast off!');
    clearInterval(counter);
  }
}, 1000);
