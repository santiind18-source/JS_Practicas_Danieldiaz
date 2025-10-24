// main.js

// TEMA: 7.1 Banderas y descriptores de propiedad
// Explora las banderas 'writable', 'enumerable' y 'configurable' de las propiedades de objeto.

// Objeto 'user' y su descriptor de 'name' por defecto (todas las banderas en true).
const user = { name: "DANIEL" };
const descriptorName = Object.getOwnPropertyDescriptor(user, 'name');
console.log("Descriptor 'user.name' por defecto:", descriptorName);

// 1. writable: false (no se puede cambiar el valor)
Object.defineProperty(user, 'name', { writable: false });
user.name = "Pedro"; // Ignorado o TypeError en 'use strict'.
console.log("user.name (writable: false):", user.name);

// 2. enumerable: false (no aparece en bucles como for...in)
const car = { brand: "Toyota", model: "Corolla" };
Object.defineProperty(car, 'brand', { enumerable: false });
let carProperties = [];
for (let key in car) { carProperties.push(key); }
console.log("Propiedades de 'car' (brand no enumerable):", carProperties);

// 3. configurable: false (no se puede borrar ni cambiar sus banderas)
const settings = { version: "1.0" };
Object.defineProperty(settings, 'version', { configurable: false });
delete settings.version; // Fallará.
console.log("settings.version (configurable: false):", settings.version);

// Inyectar resultados en el HTML para el tema 7.1
document.getElementById('output-7-1').innerHTML = `
    <p><strong>Descriptor 'user.name' por defecto:</strong> <pre>${JSON.stringify(descriptorName, null, 2)}</pre></p>
    <p><strong>'user.name' (writable: false):</strong> ${user.name}</p>
    <p><strong>Propiedades de 'car' (brand no enumerable):</strong> ${carProperties.join(', ')}</p>
    <p><strong>'settings.version' (configurable: false):</strong> ${settings.version}</p>
    <p class="console-output">Mira la consola (F12) para más detalles.</p>
`;


// TEMA: 7.2 Captadores y configuradores de propiedades (Getters y Setters)
// Define propiedades con lógica personalizada al leer (getter) o escribir (setter).

// Objeto 'person' con getter y setter para 'fullName'.
const person = {
    firstName: "linda",
    lastName: "sofia",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    set fullName(value) { [this.firstName, this.lastName] = value.split(' '); }
};

// Acceder (llama al getter) y asignar (llama al setter).
console.log("Nombre completo inicial (getter):", person.fullName);
person.fullName = "Carlos Ruiz";
console.log("Nuevo nombre completo (setter):", person.fullName);

// Ejemplo práctico: 'age' con validación en el setter.
const userWithAge = {
    _age: 0,
    set age(value) { if (value < 0) console.error("Edad no puede ser negativa."); else this._age = value; },
    get age() { return this._age; }
};

// Asignar edad válida e inválida.
userWithAge.age = 15;
console.log("Edad válida:", userWithAge.age);
userWithAge.age = -5; // Error en consola.
console.log("Edad después de intentar inválida:", userWithAge.age);

// Inyectar resultados en el HTML para el tema 7.2
document.getElementById('output-7-2').innerHTML = `
    <p><strong>Nombre completo inicial (getter):</strong> ${person.fullName}</p>
    <p><strong>Nombre completo después de setter:</strong> ${person.fullName}</p>
    <p><strong>Edad válida asignada a userWithAge:</strong> ${userWithAge.age}</p>
    <p><strong>Edad después de intentar inválida:</strong> ${userWithAge.age}</p>
    <p class="console-output">Mira la consola (F12) para ver ejecución y errores.</p>
`;