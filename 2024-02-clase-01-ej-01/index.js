//Pido dos extremos para comprar

const max = parseInt(prompt("Ingrese el maximo para comprar"));
const min = parseInt(prompt("Ingrese el minimo para comprar"));

//Pido el numero para comparar

const num = parseInt(prompt("Ingrese el numero a comparar"));

//Verifico si el numero esta en rango

if(num <= min && num >= max){
    //Entro aca solo si esta entre el max y el min
    alert("el num esta en rango");
}else{
    alert("el num NO esta en rango");
}
//Pregunto si es par o inpar

if(num % 2 == 1){
    //Es impar porque tiene resto 1
    alert("El numero es impar");
}else{
    //Es par porque tiene resto 0
    alert("El numero es par");
}


/* Otra forma */
/* 
if(num >= min){
    if(num <= max){

    }else{
        //No esta en rango
    }
}else{
    //No esta en rango
} */