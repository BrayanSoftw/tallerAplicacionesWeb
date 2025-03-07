// Solicitar al usuario que ingrese el valor de n
const prompt=require('prompt-sync')();
let n = prompt("Por favor, ingrese el valor de n para la serie Fibonacci:");

// Convertir el valor ingresado a un número
n = parseInt(n);

// Función para generar la serie Fibonacci hasta el valor n
function generarSerieFibonacci(n) {
    let serie = [0, 1];
    for (let i = 2; i <= n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}

// Generar la serie Fibonacci
let serieFibonacci = generarSerieFibonacci(n);

// Imprimir la serie Fibonacci en pantalla
console.log("La serie Fibonacci hasta el valor " + n + " es: " + serieFibonacci.join(", "));