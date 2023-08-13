console.error("Ejercicios de valores booleanos ")

let booleano_1 = true, 
    booleano_2 = false;
console.log(`Los unicos valores booleanos son: ${booleano_1} y ${booleano_2}`);
console.log(booleano_1, booleano_2);

// Confirmacion de booleanos con condicional
let error = false;
if (error) {
    console.log("Es true")
}else{
    console.log("Es false")
}
/*El resultado no da nada, ya que la condicional "if" siempre esta 
    evaluando un valor que se cumple (o sea ture).
    Y al declarar ese true como false, ejecuta el "else" al no cumplir con "if"*/




