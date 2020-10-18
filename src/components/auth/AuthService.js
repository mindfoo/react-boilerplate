import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER}`,
            withCredentials: true
        });
        this.service = service;
    }

/*     signup = (username, password, firstName, lastName, email, type) => {
        return this.service.post('/signup', { username, password, firstName, lastName, email, type })
            .then((response) => {
                return response.data;
            });
    } */

    loggedin = () => {
        return this.service.get('/loggedin')
            .then((response) => {
                return response.data;
            });
    }

    logout = () => {
        return this.service.post('/logout')
            .then((response) => {
                return response.data;
            });
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                return err;
            })
    }
}

export default AuthService;