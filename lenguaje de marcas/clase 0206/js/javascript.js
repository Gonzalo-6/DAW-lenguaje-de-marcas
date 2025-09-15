/*Bucles
-while-> cuando no tengamos un número de repeticiones concreto.
-do while -> cuando no tengamos un número de repeticiones concreto pero queremos que se ejecute al menos una vez.
-for -> utilizar cuando tenemos un nuemro de repeticones concretas o un rango.
*/

//1-10
//i++ -> i+= i -> i = i + 1

 /*   for (let i = 1;i>=10;i++){
        console.log(i);
    }

*/

/*
let i = 1;

while (i <= 10) {
    alert(i);
    i++;
}*/

/*let i = 1;
do {

    console.log(i);
    i++;

}while(i<=10);;
*/

//bucles con DOM

let cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas)
    
for (let i = 0; i<cajas.length;i++){
cajas[i].style.width = "50px";
cajas[i].style.height = "50px";
cajas[i].style.backgroundColor = "blue";
cajas[i].style.marginTop = "5px";
cajas[i].style.marginRight = "5px";
cajas[i].style.display = "inline-block";
}