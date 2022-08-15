var $rightIcon = document.querySelector('.right');
var $leftIcon = document.querySelector('.left');
var $currentImage = document.querySelector('.images');
var $icons = document.querySelectorAll('.fa-circle');
var $iconsContainer = document.querySelector('.icons-container');

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var start = 0;

var intervalID = setInterval(repeat, 1000);

function repeat() {
  start++;
  if (start >= images.length) {
    start = 0;
  }
  $currentImage.setAttribute('src', images[start]);
  iconChange();
  clearInterval(intervalID);
  intervalID = setInterval(repeat, 1000);
}

$iconsContainer.addEventListener('click', function (e) {
  clearInterval(intervalID);
  if (e.target.tagName === 'I') {
    start = parseInt(e.target.getAttribute('id'));
    for (var i = 0; i < $icons.length; i++) {
      $icons[i].setAttribute('class', 'fa-regular fa-circle');
      if (i === parseInt(e.target.getAttribute('id'))) {
        $icons[i].setAttribute('class', 'fa-solid fa-circle');
        document.querySelector('img').setAttribute('src', images[i]);
      }
    }
  } intervalID = setInterval(repeat, 1000);
});

$rightIcon.addEventListener('click', repeat);

$leftIcon.addEventListener('click', function (e) {
  start--;
  if (start < 0) {
    start = images.length - 1;
  }
  $currentImage.setAttribute('src', images[start]);
  iconChange();
  clearInterval(intervalID);
  intervalID = setInterval(repeat, 1000);
});

function iconChange() {
  for (var i = 0; i < images.length; i++) {
    $icons[i].className = 'fa-regular fa-circle';
    if (start === i) {
      $icons[i].className = 'fa-solid fa-circle';
    }
  }
}
