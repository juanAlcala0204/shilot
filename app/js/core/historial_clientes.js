const arrayClientes = [ 
    { id: '10000332', Nombre: 'Juan David ', Apellido: 'Alcala', Correo: 'wrignigg@gmail.com',telefono:'227654556',celular:'5666643'},
    { id: '1000553', Nombre: 'Alejandro', Apellido: 'Vera Quintero', Correo: '44456g@gmail.com',telefono:'2274446',celular:'55436643'}
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
        {title:"Id", field:"id"},
        {title:"Nombre", field:"Nombre"},
        {title:"Apellidos", field:"Apellido"},
        {title:"Correo", field:"Correo"},
        {title:"Telefono", field:"telefono"},
        {title:"Celular", field:"celular"},
    {title:"imprimir", field: "imprimir" ,formatter:the_Function, align:"center",cellClick:function(e, cell){ 

        //button's function for example 
        var Btn = document.createElement('Button');
        Btn.id = "Btn_Id";
        console.log(Btn);
        
    }}
    ],
});