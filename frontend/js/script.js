// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Dropdown Menu
function toggleDropdown() {
    let dropdown = document.querySelector('#dropdownButton #dropdown');
    dropdown.classList.toggle('hidden')
};

// Popup Image
// document.querySelectorAll('img').forEach(image =>{
//     image.onclick = () =>{
//         document.querySelector('.pop-image').style.display = 'block';
//         document.querySelector('.pop-image img').src = image.getAttribute('src');
//     }
// });
// document.querySelector('pop-image span').onclick = () =>{
//     document.querySelector('.pop-image').style.display = 'none';
// }
