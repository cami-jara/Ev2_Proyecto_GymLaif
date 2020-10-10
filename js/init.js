window.clientes = [];

window.cargarCliente =()=>{
    let cards = document.querySelector(".cards");
    cards.innerHTML="";
    window.clientes.forEach((p)=>{
        let card = document.createElement("div");
        card.classList.add("card","col-md-4","p-1","bg-light");
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("bg-success","text-center","text-white");
        let cardBody = document.createElement("div");
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("bg-warning","text-center");

        let nombreCard = document.createElement("h3");
        nombreCard.innerText = p.nombre;
        let tipoCard = document.createElement("h4");
        tipoCard.innerText="Total a Pagar" + "" + p.tipo;
        tipoCard.classList.add("bg-dark","text-center","text-white");
        let pagoCard = document.createElement("div");
        let opcionCard = document.createElement("h6");

        if(p.pago === 'efectivo'){
            pagoCard.style="width=100px";
            let imagen = document.createElement("img");
            imagen.src ='img/efectivo.png';
            imagen.classList.add("img-fluid");
            pagoCard.appendChild(imagen);

        }else{
            pagoCard.style="width=-20px";
            let imagen = document.createElement("img");
            imagen.src = 'img/tarjeta.png';
            pagoCard.appendChild(imagen);
        }

        if(p.opcion === true){
            opcionCard.innerText='Pagado';
            opcionCard.classList.add("text-dark","text-center","bg-warning");
            cardFooter.appendChild(opcionCard);
        }else{
            opcionCard.innerText='Adeudado';
            opcionCard.classList.add("text-danger","text-center","bg-warning");
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

  window.guardarCliente = (cliente) =>{
  window.clientes.push(cliente)
  window.cargarCliente()
}

const boton = document.getElementById("agregar-btn");
boton.addEventListener('click',()=>{
    let erroresDiv = document.getElementById("errores-div");
    erroresDiv.innerHTML ="";

    let nombre = document.getElementById("nombre-txt").value;
    let tipo = document.getElementById("tipo-select").value;
    let pago = document.getElementById("pago-select").value;
    let opcion = document.getElementById("opcion-switch").checked;

    if(nombre === ""){
        let error = document.createElement("p");
        error.innerText = "Debe ingresar Nombre";
        error.classList.add("alert","alert-danger");
        erroresDiv.appendChild(error);

    }else{
        let cliente = {}
        cliente.nombre = nombre;
        cliente.tipo = tipo;
        cliente.pago = pago;
        cliente.opcion = opcion;

        window.guardarCliente(cliente);
    }
});