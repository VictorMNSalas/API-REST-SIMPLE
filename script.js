function copyEndPoint(endpoint) {

  document.title = '(1) Copied ✅';


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


  let alertElement = document.createElement("div");
  alertElement.id = "alertBox";
  alertElement.textContent = "The endpoint has been copied to the clipboard ✅";
  document.body.appendChild(alertElement);

  setTimeout(() => {
    document.title = 'API Generate';
    document.body.removeChild(alertElement);
  }, 6000)

  // Puedes mostrar un mensaje de confirmación
  //alert("Texto copiado al portapapeles: " + endpoint);
}
