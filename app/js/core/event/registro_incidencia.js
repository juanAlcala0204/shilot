
const CHECK = document.querySelector('#dropdownList');
const BUTTON = document.querySelector('#registrarIncidencia');
const IDCLIENT = document.querySelector('#id');

const createInput = () => {
    try {
        let checkbox;
        checkbox = document.forms['access']['dropdownList'].checked;
        if (!checkbox) {
            document.getElementById('showHideTechnical').style.display = 'none';
        } else {
            document.getElementById('showHideTechnical').style.display = 'block';
        }
    } catch (error) {
        MessageError();
    }


}

const tableClient = new Tabulator("#tabCliente", {
    ajaxURL: "http://localhost:3000/Usuarios",
    layout: "fitColumns",
    height: "30%",
    columns: [
        { title: "Id", field: "idUsuario" },
        { title: "Nombre", field: "nombreUsuario" },
        { title: "Apellidos", field: "apellidoUsuario" },
        { title: "Celular", field: "celularUsuario" },
        { title: "Direccion", field: "direccion" },
        { title: "Correo", field: "emailUsuario" },
    ],
});


CHECK.addEventListener('change', () => {
    createInput();
});

IDCLIENT.addEventListener('change', () => {
    let param;
    let dataClient;
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
            const CLIENT = dataClient.SearchClient(param);
            CLIENT.then(data => {
                document.getElementById('tipoId').value = data[0].tipoId;
                document.getElementById('name').value = data[0].nombreUsuario
                document.getElementById('lastName').value = data[0].apellidoUsuario
                document.getElementById('email').value = data[0].emailUsuario
                document.getElementById('phone').value = data[0].celularUsuario
                document.getElementById('landline').value = data[0].telefonoUsuario
            })
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