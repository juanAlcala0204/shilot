
class Cliente extends Datos {

    constructor() {
        super();
        this.cliente = this.DataCliente();
    }

    async AgregarCliente() {
        let response;
        let data ;
        const SETTINGS = {
            method: 'POST',
            body: JSON.stringify(this.cliente),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        };

        try{
        response = await fetch('http://localhost:3000/posts', SETTINGS);
        data = await response.json()
        return data;
        }catch(error){
            console.log(error)
        }

        


    };

}

