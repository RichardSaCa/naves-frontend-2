/**
 * Modelo para naveTripulada hereda de nave espacial
 */
import { NaveEspacial } from "./naveEspacial.model";

export class NaveTripulada extends NaveEspacial {

  mision: string;
  numeroTripulantes: number;


  constructor(idNaveEspacial: number, nombre: string, potencia: number, pais: string,peso: number, numeroTripulantes: number, mision: string){
    super(idNaveEspacial, nombre, potencia, pais,peso);
    this.mision = mision;
    this.numeroTripulantes = numeroTripulantes;
  }
}
