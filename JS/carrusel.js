//Carrusel iformacion oficial
function carrusel() {
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
setInterval(moveCarousel, 4500); 
}

carrusel();

//Carrusel wall
function carruselWall() {
const cardContainerWall = document.querySelector('.cardWall_container');
const cardsWall = document.querySelectorAll('.cardWall');
const cardWidthWall = cardsWall[0].offsetWidth + parseInt(window.getComputedStyle(cardsWall[0]).marginRight);
let scrollAmountWall = 0;

// Función para mover el carrusel
function moveCarousel() {
    scrollAmountWall += cardWidthWall;
    cardContainerWall.scrollTo({
        left: scrollAmountWall,
        behavior: 'smooth'
    });
    
    // Reiniciar carrusel
    if (scrollAmountWall >= cardContainerWall.scrollWidth - cardContainerWall.clientWidth) {
        scrollAmountWall = 0;
        cardContainerWall.scrollTo({
            left: scrollAmountWall,
            behavior: 'smooth'
        });
    }
}

// Iniciar el movimiento del carrusel
setInterval(moveCarousel, 1900);
}

carruselWall();

