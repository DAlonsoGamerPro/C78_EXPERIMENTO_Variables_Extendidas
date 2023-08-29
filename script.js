var Familia =["Beatriz", "Sergio", "Diego", "Gloria", "Mily", "Chispita", "Bonita", "Fifi", "Queso", "Capuchina", "Choquiz", "Hachiko", "Haku", "Totora", "Gamboringo", "Alma", "Héctor",];
document.getElementById("ver_Familia").innerHTML = Familia;

var primer_Nombre = Familia [0];
document.getElementById("ver_1er_Elemento").innerHTML = primer_Nombre;

var segundo_Nombre = Familia [1];
document.getElementById("ver_2do_Elemento").innerHTML = segundo_Nombre;

var tercero_Nombre = Familia [2];
document.getElementById("ver_3ro_Elemento").innerHTML = tercero_Nombre;

var cuarto_Nombre = Familia [3];
document.getElementById("ver_4to_Elemento").innerHTML = cuarto_Nombre;

var longitud = Familia.length;
document.getElementById("ver_longitud").innerHTML = longitud;

var bucle = "";
for (i=0; i<Familia.length; i++){
    bucle = bucle + Familia[i]+"<br>";
}
document.getElementById("ver_bucle").innerHTML = bucle;

var nuevo_elemento=Familia.push("La Picotuda");
document.getElementById("ver_nuevo_elemento").innerHTML = nuevo_elemento;


