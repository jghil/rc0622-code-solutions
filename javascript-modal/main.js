var $modalButton = document.querySelector('.button-open');
var $buttonNo = document.querySelector('.button-no');
var $overlay = document.querySelector('.overlay');
var $hideOverlay = document.querySelector('.overlay', '.hide');
var $textBox = document.querySelector('.text-box');
var $hideTextBox = document.querySelector('.text-box', '.hide');

$modalButton.addEventListener('click', function (e) {
  $hideOverlay.className = 'overlay';
  $hideTextBox.className = 'text-box';
});

$buttonNo.addEventListener('click', function (f) {
  $overlay.className = 'overlay hide';
  $textBox.className = 'text-box hide';
});
