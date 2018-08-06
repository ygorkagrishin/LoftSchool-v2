(function () {

const   
    trigger = document.querySelector('.navbar-trigger');

const
    navbar = document.querySelector('.navbar'),
    navbarClose = document.querySelector('.navbar__close');

const
    stateActive = 'navbar_state_active',
    bodyStateActive = 'navbar-mobile-active';

function getState() {
    return !navbar.classList.contains(stateActive) && 
    !document.body.classList.contains(bodyStateActive) ? false : true;
}

function menuOpen() {
    if (!getState()) {
        navbar.classList.add(stateActive)
        document.body.classList.add(bodyStateActive);
    }
}

trigger.addEventListener('click', menuOpen);

function menuClose() {
    if (getState()) {
        navbar.classList.remove(stateActive)
        document.body.classList.remove(bodyStateActive);
    }
}

navbarClose.addEventListener('click', menuClose);

function handler(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
        return getState() ? menuClose() : false;
    }
}

navbar.addEventListener('click', handler);

})();