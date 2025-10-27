(:Extraer los titulos de los cd con mecio <10
for $x in doc("coleccion.xml")/coleccion/cd
where $x/precio < 10
return $x/titulo:)

(:Difernecias entre for y let:)
(:Vamos a extraer solo los titulos de los cd:)

(:for $x in doc("coleccion.xml")/coleccion/cd/titulo
return<titulos>{$x}</titulos>:)

let $x:= doc("coleccion")/coleccion//titulo
return <titulos>{$x}</titulos>