const BUTTONSEARCH = document.querySelector('#search');
const INPUTNULL = document.getElementById('inputSearch');

var the_Function = function (cell, formatterParams, onRendered) { //plain text value
    return "<button class='btn btn-primary btn-sm text-right'><i class='fa fa-print' style='margin-right: 5px;'></i>Edit</button>";
};

const updateFilter =(search) =>{
    let filterVal = 'idUsuario';
    let typeVal = '=';
  
    let filter = filterVal == "function" ? customFilter : filterVal;
  
    if(filterVal){
        tableCliente.setFilter(filter,typeVal, search);
    }
  }

  
const tableCliente = new Tabulator("#tabHistorialIncidencias", {
    ajaxURL:"http://localhost:3000/Clientes",
    layout: "fitColumns",
    pagination: "local",
    paginationSize: 10,
    movableColumns: true,
    resizableRows: true,
    columns: [
        { title: "Id", field: "idUsuario" },
        { title: "Nombre", field: "nombreUsuario" },
        { title: "Apellidos", field: "apellidoUsuario" },
        { title: "Correo", field: "emailUsuario" },
        { title: "Telefono", field: "telefonoUsuario" },
        { title: "Celular", field: "celularUsuario" },
        { title: "Direccion", field: "direccion" },
        {
            title: "imprimir", field: "imprimir", formatter: the_Function, align: "center", cellClick: function (e, cell) {

                //button's function for example 
                var Btn = document.createElement('Button');
                Btn.id = "Btn_Id";
                console.log(Btn);

            }
        }
    ],
});

BUTTONSEARCH.addEventListener('click', () =>{
    const SEARCHINPUT = document.getElementById('inputSearch').value;
    updateFilter(SEARCHINPUT);
});

INPUTNULL.addEventListener('change', () =>{
if  (document.getElementById('inputSearch').value == ''){
    tableCliente.clearFilter();
}
});