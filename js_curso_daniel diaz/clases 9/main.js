// TEMA: 9.1 Sintaxis básica de clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona1 = new Persona("daniel", 19);
const persona2 = new Persona("diaz", 25);
document.getElementById('output-9-1').innerHTML += `<p>${persona1.saludar()}</p><p>${persona2.saludar()}</p>`;
console.log("9.1:", persona1.saludar());

// TEMA: 9.2 Herencia de clase
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }
    estudiar() {
        return `${this.nombre} está estudiando ${this.carrera}.`;
    }
    saludar() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}.`;
    }
}
const estudiante1 = new Estudiante("Carlos", 20, "Ingeniería de Sistemas");
document.getElementById('output-9-2').innerHTML += `<p>${estudiante1.saludar()}</p><p>${estudiante1.estudiar()}</p>`;
console.log("9.2:", estudiante1.saludar());

// TEMA: 9.3 Propiedades y métodos estáticos
class Matematica {
    static PI = 3.14159;
    static sumar(a, b) { return a + b; }
    static restar(a, b) { return a - b; }
}
const suma = Matematica.sumar(5, 3);
const resta = Matematica.restar(10, 4);
const piValor = Matematica.PI;
document.getElementById('output-9-3').innerHTML += `<p>Suma: ${suma}</p><p>Resta: ${resta}</p><p>PI: ${piValor}</p>`;
console.log("9.3: Suma =", suma, "Resta =", resta, "PI =", piValor);

// TEMA: 9.4 Propiedades y métodos privados y protegidos
class CuentaBancaria {
    #saldo;
    _titular;
    constructor(titular, saldoInicial) {
        this._titular = titular;
        this.#saldo = saldoInicial;
    }
    #generarNumeroCuenta() { return Math.floor(Math.random() * 1000000); }
    depositar(cantidad) {
        if (cantidad > 0) { this.#saldo += cantidad; console.log(`Depósito: ${cantidad}. Saldo: ${this.#saldo}`); }
    }
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) { this.#saldo -= cantidad; console.log(`Retiro: ${cantidad}. Saldo: ${this.#saldo}`); }
        else { console.log("Fondos insuficientes."); }
    }
    getSaldo() { return this.#saldo; }
    getNumeroCuentaVisible() { return `Número de cuenta: ${this.#generarNumeroCuenta()}`; }
}
const miCuenta = new CuentaBancaria("Juan Perez", 1000);
miCuenta.depositar(200);
miCuenta.retirar(500);
document.getElementById('output-9-4').innerHTML += `<p>Titular: ${miCuenta._titular}</p><p>Saldo: ${miCuenta.getSaldo()}</p><p>${miCuenta.getNumeroCuentaVisible()}</p><p class="console-output">Ver consola para movimientos.</p>`;
console.log("9.4: Titular =", miCuenta._titular, "Saldo =", miCuenta.getSaldo());

// TEMA: 9.5 Ampliación de clases integradas
class MiArrayExtendido extends Array {
    sumarTodos() { return this.reduce((acc, current) => acc + current, 0); }
    obtenerPares() { return this.filter(num => num % 2 === 0); }
}
const numeros = new MiArrayExtendido(1, 2, 3, 4, 5, 6);
const sumaTotal = numeros.sumarTodos();
const pares = numeros.obtenerPares();
document.getElementById('output-9-5').innerHTML += `<p>Array: [${numeros.join(', ')}]</p><p>Suma: ${sumaTotal}</p><p>Pares: [${pares.join(', ')}]</p>`;
console.log("9.5: Suma =", sumaTotal, "Pares =", pares);

// TEMA: 9.6 Comprobación de clase: "instanceof"
class Animal {}
class Perro extends Animal {}
const unPerro = new Perro();
const unaPersona = new Persona("Laura", 40);
document.getElementById('output-9-6').innerHTML += `<p>unPerro instanceof Perro: ${unPerro instanceof Perro}</p><p>unPerro instanceof Animal: ${unPerro instanceof Animal}</p><p>unaPersona instanceof Persona: ${unaPersona instanceof Persona}</p>`;
console.log("9.6: instanceof. Ver HTML.");

// TEMA: 9.7 Mixins
let SaludarMixin = {
    decirHola() { console.log(`Hola, soy ${this.nombre}.`); },
    decirAdios() { console.log(`Adiós de parte de ${this.nombre}.`); }
};
class Usuario {
    constructor(nombre) { this.nombre = nombre; }
}
Object.assign(Usuario.prototype, SaludarMixin);
const usuario1 = new Usuario("Maria");
usuario1.decirHola();
usuario1.decirAdios();
document.getElementById('output-9-7').innerHTML += `<p>Usuario: ${usuario1.nombre}</p><p class="console-output">Ver consola para saludos del mixin.</p>`;
console.log("9.7: Mixins 'decirHola' y 'decirAdios' añadidos.");