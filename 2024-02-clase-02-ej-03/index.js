/* 1- Ingresar y mostrar las notas de una comision, calcular e informar:

El promedio de los alumnos desaprobados (notas < 4)
El promedio de los alumnos aprobados (notas >= 4)
El promedio de los alumnos promocionados (notas >= 7, tambien cuentan como aprobados)
La minima y maxima nota ingresada
Se desconoce la cantidad de notas */

//Contadores
let contadorAprobados = 0, contadorDesaprobados = 0, contadorPromocionados = 0;
//Acumuladores
let acumuladorAprobados = 0, acumuladorDesaprobados = 0, acumuladorPromocionados = 0;
//Variables para nota maxima y minima
let maxNota = 1 , minNota = 10;

do{
    let nota;
    let notaValida = true;
    do{
        //Lo que se repite
        nota = parseInt(prompt("Ingrese una nota del 1 al 10: "));
        //Esto va devolver
        // -Numero entre 1 y 10
        // -Numero menor a 1
        // -Numero mayor a 1
        // -NaN
        if(isNaN(nota)){
            alert("Ingrese una nota númerica");
            notaValida = false;
        }else if(nota < 1){
            alert("Ingrese una nota mayor o igual a 1");
            notaValida = false;
        }else if(nota > 10){
            alert("Ingrese una nota menor o igual a 10");
            notaValida = false;
        }
    }while(!notaValida); // notavalida != true
    
    //Lo que se repite
    //Empiezo a preguntar
    if(nota < 4){
        contadorDesaprobados++;
        acumuladorDesaprobados +=nota;
    }else{
        //Aprobado
        contadorAprobados++;
        acumuladorAprobados +=nota;
        //Promociona
        if(nota >= 7){
            contadorPromocionados++;
            acumuladorPromocionados += nota;
        } 
    }

    //Pregunto si la nueva nota es mayor a la anterior
    if(nota > maxNota){
        //Si es asi, encontre un nuevo maximo
        maxNota = nota;
    //Pregunto si la nueva nota es menor a la anterior
    }if(nota < minNota){
        //Si es asi, encontre un nuevo minimo
        minNota = nota;
    }

} while(confirm("¿Otra nota?"));

//Una ves se cargan las notas, promediamos
alert(`Hubo ${contadorDesaprobados} alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobados / contadorDesaprobados).toFixed(1)}`);
alert(`Hubo ${contadorAprobados} alumnos aprobados y su nota promedio fue de ${(acumuladorAprobados / contadorAprobados).toFixed(1)}`);
alert(`Hubo ${contadorPromocionados} alumnos promocionados y su nota promedio fue de ${(acumuladorPromocionados / contadorPromocionados).toFixed(1)}`);

alert(`La nota minima del curso fue ${minNota}`);
alert(`La nota maxima del curso fue ${maxNota}`);