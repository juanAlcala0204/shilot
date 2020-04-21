class Datos {
    constructor(){
        this.clients;
        this.incidents;
        this.address;
    }
    DataCliente() {
        this.clients = {
            idUsuario: parseInt((Math.random() * 1000), 10),
            nombreUsuario: document.getElementById('id').value,
            apellidoUsuario: document.getElementById('name').value,
            emailUsuario: document.getElementById('lastName').value,
            celularUsuario: document.getElementById('phone').value,
            telefonoUsuario: document.getElementById('landline').value,
            generoUsuario: document.getElementById('email').value,
            idTipoUsuario: document.getElementById('gender').value,
            idResidenciaUsuario: parseInt((Math.random() * 1000), 10),
            direccion: document.getElementById('city').value,
            ciudad: document.getElementById('address').value,
            pais: document.getElementById('country').value,
            departamento: document.getElementById('department').value,
            idUsuario: document.getElementById('id').value
        };
        return this.clients;
    };

    DataIncidente() {
        this.incidents = {
            idIncidencia: parseInt((Math.random() * 1000), 10),
            fechaCapturaIncidente: document.getElementById('date').value,
            definicionProblema: document.getElementById('definitionProblem').value,
            identificacionProblema: document.getElementById('identificationProblem').value,
            finalizacionIncidente: "0",
            diasIncidente: "0",
            estadoIncidente: document.getElementById('state').value,
            idUsuario: document.getElementById('id').value,
            tipoIncidente: document.getElementById('indenceType').value
        }
        return this.incidents;
    };

    DataAddress() {
        this.address = {
            idResidenciaUsuario: parseInt((Math.random() * 1000), 10),
            direccion: document.getElementById('city').value,
            ciudad: document.getElementById('address').value,
            pais: document.getElementById('country').value,
            departamento: document.getElementById('department').value,
            idUsuario: document.getElementById('id').value
        };
        return this.address;
    };

}