 document.addEventListener("DOMContentLoaded", () => {
    const postcoment = document.getElementById("postcoment");
    const containerCard = document.querySelector(".card-bodyRight");
  if (postcoment) {

    postcoment.addEventListener("click", () => {
      // Capturar los valores de los inputs

      const postDescription =
        document.getElementById("floatingTextarea2"); // Cambio aquí

      // Verificar si los campos requeridos están llenos
      if (!postDescription.value) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      // Crear la publicación
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card-comment");

      const bodyDiv = document.createElement("h5");
      bodyDiv.classList.add("comment-body");

      const dateDiv = document.createElement("h3");
      dateDiv.classList.add("comment-date");

      const btnDiv = document.createElement("div")
      btnDiv.classList.add("comment-action")

      const textarea = document.createElement("textarea")
      textarea.classList.add("form-control")
      dateDiv.appendChild(textarea)
      
      const btnReply = document.createElement("button")
      btnReply.classList = "btn btn-primary"
      btnReply.textContent = "Reply";
    
   
      btnReply.addEventListener("click",()=>{
        const postDescription = document.createElement("div");
       
        // Verificar si los campos requeridos están llenos
   /*      if (!postDescription.value) {
        alert("Por favor, completa todos los campos.");
        return;
      }  */

      // Crear la publicación
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card-comment");

      const bodyDiv = document.createElement("h5");
      bodyDiv.classList.add("comment-body");

      const dateDiv = document.createElement("h3");
      dateDiv.classList.add("comment-date");

      const btnDiv = document.createElement("div")
      btnDiv.classList.add("comment-action")
      const date = new Date();
      const postDate = date.toLocaleString();

      bodyDiv.textContent = postDescription.value
      dateDiv.textContent = postDate

      btnDiv.appendChild(btnReply)

      cardDiv.appendChild(bodyDiv)
      cardDiv.appendChild(dateDiv)
      cardDiv.appendChild(btnDiv)

      containerCard.appendChild(cardDiv)
      postDescription.value = "";

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );

      modal.hide();

      });
        

      const date = new Date();
      const postDate = date.toLocaleString();

      bodyDiv.textContent = postDescription.value
      dateDiv.textContent = postDate

      btnDiv.appendChild(btnReply)

      cardDiv.appendChild(bodyDiv)
      cardDiv.appendChild(dateDiv)
      cardDiv.appendChild(btnDiv)

      containerCard.appendChild(cardDiv)

    
      // Limpiar los inputs
      postDescription.value = "";

      // Cerrar el modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    });
  } else {
    console.error("No se pudo encontrar el botón de publicar.");
  }

});



/* 
document.addEventListener("DOMContentLoaded", () => {
  const postComent = document.getElementById("postcoment");
  const containerCard = document.querySelector(".card-bodyRight");
  const postDescription = document.getElementById("floatingTextarea2");

  postComent.addEventListener("click", () => {
    if (!postDescription.value) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    containerCard.innerHTML += `
        <div class="card-comment">
          <h5 class="comment-body">${postDescription.value}</h5>  
          <h3 class="comment-date">${new Date().toLocaleString()}</h3> 
            
          <div class="comment-action">   
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Reply
            </button>
          </div> 
        </div>
    `;

    postDescription.value = "";
  });
});
 */