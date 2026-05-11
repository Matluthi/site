const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('header-partial');
  } else {
    header.classList.remove('header-partial');
  }
});
