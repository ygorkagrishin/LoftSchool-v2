(() => {
    
const 
  DATA = 'data-lazy',
  DATA_SRC = 'data-src';

const
  DATA_LAZY_BG = 'data-lazy-bg',
  DATA_LAZY_PIC = 'data-lazy-pic';
    
const 
    DATA_TARGETS = DOC.querySelectorAll(`[${DATA}]`),
    DATA_TARGETS_LENGTH = DATA_TARGETS.length;

const 
    CONFIG = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
}

let observer = !('IntersectionObserver' in WIN) ? loadImagesImmediately() : 
initIntersectionObserver(onIntersection, CONFIG);

function initIntersectionObserver(onIntersection, configuration) {
  observer = new IntersectionObserver(onIntersection, configuration);

  for (let i = 0; i < DATA_TARGETS_LENGTH; i++) {
    let dataTarget = DATA_TARGETS[i];
    observer.observe(dataTarget);
  }

  return observer;
};

function loadImagesImmediately() {
  for (let i = 0; i < DATA_TARGETS_LENGTH; i++) {
    let dataTarget = DATA_TARGETS[i];

    if (dataTarget.hasAttribute(DATA_LAZY_BG) && dataTarget.hasAttribute(DATA_SRC)) {
      preloadBackground(dataTarget);
    } else if (dataTarget.hasAttribute(DATA_LAZY_PIC) && dataTarget.hasAttribute(DATA_SRC)) {
      preloadImg(dataTarget);
    } else {
      return;
    }
  }
};

function preloadBackground(target) {
  let elem = target,
      path = elem.hasAttribute(DATA) && elem.hasAttribute(DATA_SRC) ? 
      elem.getAttribute(DATA_SRC) : false;

  if (!path) { 
    return false;
  }

  elem.style.background = path;
  elem.removeAttribute(DATA_SRC);
};

function preloadImg(target) {
  let img = target,
      path = img.hasAttribute(DATA) && img.hasAttribute(DATA_SRC) ? 
      img.getAttribute(DATA_SRC) : false;

  if (!path) { 
    return false;
  }

  img.setAttribute('src', path);
  img.removeAttribute(DATA_SRC);
};

function onIntersection(entries) {
  for (let i=0, len=entries.length-1; i<=len; i++) {
    let entry = entries[i];

    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);
      if (entry.target.hasAttribute(DATA_LAZY_BG)) {
        preloadBackground(entry.target);
      } else if (entry.target.hasAttribute(DATA_LAZY_PIC)) {
          preloadImg(entry.target);
      } else {
        return;
      }
    }
  }
};

})();