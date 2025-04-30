// 1. Crea una base de datos llamada empresa
use empresa;


//2. Agrega una colección empleados con 3 documentos que incluyan nombre, edad y puesto.
db.empleados.insertMany([
    {nombre: "Jorge Olguin", edad: 31, puesto: "Tecnico"},
    {nombre: "Ruben Pagnanini", edad: 27, puesto: "Gasista"},
    {nombre: "Ricardo Villa", edad: 26, puesto: "Pasante"}
    ]);


// 3. Actualiza la edad de uno de los empleados.
db.empleados.updateOne({ nombre: "Ricardo Villa" },{ $set: { edad: 29 }});


// 4. Elimina al empleado que tenga el puesto de "pasante".
db.empleados.deleteOne({ puesto: "pasante" });