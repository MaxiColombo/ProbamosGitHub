let funcionTarea = require("./modularizamos");

let accion = "listar";

switch (accion) {
    case "listar":
        console.table(funcionTarea.listar())
        break;
    case "":
        console.log("No puede estar vacio");
    default:
        console.log("No entiendo");
        break;
}