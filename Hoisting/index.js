/*
    El Hoisting es una palabra reservada para referirse al contexto de ejecución de javascript, con otras palabras
    se podría decir que tanto la declaración de las variables como las funciones son llevadas al comienzo del código
    para evitar errores de ejecución
*/

/* Veamos un ejemplo */

/* Como se observa estamos llamando a la función, antes de que se produzca su declaración, sin embargo no nos da ningún error
   ya que la declaración de la función se sube al inicio del código sin que nosotros lo veamos
*/

nombreDelGato('Juan');

function nombreDelGato(nombre){
    console.log(`El nombre del gato es: ${nombre}`);
}

/* Veamos otro ejemplo técnico */

var x = 5;
function ejemplo(){
    console.log(x); // Este primer console log no devolverá el valor de 5 de la variable globar, si no que devolverá undefined ya que debajo se está declarando la variable x en el ámbito local
    var x = 10;
    console.log(x); // Este console.log si que nos devolverá el valor de 10
}