export const navbar: HTMLElement = document.querySelector<HTMLElement>('nav')!;
export const hamburgerIcon: HTMLElement = document.querySelector<HTMLElement>('nav .hamburger-menu')!;
export const hamburgerMenu: HTMLElement = document.querySelector<HTMLElement>('nav ul')!;

window.addEventListener('scroll', () => {
    if (window.scrollY == 0)
        navbar.classList.remove('opaque');
    else navbar.classList.add('opaque');
})

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('fa-code');
    hamburgerIcon.classList.toggle('fa-times');
    hamburgerMenu.classList.toggle('shown');
})
