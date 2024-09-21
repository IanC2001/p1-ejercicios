
function validarString(){
    let str, datoValido = true;
    do{
        str = prompt(msg);

        if(str === null || str.trim() === ""){
            alert("Complete el campo");
            datoValido = false;
        }else if(!isNaN()){
            alert("Ingrese texto, no numeros");
            datoValido = false;
        }else{
            datoValido = true;
        }
    }while(!datoValido);
    //El dato es OK
    return str;
}

function validarNota(){
    let nota, datoValido;

    do{
        nota = parseInt(prompt("Ingrese la nota de aprobado"));

        if(isNaN(nota)){
            alert("La nota debe ser numérica");
            datoValido = false;
        }else if(nota < 4 || nota > 10){
            alert("Se aprueba entre 4 y 10");
            datoValido = false;
        }else{
            datoValido = true;
        }
    }while(!datoValido);

    return nota;
}