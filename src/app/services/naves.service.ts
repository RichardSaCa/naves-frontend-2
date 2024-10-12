import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaveLanzadera } from '../models/naveLanzadera.model';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  apiurl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  /**
   * Prueba desde el backend
   * @returns string.
   */
  getHelloWorld() {
    return this.http.get(`${this.apiurl}/helloWorld`, { responseType: 'text' });
  }

  getAllNavesLanzaderas() {
    return this.http.get<NaveLanzadera[]>(`${this.apiurl}/navesLanzaderas`);
  }



}
