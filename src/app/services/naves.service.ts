import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaveLanzadera } from '../models/naveLanzadera.model';
import { NaveEspacial } from '../models/naveEspacial.model';
import { NaveNoTripulada } from '../models/naveNoTripulada.model';
import { search } from '../models/search.model';
import { NaveTripulada } from '../models/naveTripulada.model';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  apiurl = 'http://18.216.76.195:8081/api/v1';
  //apiurl = 'http://localhost:8080/api/v1';
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

  getAllNaves() {
    return this.http.get<NaveEspacial[]>(`${this.apiurl}/todasNaves`);
  }

  saveLanzadera(naveLanzadera: NaveLanzadera){
    return this.http.post<NaveLanzadera>(`${this.apiurl}/CrearNaveLanzadera`,naveLanzadera);
  }

  saveNoTripulada(naveNoTripulada: NaveNoTripulada){
    return this.http.post<NaveNoTripulada>(`${this.apiurl}/CrearNaveNoTripulada`,naveNoTripulada);
  }

  buscarPorCualquierColumna(search: String){
    return this.http.post<NaveLanzadera[]>(`${this.apiurl}/search`,search);
  }

  saveNaveTripulada(naveTripulada: NaveTripulada){
    return this.http.post<NaveNoTripulada>(`${this.apiurl}/CrearNaveTripulada`,naveTripulada);
  }




}
