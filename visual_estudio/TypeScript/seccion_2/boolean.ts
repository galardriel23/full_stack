//  El tipo es uno de los tipos primitivos de TypeScript.booleantruefalseboolean

let pending: boolean;
pending = true;
// after a while
// ..
pending = false;




// Operador	Significado
//   Y	           &&
//   O	           ||
//  NO          	!


// NOT operator
const pending1: boolean = true;
const notPending = !pending; // false
console.log(result); // false

// AND operator
const hasError: boolean = false;
const completed: boolean = true;

// OR operator
let result = completed && hasError; 
console.log(result); // false

result = completed || hasError; 
console.log(result); // true


// puede utilizar la palabra clave booleana para anotar los tipos de las variables booleanas:


let completed0: boolean = true;


// Sin embargo, TypeScript a menudo infiere tipos automáticamente, por lo que es posible que las anotaciones de tipo no siempre sean necesarias.

// Al igual que una variable, puede anotar parámetros booleanos o devolver el tipo de una función utilizando la palabra clave booleana:

function changeStatus(status: boolean): boolean {
    return true
 }