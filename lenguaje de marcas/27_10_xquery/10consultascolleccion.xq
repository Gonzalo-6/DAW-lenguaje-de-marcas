(:Mostrar todos los titulos de los CDs:)

(:for $x in doc("coleccion.xml")/coleccion/cd
return $x/titulo:)

(:2. Mostrar todos los artistas:)

(:for $x in doc("coleccion.xml")//cd
return $x/artista :)

(:3. Mostara titulo y aritsta juntos:)
(:for $x in doc("coleccion.xml")//cd
return concat($x/titulo," - ", $x/artista):)

(:4. Mostrar solo el titulo del primer CD:)

(:doc("coleccion.xml")//cd[1]/titulo:)

(:5. Mostrar CDs cuyo artista se "Bod dylan":)
(:for$cd in doc("coleccion.xml")//cd
where $cd/artista = "Bob Dylan"
return $cd/titulo:)

(:6.Mostrar todos los titulos ordenados alfabeticamente:)
(:for $cd in doc("coleccion.xml")//cd
order by $cd/titulo
return $cd/titulo:)


(:7. Crear una nueva estructura XML contitulo y artista:)

(:<catalogo>
{
  for $cd in doc("coleccion.xml")//cd
  return
    <disco>
      <nombre>{data($cd/titulo)}</nombre>
      <cantante>{data($cd/artista)}</cantante>
    </disco>
}
</catalogo>:)

(:8. MOstarar cuantos cds hay en total:)

(:count (doc("coleccion.xml")//cd):)

(:9.Mostara el titulo del ultimo cd:)

(:let $cds := doc("coleccion.xml")//cd
return$cds[last()]/titulo:)

(:10. Mostrar los titulos que contengan la palabra herat:)

(:for $cd in doc("coleccion.xml")//cd
where contains(lower-case($cd/titulo), "heart")
return $cd/titulo:)

