const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const docu = document.querySelector('.docu');
const docuDropdown = document.querySelector('.docu-dropdown');
const films = document.querySelector('.films');
const filmsDropdown = document.querySelector('.films-dropdown');
const series = document.querySelector('.series');
const seriesDropdown = document.querySelector('.series-dropdown');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

docu.addEventListener('click', () => {
    docuDropdown.classList.toggle('none');
});

films.addEventListener('click', () => {
    filmsDropdown.classList.toggle('none');
});

series.addEventListener('click', () => {
    seriesDropdown.classList.toggle('none');
});