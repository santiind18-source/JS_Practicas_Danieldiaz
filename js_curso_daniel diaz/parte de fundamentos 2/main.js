"use strict";
// main.js - Resumen de Fundamentos de JavaScript

// 2.1 ¡Hola mundo!
console.log("2.1 ¡Hola mundo!");

// 2.2 Estructura del código
// alert(ldaniel); alert(santiago); alert(diaz); alert(sanchez); // Ejemplos de alertas

// 2.3 El modo moderno, "usar estricto"
// Habilita un modo de JS más estricto, previene errores.
let strictVar = "En modo estricto.";
console.log(`2.3 "use strict": ${strictVar}`);

// 2.4 Variables
// `let`: variable reasignable. `const`: constante (no reasignable). `var`: obsoleto.
let counter = 0; counter = 5;
const PI = 3.14159;
// var oldVar = "Evitar var."; // Evitar `var`

// Práctica DOM
const varSection = document.getElementById('tema-2-4');
if (varSection) varSection.innerHTML += `<p>Contador (let): ${counter}, PI (const): ${PI}</p>`;

// 2.5 Tipos de datos
// number, string, boolean, null, undefined, symbol, bigint, object.
let num = 10;
let str = "Hola";
let bool = true;
let nulo = null;
let indefinido;
console.log(`2.5 Tipos de datos - num: ${typeof num}, str: ${typeof str}, nulo: ${typeof nulo} (¡object!)`);

// 2.6 Interacción: alerta, aviso, confirmación
// `alert()`, `prompt()`, `confirm()`. Bloqueantes.
const interactionSection = document.getElementById('tema-2-6');
if (interactionSection) {
    let age = prompt("2.6 ¿Cuál es tu edad?", "");
    interactionSection.innerHTML += `<p>Edad ingresada: <strong>${age || 'No especificada'}</strong>.</p>`;
}

// 2.7 Conversiones de tipos
// `Number()`, `String()`, `Boolean()`, `parseInt()`, `parseFloat()`.
let strNum = "123";
let numConverted = Number(strNum); // "123" -> 123
let boolFromZero = Boolean(0); // 0 -> false
console.log(`2.7 Conversiones - "123" a número: ${numConverted}, 0 a booleano: ${boolFromZero}`);

// 2.8 Operadores básicos, matemáticas
// +, -, *, /, %, **, ++, --, +=, etc.
let x = 10, y = 3;
let result = x + y; // 13
x++; // 11
console.log(`2.8 Operadores - Suma (10+3): ${result}, x++: ${x}`);

// 2.9 Comparaciones
// `==` (flexible), `===` (estricta). `!=`, `!==`, `>`, `<`, etc.
let val1 = 10, val2 = "10";
console.log(`2.9 Comparaciones - (10 == "10"): ${val1 == val2}, (10 === "10"): ${val1 === val2}`);

// 2.10 Ramificación condicional: si, '?'
// `if/else if/else`. Operador ternario `condicion ? true : false`.
let score = 70;
let status = (score >= 60) ? "Aprobado" : "Reprobado";
console.log(`2.10 Condicional - Score ${score}: ${status}`);

// 2.11 Operadores lógicos
// `&&` (AND), `||` (OR), `!` (NOT). Cortocircuito.
let hasCar = true, hasLicense = false;
console.log(`2.11 Lógicos - Coche && Licencia: ${hasCar && hasLicense}`);

// 2.12 Operador de fusión nulo '??'
// Devuelve el operando derecho si el izquierdo es `null` o `undefined`. No es `||`.
let userConfig = null;
let userName = userConfig ?? "Invitado"; // "Invitado"
let zeroValue = 0;
let finalValue = zeroValue ?? 100; // 0
console.log(`2.12 Fusión Nulo - Usuario: ${userName}, Valor: ${finalValue}`);

// 2.13 Bucles: mientras y para
// `while` (condición), `for` (iteraciones conocidas).
for (let i = 0; i < 2; i++) console.log(`2.13 Bucle for: ${i}`);
let countWhile = 0;
while (countWhile < 2) { console.log(`  Bucle while: ${countWhile}`); countWhile++; }

// 2.14 La declaración "switch"
// Múltiples ramificaciones por valor. Usa `case`, `break`, `default`.
let day = "Lunes";
let task = "";
switch (day) {
    case "Lunes": task = "Iniciar semana"; break;
    default: task = "Día normal";
}
console.log(`2.14 Switch - ${day}: ${task}`);

// 2.15 Funciones
// Bloques de código reutilizables. `function name(params) { ... return ... }`.
function greet(name) { return `Hola, ${name}!`; }
console.log(`2.15 Funciones - ${greet("Pedro")}`);

// 2.16 Expresiones de funciones
// Función asignada a una variable. Pueden ser anónimas.
const farewell = function(name) { return `Adiós, ${name}.`; };
console.log(`2.16 Expresiones de Funciones - ${farewell("Laura")}`);

// 2.17 Funciones de flecha, conceptos básicos
// Sintaxis concisa: `(params) => expression` o `(params) => { body; return; }`.
const double = num => num * 2;
console.log(`2.17 Funciones de Flecha - Doble de 5: ${double(5)}`);

// 2.18 Especiales de JavaScript - Closure (Cierre)
// Una función recuerda su entorno léxico.
function createCounter() {
    let count = 0;
    return function() { count++; return count; }; // El closure
}
const myCounter = createCounter();
console.log(`2.18 Especiales - Contador 1: ${myCounter()}`);
console.log(`  Contador 2: ${myCounter()}`);