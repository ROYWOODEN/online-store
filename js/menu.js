const hamb = document.querySelector('#hamb');
const menu = document.querySelector('#hamb-menu');
const items = document.querySelectorAll('.menu-item');
const contents = document.querySelectorAll('.menu-content');

let isOpen = false;

hamb.addEventListener('click', toggle);


document.addEventListener('click', function(e) {
    if (isOpen && !hamb.contains(e.target) && !menu.contains(e.target)) {
        toggle();
    }
});

function toggle() {
    isOpen = !isOpen;
    if(isOpen) {
        menu.classList.add('active');
    }   else {
        menu.classList.remove('active');
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