var tareas = [];

guardar.addEventListener('click', function () {
  let tareaNombre = document.getElementById('tarea').value;
  let descripcion = document.getElementById('descripcion').value;
  if(tareaNombre && descripcion!==''){
  var idTarea = generarId()
  var tarea = new Tarea(idTarea, tareaNombre, descripcion)
  tareas.push(tarea)
  document.getElementById('tarea').value = ''
  document.getElementById('descripcion').value = ''
  }else{
      alert("No se puede agregar tarea, revisa los campos Tarea y Descripción");
  }
  mostrarTareas(tareas);
})

editar.addEventListener('click', function () {
    document.getElementById('editar').style.display ='none';
    document.getElementById('guardar').style.display='inline';
    let tareaNombre = document.getElementById('tarea').value;
    let descripcion = document.getElementById('descripcion').value;
    let idTarea=document.getElementById('idTarea').value;
    guardarCambioTarea(idTarea,tareaNombre,descripcion);
    document.getElementById('tarea').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('idTarea').value ='';
    
    mostrarTareas(tareas);
  })

const buildTarea = (idTarea, tareaNombre, descripcion) => {
  return `<tr>
    <td>${tareaNombre}</td>
    <td>${descripcion}</td>
    <td><button type="button" class="btn btn-secondary" onClick="eliminaTarea(${idTarea})";> <i class="fa fa-trash-o"></i> Eliminar</button></td>
    <td><button type="button" class="btn btn-secondary" onClick="editaTarea(${idTarea})";> <i class="fa fa-edit"></i> Editar</button></td>
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

function editaTarea(id){
let tarea=tareas.filter(t => t.idTarea ==id);
let t=tarea[0];
console.log(tarea);
idTarea = t.idTarea;
tareaNombre=t.tareaNombre;
descripcion=t.descripcion;
document.getElementById("tarea").value=tareaNombre;
document.getElementById("descripcion").value=descripcion;
document.getElementById("idTarea").value=idTarea;
document.getElementById("guardar").style.display="none";
document.getElementById("editar").style.display="inline";

}

function guardarCambioTarea(idTarea,tareaNombre,descripcion) {
  console.log(idTarea);
  var pToCheck = -1;
  var j = 0;
  while (pToCheck == -1) {
    if (tareas[j].idTarea == idTarea) {
      tareas[j].tareaNombre=tareaNombre;
      tareas[j].descripcion=descripcion;
        pToCheck=j;
    }
    j++
  }
  console.log(tareas);
 
}



