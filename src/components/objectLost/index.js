// img

const imageInput = document.getElementById('image-input');
const uploadButton = document.getElementById('upload-button');
const imageContainer = document.getElementById('image-container');
const uploadedImage = document.getElementById('uploaded-image');

let uploadedImages = [];

uploadButton.addEventListener('click', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const imageData = reader.result;
    uploadedImages.push(imageData);
    uploadedImage.src = imageData;
    imageContainer.style.backgroundImage = `url(${imageData})`;
  };

  reader.readAsDataURL(file);
});

// form

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('nameForm');
  const InfoObject = document.getElementById('displayInfo');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const fullName = `${firstName}`;
    const seconName = `${lastName}`

    InfoObject.innerHTML = `<p>Encontrado por: ${fullName}</p>`;
    InfoObject.innerHTML = `<p>Reclamar en: ${seconName}</p>`;
  });
});
