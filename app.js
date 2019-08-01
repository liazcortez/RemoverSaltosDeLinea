var string = '';



var boton = document.querySelector("#boton");
var text = document.querySelector("#texto");

boton.addEventListener('click', cambiartexto);



function cambiartexto() {
    var stringfinal = [];
    string = texto.value;
    //  stringfinal = string.replace(/\n/gi, ' '); .replace(/\.  /gi, '. \n\n');
    stringfinal = string.replace(/\.\n/gi, '#####');
    setTimeout(() => {
        stringfinal = stringfinal.replace(/\n/gi, ' ').replace(/#####/gi, '.\n\n');
        console.log(stringfinal);
        texto.value = stringfinal;
    }, 50);

    texto.value = stringfinal;
}