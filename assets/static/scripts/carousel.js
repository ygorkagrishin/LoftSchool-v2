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
    max_position = slides.length-1;

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

for (let i = 0, len = products.length; i < len; i++) {
    let product = products[i];
    product.addEventListener('click', productsHandler, false);
}

function productsHandler() {
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

function toSwitchToNextSlide() {
    return new Promise((resolve, reject) => {
        ++position;
        
        if (position > max_position) {
            reject();
        } else {
            resolve();
        }
    });
}

next.addEventListener('click', function () {
    toSwitchToNextSlide().then(() => {
        toSwitchSlide()
    }, () => {
        toSwitchToFirstSlide();
    });
});

function toSwitchToPrevSlide() {
    return new Promise((resolve, reject) => {
        --position;

        if (position < 0)
            reject();
        else
            resolve();
    });
}

prev.addEventListener('click', function () {
    toSwitchToPrevSlide().then(() => {
        toSwitchSlide()
    }, () => {
        toSwitchToLastSlide();
    });
});

function toSwitchToFirstSlide() {
    setTimeout(() => {
        position = 0;

        wrapper.style.transition = `all 0ms`;
        wrapper.style.transform = `translate(-${position}00%, 0)`;
    }, 25)
}

function toSwitchToLastSlide () {
    setTimeout(() => {
        position = max_position;

        wrapper.style.transition = `all 0ms`;
        wrapper.style.transform = `translate(-${position}00%, 0)`;
    }, 25)
}

function toSwitchSlide() {
    wrapper.style.transition = `all ${duration}ms`;
    wrapper.style.transform = `translate(-${position}00%, 0)`;
}

})()