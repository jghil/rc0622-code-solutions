var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if (($tabList[i] === e.target)) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = ' tab';
      }
    }
  }
  var $dataView = e.target.getAttribute('data-view');
  for (var j = 0; j < $viewList.length; j++) {
    var $viewListData = $viewList[j].getAttribute('data-view');
    if ($viewListData !== $dataView) {
      $viewList[j].className = ' hidden';
    } else {
      $viewList[j].className = ' view';
    }
  }
}
);
