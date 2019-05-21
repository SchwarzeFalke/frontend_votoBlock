import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://votoblock-api.herokuapp.com/';
  constructor(private http: HttpClient) {}

  Login(electoral_key: string, password: string) {
    const formData = new FormData();
    const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

    formData.append('electoral_key', electoral_key);
    formData.append('pass', password);

    return this.http.post(this.apiUrl + 'login/', formData, {
      headers: headers
    });
  }

  SignUp(electoral_key: string, password: string, email: string) {
    const formData = new FormData();
    const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

    formData.append('electoral_key', electoral_key);
    formData.append('pass', password);
    formData.append('email', email);

    return this.http.post(this.apiUrl + 'signup/', formData, {
      headers: headers
    });
  }
}
