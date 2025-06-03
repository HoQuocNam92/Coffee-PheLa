document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail_gallery img');
    const prevButton = document.querySelector('.gallery-nav[data-action="prev"]');
    const nextButton = document.querySelector('.gallery-nav[data-action="next"]');
    let currentImageIndex = 0;

    function updateMainImage(imageSrc) {
        mainImage.src = imageSrc;
    }

    function updateActiveThumbnail(index) {
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
    }

    function changeImage(index) {
        currentImageIndex = index;
        const imageSrc = thumbnails[index].getAttribute('data-image');
        updateMainImage(imageSrc);
        updateActiveThumbnail(index);
    }

    function nextImage() {
        const nextIndex = (currentImageIndex + 1) % thumbnails.length;
        changeImage(nextIndex);
    }

    function prevImage() {
        const prevIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
        changeImage(prevIndex);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            changeImage(index);
        });
    });

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    updateActiveThumbnail(0);
}); 