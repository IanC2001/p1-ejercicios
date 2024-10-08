let biblioteca = [];
//Intento leer el archivo json con los libros
fetch("libros.json").then(response => response.json()).then(libros =>{
    //Una vez que tengo los libros,
    for(let libro of libros){
        let obj = new Libro(
            libro.nombre,
            libro.autor,
            libro.editorial,
            libro.portada,
        )
        //Lo agrego a la página
        document.querySelector(".container").innerHTML+= obj.toHTML();
    }
})
    




















//Ejemplo en clase
/* class Alumno{
    constructor(nombre,dni){
        //Propiedad publica (porque se puede modificar)
        this.nombre = nombre;
        this.dni = dni;
    }
    getName(){ //Me permite obtener el nombre
      return this.nombre;  
    }

    setName(nombre){ //Me permite cambiar el nombre
        this.nombre = nombre;
    }
} */
//Ej:
/* 
let alumno = new Alumno("Ian Cane", 1111111);
alumno.getName();
//Ian cane

alumno.setName("Juan")
//Juan
*/

//Ej publica:

/* 
let alumno = new Alumno("Ian Cane", 1111111);
cambio el nombre
//alumno.nombre ="Jose"
*/

//Prop privadas(no se pueden modificar)
//Prop estaticas("las ya definidas ej math. etc, no hay que crear un objeto para usarlo")

 