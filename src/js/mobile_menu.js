const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.modal-close-button');
const modalMenu = document.querySelector('.modal');
const menuItem = document.querySelectorAll('.menu-list-item');
const header = document.querySelector('.header');
const headerItem = document.querySelectorAll('.links');

menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
menuItem.forEach(item => item.addEventListener('click', closeModal));
window.addEventListener('scroll', blurHeader);

function openModal() {
  modalMenu.style.display = 'block';
  modalMenu.classList.toggle('open');
}

function closeModal(e) {
  modalMenu.style.display = 'none';
  modalMenu.classList.toggle('open');
}

function blurHeader() {
  if (window.scrollY > 60) {
    header.classList.add('header-scroll');
    header.classList.add('header');
  } else {
    header.classList.remove('header-scroll');
    header.classList.add('header');
  }
}
