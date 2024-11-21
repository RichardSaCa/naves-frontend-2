/**
 * Modelo para naveLanzadera, hereda de naveEspacial
 */
import { NaveEspacial } from "./naveEspacial.model";

export class NaveLanzadera extends NaveEspacial {

objetoLanza: string;
tipoCombustible: string;
pesoTransporte: number;

  constructor(idNaveEspacial: number, nombre: string, potencia: number, pais: string,peso: number, objetoLanza: string,

    tipoCombustible: string,
    pesoTransporte: number){
    super(idNaveEspacial, nombre, potencia, pais,peso);
    this.objetoLanza = objetoLanza;
    this.tipoCombustible = tipoCombustible;
    this.pesoTransporte = pesoTransporte;
  }

}
