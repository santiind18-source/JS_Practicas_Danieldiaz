// TEMA 3.1: Depuración con console.log() y debugger;
function calcularSuma(a, b) {
    let resultado = a + b;
    console.log(`Depuración 3.1: Sumando ${a} y ${b}.`); // Info
    // debugger; // Descomentar para pausar aquí
    return resultado;
}
let num1 = 5, num2 = 10;
let sumaTotal = calcularSuma(num1, num2);
console.log(`Depuración 3.1: Suma total: ${sumaTotal}`);
document.getElementById('output-3-1').innerHTML = `<p>Suma de ${num1} y ${num2}: ${sumaTotal}. Revisa consola (F12).</p>`;

// TEMA 3.2: Estilo de codificación
// Un buen estilo (indentación, nombres claros, espacios) mejora legibilidad.
function obtenerDatosProcesados(datoEntrada) {
    const factor = 2;
    let resultado = datoEntrada * factor;
    return resultado;
}
const valorInicial = 7;
const valorProcesado = obtenerDatosProcesados(valorInicial);
document.getElementById('code-3-2').textContent = `
// Buen estilo:
function obtenerDatosProcesados(datoEntrada) {
    const factor = 2;
    let resultado = datoEntrada * factor;
    return resultado;
}`;
document.getElementById('output-3-2').innerHTML = `<p>Valor inicial: ${valorInicial}, procesado: ${valorProcesado}.</p>`;

// TEMA 3.3: Comentarios
// Explican el "por qué" (// una línea, /* multi-línea */, /** JSDoc */).
/** Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma. */
function sumarNumeros(a, b) { return a + b; }
const sumando1 = 8, sumando2 = 12;
const resultadoSuma = sumarNumeros(sumando1, sumando2);
document.getElementById('output-3-3').innerHTML += `<p>Suma de ${sumando1} y ${sumando2}: ${resultadoSuma}.</p>`;

// TEMA 3.4: Código ninja
// Código conciso pero poco legible (evitar). Legibilidad > concisión extrema.
const calcularTotalNinja = (p, c) => p * (1 + c); // Ejemplo "ninja"
function calcularPrecioFinal(precioBase, impuestoPorcentaje) { // Más legible
    const tasaImpuesto = impuestoPorcentaje / 100;
    return precioBase * (1 + tasaImpuesto);
}
const precioProducto = 100, impuesto = 21;
const totalNinja = calcularTotalNinja(precioProducto, impuesto / 100);
const totalLegible = calcularPrecioFinal(precioProducto, impuesto);
document.getElementById('code-3-4').textContent = `
// Ninja: const calcularTotalNinja = (p, c) => p * (1 + c);
// Legible: function calcularPrecioFinal(...) {...}`;
document.getElementById('output-3-4').innerHTML = `<p>Precio ninja: ${totalNinja.toFixed(2)}, legible: ${totalLegible.toFixed(2)}.</p>`;

// TEMA 3.5: Pruebas automatizadas con Mocha (simulación)
// Pruebas aseguran que el código funcione y evitan errores.
function esPar(numero) { return numero % 2 === 0; }
const output35 = document.getElementById('output-3-5');
output35.innerHTML = '<h3>Simulación de pruebas: `esPar()`</h3>';
function runTest(desc, func) {
    try { func(); output35.innerHTML += `<p style="color: green;">✓ ${desc}</p>`; }
    catch (e) { output35.innerHTML += `<p style="color: red;">✗ ${desc} - ${e.message}</p>`; }
}
runTest('esPar(2) es true', () => { if (!esPar(2)) throw new Error('Falló para 2'); });
runTest('esPar(3) es false', () => { if (esPar(3)) throw new Error('Falló para 3'); });
output35.innerHTML += '<p>Las pruebas reales usarían frameworks como Mocha/Chai.</p>';

// TEMA 3.6: Polyfills y transpiladores
// Aseguran compatibilidad de JS moderno con navegadores antiguos.
// Polyfills: implementan funcionalidades. Transpiladores (Babel): convierten código (ES6+ a ES5).
const frutas = ['manzana', 'banana'];
let mensaje36 = frutas.includes('banana') ? '<p>Array incluye "banana" (moderno).</p>' : '<p>Array NO incluye "banana" (sin polyfill).</p>';
const miFuncionFlecha = () => "Función flecha.";
mensaje36 += `<p>${miFuncionFlecha()}</p><p>Transpiladores adaptan código moderno a ES5.</p>`;
document.getElementById('output-3-6').innerHTML = mensaje36;

