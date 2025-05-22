document.addEventListener("DOMContentLoaded", function () {
  const prevSlide = document.querySelector('.prev');
  const nextSlide = document.querySelector('.next');
  const list = document.querySelectorAll('.address');
  let currentSlide = 0;

  function showSlider() {
    list.forEach((value) => {
      value.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  }
  if(nextSlide ) {
  nextSlide.addEventListener("click", () => {
    if (currentSlide < list.length - 3) currentSlide++;
    showSlider();
  });

  }

  if(prevSlide) {
   prevSlide.addEventListener("click", () => {
    if (currentSlide > 0) currentSlide--;
    showSlider();
  });
  }

  const slides = document.querySelector('.hero-section');
  let heroIndex = 0;
  setInterval(() => {
    heroIndex = (heroIndex + 1) % 3;
    slides.style.transform = `translateX(${-heroIndex * 100}vw)`;
  }, 3000);

  const bars = document.querySelector('.bars');
  const close = document.querySelector('.close');
  const menu = document.querySelector('.menu');
  if(bars) {
 bars.addEventListener("click", () => {
    close.classList.toggle("active");
    menu.classList.toggle('active');
    bars.style.display = 'none';
  });

  close.addEventListener("click", () => {
    menu.classList.toggle('active');
    bars.style.display = 'block';
    close.classList.toggle("active");
  });
  }
 
});
