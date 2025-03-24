function verificarRespuestas() {
  const respuesta1 = document.getElementById("pregunta1").value.toLowerCase();
  const respuesta2 = document.getElementById("pregunta2").value.toLowerCase();

  const respuestaCorrecta1 = "1985";
  const respuestaCorrecta2 = "morado";

  if (respuesta1 === respuestaCorrecta1 && respuesta2 === respuestaCorrecta2) {
    document.getElementById("contenido-revelado").style.display = "block";
    alert("Respuestas correctas!");
    document.getElementById("presentation").style.display = "none";
    document.getElementById("formulario-gift").style.display = "none";
    document.getElementById("flores-amarillas.mp3").play();
  } else {
    alert("Jajajaj respuestas Incorrectas. Intenta de nuevo.");
  }
}
