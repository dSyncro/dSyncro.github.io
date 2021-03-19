const navbar = document.querySelector('nav');
const hamburgerIcon = document.querySelector('nav .hamburger-menu');
const hamburgerMenu = document.querySelector('nav ul');

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
