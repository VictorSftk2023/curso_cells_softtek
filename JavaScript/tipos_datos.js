console.warn("Ejecutando el segundo script -> <head>");

console.warn("Rangos----")
console.log("Valor maximo: "+ Number.MAX_VALUE)
console.log("Valor minimo: "+ Number.MIN_VALUE)

console.warn("Cadenas----")
let lenguaje_1 = "Java";
script_1 = lenguaje_1 + "Script";
if(script_1 == "JavaScript"){
    console.log(script_1 + " Impreso con variable concatenada")
}

// o de esta forma 
let lenguaje_2 = "Script"
let nombre = lenguaje_1 + lenguaje_2;

if(nombre == "JavaScript"){
    console.log(nombre + " Impreso concatenando ambas palabras")
}
// Elementos del String
console.log(`La cuarta letra de ${nombre} es: ${nombre[3]}`)

console.warn("valores de tipos de datos----")

let usrLogon = true;
let profile = null;
if(Boolean(profile) == false){//evaluando con boolean para sus mismos valores
    console.log("Completa la información")
}else{
    console.log("Informacion completa! :)")
}

console.error("Aqui termina el segundo script")

let myname_is = "Victor";
console.log(typeof(myname_is)); //string

console.warn("Valores de tipo NULL");
let obj = null;
console.log(typeof(obj)); //object (a esa solución considerada como un bug de js)
console.log(null == undefined); //true

console.warn("Valores de tipo NUMBER");
let myNum = [0]
console.log(Boolean(myNum)); //Transformación a boolean

let num_int = 120,
    num_float = 12.123,
    num_float2 = 0.045;
console.log(typeof(num_int),(num_float),(num_float2));



