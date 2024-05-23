    let formulario = document.getElementById("formularioAgregar");
    let nombre = document.getElementById("nombre");
    let fecha = document.getElementById("fecha");
    let descripcion = document.getElementById("descripcion");
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById("btnGuardar");

    let tareas = [
        {
            nombre : "Hugo",
            fecha : "2024-05-14",
            descripcion : "Aprender JS"
        },
        {
            nombre : "Paco",
            fecha : "2024-05-14",
            descripcion : "Hacer tortas para todos"
        },
        {
            nombre : "Luis",
            fecha : "2024-05-14",
            descripcion : "Ver la pelicula Silk Road"
        }
    ];

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        agregarDatos();
        mostrarTareas();
        cerrarModal();
        formulario.reset()
    });

    let cerrarModal = () => {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }

    let agregarDatos = () => {
        tareas.push({
            nombre : nombre.value,
            fecha : fecha.value,
            descripcion : descripcion.value
        });
        console.log(tareas);
    }

    let mostrarTareas = () => {

        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            // comilla invertida backtip
            listaTareas.innerHTML += `
                <div class="row">
                    <div class="col-12 col-md-3 border p-3">
                        <strong>${ tarea.nombre }</strong>
                    </div>
                    <div class="col-12 col-md-3 border p-3">
                        <strong>${ tarea.fecha }</strong>
                    </div>
                    <div class="col-12 col-md-3 border p-3">
                        <strong>${ tarea.nombre }</strong>
                    </div>
                    <div class="col-12 col-md-3 border p-3 text-center">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarModal" ><i class="bi bi-pencil"></i> Editar</button>
                        <button class="btn btn-danger" onClick="borrarTarea(this,${ indice })" ><i class="bi bi-trash3"></i> Borrar</button>
                    </div>
                </div>

            `;
        });

    }

    let borrarTarea = (boton,indice) => {
        if( confirm("Estas seguro de borrarlo?")){
            boton.parentElement.parentElement.remove();
            tareas.splice(indice,1);
        }
    }

    mostrarTareas();