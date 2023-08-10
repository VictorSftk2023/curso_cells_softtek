console.warn("Ejecutando el segundo script -> <head>");
arr = [
    primero = "cadena",
    segundo = true,
    tercero = 1234,
    cuarto = 1.34,
    quinto = "",
    sexto = null
]
numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

for(let i = 0; i < arr.length; i++){
    console.log(typeof(arr[i]));
}
console.info(`El cuarto elemento es ${arr[3]} y es: `+ typeof(arr[3]))

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

console.warn("Objetos ---------")/////////////////////// OBJETOS
let vic={
    nombre: "Victor Manuel",
    "apellido paterno": "Vazquez",
    "apellido materno": "Gonzalez",
    edad: 25,
    sexo: "Hombre",
    profesion: "Desarrollador Web",
    hobbies: ["Juegos", "Videojuegos", "Cine", "Cocina"],
    contactos: {
        facebook: "Victor",
        whatsApp: 722123456,
    }
}
console.log(vic.edad);
console.log(vic["contactos"]["facebook"]);


console.error("Aqui termina el segundo script")