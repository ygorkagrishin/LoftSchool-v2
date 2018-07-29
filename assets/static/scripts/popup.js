(() => {

const 
    $W = window,
    $D = document;

const 
    DATA = 'data-popup',
    DATA_SRC = 'data-src';

const 
    COLLAPSED = 'collapsed';

const
    BUTTONS = $D.querySelectorAll('.review__btn'),
    BUTTONS_CLOSE = $D.querySelectorAll('.review__close');

let currentModal;

function openModal(e) {
    e.preventDefault();

    let 
        that = this,
        id = that.hasAttribute(DATA) && that.hasAttribute(DATA_SRC) ?
        that.getAttribute(DATA_SRC) : false;

    if (!id) {
        return;
    }

    currentModal = $D.querySelector(id);

    return currentModal.classList.contains(COLLAPSED) ? 
    currentModal.classList.remove(COLLAPSED) : false;
}

function closeModal(e) {
    e.preventDefault();

    if (!currentModal) {
        return;
    }

    return !currentModal.classList.contains(COLLAPSED) ? 
    currentModal.classList.add(COLLAPSED) : false;
}

for (let i = 0, len = BUTTONS.length; i < len; i++) {
    let button = BUTTONS[i];

    button.addEventListener('click', openModal, false);
}

for (let i = 0, len = BUTTONS_CLOSE.length; i < len; i++) {
    let buttonClose = BUTTONS_CLOSE[i];

    buttonClose.addEventListener('click', closeModal, false);
}

})();