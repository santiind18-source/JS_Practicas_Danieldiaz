// main.js - Prácticas del Curso JavaScript.info

// Función auxiliar para registrar en consola y DOM
function logOutput(sectionId, message, isDOMResult = false) {
    const output = document.getElementById(`output-${sectionId}`);
    const result = document.getElementById(`result-${sectionId}`);
    if (output && !output.innerHTML.includes('<strong>Salida de Consola')) output.innerHTML = `<strong>Salida de Consola (${sectionId}):</strong><br>`;
    if (output) {
        output.innerHTML += `<p>${message.replace(/\n/g, '<br>')}</p>`;
        output.scrollTop = output.scrollHeight;
    }
    if (isDOMResult && result && !result.innerHTML.includes('<strong>Resultados en el DOM')) result.innerHTML = `<strong>Resultados en el DOM (${sectionId}):</strong><br>`;
    if (isDOMResult && result) {
        result.innerHTML += `<p>${message}</p>`;
        result.scrollTop = result.scrollHeight;
    }
    console.log(`[${sectionId}] ${message}`);
}

// =========================================================================================
// TEMA: 8.1 Herencia Prototípica
// Demuestra cómo los objetos heredan propiedades y métodos de sus prototipos.

logOutput('8-1', "--- Iniciando 8.1 Herencia Prototípica ---");

// Objeto 'animal' como prototipo.
let animal = {
    eats: true,
    walk() { logOutput('8-1', "El animal camina.", true); }
};
logOutput('8-1', "Objeto 'animal' definido.");

// 'rabbit' hereda de 'animal'.
let rabbit = Object.create(animal);
rabbit.jumps = true;
logOutput('8-1', "Objeto 'rabbit' creado heredando de 'animal'.");

// Acceso a propiedades heredadas y propias.
logOutput('8-1', `¿Rabbit come? (heredada): ${rabbit.eats}`, true);
logOutput('8-1', `¿Rabbit salta? (propia): ${rabbit.jumps}`, true);
rabbit.walk();

// Sobreescribir método heredado.
rabbit.walk = function() { logOutput('8-1', "El conejo salta y camina enérgicamente!", true); };
logOutput('8-1', "Método 'walk' sobreescrito en 'rabbit'.");
rabbit.walk();

// Cadena de prototipos y `hasOwnProperty`.
logOutput('8-1', `Prototipo de rabbit === animal: ${rabbit.__proto__ === animal}`);
logOutput('8-1', `Propiedades de 'rabbit' (propia/heredada):`);
for (let prop in rabbit) {
    logOutput('8-1', `  ${prop}: ${rabbit[prop]} (Propia: ${rabbit.hasOwnProperty(prop)})`, true);
}
logOutput('8-1', "--- Fin 8.1 Herencia Prototípica ---");

// =========================================================================================
// TEMA: 8.2 Prototipo F (funciones constructoras)
// Explora el uso de `F.prototype` para herencia con funciones constructoras.

logOutput('8-2', "--- Iniciando 8.2 Prototipo F ---");

// Función constructora 'Person'.
function Person(name) { this.name = name; }

// Métodos y propiedades en `Person.prototype`.
Person.prototype.sayHi = function() { logOutput('8-2', `Hola, soy ${this.name} desde el prototipo.`, true); };
Person.prototype.species = "Homo Sapiens";
logOutput('8-2', "Función constructora 'Person' y su prototipo definidos.");

// Creación de instancias.
let john = new Person("John");
let anna = new Person("Anna");
logOutput('8-2', "Instancias 'john' y 'anna' creadas.");

// Acceso a métodos y propiedades.
john.sayHi();
anna.sayHi();
logOutput('8-2', `Especie de John (heredada): ${john.species}`, true);

// Demostración de la cadena prototípica.
logOutput('8-2', `john.__proto__ === Person.prototype: ${john.__proto__ === Person.prototype}`);

