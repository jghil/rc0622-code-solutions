var buttonCount = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  $clickCount.textContent = 'Clicks: ' + (buttonCount += 1);
  if (buttonCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (buttonCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (buttonCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (buttonCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (buttonCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
