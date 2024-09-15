//Funciones --> en js es un tipo de dato, almacena datos pero en realidad almacena codigo(conjunto de instrucciones que se puede reusar)

function foo(){
    //Todo lo que va aca es lo que la funcion va ejecutar cuando la llame
}

function saludar(){
    alert("Hola!");
}

saludar();

function saludarPorNombre(nombre){
    alert(`Hola ${nombre}`);
}

//El parametro (nombre) pasaria a ser una variable dentro de la funcion, es como si hiciera 
function saludarPorNombre(nombre){
    let nombre = "Ian";
    alert(`Hola ${nombre}`);
}

//Documentar la funcion(buena practica)

/*
*Funcion que saluda por alert
*@param{string} nombre string con el nombre
*de la persona a saludar
*/

function saludarPorNombre(nombre){
    alert(`Hola ${nombre}`);
}

//Esto anda pero retorna undefined
saludarPorNombre(); // Porque no llamo a nombre, si se supone que por parametro le estoy pasando nombre

//Si no pasan nada por parametro entonces podemos hacer

function saludarPorNombre(nombre){
    if(nombre===null){
        alert("Hola");
    }else{
        alert(`Hola ${nombre}`);
    }
}