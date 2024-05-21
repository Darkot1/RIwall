 
  let btnOpenPopup = document.getElementById('btnOpenPopup');
  let popup = document.getElementById('popup');
  let popupContent = document.getElementById('popup-content')
  let colors = ['#5ACCA4', '#EAA2FC', '#FE654F'];
  // Evento de clic para abrir el popup
  btnOpenPopup.addEventListener('click', function() {
    popup.style.display = 'block';

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    popupContent.style.backgroundColor = randomColor;
  });

  // Cerrar el popup 
  window.addEventListener('click', function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });

  //popup Wall 
  let btnOpenPopup2 = document.getElementById('btnOpenPopup2');
  let popup2 = document.getElementById('popup2');
  let popupContent2 = document.getElementById('popup-content2')
  // Evento de clic para abrir el popup
  btnOpenPopup2.addEventListener('click', function() {
    popup2.style.display = 'block';

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    popupContent2.style.backgroundColor = randomColor;
  });

  // Cerrar el popup 
  window.addEventListener('click', function(event) {
    if (event.target == popup2) {
      popup2.style.display = 'none';
    }
  });