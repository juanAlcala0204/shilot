class Incidente extends Datos{
    constructor(){
        super();
        this.incidente = this.DataIncidente() ;
    }

    async AgregarIncidente(){
        let response;
        let data;
        const SETTINGS = {
            method: 'POST',
            body: JSON.stringify(this.incidente),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        };
        try {
            response = await fetch('http://localhost:3000/comments', SETTINGS);
            data = await response.json()
            return data;


        } catch (error) {
            console.log(error);
        }
    }
}