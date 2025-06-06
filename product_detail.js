 const mainImage = document.querySelector('#mainProductImage');

 const thumbnailImage = document.querySelectorAll('.thumbnails')

 
function renderImage(src){
    mainImage.src=src;
}

function updateThumbnailActive (index) {
    document.querySelector('.thumbnails.active').classList.remove('active');
    thumbnailImage[index].classList.add('active');

}

function updateImage (index) {
    const Image = thumbnailImage[index].src;
    renderImage(Image);
    updateThumbnailActive(index);
}
 
 thumbnailImage.forEach((item,index)=>{
    item.onclick = function() {
        updateImage(index);
    }
 })