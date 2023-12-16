var audio = document.getElementById("audio");
audio.volume = 0.09;
audio.play();

document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.getElementById('carousel-slide');
    const imagem2 = document.getElementById('imagem2');
    const images = document.querySelectorAll('.imagem2 img');

    let counter = 0;
    const size = images[0].clientWidth;

    function nextSlide() {
        if (counter >= images.length - 1) return;
        counter++;
        imagem2.style.transition = 'transform 0.5s ease-in-out';
        imagem2.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    function prevSlide() {
        if (counter <= 0) return;
        counter--;
        imagem2.style.transition = 'transform 0.5s ease-in-out';
        imagem2.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
});
