//Declaro un array vacio

let foo = [];
const bar = [];

//Agrego elementos en el array
foo[1] = "este es el primer elemento";
foo[2] = 123;


// 1. - Forma de agregar elementos
bar.push("Primer elemento");

// 1.1 - Todo .push va al final
bar.push("Esto va al final");

// 2. -Inteto copiar todos los elementos de bar 
let baz = bar; // Hasta aca si los llamo veo los mismos elementos

// 2.1 - Si hago : voy a ver lo mismo en baz y bar.
baz.push("Elemento nuevo");




