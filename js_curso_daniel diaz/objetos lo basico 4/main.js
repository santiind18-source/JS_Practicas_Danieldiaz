// TEMA: 4.1 Objetos
// Creación, acceso, modificación, adición y eliminación de propiedades de objetos.
// Iteración sobre propiedades.
console.log("--- TEMA 4.1: Objetos ---");
let usuario = { nombre: "linda", edad: 15, "es Admin": true };
console.log("Nombre:", usuario.nombre, "Edad:", usuario["edad"], "¿Es Admin?", usuario["es Admin"]);
usuario.edad = 31; // Modificar
usuario.email = "juan@example.com"; // Añadir
delete usuario.edad; // Eliminar
console.log("¿Tiene nombre?", "nombre" in usuario, "Usuario:", usuario);
for (let key in usuario) console.log(`${key}: ${usuario[key]}`);
document.getElementById('output-4-1').innerText = `Nombre: ${usuario.nombre}, Email: ${usuario.email}`;
// Fin TEMA 4.1

// TEMA: 4.2 Referencias de objetos y copia
// Los objetos se asignan por referencia. Métodos para copia superficial (Object.assign, spread).
console.log("\n--- TEMA 4.2: Referencias de objetos y copia ---");
let user = { name: "sofia", age: 25 };
let admin = user; // Referencia
admin.age = 26;
console.log("Edad de user (modificado por admin):", user.age);
console.log("¿Son user y admin el mismo objeto?", user === admin); // true

let clon = Object.assign({}, user); // Copia superficial con Object.assign
clon.name = "Clonado";
console.log("Nombre user original:", user.name, "Nombre clon:", clon.name);

let clon3 = { ...user }; // Copia superficial con spread
clon3.age = 50;
console.log("Edad user original:", user.age, "Edad clon3:", clon3.age);
document.getElementById('output-4-2').innerText = `user.age: ${user.age}, clon.name: ${clon.name}`;
// Fin TEMA 4.2

// TEMA: 4.3 Recolección de basura
// JavaScript gestiona automáticamente la memoria, liberando objetos inalcanzables.
console.log("\n--- TEMA 4.3: Recolección de basura ---");
let obj1 = { data: "datos" };
let obj2 = obj1;
obj1 = null; // obj2 sigue referenciando
console.log("obj2 aún tiene datos:", obj2.data);
obj2 = null; // Objeto original inalcanzable, elegible para recolección.
document.getElementById('tema-4-3').getElementsByTagName('h3')[0].insertAdjacentHTML('afterend', '<p>El recolector de basura libera memoria de objetos no referenciados.</p>');
// Fin TEMA 4.3

// TEMA: 4.4 Métodos de objeto, "this"
// Funciones dentro de objetos (`métodos`) y el contexto `this` (referencia al objeto actual).
console.log("\n--- TEMA 4.4: Métodos de objeto, 'this' ---");
let persona = {
    nombre: "santos",
    edad: 15,
    saludar() { console.log("Hola, mi nombre es " + this.nombre); },
    presentar() { console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`); }
};
persona.saludar();
persona.presentar();

let animal = { nombre: "Fido", tipo: "perro", hablar() { console.log(`Soy un ${this.tipo} llamado ${this.nombre}. ¡Guau!`); } };
animal.hablar();
document.getElementById('output-4-4').innerText = "Resultados en la consola. Ver los saludos y presentaciones.";
// Fin TEMA 4.4

// TEMA: 4.5 Constructor, operador "new"
// Funciones constructoras para crear múltiples objetos similares usando `new`.
console.log("\n--- TEMA 4.5: Constructor, operador 'new' ---");
function Usuario(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() { console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`); };
}
let usuario1 = new Usuario("linda", 15);
let usuario2 = new Usuario("sofia", 35);
console.log("Usuario 1:", usuario1);
usuario1.saludar();
usuario2.saludar();
document.getElementById('output-4-5').innerText = "Resultados en la consola. Objetos creados con constructor.";
// Fin TEMA 4.5

// TEMA: 4.6 Encadenamiento opcional "?."
// Acceso seguro a propiedades anidadas; devuelve `undefined` si un intermedio es `null`/`undefined`.
console.log("\n--- TEMA 4.6: Encadenamiento opcional '?.' ---");
let userProfile = { name: "galeano", address: { street: "Calle Falsa 123" }, contact: null };
console.log("Ciudad:", userProfile.address.street);
console.log("Teléfono (con ?. ):", userProfile.contact?.phone); // undefined
console.log("Código postal (con ?. ):", userProfile.address?.zipCode); // undefined

let adminUser = { name: "Boss", greet() { console.log("Hola, soy el jefe."); } };
let guestUser = {};
adminUser.greet?.(); // Llama si existe
guestUser.greet?.(); // No hace nada
document.getElementById('output-4-6').innerText = "Resultados en la consola. Ver el uso de '?.' para evitar errores.";
// Fin TEMA 4.6

// TEMA: 4.7 Tipo de símbolo
// `Symbol` es un tipo primitivo único para claves de propiedades que evitan colisiones de nombres.
console.log("\n--- TEMA 4.7: Tipo de símbolo ---");
let id = Symbol("id");
let id2 = Symbol("id");
console.log("¿Son los símbolos iguales?", id === id2); // false

let userWithSymbol = { name: "Lucía", [id]: 123 };
console.log("ID del usuario (con Symbol):", userWithSymbol[id]);
for (let key in userWithSymbol) console.log(key); // Solo imprime 'name'
console.log("Symbols:", Object.getOwnPropertySymbols(userWithSymbol));

let globalId = Symbol.for("globalId"); // Symbol global
let globalIdAgain = Symbol.for("globalId");
console.log("¿Symbols globales iguales?", globalId === globalIdAgain); // true
console.log("Descripción Symbol global:", Symbol.keyFor(globalId));
document.getElementById('output-4-7').innerText = "Resultados en la consola. Ver el uso y unicidad de los Symbols.";
// Fin TEMA 4.7

// TEMA: 4.8 Conversión de objeto a primitivo
// Cómo los objetos se convierten a valores primitivos (string, number) en ciertos contextos.
// Se usan `Symbol.toPrimitive`, `toString()`, `valueOf()`.
console.log("\n--- TEMA 4.8: Conversión de objeto a primitivo ---");
let producto = {
    nombre: "Manzana",
    precio: 1.5,
    toString() { return this.nombre; },
    valueOf() { return this.precio; },
    [Symbol.toPrimitive](hint) {
        if (hint == "string") return `Producto: ${this.nombre} ($${this.precio})`;
        if (hint == "number") return this.precio;
        return this.nombre + " - " + this.precio;
    }
};
console.log("Producto como string:", `${producto}`);
console.log("Producto como número:", +producto);
console.log("Producto + 2:", producto + 2);

let libro = { titulo: "El Gran Gato", paginas: 300 };
console.log("Libro como string:", String(libro)); // Usa toString()
console.log("Libro + 10:", libro + 10); // Llama a toString()
document.getElementById('output-4-8').innerText = "Resultados en la consola. Ver cómo los objetos se convierten a primitivos.";
// Fin TEMA 4.8