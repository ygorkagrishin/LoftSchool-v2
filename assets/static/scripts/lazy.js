(() => {

const 
    $W = window,
    $D = document;

const 
    DATA = 'data-lazy',
    DATA_SRC = 'data-src';
    
const 
    IMAGES = $D.querySelectorAll(`[${DATA}]`);

const 
    CONFIG = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
}

const IMAGES_COUNT = IMAGES.length;

let observer = !('IntersectionObserver' in $W) ? loadBackgroundsImmediately(IMAGES) : 
initIntersectionObserver(onIntersection, CONFIG);

function initIntersectionObserver(onIntersection, configuration) {
    observer = new IntersectionObserver(onIntersection, configuration);
    
    for (let i=0; i<IMAGES_COUNT; i++) {
        let img = IMAGES[i];
        observer.observe(img);
    }

    return observer
}

function loadBackgroundsImmediately() {
    for (let i=0; i<IMAGES_COUNT; i++) {
        let img = IMAGES_COUNT[i];

        preloadBackgrounds(img);
    }
}

function preloadBackgrounds(img) {
    let 
        currentSection = img,
        value = currentSection.hasAttribute(DATA) && currentSection.hasAttribute(DATA_SRC) ? 
        currentSection.getAttribute(DATA_SRC) : false;

    if (!value) { 
        return false;
    }
    
    currentSection.style.background = value;
    currentSection.removeAttribute(DATA);
}

function onIntersection(entries) {
    for (let i=0, len=entries.length-1; i<=len; i++) {
        let entry = entries[i];

        if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            preloadBackgrounds(entry.target);
        }
    }
}

})();