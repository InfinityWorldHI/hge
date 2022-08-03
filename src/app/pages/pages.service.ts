import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  baseURL: string = 'http://localhost:4200/api/auth/login';
  apiURL: string = 'http://localhost:4200/api/';

  constructor(
    private http: HttpClient,
  ) { }

  userLogin(data: any): any {
    let urlApi = `${this.apiURL}auth/login`;
    // return this.http.post<any>(urlApi, data, httpOptions);
    let users = [{
      "client@hge.com": {
      "access_token":"ccc0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.cccpc3MiOiJodHRwczpcL1wvYWdyaXNlbnNvcnMuaXRcL2JhY2tlbmRcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTg3Mzk0NjMsImV4cCI6MTY1ODc0MzA2MywibmJmIjoxNjU4NzM5NDYzLCJqdGkiOiJNSVZGQ1Q1c2ZDN2RtRGpXIiwic3ViIjozMCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.cccEwLZkK7T6YQJPaKEHzNvKprh5QZMcZe_O61tFsRw","token_type":"bearer",
      "expires_in":3600,
      "user":
        {"id":31,
        "name":"Client",
        "email":"client@hge.com",
        "role":1}
      },
      "reception@hge.com": {
      "access_token":"rrr0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.rrrpc3MiOiJodHRwczpcL1wvYWdyaXNlbnNvcnMuaXRcL2JhY2tlbmRcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTg3Mzk0NjMsImV4cCI6MTY1ODc0MzA2MywibmJmIjoxNjU4NzM5NDYzLCJqdGkiOiJNSVZGQ1Q1c2ZDN2RtRGpXIiwic3ViIjozMCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.rrrEwLZkK7T6YQJPaKEHzNvKprh5QZMcZe_O61tFsRw","token_type":"bearer",
      "expires_in":3600,
      "user":
        {"id":32,
        "name":"Reception",
        "email":"reception@hge.com",
        "role":2}
      },
      "employee@hge.com": {
      "access_token":"eee0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eeepc3MiOiJodHRwczpcL1wvYWdyaXNlbnNvcnMuaXRcL2JhY2tlbmRcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTg3Mzk0NjMsImV4cCI6MTY1ODc0MzA2MywibmJmIjoxNjU4NzM5NDYzLCJqdGkiOiJNSVZGQ1Q1c2ZDN2RtRGpXIiwic3ViIjozMCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.eeeEwLZkK7T6YQJPaKEHzNvKprh5QZMcZe_O61tFsRw","token_type":"bearer",
      "expires_in":3600,
      "user":
        {"id":33,
        "name":"Employee",
        "email":"employee@hge.com",
        "role":3}
      },
      "admin@hge.com": {
      "access_token":"eee0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eeepc3MiOiJodHRwczpcL1wvYWdyaXNlbnNvcnMuaXRcL2JhY2tlbmRcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTg3Mzk0NjMsImV4cCI6MTY1ODc0MzA2MywibmJmIjoxNjU4NzM5NDYzLCJqdGkiOiJNSVZGQ1Q1c2ZDN2RtRGpXIiwic3ViIjozMCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.eeeEwLZkK7T6YQJPaKEHzNvKprh5QZMcZe_O61tFsRw","token_type":"bearer",
      "expires_in":3600,
      "user":
        {"id":34,
        "name":"Admin",
        "email":"admin@hge.com",
        "role":4}
      },
    }];
    return users[0][data.email];
  }
}
