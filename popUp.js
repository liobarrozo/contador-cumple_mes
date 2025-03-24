function mostrarPopup() {
  const respuesta = confirm("Tu regalo está bloqueado");
  if (respuesta) {
    alert("Contestá las preguntas para desbloquearlo!");
    document.getElementById("formulario-gift").style.display = "flex";
  } else {
    alert("Cancelaste la acción.");
  }
}

function cerrarPopup() {
  document.getElementById("popUp").style.display = "none";
}
