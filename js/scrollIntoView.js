let scrollProps = { behavior: 'smooth', block: 'center' };

document.getElementById('is-link').addEventListener('click', () => {
    document.getElementById('is').scrollIntoView(scrollProps);
});

document.getElementById('works-link').addEventListener('click', () => {
    document.getElementById('works').scrollIntoView(scrollProps);
});

document.getElementById('skills-link').addEventListener('click', () => {
    document.getElementById('skills').scrollIntoView(scrollProps);
});

document.querySelector('nav #dm').addEventListener('click', () => {
    window.scrollTo({...scrollProps, top: 0});
});

document.querySelector('.goto-top a').addEventListener('click', () => {
    window.scrollTo({...scrollProps, top: 0});
});