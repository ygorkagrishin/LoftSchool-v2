(() => {

const data = 'data-src',
images = document.querySelectorAll(`[${data}]`);

const configuration = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

const imagesCount = images.length;

let observer = !('IntersectionObserver' in window) ?
loadBackgroundsImmediately(images) : initIntersectionObserver(onIntersection, configuration);

function initIntersectionObserver(onIntersection, configuration) {
    observer = new IntersectionObserver(onIntersection, configuration);
    
    for (let i=0; i<imagesCount; i++) {
        let image = images[i];
        observer.observe(image);
    }

    return observer
}

function loadBackgroundsImmediately() {
    for (let i=0; i<imagesCount; i++) {
        let image = imagesCount[l];

        preloadBackgrounds(image);
    }
}

function preloadBackgrounds(image) {
    let value = image.getAttribute(data),
    currentSection = image;

    currentSection.style.background = value;
    currentSection.removeAttribute(data);
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