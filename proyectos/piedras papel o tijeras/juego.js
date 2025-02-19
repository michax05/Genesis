// Obtener los elementos del DOM
const jugadorEleccion = document.getElementById("jugador-eleccion");
const computadoraEleccion = document.getElementById("computadora-eleccion");
const resultado = document.getElementById("resultado");
const botones = document.querySelectorAll("button");
const reiniciarBtn = document.getElementById("reiniciar");

// Opciones
const opciones = ["piedra", "papel", "tijeras"];

// Función para obtener la elección de la computadora
function obtenerEleccionComputadora() {
    const aleatoria = Math.floor(Math.random() * 3);
    return opciones[aleatoria];
}

// Función para determinar el ganador
function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "¡Es un empate!";
    }
    if (
        (jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    }
    return "¡Perdiste!";
}

// Función para manejar la elección del jugador
function manejarEleccion(jugador) {
    const computadora = obtenerEleccionComputadora();
    jugadorEleccion.textContent = jugador;
    computadoraEleccion.textContent = computadora;

    const resultadoJuego = determinarGanador(jugador, computadora);
    resultado.textContent = resultadoJuego;
}

// Función para manejar la elección aleatoria
function manejarEleccionAleatoria() {
    const aleatoria = opciones[Math.floor(Math.random() * 3)];
    manejarEleccion(aleatoria);
}

// Asignar eventos a los botones
botones[0].addEventListener("click", () => manejarEleccion("piedra"));
botones[1].addEventListener("click", () => manejarEleccion("papel"));
botones[2].addEventListener("click", () => manejarEleccion("tijeras"));
botones[3].addEventListener("click", manejarEleccionAleatoria);

// Función para reiniciar el juego
reiniciarBtn.addEventListener("click", () => {
    jugadorEleccion.textContent = "";
    computadoraEleccion.textContent = "";
    resultado.textContent = "";
});
