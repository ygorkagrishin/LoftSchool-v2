(() => {

const 
    DATA = 'data-popup',
    DATA_ID = 'data-id';

const 
    BUTTONS = BODY.querySelectorAll('.review__btn'),
    CLOSE_BUTTONS = BODY.querySelectorAll('.review__close');

const 
    COLLAPSED = 'collapsed';

let modal = null;

for (let i = 0, len = BUTTONS.length; i < len; i++) {
    let btn = BUTTONS[i];
    btn.addEventListener('click', openHandler, false);
}

function openHandler(e) {
    e.preventDefault();

    let btn = this,
    id = btn.hasAttribute(DATA) && btn.hasAttribute(DATA_ID) ?
    btn.getAttribute(DATA_ID) : false;

    if (!id) 
        return;

    modal = BODY.querySelector(id);

    modal.classList.contains(COLLAPSED) ? 
    modal.classList.remove(COLLAPSED) : false;
}

for (let i = 0, len = CLOSE_BUTTONS.length; i < len; i++) {
    let close = CLOSE_BUTTONS[i];

    close.addEventListener('click', closeHandler);
}

function closeHandler() {
    return !modal.classList.contains(COLLAPSED) ? 
    modal.classList.add(COLLAPSED) : false;
}

})();