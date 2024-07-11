//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middlewre/notFound');
const index = require('./middleware/index')

        //Si ponemos llaves, pedimos ese solo elemnento que se identifica como el arreglo que tiene
/*
 Verbos HTTP
 GET; obtener un recurso
 POST; (Almacenar/Crear recursos)ejecuta el navegador cada que se pone una url para ir aun sitio web ejecutando el get. Cuando queremos guardar o publicar algo, cuando nos registramos en un sitio web hacemos un post al sitio y este lo interpreta como post para guardarlo
 PATCH;Actualización de datos, modifica una parte de un recurso específico (Cualquier registro en un abase de datos) Lo que hace es modificar alguno de esos elementos 
 PUT; Modificar un recurso
 DELETE; Borrar un recurso
 Son soportados por express
 */
//Añadir middleware, capas que le harán o modificaciones o revisar datos
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

//Metodos con URL definida
app.get("/", index);

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});