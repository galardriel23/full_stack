let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);


// Si reasigna un valor primitivo al objeto, obtendrá un error:employee
// employee = "Jane";
// error TS2322: Type '"Jane"' is not assignable to type 'object'.



// El objeto es un tipo con una lista fija de propiedades. Si intenta acceder a una propiedad que no existe en el objeto, obtendrá un error:employeeobjectemployee
// console.log(employee.hireDate);
// error TS2339: Property 'hireDate' does not exist on type 'object'.




