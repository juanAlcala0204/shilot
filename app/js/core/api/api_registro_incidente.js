const URL = '';
const  BUTTON = document.querySelector('#registrarIncidencia');
const data  = {
    idIncidencia : parseInt ((Math.random () * 1000), 10) ,
    fechaCapturaIncidente:document.getElementById ('fecha').value,
    estadoIncidente: document.getElementById('estado').value,
    definicionProblema : document.getElementById('definicionProblema').value,
    identificacionProblema : document.getElementById ('identificacionProblema').value,
    idUsuario : document.getElementById('identificacion').value,
    tipoIncidente : document.getElementById('tipoIncidente').value
        }
const registrarIncidencia = () => {
    
    fetch(URL, {
        method: 'POST',
        body : JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
          }
    })
    
}

BUTTON.addEventListener('click', () => {
    debugger;
  post();
})