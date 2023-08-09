// Funciones
function suma(a,b) {
    return a + b;
};
// Resultado con variable
let resultado = suma(10,40);
//resultado con comentario
console.log(`La suma da un valor de: ${resultado}`);
console.log("///////////////////")

//Condicionales (IF)
let a = 20, b = 100;
function dividir(a,b) {
    if(b == 0){
        throw "Division entre cero"
    }
    return a/b;
}
console.log(dividir(a,b))
console.log(dividir(80,4))
console.log("///////////////////")

// Arrays
let arreglo_vacio = [];
let arreglo = [1,2,3,4,5];
console.log("Longitud del arreglo: "+ arreglo.length);
for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}
// ECS
// for(let arreglo of arreglo){
//     console.log(arreglo);
// }


