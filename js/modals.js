// Variables para manejar los modales
const infoModal = document.getElementById("infoModal");
const detailsModal = document.getElementById("detailsModal");
const closeButtons = document.getElementsByClassName("close");
const responsesContainer = document.getElementById('responsesContainer');
const detailsContent = document.getElementById("detailsContent");

// Manejo de los botones de cerrar
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    this.parentElement.parentElement.style.display = "none";
  };
}

// Función para agregar una nueva respuesta
function addResponse(formData) {
  const participantName = formData.get('nombre');
  const congregation = formData.get('congregacion');

  // Crear el elemento para mostrar el nombre
  const nameElement = document.createElement("p");
  nameElement.className = "participant-name";
  nameElement.textContent = participantName;
  nameElement.onclick = function () {
    showDetails(formData);
  };

  // Insertar el nombre en el contenedor de respuestas
  responsesContainer.appendChild(nameElement);
  
  // Mostrar la ventana emergente con los nombres
  infoModal.style.display = "block";
}

// Función para mostrar los detalles de un participante
function showDetails(formData) {
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const mensaje = formData.get('mensaje');
  // Ignorar la congregación en la segunda ventana emergente

  // Mostrar los detalles en la ventana emergente de detalles
  detailsContent.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mensaje:</strong> ${mensaje}</p>
  `;

  // Mostrar la segunda ventana emergente
  detailsModal.style.display = "block";
}

// Manejo del envío del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Recopilar los datos del formulario
  const formData = new FormData(formulario);

  // Agregar la respuesta al modal
  addResponse(formData);
});
