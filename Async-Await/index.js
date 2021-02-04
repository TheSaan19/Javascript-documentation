/*
    EJECUCIÓN ASÍNCRONA:

    Si queremos que una función espere a recibir un return de un valor por parte de otra función, y a su vez en la otra función necesitamos una espera.
    Nuestra función principal debe ser asíncrona y utilizar await para llamar a la fución secundaria.
    En la función que queremos esperar un cierto tiempo debemos devolver una promesa y dentro de la promesa introducir el setTimeout.
    Importante incluir resolve() que actúa com return;

*/

const imprimir = () => {
    return new Promise((resolve)=>setTimeout(() => {
        console.log("timeout");
        resolve();
    }, 2000)); 
}



const test = async () => {
    await imprimir()
    console.log(1);
    console.log(2);
}

test();
//Resultado de la ejecución
// timeout
//1
//2

