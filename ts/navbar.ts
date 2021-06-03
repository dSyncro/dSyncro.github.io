export const navbar: HTMLElement = document.querySelector<HTMLElement>('nav')!;
export const hamburgerIcon: HTMLElement = document.querySelector<HTMLElement>('nav .hamburger-menu')!;
export const hamburgerMenu: HTMLElement = document.querySelector<HTMLElement>('nav ul')!;
export const navbarAnchors = navbar.querySelectorAll<HTMLElement>("a")!;

function setNavbarOpaque() {
    if (window.scrollY == 0)
    navbar.classList.remove('opaque');
else navbar.classList.add('opaque');
}

function toggleNavbarOpen() {
    hamburgerIcon.classList.toggle('fa-code');
    hamburgerIcon.classList.toggle('fa-times');
    hamburgerMenu.classList.toggle('shown');
}

window.addEventListener('scroll', setNavbarOpaque);
window.addEventListener("load", setNavbarOpaque);

hamburgerIcon.addEventListener('click', toggleNavbarOpen);

navbarAnchors.forEach(anchor => {
    anchor.addEventListener("click", toggleNavbarOpen)
});