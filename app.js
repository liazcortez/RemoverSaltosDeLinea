var arreglo = `Esto es
una prueba
de.

Perrosjajajajajaja asdads
asasd`;

var boton = document.querySelector("#boton");
var texto = document.querySelector("#texto");
texto.innerText=arreglo;
boton.addEventListener('click', cambiartexto);
console.log(arreglo.length);


function cambiartexto(){
    var var2=arreglo.replace("e"," ");
console.log(var2);
}