(() => {

const 
    win = window,
    doc = document;

const 
    errors = doc.querySelector('.err'),
    attr = 'hidden';

/* Orientation */
win.addEventListener('orientationchange', function ()  {

    let 
        orientation = win.orientation,
    	err = doc.querySelector('.err__orient');

    switch(orientation) {
        case 0:
            if (err.classList.contains('active') && !errors.hasAttribute(attr)) {
                errors.setAttribute(attr, '');
                err.classList.remove('active');
            }
            break; 
        case 90:
            if (!err.classList.contains('active') && errors.hasAttribute(attr)) {
                errors.removeAttribute(attr);
                err.classList.add('active');
            }
            break;
        case -90:
            if (!err.classList.contains('active') && errors.hasAttribute(attr)) { 
                errors.removeAttribute(attr);
                err.classList.add('active');
            }
            break;
    }
});

})();