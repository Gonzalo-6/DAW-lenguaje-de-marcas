//Funiones-> Bloque de codigo que solo se ejecuta cuando es llamado

//var y let 

console.log("Hola mundo");

//Funciones sin parametros


function saludo(){
    console.log("Hola mundo");


}
//saludo(); // Llamada a la funcion saludo


//Funiones con parametros
function operacion(num1, num2){
    let resultado = num1 + num2;
    console.log("El resultado: ", resultado);
}

operacion(10, 10);
operacion(20, 50);


//Funciones con return y sin parametros

function retorno1(){
    let numero = 5;
    return numero;

}

console.log(retorno1()); // Llamada a la funcion retorno1


//Funiones con return y con parametros

function retorno2(numero){
    returnnumero;

}
console.log(retorno2(10)); // Llamada a la funcion retorno2


function testScope(){
   if(true){
        var x = 10;
        let y = 20;
        
    }
    console.log(x); // x = 10
    console.log(y); // y = Referenceerror y no esta definido

}

console.log(a);
var a = 5;

console.log(b);
let b = 10; // b no esta definido hasta que se inicializa

var x =1;
var x = 2; // Se puede redeclarar una variable con var
let y = 1;
// let y = 2; // No se puede redeclarar una variable con let    