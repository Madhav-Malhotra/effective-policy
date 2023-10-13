const nav = document.querySelector('nav.navbar');

const addBG = () => { 
    if (window.scrollY > 0) nav.classList.add('nav-scroll-bg');
    window.removeEventListener('scroll', addBG);
}

// On first scroll, add background colour to navbar
window.addEventListener('scroll', addBG);