//Variables


//Variables numéricas
let numero = 20;
console.log("Numero: ", numero);

//Variables de texto
let palabra = "palabra";
console.log("Palabra: ", palabra);
//Variables de texto con comillas dobles


//Variables booleanas
let booleano = true;
console.log("Booleano: ", booleano);

//Variables de tipo Array
let colores = [rojo, amarillo, azul];
console.log("Colores: ", colores[1]);

//Variables de tipo Objeto (Object: propiedad: valor)

let zumo= {
    ingredientes1: "Fresa",
    ingredientes2: "Naranja",
    ingredientes3: "Platano",
};

console.log("Zumo: ", zumo.ingredientes1);


//Variables DOM: Modelo de Objetos del Documento
/*El DOM es la estructura de objetos que genera el navegador cuando */

let caja = document.querySelector("#caja");
console.log("Caja: ", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

let cajas = document.querySelectorAll(".cajas");
console.log("Cajas: ", cajas);