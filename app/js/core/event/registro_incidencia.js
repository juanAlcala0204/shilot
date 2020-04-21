
const CHECK = document.querySelector('#dropdownList');
const BUTTON= document.querySelector('#registrarIncidencia');

const createInput = () =>{
    let checkbox;
    
    checkbox = document.forms['access']['dropdownList'].checked ;
    if (!checkbox) {
        document.getElementById('showHideTechnical').style.display ='none';  
    } else {
        document.getElementById('showHideTechnical').style.display ='block';    
    }

}

const tableCliente = new Tabulator("#tabCliente", {
    ajaxURL:"http://localhost:3000/Clientes",
    layout: "fitColumns",
    height: "30%",
    columns: [
        { title: "Id", field: "idUsuario" },
        { title: "Nombre", field: "nombreUsuario" },
        { title: "Apellidos", field: "apellidoUsuario" },
        { title: "Celular", field: "celularUsuario" },
        { title: "Direccion", field: "direccion" },
        { title: "Correo", field: "emailUsuario"},
    ],
});


CHECK.addEventListener('change',() =>{
    createInput();
})

BUTTON.addEventListener('click', () => {
    registrarIncidencia();
 });