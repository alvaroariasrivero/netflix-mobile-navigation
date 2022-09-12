const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const docu = document.querySelector('.docu');
const docuDropdown = document.querySelector('.docu-dropdown');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

docu.addEventListener('click', () => {
    docuDropdown.classList.toggle('none');
});