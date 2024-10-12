function capitalize(str) {
    // Separo la primera letra del resto
    let first = str.charAt(0);
    let rest = str.slice(1);
    // Cambio la primera letra a mayúscula
    first = first.toUpperCase(); 
    // Aseguro que el resto esté en minúsculas
    rest = rest.toLowerCase(); 
    // Concateno y devuelvo
    return first.concat(rest);
}

console.log(capitalize("ian"));

//Lo que hago aca es inventar un metodo, en este caso capitalize
String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase()+ this.substring(1).toLowerCase();
}

//Al string que le hagas el capitalaze agarrale el string 0, pasalo a mayuscula y concatenale del caracter 1 en adelante como minuscula