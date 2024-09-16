function cargarAlumnos(){
//Pido el nombre del alumno
alumno = validarString("Ingrese el nombre del alumno");
}

function cargarMateria() {
    // Pido la materia y valido
    let materia = validarString("Ingrese el nombre de la materia");
    // Guardo la materia en su array
    materias.push(materia);
    // Pido nota y valido
    let nota = validarNota(`Ingrese la nota de final de ${materia}`);
    // Guardo la nota en su array
    notas.push(nota);
}

function mostrar(){
    /**
     * <h1>${alumno}</h1>
     * <h2>Materias</h2>
     * <ul>
     *      <li>${materia} - ${notas}</li>
     *      <li>${materia} - ${notas}</li>
     *      <li>${materia} - ${notas}</li>
     *      <li>${materia} - ${notas}</li>
     * </ul>
     */

    //Encuentro el container
    const container = document.querySelector(".container");
    //Limpio el container 
    container.innerHTML += "";

    //Creo el h1 con el nombre del alumno
    container.innerHTML += `<h1>${alumno}</h1>`;
    container.innerHTML += `<h2>Materias</h2>`;
    //Creo la lista(se cierra automáticamente)
    container.innerHTML += `<ul>`;
    //Encuentro la lista que generé recién
    const ul = document.querySelector("ul")
    //Agrego las materias

    //Con un for normal
    /* for(let i = 0; i < materias.length; i++){
        ul.innerHTML += `<li>${materias[i]} - ${notas[i]}</li>`;
    } */

    //Con un for in (recorre el array de principio a fin)
     for(let i in materias){
        ul.innerHTML += `<li>${materias[i]} - ${notas[i]}</li>`;
    } 

    //Con un for of (a medias anda, toma los elementos del array, no a los indices)
    /*  for(let materia of materias){
        ul.innerHTML += `<li>${materia[i]}</li>`;
    } */
}