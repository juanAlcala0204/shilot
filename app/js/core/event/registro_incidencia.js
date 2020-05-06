
const CHECK = document.querySelector('#dropdownList');
const BUTTON = document.querySelector('#registrarIncidencia');
const IDCLIENT = document.querySelector('#id');
const ADDRESS  = document.querySelector('#buttonAddress');
const createInput = () => {
    try {
        let checkbox;
        let TECNICOS ;
        TECNICOS = document.getElementById('idTecnico');
        checkbox = document.forms['access']['dropdownList'].checked;
        
        if (!checkbox) {
            document.getElementById('showHideTechnical').style.display = 'none';
        } else {
            
            document.getElementById('showHideTechnical').style.display = 'block';
            dataClient = new Services('client');
            const CLIENT = dataClient.SearchClientType('Tecnico');
            CLIENT.then(data => {
                for(let i  in data){
                    let option ;
                    option = document.createElement("option"),txt = document.createTextNode(data[i].nombreUsuario +" "+ data[0].apellidoUsuario)
                    option.appendChild(txt);
                    option.setAttribute('value',data[i].idUsuario)
                    TECNICOS.insertBefore(option,TECNICOS.lastChild);
                }
            });
        }
    } catch (error) {
        MessageError();
        console.log(error);
    }


}

const tableClient = new Tabulator("#tabCliente", {
    ajaxURL: "http://localhost:3000/Usuarios?idTipoUsuario=Cliente",
    layout: "fitColumns",
    height: "30%",
    columns: [
        { title: "Id", field: "idUsuario" },
        { title: "Nombre", field: "nombreUsuario" },
        { title: "Apellidos", field: "apellidoUsuario" },
        { title: "Celular", field: "celularUsuario" },
        { title: "Correo", field: "emailUsuario" },
    ],
});


CHECK.addEventListener('change', () => {
    createInput();
});

IDCLIENT.addEventListener('change', () => {
    let param;
    let dataClient;
    let url;
    param = document.getElementById('id').value;
    if (param == "") {
        document.getElementById('tipoId').value = "";
        document.getElementById('name').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('landline').value = "";
    } else {
        try {
            dataClient = new Services('client');
            const CLIENT = dataClient.SearchClient(param,'Cliente');
            CLIENT.then(data => {
                document.getElementById('tipoId').value = data[0].tipoId;
                document.getElementById('name').value = data[0].nombreUsuario;
                document.getElementById('lastName').value = data[0].apellidoUsuario;
                document.getElementById('email').value = data[0].emailUsuario;
                document.getElementById('phone').value = data[0].celularUsuario;
                document.getElementById('landline').value = data[0].telefonoUsuario;
            });
           
        }catch (error){
            MessageError();
        }
    }
});

BUTTON.addEventListener('click', () => {
    const ADD = new Services('incident');
    ADD.AddIncident();
    MessageAdd('Incidente');
    cleanFieldsIncidents();

});

ADDRESS.addEventListener('click',() =>{
    url = new URL('http://localhost:3000/Residencia');
    url.search = new URLSearchParams({
        idUsuario: document.getElementById('id').value
    })
    const tablaResidencia = new Tabulator("#tabAddress", {
        ajaxURL: url,
        layout: "fitColumns",
        paginationSize: 10,
        movableColumns: true,
        resizableRows: true,
        columns: [
            { title: "ID Residencia", field: "idResidenciaUsuario" },
            { title: "Dirección", field: "direccion", cellClick: function (e, cell) {
                document.getElementById('address').value = cell.getValue()
            }},
            { title: "Ciudad", field: "ciudad" },
            { title: "Pais", field: "pais" },
            { title: "Departamento", field: "departamento" }
        ],
        rowClick:function(e, row){                
        }
    });
});