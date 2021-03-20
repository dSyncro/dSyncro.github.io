const skills = document.querySelector('#skills .skills-wrapper');

const proBtn = document.querySelector('#skills .legend #pro');
const midBtn = document.querySelector('#skills .legend #mid');
const noobBtn = document.querySelector('#skills .legend #noob');

const selectSkills = (type) => {
    skills.classList.add('filtered');
    let skillItems = document.querySelectorAll('#skills .skills-wrapper .skill-item');
    for (s of skillItems) {
        if (type in s.dataset)
            s.classList.add('selected');
        else s.classList.remove('selected');
    }
}

const deselectSkillBtns = () => {
    proBtn.classList.remove('selected');
    midBtn.classList.remove('selected');
    noobBtn.classList.remove('selected');
}

const clearSkills = () => {
    deselectSkillBtns();
    skills.classList.remove('filtered');

    let skillItems = document.querySelectorAll('#skills .skills-wrapper .skill-item');
    for (s of skillItems)
        s.classList.remove('selected');
}

proBtn.addEventListener('click', () => {
    deselectSkillBtns();
    proBtn.classList.add('selected');
    selectSkills('pro');
});

midBtn.addEventListener('click', () => {
    deselectSkillBtns();
    midBtn.classList.add('selected');
    selectSkills('mid');
});

noobBtn.addEventListener('click', () => {
    deselectSkillBtns();
    noobBtn.classList.add('selected');
    selectSkills('noob');
});

document.querySelectorAll('#skills .legend .clear-filter').forEach((e) => {
    e.addEventListener('click', (event) => {
        event.stopPropagation();
        clearSkills();
    });
});