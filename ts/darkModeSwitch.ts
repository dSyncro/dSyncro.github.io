export const darkModeSwitch: HTMLElement = document.querySelector<HTMLElement>('nav ul li .fa-lightbulb')!;

darkModeSwitch.addEventListener('click', () => {
    darkModeSwitch.classList.toggle('far');
    darkModeSwitch.classList.toggle('fas');
    document.body.classList.toggle('light-mode');
});