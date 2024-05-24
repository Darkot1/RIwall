document.addEventListener("DOMContentLoaded", function() {
    const postWall = document.getElementById('postWall');

    if (postWall) {
        postWall.addEventListener("click", () => {
             // Capturar los valores de los inputs
    const postTittle = document.getElementById('postTittle').value;
    const postDescription = document.getElementById('floatingTextarea2').value; // Cambio aquí
    const postImg = document.getElementById('inputGroupFile02'); // Cambio aquí
    const imgFile = postImg.files[0];
    const post = document.getElementById('post');

    // Verificar si los campos requeridos están llenos
    if (!postTittle || !postDescription) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear la publicación
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'text-center');
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('card-header');
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('card-body');
    const bodyDivLeft = document.createElement('div');
    bodyDivLeft.classList.add('card-bodyLeft');
    const bodyDivRight = document.createElement('div');
    bodyDivRight.classList.add('card-bodyRight');
    const divFooter = document.createElement('div');
    divFooter.classList.add('card-footer', 'text-body-secondary');

    headerDiv.textContent = `Posted by: (USUARIO)`; // Reemplaza con el nombre del usuario loggeado

    if (imgFile) {
        const read = new FileReader();
        read.onload = function(e) {
            const imgDiv = document.createElement('img');
            imgDiv.src = e.target.result;
            imgDiv.classList.add('imgPost');
            imgDiv.alt = 'Imagen publicada por Usuario'; 
            imgDiv.style.width = '100%'; 

            bodyDivLeft.appendChild(imgDiv);
        };
        read.readAsDataURL(imgFile);
    }

    const generatedTittlePost = document.createElement('h3');
    generatedTittlePost.classList.add('card-title');
    generatedTittlePost.textContent = postTittle;

    const generatedDescriptionPost = document.createElement('p');
    generatedDescriptionPost.classList.add('card-text');
    generatedDescriptionPost.textContent = postDescription;

    bodyDivRight.appendChild(generatedTittlePost);
    bodyDivRight.appendChild(generatedDescriptionPost);

    const date = new Date();
    const postDate = date.toLocaleString();
    divFooter.textContent = postDate;

    bodyDiv.appendChild(bodyDivLeft);
    bodyDiv.appendChild(bodyDivRight);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(bodyDiv);
    cardDiv.appendChild(divFooter);

    post.appendChild(cardDiv);

    // Limpiar los inputs
    document.getElementById('postForm').reset();

    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
        });

    } else {
        console.error("No se pudo encontrar el botón de publicar.");
    }
});

