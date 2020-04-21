const ADDINCIDENT = document.querySelector('#registrarIncidencia');
const ADDCLIENT = document.querySelector('#registrarCliente');


ADDCLIENT.addEventListener('click', () => {
    const ADD = new Servicio('cliente');
    ADD.AgregarCliente();  
    reload(); 
});

ADDINCIDENT.addEventListener('click', () => {
    const  ADD = new Servicio('incidente');
     ADD.AgregarIncidente();
     reload();
 });

 function reload(){
    setTimeout(() => {
        document.location.reload();
    }, 1000);
}