// Propiedad propia que oculta la del prototipo.
john.species = "Super Sapiens";
logOutput('8-2', `Nueva especie de John (propia): ${john.species}`, true);
logOutput('8-2', `Especie de Anna (sigue heredando): ${anna.species}`, true);
logOutput('8-2', "--- Fin 8.2 Prototipo F ---");

// =========================================================================================
// TEMA: 8.3 Prototipos Nativos
// Describe cómo los objetos nativos usan prototipos y cómo extenderlos (con cautela).

logOutput('8-3', "--- Iniciando 8.3 Prototipos Nativos ---");

// Array.prototype
let myArray = [1, 2, 3];
logOutput('8-3', `myArray hereda de Array.prototype: ${myArray.__proto__ === Array.prototype}`);

// Extender Array.prototype (¡con precaución!).
if (!Array.prototype.lastUpper) {
    Array.prototype.lastUpper = function() {
        if (this.length === 0) return "Array vacío";
        const last = this[this.length - 1];
        return typeof last === 'string' ? last.toUpperCase() : last;
    };
}
logOutput('8-3', "Método 'lastUpper' añadido a Array.prototype.");
let fruits = ["apple", "banana", "kiwi"];
logOutput('8-3', `Última fruta en mayúsculas: ${fruits.lastUpper()}`, true);

// String.prototype
let myString = "hello javascript";
logOutput('8-3', `myString hereda de String.prototype: ${myString.__proto__ === String.prototype}`);

// Extender String.prototype.
if (!String.prototype.reverseString) {
    String.prototype.reverseString = function() { return this.split('').reverse().join(''); };
}
logOutput('8-3', "Método 'reverseString' añadido a String.prototype.");
logOutput('8-3', `String invertido: "${myString.reverseString()}"`, true);

// Function.prototype
function sum(a, b) { return a + b; }
logOutput('8-3', `sum hereda de Function.prototype: ${sum.__proto__ === Function.prototype}`);

logOutput('8-3', "--- Fin 8.3 Prototipos Nativos ---");

// =========================================================================================
// TEMA: 8.4 Métodos prototipo, objetos sin __proto__
// Cubre herramientas para manipulación de prototipos y creación de objetos "vacíos".

logOutput('8-4', "--- Iniciando 8.4 Métodos Prototipo, objetos sin __proto__ ---");

// 1. Object.getPrototypeOf() y Object.setPrototypeOf()
let base = { value: 10 };
let derived = {};
Object.setPrototypeOf(derived, base);
logOutput('8-4', `Prototipo de 'derived' es 'base': ${Object.getPrototypeOf(derived) === base}`, true);
logOutput('8-4', `Valor heredado en 'derived': ${derived.value}`, true);

// 2. Object.create(proto, [descriptors])
let protoCar = {
    brand: "Generic",
    drive() { logOutput('8-4', `Conduciendo un ${this.brand} (desde prototipo).`, true); }
};
let myCar = Object.create(protoCar, { model: { value: "Sedan", enumerable: true } });
myCar.brand = "Toyota";
logOutput('8-4', `Marca de mi coche: ${myCar.brand} (propia)`, true);
myCar.drive();

// 3. Objetos "sin __proto__" (Diccionarios puros) con Object.create(null).
let cleanDictionary = Object.create(null);
cleanDictionary.name = "Alice";
logOutput('8-4', "Objeto 'cleanDictionary' creado con Object.create(null).", true);
logOutput('8-4', `Nombre en el diccionario: ${cleanDictionary.name}`, true);
logOutput('8-4', `¿'cleanDictionary' tiene 'name'? ${Object.prototype.hasOwnProperty.call(cleanDictionary, 'name')}`, true);
// `cleanDictionary.hasOwnProperty` no existe directamente.

logOutput('8-4', "--- Fin 8.4 Métodos Prototipo, objetos sin __proto__ ---");