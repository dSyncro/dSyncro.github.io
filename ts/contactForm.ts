export const contactMe: HTMLElement = document.querySelector<HTMLElement>('#contact-me')!;
export const contactMeButton: HTMLElement = document.querySelector<HTMLElement>('nav ul li #contact-link')!;
export const contactCloseButton: HTMLElement = document.querySelector<HTMLElement>('#contact-me .heading i')!;

contactMeButton.addEventListener('click', () => {
    document.body.classList.add('no-scroll');
    contactMe.classList.add('shown');
});

contactCloseButton.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    contactMe.classList.remove('shown');
});