(function () {

const 
    win = window,
    doc = document;

const   
    menu = doc.querySelector('.menu__acco'),
    menuSectCollection = menu.children;

const 
    state = 'collapsed';

for (let i = 0, len = menuSectCollection.length; i < len; i++) {
    let menuSect = menuSectCollection[i];
    menuSect.addEventListener('click', menuSectHandler, false);
}

function menuSectHandler() {
    let currentSection = this;
    return currentSection.classList.contains(state) ? 
    openSect(currentSection) : closeSect(currentSection);
}

function openSect(sect) {
    destroy();
    
    let section = sect;
    return section.classList.remove(state);
}

function closeSect(sect) {
    let section = sect;
    return section.classList.add(state);
}

function destroy() {
    for (let i = 0, len = menuSectCollection.length; i < len; i++) {
        let menuSect = menuSectCollection[i];

        if (!menuSect.classList.contains(state)) {
            menuSect.classList.add(state);
        } else {
            continue;
        }
    }
} 

})();