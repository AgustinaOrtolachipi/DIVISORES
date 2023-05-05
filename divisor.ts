import * as readlineSync from 'readline-sync';
function cantidadDeDivisores(num: number): number {
 let contador = 0;
 for (let i = 1; i <= num; i++) {
 if (num % i === 0) {
 contador++;
 }
 }
 return contador;
}
const numero = readlineSync.questionInt("Ingrese un número entero: ");
const cantidadDivisores = cantidadDeDivisores(numero);
console.log(`El número ${numero} tiene ${cantidadDivisores} Divisores}`);