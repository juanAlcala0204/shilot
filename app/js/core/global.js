function registrarIncidencia(){
    const  ADD = new Servicio('incidente');
    ADD.AgregarIncidente();
    reload();
}

function registrarCliente (){
    const ADD = new Servicio('cliente');
    ADD.AgregarCliente();  
    reload(); 
}

function reload(){
    setTimeout(() => {
        document.location.reload();
    }, 500)
}

