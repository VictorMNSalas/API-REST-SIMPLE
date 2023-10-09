function copyEndPoint(endpoint) {

  document.title = '(1) Copied ✅';

  let elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = endpoint;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);


  let alertElement = document.createElement("div");
  alertElement.id = "alertBox";
  alertElement.textContent = "The endpoint has been copied to the clipboard ✅";
  document.body.appendChild(alertElement);

  setTimeout(() => {
    document.title = 'API Generate';
    document.body.removeChild(alertElement);
  }, 6000)
 
}
