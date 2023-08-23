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

//En caso de resta, se cumple cuando son numeros de mismo tipo o diferente
let rest = 2 - "1";
console.log(`resta de datos distintos : ${rest}`)
let rest_1 = "4" - 2;
console.log(`resta de datos distintos : ${rest_1}`)