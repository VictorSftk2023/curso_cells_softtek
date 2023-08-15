//Objeto
const semanaLaboral = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
console.log(semanaLaboral);
semana1 = ["Lunes", "Martes", "Miercoles"];
console.log(typeof(semana1));
let semana2 = [];
console.log(typeof(semana2));//Objeto
arr= [1,2,3,4,5]; //Objeto
console.log(typeof(arr));//Objeto   

objeto_1= { 
    nombre: "Victor",
    apellido: "Manuel"
}
console.log(objeto_1);

console.warn("Mas Objetos");
console.warn("Objetos ---------")/////////////////////// OBJETOS
vic={
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

//Array
console.warn("Arrays");
arreglo_1= [1,2,3,4,5];
console.log(arreglo_1.length); // 5
arreglo_2= [
    "Enero",
    "Febrero", 
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
console.log(arreglo_1);
console.log(arreglo_2);
console.log(arreglo_2[6])//Elemento en una posición dentro del array
arreglo_1.push(6);// Agregando un valor dentro de la secuencia

//Iteración de elemtos dentro de un Array
arr = [
    primero = "cadena",
    segundo = true,
    tercero = 1234,
    cuarto = 1.34,
    quinto = "",
    sexto = null
]
for(let i = 0; i < arr.length; i++){
    console.log(typeof(arr[i]));
}

let numeracion = ["a", "b", "c", "d", "e", "f"];
console.log(numeracion);
numeracion.pop(); //Elimina el ultimo elemento de un array 
console.log(numeracion[6]); //devuelve el elemento que se encuentra en la posicion definida

