//Primer ts :
//  let message : string = 'Hello, World!';
// console.log(message);
// let message: string = 'Hello, World!';
// // create a new heading 1 element
// let heading = document.createElement('h1');
// heading.textContent = message;
// // add the heading the document
// document.body.appendChild(heading);
var message = 'Hello, TypeScript!';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
var box;
console.log(typeof (box)); // undefined
box = "Hello";
console.log(typeof (box)); // string
box = 100;
console.log(typeof (box)); // number 
