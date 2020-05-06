class Services {
    constructor(page) {

        switch (page) {
            case 'client':
                return new Client();
            case 'address':
                return new Address();
            case 'incident':
                return new Incident();
            case 'login':
                return new session();
            default:
                return null;
        }

    }
}

