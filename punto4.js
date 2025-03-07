// Función para mostrar el menú y obtener la opción del usuario
const prompt=require('prompt-sync')();
function mostrarMenu() {
    return prompt("Seleccione una opción:\n1: Sumar\n2: Restar\n3: Multiplicar\n4: Dividir\n5: Raíz Cuadrada\n6: Salir");
}

// Función para solicitar un número al usuario
function solicitarNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

let opcion;

do {
    opcion = mostrarMenu();

    switch(opcion) {
        case '1':
            let num1 = solicitarNumero("Ingrese el primer número:");
            let num2 = solicitarNumero("Ingrese el segundo número:");
            console.log("El resultado de la suma es: " + (num1 + num2));
            break;
        case '2':
            num1 = solicitarNumero("Ingrese el primer número:");
            num2 = solicitarNumero("Ingrese el segundo número:");
            console.log("El resultado de la resta es: " + (num1 - num2));
            break;
        case '3':
            num1 = solicitarNumero("Ingrese el primer número:");
            num2 = solicitarNumero("Ingrese el segundo número:");
            console.log("El resultado de la multiplicación es: " + (num1 * num2));
            break;
        case '4':
            num1 = solicitarNumero("Ingrese el primer número:");
            num2 = solicitarNumero("Ingrese el segundo número:");
            if (num2 !== 0) {
                console.log("El resultado de la división es: " + (num1 / num2));
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;
        case '5':
            num1 = solicitarNumero("Ingrese el número:");
            if (num1 >= 0) {
                console.log("El resultado de la raíz cuadrada es: " + Math.sqrt(num1));
            } else {
                console.log("No se puede calcular la raíz cuadrada de un número negativo.");
            }
            break;
        case '6':
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción del 1 al 6.");
    }
} while (opcion !== '6');