var buttonCount = 0;
var $button = document.querySelector('.button');
var $container = document.querySelector('.container');

$button.addEventListener('click', function (event) {
  buttonCount += 1;
  if (buttonCount % 2 !== 0) {
    $button.className = 'button-on button';
    $container.className = 'container container-on ';
  } else {
    $button.className = 'button-off button';
    $container.className = 'container container-off ';
  }
});
