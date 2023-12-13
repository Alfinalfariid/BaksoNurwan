// menu open close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu')
};

// closs on scroll
window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open-menu')
};

// scroll animated
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
});

animate.reveal(".nav")
animate.reveal(".home-text", {origin: "left"})
animate.reveal(".home-img", {origin: "bottom"})
animate.reveal(".ser-box, .products-box", {interval: 100})