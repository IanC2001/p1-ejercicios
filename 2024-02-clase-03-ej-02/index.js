// Variables globales
let numero1, numero2, suma;

/**
 * Funcion que atiende el click para pedir el primer numero
 */
function pedirNumero1() {
    // Copio el numero validado en la variable global
    numero1 = validarNumero("Ingrese el primer numero");
}

/**
 * Funcion que atiende el click para pedir el segundo numero
 */
function pedirNumero2() {
    // Copio el numero validado en la variable global
    numero2 = validarNumero("Ingrese el segundo numero");
}

/**
 * Funcion que suma los dos numeros pedidos
 */
function sumar() {
    suma = numero1 + numero2;
}

function restar(){
    resto = numero1 - numero2;
}

function multiplicar(){
    multi = numero1 * numero2;
}

function dividir(){
    restante = numero1 / numero2;
}
/**
 * Funcion que muestra el resultado de la suma
 */


//Primer error --> al estar todo en una funcion si tocas sumar salta el alert despues de restar como undefnided, que hacer validar
function resultado(){
    console.log(`El resultado de ${numero1} + ${numero2} es ${suma}`);
    console.log(`El resultado de ${numero1} - ${numero2} es ${resto}`);
    console.log(`El resultado de ${numero1} * ${numero2} es ${multi}`);
    console.log(`El resultado de ${numero1} / ${numero2} es ${restante}`);
}
//DUDA preguntar profe como validar

/**
 * Funcion encargada de pedir y validar un numero
 * @param {String} msg mensaje que aparece en el prompt
 * @returns numero valido
 */
function validarNumero(msg = "") {
    // Variable local para validar
    let numero;
    do {
        numero = parseInt(prompt(msg));

        if(isNaN(numero)) {
            alert("Solo se aceptan numeros");
        }

    } while(isNaN(numero));

    // Retorno numero validado a quien lo llamo
    return numero;

    // Este mensaje nunca aparece porque se corta en seco la funcion con el return
    alert("Mensaje post return");
}