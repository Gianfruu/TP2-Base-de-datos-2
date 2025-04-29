
db.empresa.insertMany([
{_id: ObjectId('681041772c08aa1673d861e0'),  nombre: 'Jorge Olguin',edad: 31,  puesto: 'Encargado de Area'},
{_id: ObjectId('681044cd2c08aa1673d861e1'),nombre: 'Ruben Pagnanini',edad: 27, puesto: 'Tecnico tornero'}

]);

db.empleados.find({$and: [{edad: ($gte: 25)}, {edad: {$lte: 40}}]})