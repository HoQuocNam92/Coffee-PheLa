const slides = document.querySelector('.hero-section');
let index = 0;

 setInterval(() => {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(${-index * 100}vw)`
 }, 3000);