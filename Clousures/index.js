/*

    Una clausura o clousure es una función que guarda referencias del estado adyacente(ámbito léxico)
    En otras palabras, permite acceder al ámbito de una función exterior desde una función interior.
    Otra definición más sencilla, una función externa te devuelve una función interna.

*/

function createFunc(explorador){
    let nombre = explorador;
    function muestraNombre(){
        console.log(nombre);
    }
    return muestraNombre;
}

/* Como vemos en este ejemplo, lo que esta sucediendo es que una función externa nos devuelve una función interna
   Guardamos la función en una variable para usarla posteriormente.
*/

let chrome = createFunc('Chorme');
let mozilla = createFunc('Mozilla');
mozilla();
chrome();

/* Veamos otro ejemplo, esta vez realizando una suma */

function creaSumador(x){
    return function(y){
        return x + y;
    }
}

let suma5 = creaSumador(5);
let suma10 = creaSumador(10);

console.log(suma5(2)) //Devuelve 7
console.log(suma5(5)) //Devuelve 10
