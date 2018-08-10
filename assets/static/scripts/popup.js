(() => {

const 
    win = window,
    doc = document;

const 
    data = 'data-popup',
    dataId = 'data-id';

const 
    buttons = doc.querySelectorAll('.review__btn'),
    buttonsClose = doc.querySelectorAll('.review__close');

const collapsed = 'collapsed';

let modal = null;

for (let i = 0, len = buttons.length; i < len; i++) {
    let btn = buttons[i];
    btn.addEventListener('click', openHandler, false);
}

function openHandler(e) {
    e.preventDefault();

    let btn = this,
    id = btn.hasAttribute(data) && btn.hasAttribute(dataId) ?
    btn.getAttribute(dataId) : false;

    if (!id) 
        return;

    modal = doc.querySelector(id);

    modal.classList.contains(collapsed) ? 
    modal.classList.remove(collapsed) : false;
}

for (let i = 0, len = buttonsClose.length; i < len; i++) {
    let close = buttonsClose[i];

    close.addEventListener('click', closeHandler);
}

function closeHandler() {
    return !modal.classList.contains(collapsed) ? 
    modal.classList.add(collapsed) : false;
}

})();