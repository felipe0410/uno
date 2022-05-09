//Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,
//seguramente nos convenga usar el módulo nativo de NodeJs. File System - FS
//mostrar en el listado existente porr termina
//utf-8 es para tildes y caraacteres especiales
let tareas = require("./funcionesDeTareas")

let listarTareas = () => {
    for (let i=0;i<tareas.length;i++)
    {   let texto = (i+1)+"._ "+ tareas[i].nomre; 
        console.log(texto); 
    }
}
let listarNoTerminadas = param => {
    for (let i = 0; i < param.length; i++) {
      const tarea = param[i];
      if(tarea.estado !== 'terminada') {
        let texto = (i+1) + ".- " + param[i].nomre;
        console.log(texto)
      }
    }
  }

let accion = process.argv[2];

switch (accion) {
  case "listar":
    listarTareas();
    break;
  case "pendiente":
      listarNoTerminadas(tareas);
      break;
  // Desafio 2.3. Crear nuevo case "crear"
  // $ node app.js crear "Nueva tarea"
  // process.argv[3] = "Nueva tarea"s
  // Crear variable tipo objeto 
  // {
  //   "titulo": "Nueva tarea",
  //   "estado": "pendiente"
  // }
  // Usar el metodo guardarTarea  de archivoTareas

  // Desafio 3.5 Crear nuevo case "filtrar"
  // $ node app.js filtrar pendiente
  // llamar funcion “filtrarPorEstado” y pasar como parametor el estado
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
      console.log("No entiendo qué quieres hacer.");
    break;
}




