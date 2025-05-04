db.empresa.drop()
db.empresa.insertMany([
    {empId: 1, nombre: 'Clara', edad: 25, puesto: 'Ventas' },
    {empId: 2, nombre: 'Ana', edad: 37, puesto: 'Seguridad' },
    {empId: 3, nombre: 'Antonio', edad: 18, puesto: 'Pasante' }
  ]);

db.empresa.find({$and: [{edad: {$gte: 25}},{edad: {$lte: 40}}]})