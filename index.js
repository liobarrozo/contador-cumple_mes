const targetDate = new Date("2025-01-14T00:00:00").getTime();

let lastValues = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
};

function updateCounter() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizamos los dígitos solo si hay un cambio
    updateDigit("days", days);
    updateDigit("hours", hours);
    updateDigit("minutes", minutes);
    updateDigit("seconds", seconds);
}

function updateDigit(id, value) {
    const digitElement = document.getElementById(id);
    const newValue = value < 10 ? "0" + value : value;

    // Solo aplicamos el efecto si el valor ha cambiado
    if (lastValues[id] !== newValue) {
        digitElement.classList.add("flip");
        digitElement.innerText = newValue;

        // Removemos la clase flip después de la animación
        setTimeout(() => {
            digitElement.classList.remove("flip");
        }, 600); // Debe coincidir con la duración de la animación

        // Actualizamos el último valor
        lastValues[id] = newValue;
    }
}

setInterval(updateCounter, 1000);
