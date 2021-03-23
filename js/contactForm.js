const contactMe = document.querySelector('#contact-me');
const contactMeButton = document.querySelector('nav ul li #contact-link');
const contactCloseButton = document.querySelector('#contact-me .heading i');

contactMeButton.addEventListener('click', () => {
    document.body.classList.add('no-scroll');
    contactMe.classList.add('shown');
});

contactCloseButton.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    contactMe.classList.remove('shown');
});