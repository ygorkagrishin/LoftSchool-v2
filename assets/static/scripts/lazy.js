(() => {

const 
    win = window,
    doc = document;

const 
    data = 'data-lazy',
    dataSrc = 'data-src';

const
    dataLazyBg = 'data-lazy-bg',
    dataLazyPic = 'data-lazy-pic';
    
const 
    dataTargets = doc.querySelectorAll(`[${data}]`);

const 
    config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
}

const dataTargetsCount = dataTargets.length;

let observer = !('IntersectionObserver' in win) ? loadImagesImmediately() : 
initIntersectionObserver(onIntersection, config);

function initIntersectionObserver(onIntersection, configuration) {
    observer = new IntersectionObserver(onIntersection, configuration);
    
    for (let i = 0; i < dataTargetsCount; i++) {
        let dataTarget = dataTargets[i];
        observer.observe(dataTarget);
    }

    return observer
}

function loadImagesImmediately() {
    for (let i = 0; i < dataTargetsCount; i++) {
        let dataTarget = dataTargetsCount[i];

        if (dataTarget.hasAttribute(dataLazyBg)) {
            preloadBackground(dataTarget);
        } else if (dataTarget.hasAttribute(dataLazyPic)) {
            preloadImg(dataTarget);
        } else {
            return;
        }
    }
}

function preloadBackground(target) {
    let 
        elem = target,
        path = elem.hasAttribute(data) && elem.hasAttribute(dataSrc) ? 
        elem.getAttribute(dataSrc) : false;

    if (!path) { 
        return false;
    }
    
    elem.style.background = path;
    elem.removeAttribute(dataSrc);
}

function preloadImg(target) {
    let 
        img = target,
        path = img.hasAttribute(data) && img.hasAttribute(dataSrc) ? 
        img.getAttribute(dataSrc) : false;

    if (!path) { 
        return false;
    }
    
    img.setAttribute('src', path);
    img.removeAttribute(dataSrc);
}

function onIntersection(entries) {
    for (let i=0, len=entries.length-1; i<=len; i++) {
        let entry = entries[i];

        if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            if (entry.target.hasAttribute(dataLazyBg)) {
                preloadBackground(entry.target);
            } else if (entry.target.hasAttribute(dataLazyPic)) {
                preloadImg(entry.target);
            } else {
                return;
            }
        }
    }
}

})();