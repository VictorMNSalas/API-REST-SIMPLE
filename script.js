function copyEndPoint(endpoint) { 
  var elementoTemporal = document.createElement("textarea");

  // Asigna el texto al elemento de texto temporal
  elementoTemporal.value = endpoint;

  // Agrega el elemento temporal al documento
  document.body.appendChild(elementoTemporal);

  // Selecciona y copia el texto del elemento temporal
  elementoTemporal.select();
  document.execCommand("copy");

  // Elimina el elemento temporal
  document.body.removeChild(elementoTemporal);

  // Puedes mostrar un mensaje de confirmación
  alert("Texto copiado al portapapeles: " + endpoint);
}
