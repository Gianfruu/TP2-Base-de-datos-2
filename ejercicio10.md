### creacion de un usuario con capacidades de lectura y escritura:

- creamos la base de datos en la cual queremos añadir a nuestro usuario:
~~~
use baseDatos
~~~

- creamos al usuario con el rol con permisos de lectura y escritura:
~~~
db.createUser({ user: "admin", pwd: "clave", roles: ["readWrite", "baseDatos"] })
~~~

### comandos para hacer backup y restore de nuestra base de datos:

- para almacenar una base de datos que estemos usando tendriamos que implementar este comando:
~~~
mongodump --db baseDatos(en este caso supongamos que la base de datos se llama "baseDatos")
~~~

- despues, en caso de que perdamos nuestra base de datos, tenemos que simplemente hacer este comando para restaurarla:
~~~
mongorestore --db baseDatos (y despues añadiriamos la ubicacion donde esta guardado nuestro backup)
~~~