const preloader = document.querySelector('.loader');
const preloaderText = document.querySelector('.loader h1');

let intervalCount = 0;

let interval = setInterval(() => {
    intervalCount++;
    intervalCount %= 4;
    preloaderText.innerHTML = `Website is <span>Building</span>${'.'.repeat(intervalCount)}`;
}, 350);


window.addEventListener('load', () => {
    preloader.classList.add('hidden');
    setTimeout(() => { preloader.remove(); }, 1000);
    document.body.classList.remove('no-scroll');
});