import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class ApiServicesService {
  myapiurl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  uploadData(params: object) {
    return this.http.post(this.myapiurl + '/api/time-series', params)
  }
  getData() {
    return this.http.get(this.myapiurl + '/api/time-series')
  }
}
