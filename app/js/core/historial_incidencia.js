const tableCliente = new Tabulator("#tabHistorialIncidencias", {
    ajaxURL:"http://localhost:3000/Incidentes",
    layout:"fitColumns",
    height:false,
    pagination: "local",
    paginationSize: 10,
    movableColumns: true,
    resizableRows: true,
    columns:[
        {title:"Id", field:"idIncidencia" },
        {title:"Fecha de captura", field:"fechaCapturaIncidente"},
        {title:"Cliente", field:"idUsuario"},
        {title:"Estado", field:"estadoIncidente"},
        {title:"Editar", field: "Editar" ,width:100,formatter:functionCreateActionButton, align:"center",formatterParams:{
            type:'Edit',
        }},
        {title:"Info", field: "Info" ,width:100,formatter:functionCreateActionButton, align:"center",formatterParams:{
						type:'Info',
        }},
        {title:"Eliminar", field: "Eliminar" ,width:100,formatter:functionCreateActionButton, align:"center",formatterParams:{
					type:'Delete',
				}},
    ],
});

function functionCreateActionButton(cell, formatterParams, onRendered){ //plain text value
	let htmlButton,
			fail = {
				blockFail : '',
				msgFail : ''
			};

  try {
    switch(formatterParams['type']){
        case 'Edit':
            htmlButton = '<button class="btn btn-warning btn-sm text-right" style="color: white;" data-toggle="modal" data-target="#modal-lg"><i class="fas fa-edit"></i></button>';
						return htmlButton;
        case 'Info':
            htmlButton = '<button class="btn btn-info btn-sm text-right"><i class="fas fa-eye"></i></button>';
            return htmlButton;
        case 'Delete':
            htmlButton = '<button class="btn btn-danger btn-sm text-right"><i class="fas fa-trash-alt"></i></button>';
            return htmlButton;
        default:
						fail['blockFail'] = 'Creacion Error botones.';
						fail['msgFail'] = 'Error al generar botones de Acción sobre datos en la tabla, el posible caso de cración no esta contemplado en el switch.';
            throw fail;
      };    
  } catch (fail) {
			if (typeof fail === 'object') console.error(`Error presentado en el bloque ${fail['blockFail']}, mensaje error: ${fail['msgError']}`);
			alert('Se ha presentado un error, por favor comunicarse con SUPPORT SHILOT.');      
			return false;
  }  
};

$('.toastrDefaultSuccess').click(function() {
	toastr.success('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
});