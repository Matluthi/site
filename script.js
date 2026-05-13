window.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
      header.classList.add('header-transition');
    } else {
      header.classList.remove('header-transition');
    }
  });
});