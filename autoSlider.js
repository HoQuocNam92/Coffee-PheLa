
let index = 0;
let current = 0;
 setInterval(() => {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(${-index * 100}vw)`
 }, 3000);
