// Array para guardar todas las notas
const todasLasNotas = [];

while (true) {
    // Array para guardar las notas por alumno
    const notas = [];
    let cancelarProceso = false;

    // Bucle para ingresar 3 notas
    for (let i = 0; i < 3; i++) {
        // Solicito al usuario que ingrese una nota
        let entrada = prompt(`Ingrese la nota ${i + 1} para el alumno (o 'Cancelar' para terminar):`);
                
        // Verifico si el usuario quiere cancelar el proceso
        if (entrada === null || entrada.toLowerCase() === 'cancelar') {
            alert("Proceso cancelado.");
            cancelarProceso = true;
            break;
        }
        notas.push(entrada); // Agrego la nota al array de notas
    }
    
    // Sale del while si el proceso fue cancelado
    if (cancelarProceso) {
        break;
    }

    // Agrego las notas del alumno al array de todas las notas
    todasLasNotas.push(notas);
}

// Muestro todas las notas ingresadas
console.log("Las notas ingresadas son:", todasLasNotas);

//falta promedio y max y min