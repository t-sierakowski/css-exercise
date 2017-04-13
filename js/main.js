(function () {
  var nav = document.getElementById('nav');
  var links = document.querySelectorAll('nav a');

  nav.addEventListener('click', eventHandler, false);

  function eventHandler (event) {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    event.target.classList.add('active');
    event.preventDefault();
  }
}())
