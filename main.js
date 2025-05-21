const slides = document.querySelector('.hero-section');
const prev = document.querySelector('.prev');
console.log(prev)
const next = document.querySelector('.next');
const list = document.querySelectorAll('.address');
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
