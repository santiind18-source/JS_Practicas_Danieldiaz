// main.js - Código del curso JavaScript.info
// Nombre: [Tu Nombre Completo]
// Curso: [Tu Grado y Grupo]
// Fecha: [Fecha Actual]

console.log("main.js cargado correctamente.");
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // TEMA: 13.1 Módulos, introducción
    // Permite dividir el código en archivos para mejor organización y reutilización.
    // Cada módulo tiene su propio ámbito privado, evitando conflictos globales.
    // Se activa con `<script type="module">` en HTML.
    // Aprendí: Los módulos mejoran la estructura del código y evitan colisiones.
    // =========================================================================
    console.log("--- 13.1 Módulos, introducción ---");
    console.log("Módulos: código organizado, ámbito privado, `type='module'`.");
    const mensajeIntro = "Variable local a main.js, no visible globalmente.";
    console.log(mensajeIntro); // Visible solo aquí.

    // =========================================================================
    // TEMA: 13.2 Exportación e importación
    // `export` hace elementos accesibles; `import` los utiliza.
    // Exportaciones nombradas (`{}`) o por defecto (`default`).
    // Aprendí: Compartir código entre módulos de forma controlada.
    // =========================================================================
    console.log("\n--- 13.2 Exportación e importación ---");
    const output13_2 = document.getElementById('exportacion-importacion-output');

    // Importaciones nombradas desde moduleA.js
    // import {
        nombreModuloA,
        saludarDesdeModuloA,
        contadorModuloA
    // } from './moduleA.js';l

    console.log(`[Importado Nombrado] Constante: ${nombreModuloA}`);
    output13_2.innerHTML += `<p>Constante: ${nombreModuloA}</p>`;

    const saludo = saludarDesdeModuloA("Usuario");
    console.log(`[Importado Nombrado] Función: ${saludo}`);
    output13_2.innerHTML += `<p>Función: ${saludo}</p>`;

    // Importaciones de primitivos son copias
    console.log(`[Importado Nombrado] Contador (copia): ${contadorModuloA}`);

    // Importación por defecto (clase Producto de moduleA.js)
    // import MiClaseProducto from './moduleA.js';l
    const miProducto = new MiClaseProducto("Monitor", 250);
    console.log(`[Importado por Defecto] Clase: ${miProducto.getInfo()}`);
    output13_2.innerHTML += `<p>Clase (por defecto): ${miProducto.getInfo()}</p>`;


    // =========================================================================
    // TEMA: 13.3 Importaciones dinámicas
    // Carga módulos en tiempo de ejecución usando `import()`, que devuelve una Promesa.
    // Ideal para `lazy loading` y optimización.
    // Aprendí: Cargar módulos condicionalmente y a demanda.
    // =========================================================================
    console.log("\n--- 13.3 Importaciones dinámicas ---");
    const cargarModuloBtn = document.getElementById('cargarModuloBtn');
    const dynamicOutput = document.getElementById('importaciones-dinamicas-output');

    if (cargarModuloBtn && dynamicOutput) {
        cargarModuloBtn.addEventListener('click', async () => {
            dynamicOutput.innerHTML = "Cargando módulo dinámicamente...";
            console.log("Intentando cargar 'dynamicModule.js'...");

            try {
                const moduloDinamico = await import('./dynamicModule.js');

                dynamicOutput.innerHTML = `Módulo dinámico cargado!<br>`;
                dynamicOutput.innerHTML += `Mensaje: <strong>${moduloDinamico.mensajeDinamico}</strong><br>`;
                dynamicOutput.innerHTML += `Sumar(5, 3): <strong>${moduloDinamico.sumar(5, 3)}</strong><br>`;

                // Acceso a exportación por defecto
                if (moduloDinamico.default) {
                    const instanciaDinamica = new moduloDinamico.default("Artículo Dinámico");
                    dynamicOutput.innerHTML += `Instancia: <strong>${instanciaDinamica.obtenerNombre()}</strong>`;
                }

                console.log("Módulo dinámico cargado y ejecutado.", moduloDinamico);

            } catch (error) {
                dynamicOutput.innerHTML = `<span style="color: red;">Error al cargar módulo: ${error.message}</span>`;
                console.error("Error al cargar módulo dinámico:", error);
            }
        });
    } else {
        console.warn("Elementos HTML para 13.3 no encontrados (cargarModuloBtn o importaciones-dinamicas-output).");
    }
});