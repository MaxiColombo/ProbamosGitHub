let fs = require("fs");


let archivoTareas  = {
    listar: function(){
    let tareas = JSON.parse(fs.readFileSync("ModularizamosJSON/tarea.json" , "utf-8"));
    return tareas;
    }
}

module.exports = archivoTareas;