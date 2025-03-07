const prompt=require('prompt-sync')();
let suma = 0;

while (suma < 50) {
    // Solicitar al usuario que ingrese un número
    let numero = prompt("Por favor, ingrese un número:");
    
    // Convertir el valor ingresado a un número
    numero = parseFloat(numero);
    
    // Sumar el número ingresado a la suma total
    suma += numero;
    
    // Imprimir la suma actual en pantalla
    console.log("La suma actual es: " + suma);
}

console.log("La suma total ha alcanzado o superado 50.");