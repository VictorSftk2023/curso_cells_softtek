console.log("Concatenación de variables diferentes");
let num1 = "20",
    num2 = 23;
console.log(num1 + num2); //2023

console.warn("Valores infinitos y con ceros");
let x = Infinity,
    y = Infinity;
console.log(x + y); //infinity es el mismo resultado cuando un valor sea infinito

console.warn("Resta de valores string y numbers convertidos");
let alpha = "10",
    beta = 3;
let resultado = Number(alpha) - beta;
console.log(resultado); // 7

console.warn("Multiplicacion de valores");
let a = "10",
    b = "3";
console.log(a * 2);/*2 : si un serultado es string y se multiplica por un number 
da el reultado cambiando el valor del string a number, siempre y cuando el string
contenga un numero dentro*/


