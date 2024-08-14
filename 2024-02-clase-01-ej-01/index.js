// Pido dos extremos para comprar
const max = parseInt(prompt("Ingrese el máximo para comprar"));
const min = parseInt(prompt("Ingrese el mínimo para comprar"));

// Pido el número para comparar
const num = parseInt(prompt("Ingrese el número a comparar"));

// Verifico si el número está en rango
if (num >= min && num <= max) {
    // Entro acá solo si está entre el min y el max (inclusive)
    alert("El número está en rango");
} else {
    alert("El número NO está en rango");
}

// Pregunto si es par o impar
if (num % 2 === 0) {
    // Es par porque tiene resto 0
    alert("El número es par");
} else {
    // Es impar porque tiene resto 1
    alert("El número es impar");
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