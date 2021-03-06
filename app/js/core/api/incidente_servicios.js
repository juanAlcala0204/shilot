class Incident extends Data{
    constructor(){
        super();
    }

    async AddIncident(){
        let response;
        let data;
        const INCIDENTE = this.DataIncident() ;
        const SETTINGS = {
            method: 'POST',
            body: JSON.stringify(INCIDENTE),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        };
        try {
            response = await fetch('http://localhost:3000/Incidentes', SETTINGS);
            data = await response.json()
            return data;


        } catch (error) {
            console.log(error);
        }
    }
    async SearchIncident(params) {
        let url ;
        let response;
        let data;
        url= new URL('http://localhost:3000/Incidentes')
        url.search = new URLSearchParams({
            idIncidencia: params
        })
        const SETTINGS = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        };
        try {
            response = await fetch(url, SETTINGS);
            data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    async EditIncident(incident,id){
        let response;
        let data;
        const INCIDENTE = incident ;
        const SETTINGS = {
            method: 'PATCH',
            body: JSON.stringify(INCIDENTE),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        };
        try {
            response = await fetch('http://localhost:3000/Incidentes'+'/'+id, SETTINGS);
            data = await response.json()
            return data;


        } catch (error) {
            console.log(error);
        }
    }

}