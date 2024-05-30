const responder = document.getElementById('responderBtn');

responder.addEventListener("click", (event) => {
    const card = event.target.closest('.card');
    const inputResponder = card.querySelector('.Responder').value;
    const idRespuesta = card.querySelector('.respuestas');

    const divCreado = document.createElement('div');
    divCreado.classList.add('respuesta1');

    const contenidoCreado = document.createElement('div');
    contenidoCreado.classList.add('contenidoRespuesta');

    const pDivCreado = document.createElement('p');
    pDivCreado.classList.add('descripcionRespuesta');
    pDivCreado.innerText = inputResponder;

    const footerRespuesta = document.createElement('div');
    footerRespuesta.classList.add('footerRespuesta');

    const PFR = document.createElement('p');
    PFR.classList.add('byRespuesta');
    PFR.textContent = "By: (USUARIO)";

    const DFR = document.createElement('p');
    DFR.classList.add('dateRespuesta');
    const date = new Date();
    const postDate = date.toLocaleString();
    DFR.textContent = postDate;

    contenidoCreado.appendChild(pDivCreado);
    footerRespuesta.appendChild(PFR);
    footerRespuesta.appendChild(DFR);
    divCreado.appendChild(contenidoCreado);
    divCreado.appendChild(footerRespuesta);

    idRespuesta.appendChild(divCreado);

    
    card.querySelector('.Responder').value = '';
});

const añadirTema = document.getElementById('añadirTema');

añadirTema.addEventListener("click", () => {
    const tituloTema = document.getElementById('recipient-name').value;
    const descripcionTema = document.getElementById('message-text').value;
    const dateT = new Date();
    const postDateT = dateT.toLocaleString();

    const nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card');
    nuevaCard.innerHTML = `
    <div class="card-header">
        By: (USUARIO)
    </div>
    <div class="card-body">
        <h5 class="card-title">${tituloTema}</h5>
        <p class="card-text">${descripcionTema}</p>
        <div class="respuestas">
            <p class="pRespuesta">Respuestas:</p>
        </div>
        <textarea class="Responder" placeholder="Responder"></textarea>
        <div class="button"><button class="btn btn-primary responderBtn">Responder</button></div>
    </div>
    `;

    const main = document.getElementById('main');
    main.insertBefore(nuevaCard, main.firstChild);

    // Añadir el evento al botón de respuesta de la nueva tarjeta
    const responderBtn = nuevaCard.querySelector('.responderBtn');
    responderBtn.addEventListener("click", (event) => {
        const card = event.target.closest('.card');
        const inputResponder = card.querySelector('.Responder').value;
        const idRespuesta = card.querySelector('.respuestas');

        const divCreado = document.createElement('div');
        divCreado.classList.add('respuesta1');

        const contenidoCreado = document.createElement('div');
        contenidoCreado.classList.add('contenidoRespuesta');

        const pDivCreado = document.createElement('p');
        pDivCreado.classList.add('descripcionRespuesta');
        pDivCreado.innerText = inputResponder;

        const footerRespuesta = document.createElement('div');
        footerRespuesta.classList.add('footerRespuesta');

        const PFR = document.createElement('p');
        PFR.classList.add('byRespuesta');
        PFR.textContent = "By: (USUARIO)";

        const DFR = document.createElement('p');
        DFR.classList.add('dateRespuesta');
        const date = new Date();
        const postDate = date.toLocaleString();
        DFR.textContent = postDate;

        contenidoCreado.appendChild(pDivCreado);
        footerRespuesta.appendChild(PFR);
        footerRespuesta.appendChild(DFR);
        divCreado.appendChild(contenidoCreado);
        divCreado.appendChild(footerRespuesta);

        idRespuesta.appendChild(divCreado);

        
        card.querySelector('.Responder').value = '';
    });
    // Cerrar el modal
const modal = document.getElementById('exampleModal');
const modalInstance = bootstrap.Modal.getInstance(modal);
modalInstance.hide();

// Limpiar el input y el textarea
document.getElementById('recipient-name').value = '';
document.getElementById('message-text').value = '';

});