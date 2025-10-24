// main.js - Resumen de Prácticas del Curso de JavaScript
// Este archivo contiene un resumen conciso de cada tema de "Tipos de Datos",
// con sus principales conceptos y aprendizajes, tal como se implementó.

// ==============================================================================
// TEMA: 5.1 Métodos de primitivos — Resumen
// Aprendizaje clave: JavaScript permite que los tipos de datos primitivos (ej. strings, numbers)
// usen métodos como si fueran objetos, convirtiéndolos temporalmente.
// Ejemplos: `str.toUpperCase()`, `num.toFixed(2)`.
// ==============================================================================
console.log("5.1 Métodos de primitivos: Primitivos usan métodos de objeto temporalmente.");

// ==============================================================================
// TEMA: 5.2 Números — Resumen
// Aprendizaje clave: Manejo de enteros y flotantes. Conversiones con `Number()`.
// Propiedades `NaN` (Not a Number) e `Infinity`. Funciones globales `isNaN()` y `isFinite()`.
// Uso del objeto `Math` para operaciones como `floor()`, `ceil()`, `round()`, `random()`.
// Importancia de la precisión de punto flotante (`0.1 + 0.2` no siempre es `0.3`).
// ==============================================================================
console.log("5.2 Números: Conversiones, NaN/Infinity, Math object y precisión.");

// ==============================================================================
// TEMA: 5.3 Cuerdas (Strings) — Resumen
// Aprendizaje clave: Las cadenas son inmutables (los métodos devuelven nuevas cadenas).
// Propiedad `length`. Acceso a caracteres (`[0]`, `charAt()`).
// Búsqueda: `indexOf()`, `includes()`, `startsWith()`, `endsWith()`.
// Extracción: `slice()`, `substring()` (preferidos).
// Modificación: `replace()`. Transformación: `toUpperCase()`, `toLowerCase()`.
// Limpieza: `trim()`.
// ==============================================================================
console.log("5.3 Cuerdas: Inmutabilidad, longitud, acceso, búsqueda, extracción y transformación.");

// ==============================================================================
// TEMA: 5.4 Matrices (Arrays) — Resumen
// Aprendizaje clave: Arrays como colecciones ordenadas, mutables y con índices base 0.
// Acceso y modificación por índice.
// Métodos para agregar/eliminar en extremos: `push()`, `unshift()`, `pop()`, `shift()`.
// Método versátil `splice()` para añadir, eliminar o reemplazar en cualquier posición.
// ==============================================================================
console.log("5.4 Matrices: Colecciones ordenadas, mutables, métodos push/pop/shift/unshift/splice.");

// ==============================================================================
// TEMA: 5.5 Métodos de matriz — Resumen
// Aprendizaje clave: Métodos avanzados de array que usan funciones de callback para iterar y transformar.
// `forEach()`: Ejecuta una función por cada elemento.
// `map()`: Crea un nuevo array transformando cada elemento.
// `filter()`: Crea un nuevo array con elementos que pasan una prueba.
// `find()`: Devuelve el primer elemento que cumple una condición.
// `findIndex()`: Devuelve el índice del primer elemento que cumple una condición.
// `some()`, `every()`: Verifican si algunos/todos cumplen una condición.
// `reduce()`: Reduce el array a un único valor.
// `sort()`: Ordena el array (modifica el original, necesita comparador para números).
// `concat()`: Une arrays, creando uno nuevo.
// `join()`: Une elementos de array en una cadena.
// ==============================================================================
console.log("5.5 Métodos de matriz: forEach, map, filter, find, reduce, sort, concat, join para manipulación avanzada.");

// ==============================================================================
// TEMA: 5.6 Iterables — Resumen
// Aprendizaje clave: Objetos que pueden ser recorridos (iterados) con `for...of`.
// Cadenas y arrays son iterables.
// Objetos literales NO son iterables directamente con `for...of` (se necesitan `Object.keys()`, etc.).
// `Array.from()`: Convierte un iterable (o array-like) en un array real.
// ==============================================================================
console.log("5.6 Iterables: for...of para strings/arrays. Objetos no iterables directamente. Array.from().");

