const prompt=require('prompt-sync')();
class Vehiculo {
    constructor(placa, color, marca, modelo, kilometraje) {
        this.placa = placa;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
        this.velocidad = 0;
        this.encendido = false;
    }

    prender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log(`Vehículo:
Placa: ${this.placa}
Color: ${this.color}
Marca: ${this.marca}
Modelo: ${this.modelo}
Kilometraje: ${this.kilometraje}
Velocidad: ${this.velocidad} km/h
... ha sido prendido`);
        } else {
            console.log("El vehículo ya está prendido.");
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`Vehículo:
Placa: ${this.placa}
Color: ${this.color}
Marca: ${this.marca}
Modelo: ${this.modelo}
Kilometraje: ${this.kilometraje}
Velocidad: ${this.velocidad} km/h
... ha sido apagado`);
        } else {
            console.log("El vehículo ya está apagado.");
        }
    }

    acelerar() {
        if (this.encendido) {
            if (this.velocidad < 100) {
                this.velocidad += 10;
                this.kilometraje += 10;
                console.log(`El vehículo ha acelerado. Velocidad actual: ${this.velocidad} km/h. Kilometraje: ${this.kilometraje} km.`);
            } else {
                console.log("El vehículo ya ha alcanzado la velocidad máxima de 100 km/h.");
            }
        } else {
            console.log("No se puede acelerar. El vehículo está apagado.");
        }
    }
}

// Crear un vehículo con los datos ingresados por el usuario
let vehiculo = new Vehiculo("ABC123", "Rojo", "Toyota", "Corolla", 50000);

// Ejemplo de uso
vehiculo.prender();
vehiculo.acelerar();
vehiculo.acelerar();
vehiculo.apagar();