const hamb = document.querySelectorAll('.hamb');
const menu = document.querySelector('#hamb-menu');
const items = document.querySelectorAll('.menu-item');
const contents = document.querySelectorAll('.menu-content');
const fixed = document.querySelector('.header-top');
const MobileMenu = document.querySelector('#hamb-menu-mobile');
const MobileHamb = document.querySelector('#mobile-hamb');

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
            // document.querySelector('body').classList.add('no-scroll');
        }   else {
            MobileMenu.classList.remove('open');
            MobileHamb.classList.remove('active-hamb')
            document.querySelector('body').style.overflow = '';
            // document.querySelector('body').classList.remove('no-scroll');
        }

    }
}


let i = 0;
let j = 0;

items.forEach(el => {
    el.addEventListener('click', toggleContent);
    el.id = i++;
});
contents.forEach(el => {
    
    el.id = j++;
    if(el.id == 0) {
        el.classList.add('open');
    }
});

function toggleContent() {

    const menuItem = this;
    
    contents.forEach(el => {
        if(menuItem.id === el.id) {
            el.classList.add('open');
        }    else {
            el.classList.remove('open');
        }
    });
    
}