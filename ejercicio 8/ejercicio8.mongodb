// Ejercicio 8: Uso de $lookup.
// Realiza una agregación donde se combinen los datos de alumnos y cursos usando $lookup.

db.cursos.insertMany([
    {
      id_curso: "PRO6651001",
      nombre: "Matemáticas",
      profesor: "Dr. Claudio Sala"
    },
    {
      id_curso: "PRO6651002",
      nombre: "Historia",
      profesor: "Lic. Francesco Graziani"
    },
    {
      id_curso: "PRO6651003",
      nombre: "Biología",
      profesor: "MSc. Paolo Rossi"
    },
    {
      id_curso: "PRO6651004",
      nombre: "Física",
      profesor: "Dr. Claudio Gentile"
    }
  ]);
    
  
  db.alumnos.insertMany([
    {
      _idAlumno: "ALN1492001",
      nombre: "Ruben Cano",
      edad: 20
    },
    {
      _idAlumno: "ALN1492002",
      nombre: "Antoni Olmo",
      edad: 22
    },
    {
      _idAlumno: "ALN1492003",
      nombre: "Luis Arconada",
      edad: 19
    }
  ]);
  
  db.alumnos.updateOne(
    {_idAlumno: "ALN1492001"},
    {
      $set: {
        id_curso: [
          "PRO6651001",
          "PRO6651004"
        ]
      }
    }
  );

  db.alumnos.updateOne(
    {_idAlumno: "ALN1492002"},
    {
      $set: {
        id_curso: [
          "PRO6651002",
          "PRO6651003"
        ]
      }
    }
  );

  db.alumnos.updateOne(
    {_idAlumno: "ALN1492003"},
    {
      $set: {
        id_curso: [
          "PRO6651001",
          "PRO6651002",
          "PRO6651003"
        ]
      }
    }
  );



  db.alumnos.aggregate([
    {
      $lookup: {
        from: "cursos",
        localField: "id_curso",
        foreignField: "id_curso",
        as: "detalle_cursos"
      }
    },
    {
      $project: {
        _id: 0,
        _idAlumno: 1,
        nombre: 1,
        edad: 1,
        detalle_cursos: {
          nombre: 1,
          profesor: 1,
          id_curso: 1
        }
      }
    }
  ]);