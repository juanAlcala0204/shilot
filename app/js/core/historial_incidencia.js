
const arrayClientes = [ 
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
]
var the_Function = function(cell, formatterParams, onRendered){ //plain text value

    //var formA = '<form class="" action="/upload" method="post">'
    //var inputFn = '<input type="file" id="imgupload" />' ;
    //var uploadBtnn = '<button type="submit" id="OpenImgUpload">ID upload</button></form>'
  //return uploadBtnn
  return "<button class='btn btn-primary btn-sm text-right'><i class='fa fa-print' style='margin-right: 5px;'></i>Edit</button>";
  };
const tableCliente = new Tabulator("#tabHistorialIncidencias", {
    data: arrayClientes,
    layout:"fitColumns",
    height:false,
    columns:[
        {title:"Nombre", field:"tipoIncidencia"},
        {title:"Apellidos", field:"cliente"},
        {title:"Celular", field:"fechaIncidente"},
        {title:"Direccion", field:"estadoIncidente"},
    {title:"ID", field: "ID" ,formatter:the_Function, align:"center",cellClick:function(e, cell){ 

        //button's function for example 
        var Btn = document.createElement('Button');
        Btn.id = "Btn_Id";
        console.log(Btn);
        
    }}
    ],
});