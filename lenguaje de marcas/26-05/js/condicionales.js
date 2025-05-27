//CONDICIONALES

let a = 10;
let b = 5;

//= ,==, ===, 

//5=='5' -> True
// 0== false -> True
// null == undefined -> True
//5===5 -> True


// >, <,

if (a > b) {
    console.log("a es mayor que b");
}else if (a == b) {
    console.log("a es igual que b");
}
else {
    console.log("a es menor que b");
}


let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    default:
        console.log("No es un dia de la semana");
}