(function () {

const 
    WIN = window,
    DOC = document,
    BODY = DOC.body;

const 
    WRAPPER = BODY.querySelector('.wrapper'),
    SECTIONS = WRAPPER.children,
    SECTIONS_LENGTH = SECTIONS.length;

const
    SWITCHED = BODY.querySelector('.switch'),
    DOTS = SWITCHED.getElementsByTagName('a'),
    DOTS_LENGTH = DOTS.length;

const 
    DATA_NAME = 'data-scroll',
    DATA_TARGET = 'data-anchor';

let x = 0,
    y = 0;

let newX = 0,
    newY = 0;

let counterSection = 0,
    currentSection = SECTIONS[counterSection];

for (let i = 0; i < DOTS_LENGTH; i++) {
    let dot = DOTS[i];
    dot.addEventListener('click', handler, false);
}

function handler(e) {
    e.preventDefault();

    let dot = this, id = null;

    dot.hasAttribute(DATA_NAME) && dot.hasAttribute(DATA_TARGET) ?
    id = dot.getAttribute(DATA_TARGET) : false;

    if (!id)
        return;

    for (let i = 0; i < SECTIONS_LENGTH; i++) {
        let section = SECTIONS[i];

        if (section.id !== id)
            continue;
        else
            counterSection = i;
    }

    currentSection = SECTIONS[counterSection];

    viewCurrentSection()

    draw();
}

WRAPPER.addEventListener('touchstart', function (e) {
    let touches = e.changedTouches;

    if (touches.length !== 1) 
        return;

    let touch = touches[0];

    x = touch.pageX;
    y = touch.pageY;
})

WRAPPER.addEventListener('touchmove', function (e) {
    if (e.changedTouches.length !== 1)
        return;
})

WRAPPER.addEventListener('touchend', function (e) {
    let touches = e.changedTouches;

    if (touches.length !== 1) 
        return;

    let touch = touches[0];

    newX = touch.pageX;
    newY = touch.pageY;

    let deltaX = x - newX,
        deltaY = y - newY;

    if (Math.abs(deltaX) >= Math.abs(deltaY))
        return;

    if (y > newY && SECTIONS_LENGTH >= counterSection)
        ++counterSection;
    else if (newY > y && counterSection >= 0)
        --counterSection;

    currentSection = SECTIONS[counterSection];

    viewCurrentSection()

    draw();
})

function draw() {
    const coord = currentSection.offsetTop;

    WRAPPER.style.transition = `all .7s`;
    WRAPPER.style.transform = `translate(0, -${coord}px)`;
}

function viewCurrentSection() {
    for (let i = 0; i < DOTS_LENGTH; i++) {
        let dot = DOTS[i];

        if (!dot.classList.contains('active')) 
            continue;
        else
            dot.classList.remove('active');
    }

    DOTS[counterSection].classList.add('active');
}

})();