// tarea, variable items
let items = [1, 2, 3, null];



// TypeScript selecciona el tipo de matriz numérica ( number[]) como el mejor tipo común.


// cadena a la itemsmatriz
// TypeScript inferirá el tipo de los elementos como una matriz de números y cadenas:(number | string)[]
let items_1 = [0, 1, null, 'Hi'];



// Cuando TypeScript no puede encontrar el mejor tipo común, devuelve el tipo de matriz de unión.
// TypeScript infiere que el tipo arres (RegExp | Date)[]
let arr = [new Date(), new RegExp('\d+')];

