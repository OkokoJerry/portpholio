let navbar = document.getElementById('dp-btn');
let responsive = document.getElementById('navRes');
navbar.addEventListener('click', () => {
    responsive.classList.toggle('pushout');
    navbar.classList.toggle('dark');
    if(responsive.classList.contains('pushout')){
        navbar.innerHTML = '&#10005;';
    }else{
        navbar.innerHTML = '&#9776;';
    }
});

const closeNavbar = () => {
    responsive.classList.remove('pushout');
    navbar.classList.remove('dark');
    navbar.innerHTML = '&#9776;';
}
document.body.addEventListener('click', () => {
    if(!navbar.contains(event.target) && !responsive.contains(event.target)){
        closeNavbar();
    }
});
