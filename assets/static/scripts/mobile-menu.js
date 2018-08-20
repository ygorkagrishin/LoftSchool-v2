(function () {

const   
    TRIGGER = BODY.querySelector('.navbar-trigger');    

const
    NAV = BODY.querySelector('.navbar'),
    CLOSE_NAV = BODY.querySelector('.navbar__close');

const
    STATE_ACTIVE = 'navbar_state_active';

let stop_mobile_scroll = false;

TRIGGER.addEventListener('click', function () {
    if (!NAV.classList.contains(STATE_ACTIVE))
        NAV.classList.add(STATE_ACTIVE);

    stop_mobile_scroll = true;
})

CLOSE_NAV.addEventListener('click', function () {
    if (NAV.classList.contains(STATE_ACTIVE))
        NAV.classList.remove(STATE_ACTIVE);

    stop_mobile_scroll = false;
})

NAV.addEventListener('click', function (e) {
    let target = e.target;

    return target.tagName.toLowerCase() === 'a' && NAV.classList.contains(STATE_ACTIVE) ?
    NAV.classList.remove(STATE_ACTIVE) : false;
})

})();