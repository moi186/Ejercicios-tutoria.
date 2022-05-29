//Licencia
/* var edad = parseInt(prompt("¿Cual Es Su Edad?"));


if (edad >= 18) {
    alert("usted es Mayor de Edad Puede Conducir");
} else {
    alert("Lo Siento Mucho Usted tiene " + edad + " Años No Puede Conducir");
} */


// Nota
/* var inserteNumero = parseInt(prompt("Digite Un Número"));

if (inserteNumero >= 1 && inserteNumero <= 25) {
    alert("Su Nota Final es 25");
} else if (inserteNumero >= 26 && inserteNumero <= 50) {
    alert("Su Nota Final es 50");
} else if (inserteNumero >= 51 && inserteNumero <= 75) {
    alert("Su Nota Final es 75");
} else if (inserteNumero >= 76 && inserteNumero <= 100) {
    alert("Su Nota Final es 100");
} */

var contador = 1;
var intentos = 30;

while (contador <= intentos) {

    var texto = prompt("Cancele el Programa");
    var palabraMágica = "Cancelar";

    if (texto == palabraMágica) {
        alert("Haz Cancelado el Programa con Éxito");
        break;
    } else {}
    contador++
}
document.write(contador)

/* if (texto != "Cancelar" && texto != "cancelar") {
    prompt("Cancele el Programa");

} else {
    document.write(prompt);
} */