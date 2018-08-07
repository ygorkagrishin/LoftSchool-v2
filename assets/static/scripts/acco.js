(function () {

const 
    win = window,
    doc = document;

const 
    acco = doc.querySelector('#acco'),
    sections = acco.children;

let collapsed = 'collapsed';

for (let i = 0, len = sections.length; i < len; i++) {
    let section = sections[i];

    section.addEventListener('click', sectionHandler, false);
}

function sectionHandler(e) {
    e.preventDefault();

    let section = this;

    return section.classList.contains(collapsed) ?
    toOpenSection(section) : toCloseSection(section);
}

function toOpenSection(sect) {
    let section = sect,
    sectionContent = section.querySelector('.team__cont'),
    sectionContentHeight = sectionContent.firstElementChild.clientHeight;

    toCloseSections();

    section.classList.remove(collapsed);
    sectionContent.style.height = `${sectionContentHeight}px`;
}

function toCloseSection(sect) {
    let section = sect,
    sectionContent = section.querySelector('.team__cont'),
    sectionContentHeight = sectionContent.firstElementChild.clientHeight;

    sectionContent.removeAttribute('style');
    section.classList.add(collapsed);
}

function toCloseSections() {
    for (let i = 0, len = sections.length; i < len; i++) {
        let section = sections[i];

        if (section.classList.contains(collapsed)) {
            continue;
        }

        toCloseSection(section);
    }
}

})();