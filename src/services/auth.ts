import axios from 'axios';
import jwtDecode, { JwtPayload } from "jwt-decode";

export class AuthService {
    private _baseUrl = 'https://localhost:44356/api/';

    async loginAsync(user: any) : Promise<any> {
        const response = await axios.post(this._baseUrl + 'user/login', user);
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token)
            return response.data;
        }

        return null;
    }

    isLoggedIn() : any {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode<JwtPayload>(token);
            return decoded;
        }

        return null;
    }

    logout() : void {
        localStorage.removeItem('token');
    }
}