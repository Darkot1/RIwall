const cardContainer = document.querySelector('.cardInfo_container');
const addButton = document.getElementById('buttonCard');

addButton.addEventListener('click', function() {
    const newCard = document.createElement('div');
    newCard.classList.add('cardInfo', 'btnOpenPopup');
    newCard.innerHTML = `
        <img src="./src/assets/images/userindex.png" alt="">
        <h3>Nombre del publicador ${cardContainer.children.length}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor non aspernatur sunt! Ea mollitia odio explicabo ab ut iusto, voluptas voluptates ipsam, maxime, nihil exercitationem? Voluptate nulla cum voluptatum.</p>
    `;
cardContainer.appendChild(newCard);

// abrir popup con la tarjeta dinamica de js
newCard.addEventListener('click', () => {
        popup.style.display = 'block'; 
});

// Función para cerrar el popup
window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});

});

