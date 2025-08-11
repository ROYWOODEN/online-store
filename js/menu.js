const hamb = document.querySelectorAll('.hamb');
const menu = document.querySelector('#hamb-menu');
const items = document.querySelectorAll('.menu-item');
const contents = document.querySelectorAll('.menu-content');
const fixed = document.querySelector('.header-top');
const MobileHamb = document.querySelector('#mobile-hamb');
const MobileMenu = document.querySelector('#hamb-menu-mobile');

const MobileItems = document.querySelectorAll('.menu-mobile-navbar-id');
const MobileContent = document.querySelector('#menu-mobile-content');

const prev = document.querySelector('.prev');

let scrollHandler = null; 

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
        if (!scrollHandler) {
            scrollHandler = () => {
                if (window.scrollY > 40) {
                    fixed.classList.add('show');
                } else {
                    fixed.classList.remove('show');
                }
            };
            window.addEventListener('scroll', scrollHandler);
        }
    } else {
        if (scrollHandler) {
            window.removeEventListener('scroll', scrollHandler);
            scrollHandler = null;
        }
    }
});

let isOpen = false;
let isContent = false;

hamb.forEach(el => el.addEventListener('click', toggle));




document.addEventListener('click', function(e) {
    if (isOpen && ![...hamb].some(el => el.contains(e.target)) && !menu.contains(e.target)) {
        toggle();
    }
});

function toggle() {
    isOpen = !isOpen;
    if(innerWidth >= 1200) {
        if(isOpen) {
            menu.classList.add('active');
        }   else {
            menu.classList.remove('active');
        }
    }   else {
        if(isOpen) {
            MobileMenu.classList.add('open');
            MobileHamb.classList.add('active-hamb');
            document.querySelector('body').style.overflow = 'hidden';
        }   else {
            MobileMenu.classList.remove('open');
            MobileHamb.classList.remove('active-hamb');
            MobileContent.classList.remove('open-content');

            document.querySelector('body').style.overflow = '';
        }

    }
}


let i = 0;
let j = 0;

items.forEach(el => {
    el.addEventListener('click', (e) => toggleContent(e.currentTarget, 'open'));
    el.id = i++;
});
contents.forEach(el => {
    
    el.id = j++;
    if(el.id == 0) {
        el.classList.add('open');
    }
});


let id_Mobile = 0;

MobileItems.forEach(el => {
    el.addEventListener('click', (e) => toggleContent(e.currentTarget, 'open-content'));
    el.id = id_Mobile++;
});

function toggleContent(menuItem, clas) {
    
    // const menuItem = this;
    if(innerWidth >= 1200) {
        contents.forEach(el => {
            if(menuItem.id === el.id) {
                el.classList.add(clas);
            }    else {
                el.classList.remove(clas);
            }
        });
        
    }   else {
        isContent = !isContent;
        if(menuItem.id === '0') {
            MobileContent.classList.add(clas);
            }    else {
                MobileContent.classList.remove(clas);
            }
            
        }
        
        
    }
    
    prev.addEventListener('click', () => {
        if(isContent) {
            MobileContent.classList.remove('open-content');
            isContent = false;
        }
})
