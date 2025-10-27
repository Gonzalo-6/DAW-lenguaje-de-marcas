(:BUCLES FOR:)
(:Vincula una o mas varialbles a expresiones escritas en XPath:)
(:Crea un fujo de tuplas en el que cada tupla esta vinculada a una de las variables:)

for $x in (1 to 5)
return <numero>{$x}</numero>

for $x at $y in doc("coleccion.xml")/coleccion/cd
return <cd>{$x}, {$X}</cd>

(:LET:)
(:Vincula una variable al resultado completado de una expresion añadiendo esos vinculos a las tuplas generadas por ina clausula for:)

let $s :=7
let $z :=10

return 10+$s+$z

(:WHERE:)
(:filtar las tuplas eliminando todos los valores que ni cumplan las condiciones dadas:)

for $x in doc("coleccion.xml")/coleccion/cd
WHERE $x/precio < 10


(:ORDER BY:)
(:Ordena las tuplas según un criterio dado:)

order by $x/precioascending

(:RETURN:)
(:Construye el resultado de las consultas para una tupla dada:)
return <cd>data({$x/titulo})</cd>