// TEMA 3.7: Linters
// Herramientas como ESLint analizan el código para encontrar errores de estilo y posibles bugs.
// Ayudan a mantener un código consistente y de alta calidad.
const LINTER_EXAMPLE = "Este código podría ser analizado por un linter.";
let linterOutput = `<p>Un linter (ej. ESLint) verifica el estilo y errores en el código.</p>`;
document.getElementById('output-3-7').innerHTML = linterOutput;

// TEMA 3.8: Recolección de basura (Garbage Collection)
// Proceso automático en JS para liberar memoria ocupada por objetos que ya no se usan.
// Evita fugas de memoria y optimiza recursos.
let obj = { nombre: "temporal" };
obj = null; // El objeto original ahora es candidato para GC.
let gcOutput = `<p>El Recolector de Basura (GC) libera memoria de objetos ya no referenciados.</p>`;
document.getElementById('output-3-8').innerHTML = gcOutput;

// TEMA 3.9: Microtareas y el ciclo de eventos (Event Loop)
// Explica cómo JS maneja tareas asíncronas. Event Loop procesa la cola de llamadas,
// cola de microtareas (promesas, MutationObserver) y cola de tareas (setTimeout, eventos).
let eventLoopOutput = '<p>El Event Loop gestiona tareas asíncronas (microtareas > tareas).</p>';
Promise.resolve().then(() => {
    eventLoopOutput += '<p>  - Microtarea de promesa ejecutada.</p>';
    document.getElementById('output-3-9').innerHTML = eventLoopOutput;
});
setTimeout(() => {
    eventLoopOutput += '<p>  - Tarea de setTimeout ejecutada.</p>';
    document.getElementById('output-3-9').innerHTML = eventLoopOutput;
}, 0);
eventLoopOutput += '<p>Inicio de script sincrónico.</p>';
document.getElementById('output-3-9').innerHTML = eventLoopOutput;


// TEMA 3.10: Canvas API
// Permite dibujar gráficos 2D en una página web usando JavaScript.
// Ideal para animaciones, juegos, visualización de datos.
const canvas = document.getElementById('myCanvas');
if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 50, 50); // Dibuja un cuadrado azul
    ctx.beginPath();
    ctx.arc(85, 35, 25, 0, Math.PI * 2, true); // Dibuja un círculo
    ctx.fillStyle = 'red';
    ctx.fill();
    document.getElementById('output-3-10').innerHTML = `<p>El Canvas API dibuja gráficos 2D (cuadrado azul, círculo rojo).</p>`;
} else {
    document.getElementById('output-3-10').innerHTML = `<p>Canvas no soportado o encontrado.</p>`;
}


// TEMA 3.11: Web Components
// Un conjunto de tecnologías (Custom Elements, Shadow DOM, HTML Templates)
// que permiten crear componentes de interfaz de usuario reutilizables y encapsulados.
// <my-componente></my-componente>
class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<style>p{color: green;}</style><p>¡Hola desde un Web Component!</p>`;
    }
}
customElements.define('my-custom-element', MyCustomElement);
document.getElementById('output-3-11').innerHTML = `<my-custom-element></my-custom-element><p>Web Components permiten crear elementos UI reutilizables y encapsulados.</p>`;


// TEMA 3.12: Fetch API
// Una interfaz moderna para hacer solicitudes de red (HTTP) de manera asíncrona.
// Reemplaza a XMLHttpRequest, usando Promesas para un manejo más limpio.
const fetchOutput = document.getElementById('output-3-12');
fetchOutput.innerHTML = `<p>Usando Fetch API para obtener datos...</p>`;

fetch('https://jsonplaceholder.typicode.com/todos/1') // Ejemplo de API pública
    .then(response => response.json())
    .then(data => {
        fetchOutput.innerHTML += `<p>Fetch API: Título del TODO: "${data.title}"</p>`;
    })
    .catch(error => {
        fetchOutput.innerHTML += `<p style="color: red;">Error con Fetch: ${error}</p>`;
    });
fetchOutput.innerHTML += `<p>Fetch API realiza solicitudes de red de forma asíncrona (Promesas).</p>`;