const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.menu-icon i');
const list = document.querySelector('nav ul');
const lightToggle = document.querySelector('#light-toggle input[type="checkbox"]');

let lightOn = false;

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

function updateTheme() {
    document.documentElement.setAttribute("data-theme", lightOn ? "light" : "dark");
}

function selectDefaultTheme() {
    lightOn = window.matchMedia('(prefers-color-scheme: dark)').matches ? false : true;
    lightToggle.checked = lightOn;
    updateTheme();
}

function toggleLight() {
    lightOn = !lightOn;
    updateTheme();
}

function removePreloader() {
    body.classList.remove('no-overflow');
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fadeOut');
    setTimeout(() => { preloader.remove(); }, 1000);
}

window.addEventListener('load', () => {
    selectDefaultTheme();
    lightToggle.addEventListener('change', toggleLight);
    removePreloader();
});