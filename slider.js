const slides = document.querySelector('.hero-section');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

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




