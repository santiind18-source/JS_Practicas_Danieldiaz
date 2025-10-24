// main.js - Código del curso JavaScript.info
// Nombre: [Tu Nombre Completo]
// Curso: [Tu Grado y Grupo]
// Fecha: [Fecha Actual]

console.log("main.js cargado correctamente.");
document.addEventListener('DOMContentLoaded', () => {

    // Helper para actualizar el DOM y la consola
    const updateOutput = (id, message, isError = false) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML += `<p style="${isError ? 'color: red;' : ''}">${message}</p>`;
        }
        if (isError) console.error(message);
        else console.log(message);
    };

    // =========================================================================
    // TEMA: 14.1 Proxy y Reflejo (Reflect)
    // `Proxy` intercepta operaciones en objetos; `Reflect` provee operaciones por defecto.
    // Aprendí: Controlar y observar el comportamiento de los objetos.
    // =========================================================================
    console.log("--- 14.1 Proxy y Reflect ---");
    const output14_1 = document.getElementById('output-14-1');
    if (output14_1) output14_1.innerHTML = "Revisa la consola para Proxy y Reflect.";

    // Ejemplo de Proxy
    let user = {
        name: "Alice"
    };
    let handler = {
        get(target, prop, receiver) {
            console.log(`GET ${prop}`); // Intercepta la lectura de propiedades
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            console.log(`SET ${prop} = ${value}`); // Intercepta la escritura
            return Reflect.set(target, prop, value, receiver);
        }
    };
    let proxiedUser = new Proxy(user, handler);
    proxiedUser.name; // GET name
    proxiedUser.age = 30; // SET age = 30
    console.log(`14.1 Proxy: Nombre proxiedUser.name: ${proxiedUser.name}`);
    console.log(`14.1 Proxy: Edad proxiedUser.age: ${proxiedUser.age}`);

    // Ejemplo de Reflect
    let obj = {};
    Reflect.defineProperty(obj, 'a', {
        value: 1
    });
    console.log(`14.1 Reflect: Propiedad 'a' de obj: ${Reflect.get(obj, 'a')}`); // 1

    // =========================================================================
    // TEMA: 14.2 `eval()`: Ejecutando Cadenas de Código
    // `eval()` ejecuta JS desde una cadena. Peligroso por seguridad y rendimiento.
    // Aprendí: `eval()` puede ser potente, pero casi siempre se debe evitar.
    // =========================================================================
    console.log("\n--- 14.2 eval() ---");
    const output14_2 = document.getElementById('output-14-2');

    let codeString = "let x = 10; x * 2;";
    try {
        let result = eval(codeString);
        updateOutput('output-14-2', `Código ejecutado: '${codeString}' => Resultado: ${result}`);
    } catch (e) {
        updateOutput('output-14-2', `Error al ejecutar eval(): ${e.message}`, true);
    }
    console.warn("14.2 eval(): ¡Evita usar eval() en código de producción por seguridad!");

    // =========================================================================
    // TEMA: 14.3 Currificación (Curry)
    // Transformar `f(a,b,c)` en `f(a)(b)(c)`. Crea funciones con argumentos parciales.
    // Aprendí: Técnica funcional para reutilización y composición de funciones.
    // =========================================================================
    console.log("\n--- 14.3 Currificación ---");

    function curry(func) {
        return function curried(...args) {
            if (args.length >= func.length) {
                return func.apply(this, args);
            } else {
                return function(...args2) {
                    return curried.apply(this, args.concat(args2));
                };
            }
        };
    }

    function sum(a, b, c) {
        return a + b + c;
    }
    let curriedSum = curry(sum);

    updateOutput('output-14-3', `sum(1, 2, 3): ${curriedSum(1, 2, 3)}`); // 6
    updateOutput('output-14-3', `curriedSum(1)(2)(3): ${curriedSum(1)(2)(3)}`); // 6
    updateOutput('output-14-3', `curriedSum(1, 2)(3): ${curriedSum(1, 2)(3)}`); // 6
    updateOutput('output-14-3', `curriedSum(1)(2, 3): ${curriedSum(1)(2, 3)}`); // 6

    // =========================================================================
    // TEMA: 14.4 Tipo de Referencia (Reference Type)
    // Concepto interno de JS que describe cómo se resuelven las propiedades/variables.
    // No es un tipo de dato accesible directamente, sino una especificación.
    // Aprendí: Profundizar en cómo JS maneja accesos a variables y propiedades.
    // =========================================================================
    console.log("\n--- 14.4 Tipo de Referencia ---");
    const output14_4 = document.getElementById('output-14-4');
    if (output14_4) output14_4.innerHTML = "Revisa la consola para Tipo de Referencia.";
    console.log("14.4 Tipo de Referencia: Es un concepto interno de la especificación ECMAScript.");
    console.log("14.4 Tipo de Referencia: Representa el resultado de un acceso a una propiedad o variable.");
    console.log("14.4 Tipo de Referencia: Contiene una base (el objeto) y un nombre de propiedad.");
    console.log("14.4 Tipo de Referencia: Ejemplo: `obj.prop` crea una Referencia con base `obj` y nombre `prop`.");

    // =========================================================================
    // TEMA: 14.5 `BigInt`: Números Enteros Grandes
    // Tipo de dato para enteros de precisión arbitraria, más allá de `Number`.
    // Sufijo `n` (ej: `123n`). Operaciones requieren que ambos operandos sean `BigInt`.
    // Aprendí: Manejar números enteros muy grandes sin pérdida de precisión.
    // =========================================================================
    console.log("\n--- 14.5 BigInt ---");

    const largeNumber = 9007199254740991n; // Máximo seguro para Number + 1
    const anotherBigInt = 10n;

    updateOutput('output-14-5', `Número normal (MAX_SAFE_INTEGER): ${Number.MAX_SAFE_INTEGER}`);
    updateOutput('output-14-5', `BigInt (MAX_SAFE_INTEGER + 1): ${largeNumber}`);
    updateOutput('output-14-5', `Suma: ${largeNumber} + ${anotherBigInt} = ${largeNumber + anotherBigInt}`);
    updateOutput('output-14-5', `Multiplicación: ${largeNumber} * ${anotherBigInt} = ${largeNumber * anotherBigInt}`);

    try {
        largeNumber + 1; // Error: No se pueden mezclar BigInt y Number directamente en operaciones aritméticas.
    } catch (e) {
        updateOutput('output-14-5', `Error esperado: ${e.message} (BigInt + Number)`, true);
    }

    // =========================================================================
    // TEMA: 14.6 Unicode y Componentes Internos de Cadenas
    // JS usa UTF-16. Caracteres fuera del BMP (`\u{1F600}`) usan pares sustitutos.
    // `length` y `for...of` se comportan diferente.
    // Aprendí: Manejo preciso de caracteres Unicode en JS.
    // =========================================================================
    console.log("\n--- 14.6 Unicode y Cadenas ---");

    const smile = "😁"; // Un emoji, es un par sustituto (dos code units UTF-16)
    const charA = "A";

    updateOutput('output-14-6', `'${charA}' length: ${charA.length}`); // 1
    updateOutput('output-14-6', `'${smile}' length: ${smile.length}`); // 2 (dos code units)
    updateOutput('output-14-6', `'${smile}' codePointAt(0): ${smile.codePointAt(0)} (valor real del caracter)`); // 128513

    let str = "Hola 😁 Mundo";
    let chars = [...str]; // Spread operator para obtener caracteres reales
    updateOutput('output-14-6', `String: '${str}'`);
    updateOutput('output-14-6', `Length directo: ${str.length}`); // Longitud basada en code units
    updateOutput('output-14-6', `Length con [...str]: ${chars.length} (caracteres reales)`);

    // =========================================================================
    // TEMA: 14.7 `WeakRef` y `FinalizationRegistry`
    // `WeakRef` permite referencias débiles a objetos (no impiden GC).
    // `FinalizationRegistry` ejecuta callback cuando un objeto es recolectado.
    // Aprendí: Gestión avanzada de memoria, útil para caches.
    // =========================================================================
    console.log("\n--- 14.7 WeakRef y FinalizationRegistry ---");
    const output14_7 = document.getElementById('output-14-7');

    let objToObserve = {}; // Objeto que será observado
    let weakRef = new WeakRef(objToObserve);

    let registry = new FinalizationRegistry((value) => {
        const msg = `14.7 FinalizationRegistry: Objeto limpiado, valor asociado: ${value}`;
        updateOutput('output-14-7', msg);
        console.log(msg);
    });

    registry.register(objToObserve, "Objeto observado"); // Asociar objToObserve con un valor para el callback

    // El objeto está referenciado, weakRef.deref() devuelve el objeto
    updateOutput('output-14-7', `WeakRef: Objeto referenciado: ${weakRef.deref() ? 'existe' : 'no existe'}`); // existe

    objToObserve = null; // Eliminar la referencia fuerte al objeto, ahora solo la WeakRef lo referencia.
    // En algún punto futuro (indeterminado), el GC lo limpiará y activará el FinalizationRegistry.

    updateOutput('output-14-7', `WeakRef: Referencia fuerte eliminada. weakRef.deref(): ${weakRef.deref() ? 'existe' : 'no existe'}`); // Podría seguir existiendo si el GC no ha corrido.
    updateOutput('output-14-7', "14.7 WeakRef: ¡Revisa la consola en unos segundos para el mensaje del FinalizationRegistry (puede no ser instantáneo)!");
    console.warn("14.7 WeakRef: La ejecución del recolector de basura es no determinista. El mensaje del FinalizationRegistry aparecerá cuando JS decida limpiar la memoria.");
});