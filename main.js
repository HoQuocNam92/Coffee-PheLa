const slides = document.querySelector('.hero-section');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const list = document.querySelectorAll('.address');
const bars = document.querySelector('.bars');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

bars.addEventListener("click",()=>{
   close.classList.toggle("active");
   menu.classList.toggle('active');
   bars.style.display = 'none'
})
close.addEventListener("click",()=>{
   menu.classList.toggle('active');
   bars.style.display = 'block'
   close.classList.toggle("active");

   
})


let index = 0;
let current = 0;
 setInterval(() => {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(${-index * 100}vw)`
 }, 3000);


function showSlider( ) {
    list.forEach((value , index) => (
         value.style.transform = `translateX(-${current * 100}% )`
   )

 )
}



next.addEventListener("click",()=>{
   if (current < list.length - 3) current++;
  showSlider();
})

prev.addEventListener("click",()=>{
     if (current > 0) current--;
  showSlider();
})






