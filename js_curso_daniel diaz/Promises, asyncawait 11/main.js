// main.js - Código del curso JavaScript.info
// Nombre: [Tu Nombre Completo]
// Curso: [Tu Grado y Grupo]
// Fecha: [Fecha Actual]

console.log("main.js cargado correctamente.");
document.addEventListener('DOMContentLoaded', () => {
    // ======================================================================================
    // TEMA: 3.1 Depuración en el navegador
    // Uso de `console.log()` para depuración. Fundamenta para entender el flujo.
    // Aprendí: `console.log` es clave para el debugging.
    console.log("--- 3.1 Depuración ---");
    console.log("3.1 Depuración: Mensaje de ejemplo.");
    let debugVariable = "Hola desde depuración!";
    console.log("3.1 Depuración: Valor de debugVariable:", debugVariable);
    console.warn("3.1 Depuración: Una advertencia.");
    console.error("3.1 Depuración: Un error.");
    document.getElementById('output-3-1').innerHTML = '<p>Revisa la consola (F12) para los mensajes de depuración.</p>';
    // TEMA: 11.1 Introducción: devoluciones de llamadas (Callbacks)
    // Demuestra asincronía con callbacks y el "Callback Hell".
    // Aprendí: Callbacks para asincronía y sus desventajas.
    console.log("\n--- 11.1 Callbacks ---");
    const output11_1 = document.getElementById('output-11-1');
    function simulateAsyncOp(message, delay, callback) {
        setTimeout(() => {
            console.log(message);
            output11_1.innerHTML += `<p>${message}</p>`;
            callback();
        }, delay);
    }
    // Ejemplo de Callback Hell
    output11_1.innerHTML += '<p>Iniciando Callback Hell...</p>';
    simulateAsyncOp('11.1 Callbacks: Paso 1 completado', 1000, () => {
        simulateAsyncOp('11.1 Callbacks: Paso 2 completado', 800, () => {
            simulateAsyncOp('11.1 Callbacks: Paso 3 completado', 500, () => {
                console.log('11.1 Callbacks: Todas las operaciones completadas!');
                output11_1.innerHTML += '<p>Todas las operaciones completadas!</p>';
            });
        });
    });
    // TEMA: 11.2 Promesa
    // Las Promesas gestionan la asincronía de forma más estructurada (pending, fulfilled, rejected).
    // Aprendí: Estructura de una Promesa y uso de `.then()` y `.catch()`.
    console.log("\n--- 11.2 Promesa ---");
    const output11_2 = document.getElementById('output-11-2');

    const myPromise = new Promise((resolve, reject) => {
        output11_2.innerHTML += '<p>Promesa en estado "pending"</p>';
        setTimeout(() => {
            if (Math.random() > 0.5) resolve("Éxito en Promesa.");
            else reject(new Error("Fallo en Promesa."));
        }, 2000);
    });
    myPromise
        .then(result => {
            console.log('11.2 Promesa: Éxito:', result);
            output11_2.innerHTML += `<p>✅ Éxito: ${result}</p>`;
        })
        .catch(error => {
            console.error('11.2 Promesa: Error:', error.message);
            output11_2.innerHTML += `<p>❌ Error: ${error.message}</p>`;
        })
        .finally(() => {
            console.log('11.2 Promesa: Promesa finalizada.');
            output11_2.innerHTML += '<p>Promesa finalizada.</p>';
        });
    // TEMA: 11.3 Promesas encadenadas
    // Encadenar operaciones asíncronas con `.then()` para un flujo secuencial limpio.
    // Aprendí: Ejecución secuencial de promesas, pasando resultados.
    console.log("\n--- 11.3 Promesas encadenadas ---");
    const output11_3 = document.getElementById('output-11-3')
    function fetchStep(name, delay) {
        return new Promise(resolve => {
            output11_3.innerHTML += `<p>Buscando: ${name}...</p>`;
            setTimeout(() => resolve(`Datos de ${name}`), delay);
        });
    }
    fetchStep("Usuario", 1000)
        .then(userData => {
            console.log('11.3 Cadena:', userData);
            output11_3.innerHTML += `<p>✅ ${userData}</p>`;
            return fetchStep("Posts", 800);
        })
        .then(postData => {
            console.log('11.3 Cadena:', postData);
            output11_3.innerHTML += `<p>✅ ${postData}</p>`;
            return 'Cadena completada';
        })
        .then(finalMsg => {
            console.log('11.3 Cadena:', finalMsg);
            output11_3.innerHTML += `<p>✅ ${finalMsg}</p>`;
        })
        .catch(error => {
            console.error('11.3 Cadena: Error:', error.message);
            output11_3.innerHTML += `<p>❌ Error en cadena: ${error.message}</p>`;
        });
    // TEMA: 11.4 Manejo de errores con promesas
    // Captura de errores en cadenas de promesas con `.catch()`.
    // Aprendí: `.catch()` y la propagación de errores.
    console.log("\n--- 11.4 Manejo de errores ---");
    const output11_4 = document.getElementById('output-11-4');
    function riskyPromise(shouldFail) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) reject(new Error("Fallo riesgoso!"));
                else resolve("Éxito riesgoso.");
            }, 1000);
        });
    }
    output11_4.innerHTML += '<p>Ejemplo de error:</p>';
    riskyPromise(true)
        .then(res => output11_4.innerHTML += `<p>✅ Éxito: ${res}</p>`)
        .catch(error => {
            console.error('11.4 Error: Capturado:', error.message);
            output11_4.innerHTML += `<p>❌ Error capturado: ${error.message}</p>`;
            return 'Recuperado del error'; // Permite que la cadena continúe
        })
        .then(finalRes => {
            console.log('11.4 Error: Después del catch:', finalRes);
            output11_4.innerHTML += `<p>Resultado final: ${finalRes}</p>`;
        });
    // TEMA: 11.5 API de promesas
    // Métodos estáticos para trabajar con múltiples promesas: `all`, `race`, `allSettled`, `any`.
    // Aprendí: Gestión de colecciones de promesas para diversos escenarios.
    console.log("\n--- 11.5 API de promesas ---");
    const output11_5 = document.getElementById('output-11-5');
    const pA = new Promise(r => setTimeout(() => r('A'), 1000));
    const pB = new Promise(r => setTimeout(() => r('B'), 500));
    const pFail = new Promise((_, rej) => setTimeout(() => rej(new Error('Fallo!')), 700));
    output11_5.innerHTML += '<p>Revisa la consola para los resultados de Promise API.</p>';
    // Promise.all
    Promise.all([pA, pB])
        .then(results => console.log('11.5 API: all éxito:', results)) // ['A', 'B']
        .catch(error => console.error('11.5 API: all error:', error.message));
    Promise.all([pA, pFail])
        .then(results => console.log('11.5 API: all con fallo (no se ve):', results))
        .catch(error => console.error('11.5 API: all con fallo:', error.message)); // Fallo!
    // Promise.race
    Promise.race([pA, pB, pFail])
        .then(result => console.log('11.5 API: race (primero):', result)) // 'B'
        .catch(error => console.error('11.5 API: race (no se ve):', error.message));
    // Promise.allSettled
    Promise.allSettled([pA, pB, pFail])
        .then(results => {
            console.log('11.5 API: allSettled (todos):', results);
            output11_5.innerHTML += `<p>allSettled: ${results.map(r => r.status).join(', ')}</p>`;
        });
    // Promise.any
    Promise.any([pFail, pA, pB])
        .then(result => console.log('11.5 API: any (primero éxito):', result)) // 'B'
        .catch(error => console.error('11.5 API: any (no se ve):', error.message));
    // TEMA: 11.6 Promisificación
    // Conversión de funciones con callbacks a Promesas.
    // Aprendí: Adaptar funciones legacy a Promesas.
    console.log("\n--- 11.6 Promisificación ---");
    const output11_6 = document.getElementById('output-11-6');
    function oldCallbackFunc(value, cb) {
        setTimeout(() => {
            if (value === 'error') cb(new Error('Fallo callback!'));
            else cb(null, `Datos de ${value}`);
        }, 1000);
    }
    const promisifiedFunc = (value) => {
        return new Promise((resolve, reject) => {
            oldCallbackFunc(value, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    };
    promisifiedFunc('éxito')
        .then(res => {
            console.log('11.6 Promisificación: Éxito:', res);
            output11_6.innerHTML += `<p>✅ Promisificado: ${res}</p>`;
        })
        .catch(err => console.error('11.6 Promisificación: Error (no se ve):', err.message));

    promisifiedFunc('error')
        .then(res => console.log('11.6 Promisificación: Éxito (no se ve):', res))
        .catch(err => {
            console.error('11.6 Promisificación: Error esperado:', err.message);
            output11_6.innerHTML += `<p>❌ Promisificado: ${err.message}</p>`;
        });
    // TEMA: 11.7 Microtareas
    // El Event Loop: microtareas (promesas) antes que macrotareas (setTimeout).
    // Aprendí: Orden de ejecución en el Event Loop.
    console.log("\n--- 11.7 Microtareas ---");
    const output11_7 = document.getElementById('output-11-7');
    output11_7.innerHTML += '<p>Ver la consola para el orden: Sincrónico -> Microtareas -> Macrotareas.</p>';
    console.log('11.7 Microtareas: Sincrónico: Inicio');
    setTimeout(() => {
        console.log('11.7 Microtareas: Macrotarea: setTimeout');
    }, 0);
    Promise.resolve().then(() => {
        console.log('11.7 Microtareas: Microtarea: Promise.then 1');
    }).then(() => {
        console.log('11.7 Microtareas: Microtarea: Promise.then 2');
    });
    console.log('11.7 Microtareas: Sincrónico: Fin');
    // TEMA: 11.8 Asíncrono/espera (async/await)
    // Sintaxis moderna para Promesas, haciendo el código asíncrono legible como síncrono.
    // Aprendí: Simplificar asincronía con async/await y `try...catch`.
    console.log("\n--- 11.8 Async/Await ---");
    const output11_8 = document.getElementById('output-11-8');

    function delayResolve(value, delay, shouldFail = false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) reject(new Error(`Fallo en ${value}`));