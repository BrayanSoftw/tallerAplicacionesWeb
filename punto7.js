const prompt=require('prompt-sync')();
let valores = [];
let suma = 0;

// Solicitar al usuario que ingrese 10 valores
for (let i = 0; i < 10; i++) {
    let valor = parseFloat(prompt("Por favor, ingrese el valor " + (i + 1) + ":"));
    valores.push(valor);
    suma += valor;
}

// Calcular el valor mayor, menor y el promedio
let valorMayor = Math.max(...valores);
let valorMenor = Math.min(...valores);
let promedio = suma / valores.length;

// Mostrar los resultados en pantalla
console.log("La suma de los valores es: " + suma);
console.log("El valor mayor es: " + valorMayor);
console.log("El valor menor es: " + valorMenor);
console.log("El promedio de los valores es: " + promedio);