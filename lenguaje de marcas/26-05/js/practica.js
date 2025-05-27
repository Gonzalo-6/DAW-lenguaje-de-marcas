function sumar(){
    let mun1 = parseInt(document.getElementById("numero1").value);
    let mun2 = parseInt(document.getElementById("nummero2").value);

    let suma = num1 + num2;

    console.log("La suma es: ", suma);
}

function sumar2(){
    let mun1 = parseInt(document.getElementById("numero1").value);
    let mun2 = parseInt(document.getElementById("nummero2").value);

    let suma = num1 + num2;

    alert("la suma "+mun1+" + "+mun2+" es: "+suma);
}


function sumar3(){
    let mun1 = parseInt(document.getElementById("numero1").value);
    let mun2 = parseInt(document.getElementById("nummero2").value);

    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma;
}

function funconprompt(){
    let mun1 = parseInt(prompt("Introduzca un número:"));
    let mun2 = parseInt(prompt("Introduzca otro numero:"));

    let suma = num1 + num2;

     document.getElementById("resultado").innerHTML = suma;
}   

funconprompt