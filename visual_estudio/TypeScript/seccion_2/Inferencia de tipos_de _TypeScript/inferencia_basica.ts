let counter_1: number;


let counter_2 = 0;

// Del mismo modo, cuando asigna un valor a un parámetro de función, TypeScript infiere el tipo del parámetro al tipo del valor predeterminado. Por ejemplo:
// En este ejemplo, TypeScript infiere que el tipo de maxparámetro es number.


function setCounter(max=100) {
    // ...
}


// TypeScript infiere el siguiente tipo de retorno de la increment()función como number:
function increment(counter: number) {
    return counter++;
}



function increment_2(counter: number) : number {
    return counter++;
}