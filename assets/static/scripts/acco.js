(function () {

const 
    win = window,
    doc = document;

const
    acco = doc.querySelector('#acco'),
    sections = acco.children;

let sectionContent = null;

let collapsed = 'collapsed';

function handler(e) {
    e.preventDefault();

    let that = this;

    return that.classList.contains(collapsed) ? 
    openSection(that) : closeSection(that);
}

function destroy() {
    if (sectionContent === null) {
        return;
    }

    for (let i = 0, len = sections.length; i < len; i++) {
        let currentSection = sections[i];

        if (currentSection.classList.contains(collapsed)) {
            continue;
        }

        console.log(currentSection);
        closeSection(currentSection);
    }
}

function openSection(sect) {
    let section = sect;

    destroy();
    sectionContent = section.querySelector('.team__cont');

    let sectionContentHeight = sectionContent.firstElementChild.clientHeight;

    section.classList.remove(collapsed);
    sectionContent.style.height = `${sectionContentHeight}px`

}

function closeSection(sect) {
    let section = sect;

    section.classList.add(collapsed);
    sectionContent.removeAttribute('style');
}

for (let i = 0, len = sections.length; i < len; i++) {
    let currentSection = sections[i];

    currentSection.addEventListener('click', handler, false);
}

})();