// ==============================================================================
// TEMA: 5.7 Mapa y conjunto (Map y Set) — Resumen
// Aprendizaje clave:
// `Map`: Colección de clave-valor. Las claves pueden ser de CUALQUIER tipo (a diferencia de objetos).
//   Métodos: `set()`, `get()`, `has()`, `delete()`, `size`. Es iterable.
// `Set`: Colección de valores ÚNICOS. Ignora duplicados.
//   Métodos: `add()`, `has()`, `delete()`, `size`. Es iterable.
// ==============================================================================
console.log("5.7 Mapa y conjunto: Map (clave-valor con claves de cualquier tipo), Set (valores únicos). Ambos iterables.");

// ==============================================================================
// TEMA: 5.8 Mapa débil y conjunto débil (WeakMap y WeakSet) — Resumen
// Aprendizaje clave: Versiones "débiles" de Map y Set.
// Claves (`WeakMap`) o valores (`WeakSet`) deben ser OBJETOS.
// No impiden la recolección de basura de esos objetos si no hay otras referencias fuertes.
// No son iterables y no tienen `size`. Usos para metadatos sin evitar limpieza de memoria.
// ==============================================================================
console.log("5.8 Mapa débil y conjunto débil: WeakMap/WeakSet (claves/valores objetos), no evitan recolección de basura, no iterables.");

// ==============================================================================
// TEMA: 5.9 Objeto.claves, valores, entradas (Object.keys, values, entries) — Resumen
// Aprendizaje clave: Métodos estáticos para extraer partes de objetos literales.
// `Object.keys()`: Devuelve un array con las claves (propiedades).
// `Object.values()`: Devuelve un array con los valores.
// `Object.entries()`: Devuelve un array de `[clave, valor]` pares.
// Esenciales para iterar y manipular propiedades de objetos.
// ==============================================================================
console.log("5.9 Objeto.claves, valores, entradas: Object.keys(), Object.values(), Object.entries() para interactuar con objetos.");

// ==============================================================================
// TEMA: 5.10 Asignación de desestructuración (Destructuring assignment) — Resumen
// Aprendizaje clave: Sintaxis para "desempaquetar" valores de arrays o propiedades de objetos
// directamente en variables separadas, de forma más concisa.
// Desestructuración de arrays: `[a, b] = [1, 2]`.
// Desestructuración de objetos: `{ nombre, edad } = usuario`.
// Soporta valores por defecto, renombrado de variables y parámetros de función.
// ==============================================================================
console.log("5.10 Asignación de desestructuración: Desempaquetar valores de arrays/objetos en variables de forma concisa.");

// ==============================================================================
// TEMA: 5.11 Fecha y hora (Date and time) — Resumen
// Aprendizaje clave: Uso del objeto `Date` para manejar fechas y horas.
// Crear fechas: `new Date()`, `new Date(string)`, `new Date(año, mes, ...)`.
// Métodos para obtener componentes: `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`, `getSeconds()`.
// Métodos para establecer componentes: `setFullYear()`, `setMonth()`, etc.
// Obtener timestamp: `getTime()`.
// ==============================================================================
console.log("5.11 Fecha y hora: Objeto Date para crear, obtener y manipular fechas/horas.");

// ==============================================================================
// TEMA: 5.12 Métodos JSON, toJSON — Resumen
// Aprendizaje clave: Serialización y deserialización de datos JavaScript a y desde JSON.
// `JSON.stringify()`: Convierte un objeto/array JS a una cadena JSON.
// `JSON.parse()`: Convierte una cadena JSON a un objeto/array JS.
// Método `toJSON()`: Un método opcional que un objeto puede definir para personalizar su serialización
// cuando se usa `JSON.stringify()`.
// ==============================================================================
console.log("5.12 Métodos JSON, toJSON: JSON.stringify() para JS a JSON, JSON.parse() para JSON a JS, toJSON() para personalización.");