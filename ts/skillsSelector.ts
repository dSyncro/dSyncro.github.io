export const skills = document.querySelector('#skills .skills-wrapper');

export const proBtn = document.querySelector('#skills .legend #pro');
export const midBtn = document.querySelector('#skills .legend #mid');
export const noobBtn = document.querySelector('#skills .legend #noob');

export const selectSkills = (type: string) => {
    skills.classList.add('filtered');
    let skillItems = document.querySelectorAll<HTMLElement>('#skills .skills-wrapper .skill-item');
    skillItems.forEach(s => {
        if (type in s.dataset)
        s.classList.add('selected');
        else s.classList.remove('selected');
    });
}

export const deselectSkillBtns = () => {
    proBtn.classList.remove('selected');
    midBtn.classList.remove('selected');
    noobBtn.classList.remove('selected');
}

export const clearSkills = () => {
    deselectSkillBtns();
    skills.classList.remove('filtered');

    let skillItems = document.querySelectorAll<HTMLElement>('#skills .skills-wrapper .skill-item');
    skillItems.forEach(s => {
        s.classList.remove('selected');
    }); 
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