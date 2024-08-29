let ciudad, sexo, edad;
datoValido = true;

//Variables para promedios
let contadorMujeres = 0, contadorGeneral = 0, contadorHombres = 0, contadorBinarios = 0;
let acumuladorEdadMujeres = 0, acumuladorEdadGeneral = 0, acumuladorEdadHombres = 0, acumuladorEdadBinarios = 0;

//Variables para porcentajes
let contadorMujeresMenores21 = 0, contadorHombresMayores21 = 0;

//Variables para max y min edad
let edadHombreMin = 0 , edadMujerMax = 110 ;


//Validacion de ciudad
do{
    ciudad = prompt("Ingrese la ciudad");

    if(!isNaN(ciudad)){
        alert("Ingrese texto, no números");
        datoValido = false;
    }else if(ciudad === null){
        alert("Por favor, complete el campo");
        datoValido = false;
    }else if(ciudad.trim() === ""){
        alert("Por favor no dejar el campo vacio")
    }else{
        datoValido = true;
    }
}while(!datoValido);

//Validacion de sexo
do {
    sexo = prompt("Ingrese el sexo (H, M, X)");
  
    if(!isNaN(sexo)) {
      alert("Ingrese texto, no números");
      datoValido = false;
    }
    else if(sexo === null) {
      alert("Por favor, complete el campo");
      datoValido = false;
    }
    else if(sexo.trim() === "") {
      alert("No dejar el prompt vacío");
      datoValido = false;
    }
    else if(sexo.toLowerCase() !== "h" && sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "x") {
      alert("Complete con una opción valida (H, M, X)");
      datoValido = false;
    }
    else {
      datoValido = true;
    }
}   while(!datoValido);

//Validamos edad

do{
  edad = parseInt(prompt("Ingrese una edad entre 0 y 110"));

  if(isNaN(edad)){
    alert("Ingrese numeros");
    datoValido = false;
  }else if(edad < 0 || edad > 110){
    alert("La edad esta fuera de rango, ingrese entre 0 y 110");
    datoValido = false;
  }else{
    datoValido = true;
  }
  //Aca ya esta todo validado

  //Siempre  incremento el contador general
  contadorGeneral++;
  acumuladorEdadGeneral++;

  if(sexo.toLowerCase() === "h"){
    //Es hombre
    contadorHombres++;
    acumuladorEdadHombres+= edad;
    //Veo si cumple con el requisito de edad
    if(edad > 21){
      contadorHombresMayores21++;
    }
    //Veo si el hombre es de menor edad
    if(edad > edadHombreMin){
      edadHombreMin  = edad;
    }
  }else if(sexo.toLowerCase() === "m"){
    //Es mujer
    contadorMujeres++;
    acumuladorEdadMujeres += edad;
    //Veo si cumple con el requisito de edad
    if(edad < 21){
      contadorMujeresMenores21++;
      //Veo si la mujer es de mas edad
      if(edad > edadMujerMax){
        edadMujerMax = edad;
      }
    }
  }else{
    //No binario
    contadorBinarios++;
    acumuladorEdadBinarios += edad;
  }

}while(!datoValido);

console.log(`Promedio edad general : ${acumuladorEdadGeneral / contadorGeneral}`);
console.log(`Promedio edad hombres : ${acumuladorEdadHombres / contadorHombres}`);
console.log(`Promedio edad general : ${acumuladorEdadGeneral / contadorGeneral}`);
console.log(`Promedio edad no binarios : ${acumuladorEdadBinarios / contadorBinarios}`);

console.log(`Un % ${100 * contadorHombresMayores21 / contadorGeneral} de personas son hombres mayores a 21`);
console.log(`Un % ${100 * contadorMujeresMenores21 / contadorGeneral} de personas son mujeres menores a 21`);

console.log(`La mujer de mas edad tiene ${edadMujerMax}`);
console.log(`El hombre de menor edad tiene ${edadHombreMin}`);