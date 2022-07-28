function getUserData() {

  var $userList = document.querySelector('#user-list');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('status of xhr object:', xhr.status);
    console.log('response of xhr object:', xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var $liElement = document.createElement('li');
      $liElement.textContent = xhr.response[i].name;
      $userList.appendChild($liElement);
    }
  });
  xhr.send();
}

getUserData();
