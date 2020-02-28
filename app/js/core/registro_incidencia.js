const JSON_CLIENTE_UNO = {
    nombre: 'Juan',
    apellidos: 'Alcala Sanchez',
    celular: '3219877317',
    direccion: 'Calle 48 n- 35 / 19',
    correo: 'juan@gmail.com'
};

const JSON_CLIENTE_DOS = {
    nombre: 'COSO',
    apellidos: 'Alcala Sanchez',
    celular: '3219877317',
    direccion: 'Calle 48 n- 35 / 19',
    correo: 'juan@gmail.com'
};

const arrayClientes = [ JSON_CLIENTE_UNO, JSON_CLIENTE_DOS]

const tableCliente = new Tabulator("#tabCliente", {
    data: arrayClientes,
    layout:"fitColumns",
    height:false,
    columns:[
    {title:"Nombre", field:"nombre"},
    {title:"Apellidos", field:"apellidos"},
    {title:"Celular", field:"celular"},
    {title:"Direccion", field:"direccion"},
    {title:"Correo", field:"correo"},
    ],
});
