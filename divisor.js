"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function cantidadDeDivisores(num) {
    var contador = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            contador++;
        }
    }
    return contador;
}
var numero = readlineSync.questionInt("Ingrese un número entero: ");
var cantidadDivisores = cantidadDeDivisores(numero);
console.log("El n\u00FAmero ".concat(numero, " tiene ").concat(cantidadDivisores, " Divisores}"));
