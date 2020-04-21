class Servicio {
    constructor(page) {
        
        switch (page) {
            case 'cliente':
                return  new Cliente();
            case 'incidente':
                return new Incidente();
            default:
                return null;
        }

    }
}

