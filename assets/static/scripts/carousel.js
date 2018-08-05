(function () {

const 
    win = window,
    doc = document;

const
    carousel = doc.querySelector('#carousel'),
    wrapper = carousel.querySelector('.burger__wrap'),
    slides = wrapper.children;

const
    prev = doc.querySelector('.burger__prev'),
    next = doc.querySelector('.burger__next');

const 
    clone = wrapper.firstElementChild.cloneNode(true),
    appendClone = wrapper.appendChild(clone);

let 
    position = 0,
    maxPosition = slides.length-1;

let
    products = carousel.querySelectorAll('.burger__comp'),
    closeProducts = carousel.querySelectorAll('.burger__close');

let 
    x = 0,
    y = 0;

let 
    newX = 0,
    newY = 0;

let 
    duration = 700;

let
    autoPlayTimer,
    autoPlaySpeed = 5000;

for (let i = 0, len = products.length; i < len; i++) {
    let product = products[i];
    product.addEventListener('click', productsHandler, false);
}

function productsHandler() {
    autoPlayClear();

    let product = slides[position].querySelector('.burger__comp');

    return !product.classList.contains('active') ?
    product.classList.add('active') : false;
}

for (let i = 0, len = closeProducts.length; i < len; i++) {
    let closeProduct = closeProducts[i];
    closeProduct.addEventListener('click', closeProductHandler, false);
}

function closeProductHandler(e) {
    e.stopPropagation();

    let products = slides[position].querySelector('.burger__comp');

    return products.classList.contains('active') ?
    products.classList.remove('active') : false;
}

next.addEventListener('click', function () {
    autoPlayClear();

    return toSwitchToNextSlide().then(toSwitchSlide, toSwitchToFirstSlide);
})

function toSwitchToNextSlide() {
    return new Promise((resolve, reject) => {
        ++position;

        if (position > maxPosition) {
            reject();
        } 

        resolve();
    });
}

prev.addEventListener('click', function () {
    autoPlayClear();
    
    return toSwitchToPrevSlide().then(toSwitchSlide, toSwitchToLastSlide);
})

function toSwitchToPrevSlide() {
    return new Promise((resolve, reject) => {
        --position;

        if (position < 0) {
            reject();
        } 

        resolve();
    });
}

function autoPlay() {
    if (!autoPlayTimer) {
        autoPlayTimer = setInterval(() => {
            toSwitchToNextSlide().then(toSwitchSlide, toSwitchToFirstSlide);
        }, autoPlaySpeed)
    }
}

function autoPlayClear() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
    }
}

carousel.addEventListener('touchstart', function (e) {
    if (e.changedTouches.length !== 1) {
        return;
    }

    autoPlayClear();

    let touch = e.changedTouches[0];

    x = touch.pageX;
    y = touch.pageY;
})

carousel.addEventListener('touchmove', function (e) {
    e.preventDefault();
})

carousel.addEventListener('touchend', function (e) {
    if (e.changedTouches.length !== 1) {
        return;
    }
    
    let touch = e.changedTouches[0];

    newX = touch.pageX;
    newY = touch.pageY;

    let deltaX = x - newX,
        deltaY = y - newY;

    if (Math.abs(deltaY) >= Math.abs(deltaX)) {
        return;
    }

    return x > newX ? toSwitchToNextSlide().then(toSwitchSlide, toSwitchToFirstSlide) :
    toSwitchToPrevSlide().then(toSwitchSlide, toSwitchToFirstSlide);
})

function toSwitchToFirstSlide() {
    position = 0;

    let style = wrapper.style;

    style.transition = `all 0ms`;
    style.transform = `translate(-${position}00%, 0)`;

    ++position;

    toSwitchSlide();
}

function toSwitchToLastSlide() {
    position = maxPosition;

    let style = wrapper.style;

    style.transition = `all 0ms`;
    style.transform = `translate(-${position}00%, 0)`;

    --position;

    toSwitchSlide();
}

function toSwitchSlide() {
    setTimeout(() => {
        let style = wrapper.style;

        style.transition = `all ${duration}ms`;
        style.transform = `translate(-${position}00%, 0)`;
    }, 25);
}

window.addEventListener('load', function () {
    autoPlay();
})

})()