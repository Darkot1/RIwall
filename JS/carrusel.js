//Carrusel
const cardContainer = document.querySelector('.cardInfo_container');
const cards = document.querySelectorAll('.cardInfo');
const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);
let scrollAmount = 0;

// Función para mover el carrusel
function moveCarousel() {
    scrollAmount += cardWidth;
    cardContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Reiniciar carrusel
    if (scrollAmount >= cardContainer.scrollWidth - cardContainer.clientWidth) {
        scrollAmount = 0;
        cardContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Iniciar el movimiento del carrusel
setInterval(moveCarousel, 2800); 
