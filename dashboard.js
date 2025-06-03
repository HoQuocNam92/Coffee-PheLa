 

const item = document.querySelectorAll('.nav-link');
const content = document.querySelectorAll('.dashboard-section');

item.forEach((item, index) => {
   item.onclick = function() {
    content.forEach((content, index) => {
        content.classList.remove('active');
    })
    document.querySelector('.nav-link.active').classList.remove('active');
    item.classList.add('active');
    content[index].classList.add('active');
   } 
})