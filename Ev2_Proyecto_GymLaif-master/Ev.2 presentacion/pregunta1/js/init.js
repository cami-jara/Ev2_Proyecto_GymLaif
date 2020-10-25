window.clientes = [];

window.cargarCliente =()=>{ //Creo para cargar ventana cliente, persona, etc.
    let cards = document.querySelector(".cards");//Grupo de selectores por cards
    cards.innerHTML="";
    window.clientes.forEach((p)=>{
        let card = document.createElement("div");//Creo los cards
        card.classList.add("card","col-md-4","p-1","bg-light");//Creo el card externo
        let cardHeader = document.createElement("div");//Clase lista para crear componentes de bootstrap
        cardHeader.classList.add("bg-success","text-center","text-white"); //Creo el card header
        let cardBody = document.createElement("div");//Creo el cardbody
        let cardFooter = document.createElement("div");//Creo el card footer
        cardFooter.classList.add("text-center");
        
        let nombreCard = document.createElement("h3");//Creo el h3 interior html
        nombreCard.innerText = p.nombre;//Se aproxima al texto que obtendría el usuario
        let tipoCard = document.createElement("div");//Crear elemento h4 del card interno
        
        if(p.tipo === '$14.000'){
            tipoCard.style="width=80px";
            let imagen = document.createElement("img");
            imagen.src ='img/2 x sem.png';
            imagen.classList.add("img-fluid");
            tipoCard.appendChild(imagen);

        }else if (p.tipo === '$17.000'){
            tipoCard.style="width=80px";
            let imagen = document.createElement("img"); 
            imagen.src ='img/4 x sem.png';
            imagen.classList.add("img-fluid");
            tipoCard.appendChild(imagen);
        }else{
            tipoCard.style="width=80px";
            let imagen = document.createElement("img"); 
            imagen.src ='img/ilim.png';
            imagen.classList.add("img-fluid");
            tipoCard.appendChild(imagen);
        }
        let pagoCard = document.createElement("div");//Crear elemento del div
        let opcionCard = document.createElement("h6");

        if(p.pago === 'efectivo'){//Si es que
            pagoCard.style="width=80px";//Tamaño de anchura
            let imagen = document.createElement("img");//Creo la imagen 
            imagen.src ='img/efectivo.png';//Archivo de imagen
            imagen.classList.add("img-fluid");//Agrego clase lista de la imagen
            pagoCard.appendChild(imagen);//Permite agregar un nodo al final de la lista de nodos secundarios de un nodo principal especificado

        }else{//Si no
            pagoCard.style="width=100px";
            let imagen = document.createElement("img");
            imagen.src = 'img/tarjeta.png';
            imagen.classList.add("img-fluid");
            pagoCard.appendChild(imagen);
        }

        if(p.opcion === true){
            opcionCard.innerText='Pagado';
            opcionCard.classList.add("text-dark","text-center");
            cardFooter.appendChild(opcionCard);
        }else{
            opcionCard.innerText='Adeudado';
            opcionCard.classList.add("text-danger","text-center");
            cardFooter.appendChild(opcionCard);
        }

        cardHeader.appendChild(nombreCard);
        cardBody.appendChild(tipoCard);
        cardBody.appendChild(pagoCard);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        cards.appendChild(card);
    });
}

  window.guardarCliente = (cliente) =>{ //Le paso el objeto guardado
  window.clientes.push(cliente)
  window.cargarCliente()//Cargar ventana del cliente
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

        window.guardarCliente(cliente);//Guarda ventana del cliente
    }
});