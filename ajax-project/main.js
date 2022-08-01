var $searchInput = document.querySelector('#search').value;
var $form = document.querySelector('#form');

function searchManga(value) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.jikan.moe/v4/manga?q=' + value);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
  });
  xhr.send();
}

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  searchManga($searchInput);
});
