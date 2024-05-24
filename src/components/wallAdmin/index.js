document.addEventListener("DOMContentLoaded", function() {
    const postWall = document.getElementById('postWall');

    if (postWall) {
        postWall.addEventListener("click", () => {
            // Capturar los valores de los inputs
            const postTittle = document.getElementById('postTittle').value;
            const postDescription = document.getElementById('floatingTextarea2').value;
            const postImg = document.getElementById('inputGroupFile02');
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

            // Generar un ID único para la publicación
            const postId = 'post-' + Date.now();

            cardDiv.id = postId;  // Asignar ID único al cardDiv

            headerDiv.innerHTML = `Posted by: (USUARIO)`;

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

            // Crear el botón de eliminar con modal
            const deleteButton = document.createElement('img');
            deleteButton.src = "/src/assets/images/eliminar.png";
            deleteButton.style.width = "35px";
            deleteButton.dataset.bsToggle = 'modal';
            deleteButton.setAttribute('type', 'button'); 
            deleteButton.dataset.bsTarget = `#modal-${postId}`;  // Asegurar que el modal tenga un ID único
            headerDiv.appendChild(deleteButton);

            // Crear el modal de eliminación
            const modalDiv = document.createElement('div');
            modalDiv.classList.add('modal', 'fade');
            modalDiv.id = `modal-${postId}`;
            modalDiv.tabIndex = -1;
            modalDiv.setAttribute('aria-labelledby', `modalLabel-${postId}`);
            modalDiv.setAttribute('aria-hidden', 'true');

            modalDiv.innerHTML = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalLabel-${postId}">Delete this post</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this post?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-post-id="${postId}">Sure</button>
                        </div>
                    </div>
                </div>
            `;

            // Agregar el modal dentro del headerDiv
            headerDiv.appendChild(modalDiv);

            // Agregar el cardDiv al contenedor de publicaciones
            post.appendChild(cardDiv);

            // Limpiar los inputs
            document.getElementById('postForm').reset();

            // Cerrar el modal de publicación
            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
            modal.hide();

            // Agregar evento de eliminación al botón "Sure" del modal
            const sureButton = modalDiv.querySelector('.btn-danger');
            sureButton.addEventListener('click', function() {
                const postId = this.dataset.postId;
                const postCard = document.getElementById(postId);

                // Eliminar la publicación del DOM
                postCard.remove();

                // Cerrar el modal
                const modalInstance = bootstrap.Modal.getInstance(modalDiv);
                modalInstance.hide();

                alert('Post deleted');
            });
        });
    } else {
        console.error("No se pudo encontrar el botón de publicar.");
    }
});
