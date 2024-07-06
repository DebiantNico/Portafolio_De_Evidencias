const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al Pokedex");
});

app.post("/pokemon", (req, res, next) => {
    return res.status(200).send(req.body);
})

app.get("/pokemon", (req, res, next) => {
   return res.status(200).send(pokemon);

})

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id - 1;
    if (id >= 0 && id <= 150) {
    res.status(200).send(pokemon[req.params.id -1]);
}
    res.status(404).send("Pokémon no encontrado.");
   
})

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    
    //Evaluador ternario>>> condicion ? valor si verdadero : valor si falso

    const name = req.params.name;
    const pk = pokemon.filter((p) => {
       return (p.name.toUpperCase() == name.toUpperCase()) && p;
        
    });

    if (pk.length > 0) {
        res.status(200).send(pk);
    }
    return res.status(404).send("Pokémon no encontrdo");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});