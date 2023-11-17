// TypeScript utiliza anotaciones de tipo para especificar explícitamente tipos de identificadores como variables,
//  funciones, objetos, etc.

// TypeScript utiliza la sintaxis :
//  typedespués de un identificador como anotación de tipo,
//   que typepuede ser cualquier tipo válido.
// Una vez que un identificador está anotado con un tipo,
//  sólo se puede utilizar como ese tipo.
//   Si el identificador se utiliza como un tipo diferente, 
//  el compilador de TypeScript emitirá un error.


// // La siguiente sintaxis muestra cómo especificar anotaciones de tipo para variables y constantes:
// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;
// // error de no poder redeclarar 



// Utiliza numberanotaciones para una variable:
let contador: number;
contador = 1;


// Puedes usar una anotación de tipo para una variable e inicializarla en una sola declaración como esta:
let counter: number = 1;

// A continuación se muestran otros ejemplos de anotaciones de tipos primitivos:
let name0: string = 'John';
let age: number = 25;
let active: boolean = true;


// Para anotar un tipo de matriz que utiliza, utilice un tipo específico seguido de un corchete : type[]:
// let arrayName: type:[type];



// lo siguiente declara una matriz de cadenas:
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];



//  el personobjeto solo acepta un objeto que tiene dos propiedades: namecon el stringtipo y agecon el numbertipo.
let person: {
    name: string;
    age: number
 };
 
 person = {
    name: 'John',
    age: 25
 }; // valid

//  A continuación se muestra una anotación de función con anotación de tipo de parámetro y anotación de tipo de retorno:
 let greeting : (name: string) => string;



// En este ejemplo, puede asignar cualquier función que acepte una cadena y devuelva una cadena a la greetingvariable:
 greeting = function (name: string) {
    return `Hi ${name}`;
};

// Utilice anotaciones de tipo con la sintaxis : [type]para especificar explícitamente un tipo para una variable, función, valor de retorno de función, etc.
// Lo siguiente provoca un error porque la función asignada a la greetingvariable no coincide con su tipo de función .
// greeting = function () {
//     console.log('Hello');
// };