//Tercer manual de javascript 
//condicionales con IF

let x = true;
if(x) console.log("X es true");

//Ejemplos de declaraciones 
console.warn("Evaluando si la edad es mayor de 18")
let edad = 18;
if (edad >= 18) {
    console.log("Puedes pasar");
}

//If anidado 
console.warn("Verifica if anidado")
let state = "OKH";
let age = 16;
let year = 2022;

if(state == "OKH") {
    if(age >= 16){
        console.log("You can drive!");
    }
}

//condicionales con operadores logicos
console.warn("Condicional con operador logico &&")
if(state == "OKH" && age >= 16){
    console.log("You can drive!");
    
}

//bloque de codigo con else
if(state == "OKH" && age >= 16 && year == 2023){
    console.log("You can drive!");
    
}else{
    console.log("Sorry, you can't drive");
}

//Operadores Aritmeticos ADDITION
console.warn("Operador + o -")
let sum = 10 + 40;
console.log(`Suma valores iguales y datos de mismo tipo: ${sum}`);
let sum_1 = 20 + "20";
console.log(`Suma un number con un string: ${sum_1}, valores concatenados`);
let infinito_1 = 20 + Infinity;
console.log(`num mas un infinit : ${infinito_1}, mimso en caso contrario`);


console.info("------------ resta -----------")
//En caso de resta, se cumple cuando son numeros de mismo tipo o diferente
let rest = 2 - "1";
console.log(`resta de datos distintos : ${rest}`);
let rest_1 = "4" - 2;
console.log(`resta de datos distintos : ${rest_1}`);
let infinito_2 = 5 - Infinity;
console.log(`num menos un infinit : ${infinito_2}, mimso en caso contrario`);


console.info("----------- operador * -----------")
let mult = "6" * 10;
console.log(`string * number : ${mult}`);
let mult_2 = 20 * "2";
console.log(`num * string : ${mult_2}`);
let mult_3 = Infinity * 10; 
console.log(`Inf * num : ${mult_3}`);
let mult_4 = -20 * -10;
console.log(`-20 * -10 : ${mult_4}`);

console.info("---------- operador / ----------");
let div_1 = 20/0;
console.log(`20/0 : ${div_1}`)
let div_2 = 0/0;
console.log(`0/0 : ${div_2}`);
let div_3 = Infinity/-2;
console.log(`infinity/-2 : ${div_3}`);

console.warn("metodo object = valueOf()");
let energy = {
    valueOf(){
        return 100;
    }
};// 100
let currentEnergy = energy - 10;
console.log(currentEnergy);
currentEnergy = energy + 100;
console.log(currentEnergy);

//Remainder realiza la función del dividendo
console.warn("operador Remainder % ");
let remainder = 5 % -2;
console.log(`Al dividir 5 entre 2, solo podira estar dos veces el 2, entonces para 5 faltaría "${remainder}" = remainder`);
let remainder_2 = -7 % 5;
console.log("-7 % 5 =",remainder_2,"<--- remainder(dividendo)");
let remainder_3 = 10 % Infinity;
console.log("10 % Infinity =",remainder_3);
let remainder_4 = 8 % 0; 
console.log("8 % 0 =",remainder_4);
let remainder_5 = "10" % 3;
console.log(" string=10 % 3 =",remainder_5);
let remainder_6 = "60" % "7";
console.log(" string=10 % 3 =",remainder_6);


console.warn("Operadores Asingnación");
let counter = 0;
counter += 1;
console.log(counter,"= 0 += 1");




