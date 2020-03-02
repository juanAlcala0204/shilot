
const arrayClientes = [ 
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
    { tipoIncidencia: 'ERROR DESARROLLO', cliente: 'Juan David Alcala', fechaIncidente: '23/12/2020', estadoIncidente: 'En proceso...'},
];

function functionCreateActionButton(cell, formatterParams, onRendered){ //plain text value
	let htmlButton,
			fail = {
				blockFail : '',
				msgFail : ''
			};

  try {
    switch(formatterParams['type']){
        case 'Edit':
            htmlButton = '<button class="btn btn-primary btn-sm text-right"><i class="fa fa-print" style="margin-right: 5px;"></i>Edit</button>';
						return htmlButton;
        case 'Info':
            htmlButton = '<button class="btn btn-primary btn-sm text-right"><i class="fa fa-print" style="margin-right: 5px;"></i>Edit</button>';
            return htmlButton;
        case 'Delete':
            htmlButton = '<button class="btn btn-primary btn-sm text-right"><i class="fa fa-print" style="margin-right: 5px;"></i>Edit</button>';
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

const tableCliente = new Tabulator("#tabHistorialIncidencias", {
    data: arrayClientes,
    layout:"fitColumns",
    height:false,
    columns:[
        {title:"Nombre", field:"tipoIncidencia"},
        {title:"Apellidos", field:"cliente"},
        {title:"Celular", field:"fechaIncidente"},
        {title:"Direccion", field:"estadoIncidente"},
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