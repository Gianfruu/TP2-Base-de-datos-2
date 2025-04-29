db.empresa.insertMany([
    {empId: 1, nombre: 'Clara', edad: 23, puesto: 'Ventas' },
    {empId: 2, nombre: 'Ana', edad: 37, puesto: 'Seguridad' },
    {empId: 3, nombre: 'Antonio', edad: 18, puesto: 'Pasante' }
  ]);
  

db.empresa.updateOne({nombre: 'Clara'}, {$set:{edad:26}})
  
db.empresa.deleteOne({puesto: 'Pasante'})
