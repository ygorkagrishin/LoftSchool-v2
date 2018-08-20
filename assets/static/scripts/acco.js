(function () {

const
    ACCO = BODY.querySelector('#acco'),
    SECTIONS = ACCO.children,
    SECTIONS_LENGTH = SECTIONS.length;

const 
    STATE = 'collapsed';

for (let i = 0; i < SECTIONS_LENGTH; i++) {
    let section = SECTIONS[i];
    section.addEventListener('click', handler, false);
}

function handler() {
    let section = this;

    return section.classList.contains(STATE) ?
    openSection(section) : closeSection(section);
}

function openSection(sect) {
    let section = sect,
        content = section.querySelector('.team__cont'),
        contentHeight = content.firstElementChild.clientHeight;

    destroy();

    section.classList.remove(STATE);
    content.style.height = `${contentHeight}px`;
}

function closeSection(sect) {
    let section = sect,
        content = section.querySelector('.team__cont');

    content.removeAttribute('style');
    section.classList.add(STATE);
}

function destroy() {
    for (let i = 0; i < SECTIONS_LENGTH; i++) {
        let section = SECTIONS[i];

        if (section.classList.contains(STATE)) {
            continue;
        }

        closeSection(section);
    }
}

})();