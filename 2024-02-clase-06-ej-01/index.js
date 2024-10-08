// Llamo al contructor de Biblioteca
let biblioteca = new Biblioteca();

function mostrarCatalogo() {

    document.querySelector(".container").innerHTML = biblioteca.toHTML();
}

function pedirLibro(nombre) {

    alert(`Quedan ${biblioteca.pedirLibro(nombre)} libros de ${nombre}`);
}

function devolverLibro(nombre) {

    alert(`Quedan ${biblioteca.devolverLibro(nombre)} libros de ${nombre}`);
}







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

 