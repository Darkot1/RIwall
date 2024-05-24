const btnOpenPopups = document.querySelectorAll('.btnOpenPopup');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');

// recorrer cada targeta para que se puedo abrir el popup en cada una
btnOpenPopups.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'block'; 
   });
});

// Cerrar el popup
window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});



//popup Wall 

const btnOpenPopups2 = document.querySelectorAll('.btnOpenPopup2');
const popup2 = document.getElementById('popup2');
const popupContent2 = document.getElementById('popup-content2');

// recorrer cada targeta para que se puedo abrir el popup en cada una
btnOpenPopups2.forEach(btn => {
  btn.addEventListener('click', () => {
    popup2.style.display = 'block'; 
   });
});

// Cerrar el popup
window.addEventListener('click', (e) => {
    if (e.target == popup2) {
        popup2.style.display = 'none';
    }
});


//Script para cerrar sesion / eliminar datos del localstorage
  const logout = document.querySelector("#logout");
  logout.addEventListener("click",() =>{
      alert("cerro sesion.")
      window.location.href = './src/components/singIn'
  })