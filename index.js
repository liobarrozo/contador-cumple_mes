// Configuramos la fecha objetivo inicial
const targetDate = new Date("2025-01-14T00:00:00").getTime();

let lastValues = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
};

let meses = 10; // Variable global para meses
let ejecucionMensual = 0; // Control para la ejecución mensual
let stopCounter = false; // Variable para detener el contador

function updateCounter() {
    if (stopCounter) return; // Detenemos la ejecución si corresponde

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Si es el día 14 y el tiempo restante es 0 o menor, detenemos el contador
    if (distance <= 0 && new Date().getDate() === 14) {
        stopCounter = true;
        setToZero();
        changeH2(meses); // Actualizamos el texto del H2
        setTimeout(() => {
            stopCounter = false;
            targetDate += 30 * 24 * 60 * 60 * 1000; // Actualiza la fecha objetivo al próximo mes
        }, calculateTimeUntilMidnight());
        return;
    }

    // Actualizamos los dígitos solo si hay un cambio
    updateDigit("days", days);
    updateDigit("hours", hours);
    updateDigit("minutes", minutes);
    updateDigit("seconds", seconds);

    meses = updateMeses(); // Actualizamos el valor de meses
}

function setToZero() {
    updateDigit("days", 0);
    updateDigit("hours", 0);
    updateDigit("minutes", 0);
    updateDigit("seconds", 0);
}

function calculateTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    return midnight - now;
}

function updateDigit(id, value) {
    const digitElement = document.getElementById(id);
    const newValue = value < 10 ? "0" + value : value;

    if (lastValues[id] !== newValue) {
        digitElement.classList.add("flip");
        digitElement.innerText = newValue;

        setTimeout(() => {
            digitElement.classList.remove("flip");
        }, 600);

        lastValues[id] = newValue;
    }
}

function changeH2(meses) {
    const diaDelMes = new Date().getDate();
    const h2 = document.querySelector('h2');

    if (diaDelMes === 14) {
        h2.textContent = `¡Felices ${meses} meses!`;
    }
}

function updateMeses() {
    const diaDelMes = new Date().getDate();

    if (diaDelMes === 14 && ejecucionMensual === 0) {
        meses++;
        ejecucionMensual = 1;
    } else if (diaDelMes === 1) {
        ejecucionMensual = 0;
    }

    return meses;
}

// Iniciar el contador cada segundo
setInterval(updateCounter, 1000);
