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

//Array
console.warn("Arrays");
arreglo_1= [1,2,3,4,5];

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
console.log(arreglo_1)