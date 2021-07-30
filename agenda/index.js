var tareas = []
guardar.addEventListener('click', function () {
  let tareaNombre = document.getElementById('tarea').value
  let descripcion = document.getElementById('descripcion').value
  var idTarea = generarId()
  var tarea = new Tarea(idTarea, tareaNombre, descripcion)
  tareas.push(tarea)
  //console.log(tareas);
  document.getElementById('tarea').value = ''
  document.getElementById('descripcion').value = ''
  mostrarTareas(tareas);
  
})

const buildTarea = (idTarea, tareaNombre, descripcion) => {
  return `<tr>
    <td>${tareaNombre}</td>
    <td>${descripcion}</td>
    <td><button type="button" class="btn btn-secondary" onClick="eliminaTarea(${idTarea})";> <i class="fa fa-trash-o"></i> Eliminar</button></td>
    <td><button type="button" class="btn btn-secondary" > <i class="fa fa-edit"></i> Editar</button></td>
  </tr>`
}

class Tarea {
  constructor (idTarea, tareaNombre, descripcion) {
    this.idTarea = idTarea;
    this.tareaNombre = tareaNombre;
    this.descripcion = descripcion;
  }
  createTarea () {
    return buildTarea(this.idTarea, this.tareaNombre, this.descripcion)
  }
}

function generarId () {
  var idTarea = 0;
  if (tareas.length == 0) {
    idTarea = 1;
  } else {
    idTarea = tareas.length + 1
  }
  return idTarea
}



function eliminaTarea (id) {
  var pToDelete = -1;
  var j = 0;
  while (pToDelete == -1) {
    if (tareas[j].idTarea == id) {
      pToDelete = j;
    }
    j++
  }
  this.tareas.splice(pToDelete, 1)
  console.log(tareas);

  mostrarTareas(this.tareas)
}

function mostrarTareas (tareas) {
  const tabla = document.querySelector('table');

  if (tareas.length > 0) {
    for (let i = 0; i < tareas.length; i++) {
      const t = tareas[i];
      idTarea = t.idTarea;
      tareaNombre = t.tareaNombre;
      descripcion = t.descripcion;
      const codigohtml = buildTarea(idTarea, tareaNombre, descripcion);
      if (i == 0) {
        tabla.innerHTML = codigohtml;
      } else {
        tabla.innerHTML = tabla.innerHTML + codigohtml;
      }
    }
  } else {
    
    tabla.innerHTML = `<tr>
        </tr>`;
  }
}
