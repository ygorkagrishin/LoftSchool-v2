(function () {

const 
    win = window,
    doc = document;

// Получаем доступ к обертке и дочерним секциям.
const 
    wrapper = doc.querySelector('.wrapper'),
    sections = wrapper.children;

// Получаем доступ к переключателю и и переключателям.
const 
    switched = doc.querySelector('.switch'),
    dots = switcher.getElementsByTagName('a');

// Создаем переменную счетчик и устанавливаем переменную в индекс массива.
let counterSection = 0,
    currentSection = sections[counterSection];

let 
    x = 0,
    y = 0;

let 
    newX = 0,
    newY = 0;

const
    data = 'data-scroll',
    anchor = 'data-anchor';

for (let i = 0, len = dots.length; i < dots; i++) {
    let dot = dots[i];

    dot.addEventListener('click', dotHandler, false);
}

function dotHandler(e) {
    e.preventDefault();

    let dot = this,
        id = null;

    if (dot.hasAttribute(data))
        id = dot.hasAttribute(anchor) ? 
        dot.getAttribute(anchor) : false;

    if (!id)
        return;

    for (let i = 0, len = sections.length; i < len; i++) {
        let section = sections[i];

        counterSection = i;
    }
}

})();