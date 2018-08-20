(() => {

const 
    errors = DOC.querySelector('.err'),
    attr = 'hidden';

/* Orientation */
WIN.addEventListener('orientationchange', function ()  {

    let 
        orientation = WIN.orientation,
    	err = BODY.querySelector('.err__orient');

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