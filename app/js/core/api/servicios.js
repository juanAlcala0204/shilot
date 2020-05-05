class Services {
    constructor(page) {
        
        switch (page) {
            case 'client':
                return  new Client();
            case 'address':
                return new Address();
            case 'incident':
                return new Incident();
            default:
                return null;
        }

    }
}

