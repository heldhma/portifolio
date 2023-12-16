var audio = document.getElementById("audio");
audio.volume = 0.09;
audio.play();

document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.getElementById('carousel-slide');
    const imagem2 = document.getElementById('imagem2');
    const images = document.querySelectorAll('.imagem2 img');

    let counter = 1;
    const size = images[0].clientWidth;

    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    imagem2.appendChild(firstClone);
    imagem2.insertBefore(lastClone, images[0]);

    function nextSlide() {
        if (counter >= images.length) {
            counter = 1;
            imagem2.style.transition = 'none';
            imagem2.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        counter++;
        imagem2.style.transition = 'transform 0.5s ease-in-out';
        imagem2.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    function prevSlide() {
        if (counter <= 0) {
            counter = images.length - 2;
            imagem2.style.transition = 'none';
            imagem2.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        counter--;
        imagem2.style.transition = 'transform 0.5s ease-in-out';
        imagem2.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    setInterval(nextSlide, 3500);
});
