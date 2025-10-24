// main.js - Código del curso JavaScript.info
// Nombre: [Tu Nombre Completo]
// Curso: [Tu Grado y Grupo]
// Fecha: [Fecha Actual]

console.log("main.js cargado correctamente.");
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // TEMA: 12.1 Generadores
    // Funciones que pausan y reanudan su ejecución con `yield`, creando iteradores.
    // Aprendí: Crear iteradores personalizados de forma sencilla.
    // =========================================================================
    console.log("--- 12.1 Generadores ---");
    const output12_1 = document.getElementById('output-12-1');

    function* idGenerator() {
        let id = 1;
        while (true) {
            yield id++;
        }
    }

    const generator = idGenerator();
    let idContent = "<h3>Ejemplo de Generadores (idGenerator)</h3>";
    for (let i = 0; i < 3; i++) {
        idContent += `<p>ID: ${generator.next().value}</p>`;
    }
    if (output12_1) output12_1.innerHTML = idContent;
    console.log("12.1 Generadores: IDs generados por consola:", generator.next().value, generator.next().value);

    // Generador Fibonacci
    function* fibonacciGenerator() {
        let a = 0,
            b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
    const fibGen = fibonacciGenerator();
    console.log("12.1 Generadores - Fibonacci (primeros 5):", fibGen.next().value, fibGen.next().value, fibGen.next().value, fibGen.next().value, fibGen.next().value);

    // =========================================================================
    // TEMA: 12.2 Async iteration and generators
    // Iteración y generadores asíncronos para secuencias de valores resueltas de forma asíncrona.
    // Aprendí: Uso de `for await...of` y `async function*`.
    // =========================================================================
    console.log("\n--- 12.2 Async iteration and generators ---");
    const output12_2 = document.getElementById('output-12-2');

    async function* asyncNumberGenerator() {
        let num = 1;
        while (num <= 5) {
            await new Promise(resolve => setTimeout(resolve, 300)); // Simula retardo
            yield num++;
        }
    }

    if (output12_2) {
        output12_2.innerHTML = "<h3>Ejemplo de Generadores Asíncronos</h3><p>Generando números asíncronos...</p>";

        (async () => {
            let numContent = "<p>Números generados:</p><ul>";
            for await (let number of asyncNumberGenerator()) {
                numContent += `<li>${number}</li>`;
                output12_2.innerHTML = "<h3>Ejemplo de Generadores Asíncronos</h3>" + numContent; // Actualizar UI
                console.log("12.2 Async iteration: Número:", number);
            }
            numContent += "</ul><p>Generación asíncrona completada.</p>";
            output12_2.innerHTML = "<h3>Ejemplo de Generadores Asíncronos</h3>" + numContent;
        })();
    } else {
        console.warn("12.2 Async iteration: Elemento 'output-12-2' no encontrado.");
    }
});