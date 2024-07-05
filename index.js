const express = require('express');
const app = express();

/*
 Verbos HTTP
 GET; obtener un recurso
 POST; ejecuta el navegador cada que se pone una url para ir aun sitio web ejecutando el get. Cuando queremos guardar o publicar algo, cuando nos registramos en un sitio web hacemos un post al sitio y este lo interpreta como post para guardarlo
 PATCH;Actualización de datos, De un dato de un recurso específico (Cualquier registro en un abase de datos) Lo que hace es modificar alguno de esos elementos 
 PUT; Modificar todos los elementos 
 DELETE
 Son soportados por express
 */

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido")
});

app.listen(3000, () => {
    console.log("Server is running...")
});