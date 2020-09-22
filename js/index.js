const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.menu-icon i');
const list = document.querySelector('nav ul');

document.addEventListener('DOMContentLoaded', () => {
    hamburgerIcon.addEventListener('click', () => {
        list.classList.toggle('showing');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY != 0)
        navbar.classList.add('opaque');
    else navbar.classList.remove('opaque');
});

function removePreloader() {
    body.classList.remove('no-overflow');
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fadeOut');
    setTimeout(() => { preloader.remove(); }, 1000);
}

window.addEventListener('load', () => {
    removePreloader();
});