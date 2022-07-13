var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObject = {};
  newObject.name = $contactForm.elements.name.value;
  newObject.email = $contactForm.elements.email.value;
  newObject.message = $contactForm.elements.message.value;
  console.log(newObject);
  document.getElementById('contact-form').reset();
});
