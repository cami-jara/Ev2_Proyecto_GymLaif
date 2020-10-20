
window.cargarTabla =()=>{ 
    let tabla = document.querySelector("#clientes-table > tbody");
    tabla.innerHTML="";
    for (let i=0; i < window.clientes.length; ++ i{
         let clienteActual = window.clientes [i];
        let tr = document.createElement ("tr");
        let tdNombre = document.createElement("td");
        let tdTipo= document.createElement("td");
        let tdMedio = document.createElement("td");
        let tdEstado = document.createElement("td");
        tdNombre.innerText = clienteActual + p.nombre;
        tdTipo.innerText = clienteActual + p.tipo; 
        tdMedio.innerText = clienteActual + p.pago;     
        tdEstado.innerText = clienteActual + p.estado;
        
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdMedio);
        tr.appendChild(tdEstado);
        tbody.appendChild(tr);

    }}
        
        if(p.tipo === '$14.000'){
            tdTipo.style="width=80px";
            let imagen = document.createElement("img");
            imagen.src ='img/2 x sem.png';
            imagen.classList.add("img-fluid");
            tdTipo.appendChild(imagen);

        }else if (p.tipo === '$17.000'){
            tdTipo.style="width=80px";
            let imagen = document.createElement("img"); 
            imagen.src ='img/4 x sem.png';
            imagen.classList.add("img-fluid");
            tdTipo.appendChild(imagen);
        }else{
            tdTipo.style="width=80px";
            let imagen = document.createElement("img"); 
            imagen.src ='img/ilim.png';
            imagen.classList.add("img-fluid");
            tdTipo.appendChild(imagen);
        }

        if(p.pago === 'efectivo'){//Si es que
            tdMedio.style="width=80px";//Tamaño de anchura
            let imagen = document.createElement("img");//Creo la imagen 
            imagen.src ='img/efectivo.png';//Archivo de imagen
            imagen.classList.add("img-fluid");//Agrego clase lista de la imagen
            tdMedio.appendChild(imagen);//Permite agregar un nodo al final de la lista de nodos secundarios de un nodo principal especificado

        }else{//Si no
            tdMedio.style="width=100px";
            let imagen = document.createElement("img");
            imagen.src = 'img/tarjeta.png';
            imagen.classList.add("img-fluid");
            tdMedio.appendChild(imagen);
        }

        if(p.opcion === true){
            tdEstado.innerText='Pagado';
           
            
        }else{
            tdEstado.innerText='Adeudado';
          
           
        }
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdMedio);
        tr.appendChild(tdEstado);
        tbody.appendChild(tr);
    });
}

  window.guardarTabla = (cliente) =>{ //Le paso el objeto guardado
  window.clientes.push(cliente);
  window.cargarTabla(cliente)//Cargar ventana del cliente
}

const boton = document.getElementById("agregar-btn");
boton.addEventListener('click',()=>{ //Click para presionar el boton agregar
    let erroresDiv = document.getElementById("errores-div"); 
    erroresDiv.innerHTML ="";

    let nombre = document.getElementById("nombre-txt").value;
    let tipo = document.getElementById("tipo-select").value;
    let pago = document.getElementById("pago-select").value;
    let opcion = document.getElementById("opcion-switch").checked;

    if(nombre === ""){ //Mostrar una lista de errores
        let error = document.createElement("p");
        error.innerText = "Debe ingresar Nombre";
        error.classList.add("alert","alert-danger");
        erroresDiv.appendChild(error);

    }else{
        let cliente = {}  //Creo un objeto de registro cada cliente por fila
        cliente.nombre = nombre;
        cliente.tipo = tipo;
        cliente.pago = pago;
        cliente.opcion = opcion;

        window.guardarTabla(cliente);//Guarda ventana del cliente
    }
});