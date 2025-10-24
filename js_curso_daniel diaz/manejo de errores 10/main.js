// TEMA: 10.1 Manejo de errores, "try...catch"
const output10_1 = document.getElementById('output-10-1');
let log10_1 = "--- Tema 10.1: try...catch ---\n\n";

try {
    log10_1 += "Iniciando bloque try...\n";
    throw new Error("¡Error intencional!");
} catch (error) {
    log10_1 += "¡Error capturado en catch!\n";
    log10_1 += `Tipo: ${error.name}, Mensaje: ${error.message}\n`;
} finally {
    log10_1 += "\nBloque finally siempre ejecutado.\n";
}
log10_1 += "\nEl programa continúa.\n";

// Ejemplo práctico: Parsar JSON
log10_1 += "\n--- Ejemplo: Parsar JSON ---\n";
let json = '{ "nombre": "Alice", "edad": 30 }';
try {
    let user = JSON.parse(json);
    log10_1 += `Usuario parseado: ${user.nombre}, ${user.edad} años.\n`;
    // Simular error al acceder a propiedad de JSON incompleto
    // let badJson = '{ "edad": 25 }'; JSON.parse(badJson).nombre; // Esto no lanza error, solo es undefined
    // Para un SyntaxError real: JSON.parse('{ "nombre": "Bob" ');
} catch (error) {
    log10_1 += `¡Error al parsear JSON! ${error.name}: ${error.message}\n`;
} finally {
    output10_1.textContent = log10_1;
}

// TEMA: 10.2 Errores personalizados, error de extensión
const output10_2 = document.getElementById('output-10-2');
let log10_2 = "--- Tema 10.2: Errores personalizados ---\n\n";

// Paso 1: Definir clases de errores personalizados
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
class NetworkError extends Error {
    constructor(message, status) {
        super(message);
        this.name = "NetworkError";
        this.status = status;
    }
}
log10_2 += "Clases ValidationError y NetworkError definidas.\n\n";

// Paso 2: Usar errores personalizados
function verificarEdad(edad) {
    if (isNaN(edad) || edad < 0) throw new ValidationError("Edad inválida.");
    if (edad < 18) throw new ValidationError("Debe ser mayor de 18 años.");
    return true;
}

try {
    log10_2 += "Verificando edad (20 años)...\n";
    verificarEdad(20);
    log10_2 += "Edad verificada: 20 años.\n\n";

    log10_2 += "Verificando edad (15 años)...\n";
    verificarEdad(15);
} catch (error) {
    if (error instanceof ValidationError) {
        log10_2 += `¡Error de Validación! Nombre: ${error.name}, Mensaje: ${error.message}\n`;
    } else {
        log10_2 += `¡Otro error! Nombre: ${error.name}, Mensaje: ${error.message}\n`;
    }
}

// Ejemplo con NetworkError (asíncrono)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new NetworkError(`Fallo de red con estado ${response.status}`, response.status);
        return await response.json();
    } catch (error) {
        if (error instanceof NetworkError) {
            log10_2 += `¡Error de red! Estado: ${error.status}, Mensaje: ${error.message}\n`;
        } else {
            log10_2 += `¡Error inesperado! ${error.name}: ${error.message}\n`;
        }
        return null;
    }
}

log10_2 += "\nIntentando obtener datos de URL inexistente...\n";
fetchData('https://api.nonexistenturl.com/data')
    .then(data => {
        if (data) { log10_2 += `Datos recibidos: ${JSON.stringify(data)}\n`; }
        else { log10_2 += "No se pudieron obtener datos.\n"; }
        output10_2.textContent = log10_2;
    });

log10_2 += "Fin del bloque de errores personalizados.\n";