// Solicitar al usuario que ingrese su edad
const prompt=require('prompt-sync')();
let edad = prompt("Por favor, ingrese su edad:");

// Convertir el valor ingresado a un número
edad = parseInt(edad);

// Verificar el rango de edad y mostrar el mensaje correspondiente
if (edad >= 0 && edad <= 9) {
    console.log("Es niño");
} else if (edad >= 10 && edad <= 17) {
    console.log("Es adolescente");
} else if (edad >= 18 && edad <= 40) {
    console.log("Es adulto");
} else if (edad > 40 && edad <= 60) {
    console.log("Es adulto mayor");
} else if (edad > 60) {
    console.log("Es abuelo");
} else {
    console.log("Edad no válida");
}