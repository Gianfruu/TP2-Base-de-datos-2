db.createCollection(clientes);

db.clientes.insertMany([
    { nombre: "Laura", apellido: "Gómez" },
    { nombre: "Pedro", apellido: "Martínez" },
    { nombre: "Ana", apellido: "Torres" },
    { nombre: "Juan", apellido: "Ramírez" },
    { nombre: "Carla", apellido: "Mendoza" }
  ]);

  db.clientes.createIndex({nombre: 1, apellido: 1 })
