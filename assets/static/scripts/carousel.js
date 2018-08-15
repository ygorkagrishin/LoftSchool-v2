(() => {

const 
    WIN = window,
    DOC = document,
    BODY = DOC.body;

const 
    CAROUSEL = BODY.querySelector('#carousel'),
    WRAPPER = CAROUSEL.firstElementChild,
    SLIDES = WRAPPER.children;

const
    PREV = BODY.querySelector('.burger__prev'),
    NEXT = BODY.querySelector('.burger__next');

const
    CLONE = WRAPPER.firstElementChild.cloneNode(true),
    APPEND_CLONE = WRAPPER.appendChild(CLONE);

const
    SLIDES_LENGTH = SLIDES.length;

const 
    PRODUCTS = CAROUSEL.querySelectorAll('.burger__comp'),
    CLOSE_PRODUCTS = CAROUSEL.querySelectorAll('.burger__close');

const 
    DURATION = 700;

let x = 0,
    y = 0;

let newX = 0,
    newY = 0;

let autoPlayTimer,
    autoPlaySpeed = 5500;

let counterSlides = 0;

let productHover = false;

for (let i = 0; i < SLIDES_LENGTH; i++) {
    let product = PRODUCTS[i];
    
    product.addEventListener('mouseover', function () {
        let hover = productHover;

        if (!hover)
            productHover = true;
        else
            return;

        autoPlayClear();

        return !product.classList.contains('active') ?
        product.classList.add('active') : false;
    })
}

for (let i = 0; i < SLIDES_LENGTH; i++) {
    let product = PRODUCTS[i];

    product.addEventListener('mouseout', function () {
        let hover = productHover;

        if (hover)
            productHover = false;
        else
            return;

        return product.classList.contains('active') ?
        product.classList.remove('active') : false;
    })
}

for (let i = 0; i < SLIDES_LENGTH; i++) {
    let product = PRODUCTS[i];

    product.addEventListener('click', function () {
        let hover = productHover;

        if (hover)
            return;

        autoPlayClear();

        let product = this;

        return !product.classList.contains('active') ? 
        product.classList.add('active') : false;
    })
}

for (let i = 0; i < SLIDES_LENGTH; i++) {
    let close = CLOSE_PRODUCTS[i];

    close.addEventListener('click', function () {
        let product = PRODUCTS[counterSlides];

        return product.classList.contains('active') ?
        product.classList.remove('active') : false;
    })
}

PREV.addEventListener('click', () => { autoPlayClear(); toSwtichToPrevSlide(); });

function toSwtichToPrevSlide() {
    --counterSlides;

    if (0 > counterSlides) 
        toSwitchToLastSlide();

    draw();
}

NEXT.addEventListener('click', () => { autoPlayClear(); toSwitchToNextSlide(); });

function toSwitchToNextSlide() {
    ++counterSlides;

    if (counterSlides > SLIDES_LENGTH - 1) 
        toSwitchToFirstSlide();

    draw();
}

CAROUSEL.addEventListener('touchstart', function (e) {
    let touches = e.changedTouches;

    if (touches.length !== 1)
        return;

    let touch = touches[0];

    x = touch.pageX;
    y = touch.pageY;
})

CAROUSEL.addEventListener('touchmove', function (e) {
    if (e.changedTouches.length !== 1) 
        return;
})

CAROUSEL.addEventListener('touchend', function (e) {
    let touches = e.changedTouches;

    if (touches.length !== 1) 
        return;

    let touch = touches[0];

    newX = touch.pageX;
    newY = touch.pageY;

    let deltaX = x - newX,
        deltaY = y - newY;

    if (Math.abs(deltaY) >= Math.abs(deltaX))
        return;

    autoPlayClear();

    return x > newX ?
    toSwitchToNextSlide() : toSwtichToPrevSlide();
})

WIN.addEventListener('load', () => { return autoPlay() })
CAROUSEL.addEventListener('mouseover', () => { return autoPlayClear() })

function autoPlay() {
    autoPlayClear();
    
    autoPlayTimer = setInterval(() => {
        return toSwitchToNextSlide();
    }, autoPlaySpeed)
}

function autoPlayClear() {
    if (autoPlayTimer) {
        return clearInterval(autoPlayTimer);
    }
}

function toSwitchToFirstSlide() {
    counterSlides = 0;

    let style = WRAPPER.style;

    style.transition = `all 0ms`;
    style.transform = `translate(-${counterSlides}00%, 0)`;

    ++counterSlides;

    draw();
}

function toSwitchToLastSlide() {
    counterSlides = SLIDES_LENGTH - 1;

    let style = WRAPPER.style;

    style.transition = `all 0ms`;
    style.transform = `translate(-${counterSlides}00%, 0)`;

    --counterSlides;

    draw();
}

function draw() {
    setTimeout(function () {
        let style = WRAPPER.style;

        style.transition = `all ${DURATION}ms`;
        style.transform = `translate(-${counterSlides}00%, 0)`;
    }, 25);
}
})();