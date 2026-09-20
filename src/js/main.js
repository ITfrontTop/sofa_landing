const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  burgerBtn.classList.toggle('active');
});
