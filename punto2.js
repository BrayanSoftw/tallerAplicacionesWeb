// Solicitar al usuario que ingrese su edad
const prompt=require('prompt-sync')();
let edad = prompt("Por favor, ingrese su edad en años:");

// Convertir el valor ingresado a un número
edad = parseInt(edad);

// Verificar si el usuario es mayor de edad (18 años o más)
if (edad >= 18) {
    console.log("Usted es mayor de edad.");
} else {
    console.log("Usted es menor de edad.");
}