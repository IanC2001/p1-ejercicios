function cargarNombre(){
    const nombre= validarString('Ingrese el nombre del alumno');
    //Paso el nombre al objeto alumno
    alumno.nombre = nombre;
}

function cargarMateria(){
    //Pido y valido string
    const nombre = validarString('Ingrese el nombre de la materia');
    //Pido y valido nota
    const nota = validarNota();
    //Creo un objeto materia
    const materia = {
        "nombre": nombre,
        "nota":nota
    };
    //Agrego materia al objeto alumno
    alumno.materias.push(materia);
}
function cargarAlumno(){
    //Agrego una funcion como propiedad
    alumno.toHTML = function (){
        //Variable de string vacio
        let str = "";
        for(let alumno of alumnos){
            //Agrego h1 con nombre del alumno
            str +=`<h1>${this.nombre}</h1>\n`;
            str +=`<h2>Materias</h2>\n`;
            //Creo un string auxiliar
            str = `<ul>`;
            //Recorro las materias del alumno
            for(let materia of this.materias){
                //Armo el li
                str += `<li> ${materia.nombre} - ${materia.nota}</li>\n` 
            }
            //Cierro el ul
            str += `</ul>`;
            //Devuelvo str
            return str;
        }
    }
    //Subo al alumno a la lista
    alumnos.push(alumno);
    //Inicializar un objeto nuevo
    alumno ={
        materias: []
    };
}

function mostrarLista(){
    //Traigo el primer elemento que tenga la clase  container y lo guardo en una variable
    const div = document.querySelector(".container");
    //Limpio el html
    div.innerHTML = "";
    for(let alumno of alumnos){
        //Le paso al div el html que genera el propio objeto
        div.innerHTML += alumno.toHTML();
    }
}