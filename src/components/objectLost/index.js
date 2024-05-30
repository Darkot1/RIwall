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
  };

  reader.readAsDataURL(file);
});

// form

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('FormObjects');
  const InfoObject = document.getElementById('InfoObject');
  const InfoName = document.getElementById('InfoName');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const claim = document.getElementById('claim').value;
    const found = document.getElementById('found').value;

    const claimFor = `${claim}`;
    const foundIn = `${found}`

    InfoName.innerHTML = `<p>Encontrado por: ${claimFor}</p>`
    InfoObject.innerHTML = `<p>Reclamar en: ${foundIn}</p>`;

  });
});