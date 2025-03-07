const prompt=require('prompt-sync')();
class Persona {
    constructor(nombres, apellidos, genero, fechaNacimiento, edad, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.salario = salario;
    }

    // Método para consultar la información de la persona
    consultarPersona() {
        console.log(`Nombres: ${this.nombres}`);
        console.log(`Apellidos: ${this.apellidos}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Salario: ${this.salario}`);
    }

    // Método para modificar la información de la persona
    modificarPersona(nombres, apellidos, genero, fechaNacimiento, edad, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.salario = salario;
    }

    // Método para aumentar el salario de la persona
    aumentarSalario(aumento) {
        this.salario += aumento;
    }

    // Método para verificar si la persona es mayor de edad
    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

// Función para solicitar datos al usuario
function solicitarDatos() {
    let nombres = prompt("Ingrese los nombres:");
    let apellidos = prompt("Ingrese los apellidos:");
    let genero = prompt("Ingrese el género:");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD):");
    let edad = parseInt(prompt("Ingrese la edad:"));
    let salario = parseFloat(prompt("Ingrese el salario:"));
    return new Persona(nombres, apellidos, genero, fechaNacimiento, edad, salario);
}

// Crear una persona con los datos ingresados por el usuario
let persona = solicitarDatos();

let opcion;

do {
    opcion = prompt("Seleccione una opción:\na. Consultar persona\nb. Modificar persona\nc. Aumentar salario\nd. Verificar mayoría de edad\ne. Salir");

    switch(opcion) {
        case 'a':
            persona.consultarPersona();
            break;
        case 'b':
            let nombres = prompt("Ingrese los nuevos nombres:");
            let apellidos = prompt("Ingrese los nuevos apellidos:");
            let genero = prompt("Ingrese el nuevo género:");
            let fechaNacimiento = prompt("Ingrese la nueva fecha de nacimiento (YYYY-MM-DD):");
            let edad = parseInt(prompt("Ingrese la nueva edad:"));
            let salario = parseFloat(prompt("Ingrese el nuevo salario:"));
            persona.modificarPersona(nombres, apellidos, genero, fechaNacimiento, edad, salario);
            break;
        case 'c':
            let aumento = parseFloat(prompt("Ingrese el aumento de salario:"));
            persona.aumentarSalario(aumento);
            break;
        case 'd':
            if (persona.esMayorDeEdad()) {
                console.log("La persona es mayor de edad.");
            } else {
                console.log("La persona es menor de edad.");
            }
            break;
        case 'e':
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción del menú.");
    }
} while (opcion !== 'e');