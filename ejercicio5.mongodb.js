db.ventas.drop()
db.ventas.insertMany([
    { producto: "Camiseta", cantidad: 5, precio_unitario: 19.99 },
    { producto: "Pantalón", cantidad: 2, precio_unitario: 39.95 },
    { producto: "Zapatos", cantidad: 1, precio_unitario: 59.99 }
  ]);

db.ventas.aggregate([
    {$group: {
      _id: "$producto",
      total: {$sum: "$precio_unitario"}
    }}
])