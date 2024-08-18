//Pedimos datos
let categoria= parseInt(prompt("Ingrese su categoria(1, 2 o 3) para sueldos de 1000usd, 1500usd y 2000usd"));
let subcategoria= prompt("Eliga la subcategoria(A, B o C) para multiplicadores de 1.5, 2 y 2.5");


//Asigno sueldo a cada categoria
let sueldo= 1000;

if(categoria == 1){
    sueldo = 1000;
}else if(categoria == 2){
    sueldo = 1500;
}else if (categoria == 3) {
    sueldo = 2000;
}

console.log(`tu sueldo es de ${sueldo}`)

//Asigno la subcategoria

switch(subcategoria.toUpperCase()){
    case "A":
        sueldo*=1.5;
        break;
    case "B":
        sueldo*=2;
        break;
    case "C":
        sueldo*=2.5;
        break;
    default:
        sueldo=0;
        break;
}

//Informo el rango
if(sueldo >=1500 && sueldo <= 3000){
    alert(`Sos rango inicial, sueldo: ${sueldo}`);
}else if(sueldo >= 3000 && sueldo <= 4000){
    alert(`Sos rango intermedio, sueldo: ${sueldo}`)
}else if(sueldo > 4000){
    alert(`Sos rango avanzado, sueldo: ${sueldo}`)
}