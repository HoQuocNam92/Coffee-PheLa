
const list = document.querySelectorAll('.address');
const bars = document.querySelector('.bars');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobiles');
console.log("🚀 ~ mobile:", mobile)

bars.addEventListener("click",()=>{
   close.classList.toggle("active");
   menu.classList.toggle('active');
   bars.style.display = 'none'
   mobile.classList.add('mobileiframe')
})
close.addEventListener("click",()=>{
   menu.classList.toggle('active');
   bars.style.display = 'block'
   close.classList.toggle("active");
   mobile.classList.remove('mobileiframe')


   
})









