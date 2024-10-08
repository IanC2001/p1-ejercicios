class Libro {

    #nombre;
    #autor;
    #editorial;
    #portada;

    constructor(nombre, autor, editorial, portada) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.portada = portada;
    }
    #validarString(str){ //Solo es accesible dentro de la clase,
        return isNaN (str);
    }

    //Get y Set enmascaran una propiedad(permiten modificar una propiedad privada)
    get nombre(){
        return `${this.#nombre} por ${this.autor}`;
    }

    set nombre(newNombre){
        if(this.#validarString(newNombre)){
            return this.#nombre = newNombre;
        }
    }}

let libro = new Libro("El hobbit","yo","abc");
//ESTO ES UNA PROPIEDAD PÚBLICA
libro.autor="otro";
